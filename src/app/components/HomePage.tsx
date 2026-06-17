import { Hero } from "./Hero";
import { Projects } from "./Projects";
import { Articles } from "./Articles";
import { PersonalBlog } from "./PersonalBlog";
import { Newsletter } from "./Newsletter";
import { Contact } from "./Contact";
import { useEffect } from "react";
import { useLocation } from "react-router";
import { useHomePageReset } from "../contexts/HomePageResetContext";
import { SEOHelmet } from "./SEOHelmet";

export function HomePage() {
  const location = useLocation();
  const { resetKey, initializeHomePage } = useHomePageReset();

  // Initialize home page when first mounting (e.g., navigating from another page)
  useEffect(() => {
    initializeHomePage();
  }, []); // Only run on mount

  useEffect(() => {
    // Handle hash navigation when component mounts or hash changes
    if (location.hash) {
      const elementId = location.hash.replace("#", "");
      // Small delay to ensure the page has rendered
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "auto" });
        }
      }, 100);
    }
  }, [location.hash]);

  return (
    <div key={resetKey}>
      <SEOHelmet />
      <Hero />
      <Projects />
      <Articles />
      <PersonalBlog />
      <Newsletter />
      <Contact />
    </div>
  );
}