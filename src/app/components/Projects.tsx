import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Calendar, FileText } from "lucide-react";
import { Link } from "react-router";
import { projectsData } from "../data/projects";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";

export function Projects() {
  const location = useLocation();
  const initialCount = 4;
  const [filterMode, setFilterMode] = useState<"all" | "publications">(() => {
    // Restore filter mode from sessionStorage if returning from a project detail page
    const saved = sessionStorage.getItem("projectsFilterMode");
    if (saved === "publications") return "publications";
    return "all";
  });
  const [showAll, setShowAll] = useState(() => {
    return sessionStorage.getItem("projectsFilterMode") === "publications";
  });

  // Persist filter mode to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem("projectsFilterMode", filterMode);
  }, [filterMode]);

  // Filter projects based on mode
  const filteredProjects = filterMode === "publications" 
    ? projectsData.filter(project => 
        project.publications && 
        project.publications.length > 0 && 
        !project.publications[0].includes("doctoral research") &&
        !project.publications[0].includes("MSc thesis")
      )
    : projectsData;

  // Watch for hash, search params, and router state changes to update filter mode
  useEffect(() => {
    const returnFilterMode = (location.state as { returnFilterMode?: string })?.returnFilterMode;
    const hash = window.location.hash;

    // Check if we're returning from a publication detail page via router state
    if (returnFilterMode === 'publications') {
      setFilterMode('publications');
      setShowAll(true);
      // Scroll to the specific project card from the hash, or fallback to publications section
      setTimeout(() => {
        const targetId = hash ? hash.replace('#', '') : 'publications';
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          const fallback = document.getElementById('publications');
          if (fallback) fallback.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else if (hash === "#publications") {
      setFilterMode("publications");
      setShowAll(true);
    } else if (hash === "#projects") {
      setFilterMode("all");
      setShowAll(false);
    } else if (hash.startsWith("#project-")) {
      // If navigating to a specific project, check if it's beyond the initial count
      const projectId = hash.replace("#project-", "");
      const projectIndex = projectsData.findIndex(p => p.id === projectId);
      
      // If the project is beyond the initial count, expand the list
      if (projectIndex >= initialCount) {
        setShowAll(true);
      }
    }
  }, [location, initialCount]);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, initialCount);
  const hasMore = filteredProjects.length > initialCount;

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-[#2d2d2d]">
      {/* Add publications anchor point */}
      <div id="publications" className="absolute -mt-24" />
      
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl mb-4 text-slate-900 dark:text-white">
            {filterMode === "publications" ? "Publications" : "Research Projects"}
          </h2>
          <p className="text-xl text-slate-600 dark:text-white max-w-2xl mx-auto">
            {filterMode === "publications" 
              ? "Peer-reviewed publications and research outputs from my academic work"
              : "A selection of collaborative research initiatives I've contributed to throughout my academic career"
            }
          </p>
        </div>

        {/* Filter Toggle Buttons */}
        <div className="flex justify-center gap-3 mb-12">
          <button
            onClick={() => {
              setFilterMode("all");
              setShowAll(false);
              window.history.replaceState(null, "", "/#projects");
              // Trigger navigation to update active section
              window.dispatchEvent(new Event("scroll"));
            }}
            className={`px-6 py-2.5 rounded-full transition-all duration-200 ${
              filterMode === "all"
                ? "bg-[#d9653a] text-white shadow-md"
                : "bg-white dark:bg-[#3a3a3a] text-slate-700 dark:text-white border border-slate-300 dark:border-[#4a4a4a] hover:border-slate-400 dark:hover:border-slate-500"
            }`}
          >
            All Projects
          </button>
          
          {/* Publications Only Toggle */}
          <button
            onClick={() => {
              setFilterMode("publications");
              setShowAll(true);
              window.history.replaceState(null, "", "/#publications");
              // Trigger navigation to update active section
              window.dispatchEvent(new Event("scroll"));
            }}
            className={`px-6 py-2.5 rounded-full transition-all duration-200 flex items-center gap-2 ${
              filterMode === "publications"
                ? "bg-[#d9653a] text-white shadow-md"
                : "bg-white dark:bg-[#3a3a3a] text-slate-700 dark:text-white border border-slate-300 dark:border-[#4a4a4a] hover:border-slate-400 dark:hover:border-slate-500"
            }`}
          >
            <FileText className="w-4 h-4" />
            Publications Only
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {displayedProjects.map((project) => {
            const hasPublications = project.publications && 
              project.publications.length > 0 && 
              !project.publications[0].includes("doctoral research") &&
              !project.publications[0].includes("MSc thesis");
            
            return (
              <Card key={project.id} id={`project-${project.id}`} className="overflow-hidden hover:shadow-xl transition-shadow group scroll-mt-24">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <CardTitle className="leading-tight">{project.title}</CardTitle>
                    <div className="flex flex-col gap-2 items-end">
                      <Badge variant={project.status === "Ongoing" ? "default" : "secondary"} className={project.status === "Completed" ? "dark:border-white/20" : ""}>
                        {project.status}
                      </Badge>
                      {hasPublications && (
                        <Badge className="bg-orange-100 dark:bg-[#3a2a1a] text-orange-700 dark:text-orange-300 hover:bg-orange-100 dark:hover:bg-[#3a2a1a] flex items-center gap-1">
                          <FileText className="w-3 h-3" />
                          Published
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardDescription className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                    <Calendar className="w-4 h-4" />
                    {project.period}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-white">{project.description}</p>
                  
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">{project.institution}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Link to={`/project/${project.id}`} state={{ scrollTo: `project-${project.id}`, filterMode: filterMode }} className="inline-flex items-center gap-2 text-[#d9653a] hover:text-[#c25731] hover:underline hover:gap-3 transition-all duration-200 font-medium">
                    Learn More
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {hasMore && (
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              onClick={() => setShowAll(!showAll)}
              className="bg-[#d9653a] hover:bg-[#c25731] text-white"
            >
              {showAll ? "Show Less" : "View More Projects"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}