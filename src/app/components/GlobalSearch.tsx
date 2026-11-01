import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { useNavigate } from "react-router";
import { Search, X, FileText, BookOpen, Briefcase } from "lucide-react";
import { articlesData } from "../data/articles";
import { blogPostsData } from "../data/blogPosts";
import { projectsData } from "../data/projects";
import { motion, AnimatePresence } from "motion/react";

interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  type: "article" | "blog" | "project";
  category: string;
  url: string;
}

const allContent: SearchResult[] = [
  ...articlesData.map((a) => ({
    id: a.id,
    title: a.title,
    excerpt: a.excerpt,
    type: "article" as const,
    category: a.category,
    url: `/article/${a.id}`,
  })),
  ...blogPostsData.map((b) => ({
    id: b.id,
    title: b.title,
    excerpt: b.excerpt,
    type: "blog" as const,
    category: b.category,
    url: `/blog/${b.id}`,
  })),
  ...projectsData.map((p) => ({
    id: p.id,
    title: p.title,
    excerpt: p.description,
    type: "project" as const,
    category: p.status,
    url: `/project/${p.id}`,
  })),
];

const typeIcons = {
  article: FileText,
  blog: BookOpen,
  project: Briefcase,
};

const typeLabels = {
  article: "Article",
  blog: "Blog Post",
  project: "Project",
};

export function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const lower = query.toLowerCase();
    return allContent.filter(
      (item) =>
        item.title.toLowerCase().includes(lower) ||
        item.excerpt.toLowerCase().includes(lower)
    ).slice(0, 8);
  }, [query]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setSelectedIndex(0);
  }, []);

  const goTo = useCallback((url: string) => {
    close();
    navigate(url);
  }, [close, navigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        close();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [close]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleMouseDown = (e: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
        close();
      }
    };
    document.addEventListener("mousedown", handleMouseDown);
    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, [open, close]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (resultsRef.current) {
      const selected = resultsRef.current.children[selectedIndex] as HTMLElement;
      selected?.scrollIntoView({ block: "nearest" });
    }
  }, [selectedIndex]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results[selectedIndex]) {
      goTo(results[selectedIndex].url);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors"
        aria-label="Search"
      >
        <Search className="w-5 h-5" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[100]"
          >
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={close} />
            <div className="fixed inset-0 flex items-start justify-center pt-[15vh] pointer-events-none">
            <motion.div
              ref={dialogRef}
              initial={{ opacity: 0, scale: 0.96, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ duration: 0.15 }}
              className="relative w-full max-w-lg mx-4 bg-white dark:bg-[#3a3a3a] rounded-xl shadow-2xl border border-slate-200 dark:border-[#4a4a4a] overflow-hidden pointer-events-auto"
            >
              <div className="flex items-center gap-3 px-4 border-b border-slate-200 dark:border-[#4a4a4a]">
                <Search className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search articles, posts, projects..."
                  className="flex-1 py-4 bg-transparent text-slate-900 dark:text-white placeholder-slate-400 outline-none text-base"
                />
                {query && (
                  <button onClick={() => setQuery("")} className="text-slate-400 hover:text-slate-600">
                    <X className="w-4 h-4" />
                  </button>
                )}
                <kbd className="hidden sm:inline-flex px-2 py-1 text-xs font-mono bg-slate-100 dark:bg-[#2d2d2d] text-slate-500 rounded border border-slate-200 dark:border-[#4a4a4a]">
                  ESC
                </kbd>
              </div>

              {query.trim() && (
                <div ref={resultsRef} className="max-h-80 overflow-y-auto p-2">
                  {results.length === 0 ? (
                    <div className="px-4 py-8 text-center text-slate-500 dark:text-slate-400">
                      No results found for "{query}"
                    </div>
                  ) : (
                    results.map((result, index) => {
                      const Icon = typeIcons[result.type];
                      return (
                        <button
                          key={`${result.type}-${result.id}`}
                          onClick={() => goTo(result.url)}
                          className={`w-full flex items-start gap-3 px-3 py-3 rounded-lg text-left transition-colors ${
                            index === selectedIndex
                              ? "bg-[#d9653a]/10 text-[#d9653a]"
                              : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#4a4a4a]"
                          }`}
                        >
                          <Icon className="w-5 h-5 mt-0.5 flex-shrink-0 opacity-60" />
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-sm truncate">
                              {result.title}
                            </div>
                            <div className="text-xs opacity-60 mt-0.5">
                              {typeLabels[result.type]} · {result.category}
                            </div>
                          </div>
                        </button>
                      );
                    })
                  )}
                </div>
              )}

              {!query.trim() && (
                <div className="px-4 py-6 text-center text-sm text-slate-400 dark:text-slate-500">
                  Start typing to search across all content
                </div>
              )}
            </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
