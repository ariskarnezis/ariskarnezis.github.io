import { Link } from "react-router";
import { Clock, Calendar } from "lucide-react";
import { Badge } from "./ui/badge";
import { useEffect, useState } from "react";

interface TableOfContentsItem {
  id: string;
  text: string;
  level: number;
}

interface RelatedItem {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime?: string;
  linkPrefix: string; // 'article', 'blog', or 'project'
  filterMode?: string; // Optional filterMode for projects
}

interface ContentSidebarProps {
  tableOfContents: TableOfContentsItem[];
  relatedItems: RelatedItem[];
  relatedTitle: string; // "MORE ARTICLES", "MORE POSTS", or "MORE PROJECTS"
}

export function ContentSidebar({ tableOfContents, relatedItems, relatedTitle }: ContentSidebarProps) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = tableOfContents.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(tableOfContents[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tableOfContents]);

  const handleTOCClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <aside className="sticky top-24 self-start max-h-[calc(100vh-7rem)] overflow-y-auto">
      <div className="space-y-6">
        {/* Table of Contents */}
        {tableOfContents.length > 0 && (
          <div className="bg-white dark:bg-[#2d2d2d] rounded-lg border border-slate-200 dark:border-[#4a4a4a] p-6">
            <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
              On This Page
            </h3>
            <nav className="space-y-2">
              {tableOfContents.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleTOCClick(item.id)}
                  className={`block w-full text-left text-sm transition-colors ${
                    activeSection === item.id
                      ? "text-[#d9653a] font-medium"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  } ${item.level === 3 ? "pl-4" : ""}`}
                >
                  {item.text}
                </button>
              ))}
            </nav>
          </div>
        )}

        {/* Related Content */}
        {relatedItems.length > 0 && (
          <div className="bg-white dark:bg-[#2d2d2d] rounded-lg border border-slate-200 dark:border-[#4a4a4a] p-6">
            <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
              {relatedTitle}
            </h3>
            <div className="space-y-4">
              {relatedItems.map((item) => (
                <Link
                  key={item.id}
                  to={`/${item.linkPrefix}/${item.id}`}
                  state={{ 
                    scrollTo: `${item.linkPrefix === 'project' ? 'project' : item.linkPrefix === 'article' ? 'article' : 'blog'}-${item.id}`,
                    filterMode: item.filterMode || "all" // Pass filterMode for projects
                  }}
                  className="block group"
                >
                  <div className="space-y-2">
                    <Badge className="bg-[#d9653a] hover:bg-[#d9653a] text-xs">
                      {item.category}
                    </Badge>
                    <h4 className="text-sm font-medium text-slate-900 dark:text-white group-hover:text-[#d9653a] transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <span>{item.date}</span>
                      {item.readTime && (
                        <>
                          <span>•</span>
                          <span>{item.readTime}</span>
                        </>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}