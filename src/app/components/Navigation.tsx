import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import {
  Link,
  useNavigate,
  useLocation,
} from "react-router";
import { useTheme } from "../contexts/ThemeContext";
import { useHomePageReset } from "../contexts/HomePageResetContext";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { resetHomePage } = useHomePageReset();

  // Track active section based on scroll position and hash
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }

    const handleScroll = () => {
      const sections = ["projects", "articles", "blog", "contact"];
      const scrollPosition = window.scrollY + 100; // offset for fixed nav

      // Find which section we're currently in based on scroll position
      let currentSection = "";
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = sectionId;
            break;
          }
        }
      }

      // If we're in the projects section, check if publications filter is active
      if (currentSection === "projects") {
        const currentHash = window.location.hash;
        const savedFilter = sessionStorage.getItem("projectsFilterMode");
        if (currentHash === "#publications" || savedFilter === "publications") {
          setActiveSection("#publications");
          return;
        }
      }

      // Set the active section based on scroll position
      if (currentSection) {
        setActiveSection(`#${currentSection}`);
      } else if (window.scrollY < 100) {
        // If we're at the top of the page, no section is active
        setActiveSection("");
      }
    };

    handleScroll(); // Check on mount
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleScroll);
    };
  }, [location.pathname, location.hash]);

  const navItems = [
    { label: "Home", href: "/", isRoute: true },
    { label: "About", href: "/about", isRoute: true },
    { label: "Projects", href: "#projects", isRoute: false },
    { label: "Publications", href: "#publications", isRoute: false },
    { label: "Explainable Science", href: "#articles", isRoute: false },
    { label: "Blog", href: "#blog", isRoute: false },
  ];

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If already on home page, prevent navigation and just reset
    if (location.pathname === "/") {
      e.preventDefault();
      resetHomePage();
    }
    // Otherwise, let the Link component handle navigation
    // and reset will happen after navigation
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    isRoute: boolean = false,
  ) => {
    // If it's a route (not an anchor), let Link handle it
    if (isRoute) {
      return;
    }
    
    e.preventDefault();
    setIsOpen(false);

    // Update sessionStorage for filter state when clicking Projects or Publications
    if (href === "#projects") {
      sessionStorage.setItem("projectsFilterMode", "all");
    } else if (href === "#publications") {
      sessionStorage.setItem("projectsFilterMode", "publications");
    }

    if (location.pathname !== "/") {
      // If not on home page, navigate to home with hash
      // ScrollToTop component will handle the scrolling
      navigate(`/${href}`);
    } else {
      // If on home page, set hash and scroll smoothly
      // ScrollToTop no longer scrolls to top for hash-only changes, so this is safe
      window.location.hash = href;
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Determine if a nav item is active
  const isActive = (item: typeof navItems[0]) => {
    if (item.isRoute) {
      // Special handling for Home - only active when on "/" and no section is active
      if (item.href === "/") {
        return location.pathname === "/" && !activeSection;
      }
      return location.pathname === item.href;
    }
    return activeSection === item.href;
  };

  // Get the appropriate className for nav items
  const getNavClassName = (item: typeof navItems[0], isMobile: boolean = false) => {
    const baseClass = isMobile ? "block py-2" : "";
    const activeClass = isActive(item)
      ? "text-orange-600 dark:text-orange-500"
      : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200";
    return `${baseClass} ${activeClass} transition-colors`.trim();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#2d2d2d] backdrop-blur-md border-b border-slate-200 dark:border-[#4a4a4a]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="text-xl font-bold text-slate-900 dark:text-slate-100" 
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            onClick={handleHomeClick}
          >
            Aris Karnezis
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) =>
              item.isRoute ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className={getNavClassName(item)}
                  onClick={(e) => {
                    setIsOpen(false);
                    // Reset home page state if navigating to home
                    if (item.href === "/") {
                      handleHomeClick(e);
                    }
                  }}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.isRoute)}
                  className={getNavClassName(item)}
                >
                  {item.label}
                </a>
              )
            )}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <Button size="sm" asChild>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
              >
                Get in Touch
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              className="p-2 text-slate-600 dark:text-slate-400"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navItems.map((item) =>
              item.isRoute ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className={getNavClassName(item, true)}
                  onClick={(e) => {
                    setIsOpen(false);
                    // Reset home page state if navigating to home
                    if (item.href === "/") {
                      handleHomeClick(e);
                    }
                  }}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.isRoute)}
                  className={getNavClassName(item, true)}
                >
                  {item.label}
                </a>
              )
            )}
            <Button size="sm" className="w-full" asChild>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
              >
                Get in Touch
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}