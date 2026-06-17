import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Clock, ArrowRight, Search, BookMarked, TrendingUp, FlaskConical, BrainCircuit, Binary, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router";
import { articlesData } from "../data/articles";
import { useState, useMemo, useRef, useEffect } from "react";

export function Articles() {
  const location = useLocation();
  const [showAll, setShowAll] = useState(() => {
    // Load showAll state from localStorage
    const saved = localStorage.getItem('articlesShowAll');
    return saved === 'true';
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const buttonRef = useRef<HTMLDivElement>(null);
  const initialCount = 3;

  // Save showAll state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('articlesShowAll', showAll.toString());
  }, [showAll]);

  // Watch for hash changes to auto-expand if needed
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith("#article-")) {
      // If navigating to a specific article, check if it's beyond the initial count
      const articleId = hash.replace("#article-", "");
      const articleIndex = articlesData.findIndex(a => a.id === articleId);
      
      // If the article is beyond the initial count, expand the list
      if (articleIndex >= initialCount) {
        setShowAll(true);
      }
    }
  }, [location]);

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(articlesData.map(article => article.category)));
    return ["All", ...uniqueCategories];
  }, []);

  // Filter articles based on search and category
  const filteredArticles = useMemo(() => {
    return articlesData.filter(article => {
      const matchesSearch = searchQuery === "" || 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const displayedArticles = showAll ? filteredArticles : filteredArticles.slice(0, initialCount);
  const hasMore = filteredArticles.length > initialCount;

  // Icon mapping for categories
  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: any } = {
      "Mathematics": BookMarked,
      "Physics": TrendingUp,
      "Engineering": Binary,
      "Chemistry": FlaskConical,
      "Biology": BrainCircuit,
      "Computing": Sparkles,
      "Robotics": Sparkles,
      "default": BookMarked
    };
    const IconComponent = icons[category] || icons.default;
    return IconComponent;
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Mathematics": "bg-orange-100 text-orange-700",
      "Physics": "bg-purple-100 text-purple-700",
      "Engineering": "bg-orange-100 text-orange-700",
      "Chemistry": "bg-green-100 text-green-700",
      "Biology": "bg-emerald-100 text-emerald-700",
      "Computing": "bg-indigo-100 text-indigo-700",
      "Robotics": "bg-pink-100 text-pink-700",
      "default": "bg-slate-100 text-slate-700"
    };
    return colors[category] || colors.default;
  };

  return (
    <section id="articles" className="py-24 bg-white dark:bg-[#3a3a3a]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-slate-900 dark:text-white">Explainable Science</h2>
          <p className="text-xl text-slate-600 dark:text-white max-w-2xl mx-auto">
            Deep dives into specific concepts, methods, and findings from my research areas
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full border border-slate-300 dark:border-[#4a4a4a] focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-orange-500 focus:border-transparent text-slate-700 dark:text-slate-300 placeholder-slate-400 dark:placeholder-slate-500 bg-white dark:bg-[#2d2d2d]"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category === selectedCategory ? "All" : category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? "bg-[#d9653a] text-white shadow-md"
                  : "bg-white dark:bg-[#3a3a3a] text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-[#4a4a4a] hover:border-slate-400 dark:hover:border-slate-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Articles List */}
        <div className="space-y-6 mb-12">
          {displayedArticles.map((article) => (
            <Card key={article.id} id={`article-${article.id}`} className="hover:shadow-lg dark:hover:shadow-orange-900/10 transition-shadow scroll-mt-24">
              <CardContent className="p-8">
                <div className="flex gap-6">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${getCategoryColor(article.category)}`}>
                    {(() => {
                      const IconComponent = getCategoryIcon(article.category);
                      return <IconComponent className="w-8 h-8" />;
                    })()}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Metadata Row */}
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <Badge className="bg-[#d9653a] hover:bg-[#d9653a]">{article.category}</Badge>
                      <span className="text-sm text-slate-500 dark:text-slate-400">{article.date}</span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-serif mb-3 text-slate-900 dark:text-slate-100 leading-tight">
                      {article.title}
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="text-slate-600 dark:text-white mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    {/* Read Article Link */}
                    <Link 
                      to={`/article/${article.id}`}
                      state={{ scrollTo: `article-${article.id}` }}
                      className="inline-flex items-center gap-2 text-[#d9653a] hover:text-[#c25731] hover:underline hover:gap-3 transition-all duration-200 font-medium"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {displayedArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600 dark:text-slate-400 text-lg">No articles found matching your criteria.</p>
          </div>
        )}
        
        {hasMore && (
          <div ref={buttonRef} className="text-center">
            <Button 
              size="lg" 
              onClick={() => {
                setShowAll(!showAll);
                if (showAll) {
                  setTimeout(() => {
                    buttonRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }, 100);
                }
              }}
              className="bg-[#d9653a] hover:bg-[#c25731] text-white"
            >
              {showAll ? "Show Less" : "View More Articles"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}