import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Clock, ArrowRight, Heart, Search, Compass, Coffee, Plane, Lightbulb, User, BookOpen } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router";
import { blogPostsData } from "../data/blogPosts";
import { useState, useMemo, useRef, useEffect } from "react";

export function PersonalBlog() {
  const location = useLocation();
  const [showAll, setShowAll] = useState(() => {
    // Load showAll state from localStorage
    const saved = localStorage.getItem('blogShowAll');
    return saved === 'true';
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const buttonRef = useRef<HTMLDivElement>(null);
  const initialCount = 3;
  const posts = blogPostsData;

  // Save showAll state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('blogShowAll', showAll.toString());
  }, [showAll]);

  // Watch for hash changes to auto-expand if needed
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith("#blog-")) {
      // If navigating to a specific blog post, check if it's beyond the initial count
      const postId = hash.replace("#blog-", "");
      const postIndex = blogPostsData.findIndex(p => p.id === postId);
      
      // If the post is beyond the initial count, expand the list
      if (postIndex >= initialCount) {
        setShowAll(true);
      }
    }
  }, [location]);

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(posts.map(post => post.category)));
    return ["All", ...uniqueCategories];
  }, [posts]);

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = searchQuery === "" || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [posts, searchQuery, selectedCategory]);

  const displayedPosts = showAll ? filteredPosts : filteredPosts.slice(0, initialCount);
  const hasMore = filteredPosts.length > initialCount;
  
  // Icon mapping for categories
  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: any } = {
      "Lifestyle": Heart,
      "Travel": Plane,
      "Personal": User,
      "Recommendations": BookOpen,
      "Thoughts": Lightbulb,
      "default": Coffee
    };
    const IconComponent = icons[category] || icons.default;
    return IconComponent;
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Lifestyle": "bg-red-100 text-red-700",
      "Travel": "bg-orange-100 text-orange-700",
      "Personal": "bg-purple-100 text-purple-700",
      "Recommendations": "bg-green-100 text-green-700",
      "Thoughts": "bg-yellow-100 text-yellow-700",
      "default": "bg-slate-100 text-slate-700"
    };
    return colors[category] || colors.default;
  };
  
  return (
    <section id="blog" className="py-24 bg-slate-50 dark:bg-[#2d2d2d]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-slate-900 dark:text-white">Personal Blog</h2>
          <p className="text-xl text-slate-600 dark:text-white max-w-2xl mx-auto">
            Insights, thoughts, and stories about science, mathematics, and life as a researcher
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search blog posts..."
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
        
        {/* Blog Posts List */}
        <div className="space-y-6 mb-12">
          {displayedPosts.map((post, index) => {
            const IconComponent = getCategoryIcon(post.category);
            return (
              <Card key={index} id={`blog-${post.id}`} className="hover:shadow-lg dark:hover:shadow-orange-900/10 transition-shadow scroll-mt-24">
                <CardContent className="p-8">
                  <div className="flex gap-6">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${getCategoryColor(post.category)}`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {/* Metadata Row */}
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <Badge className="bg-[#d9653a] hover:bg-[#d9653a]">{post.category}</Badge>
                        <span className="text-sm text-slate-500 dark:text-slate-400">{post.date}</span>
                        <span className="text-slate-300 dark:text-slate-600">•</span>
                        <span className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-2xl font-serif mb-3 text-slate-900 dark:text-slate-100 leading-tight">
                        {post.title}
                      </h3>
                      
                      {/* Excerpt */}
                      <p className="text-slate-600 dark:text-white mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      {/* Read Story Link */}
                      <Link 
                        to={`/blog/${post.id}`}
                        state={{ scrollTo: `blog-${post.id}` }}
                        className="inline-flex items-center gap-2 text-[#d9653a] hover:text-[#c25731] hover:underline hover:gap-3 transition-all duration-200 font-medium"
                      >
                        Read Story
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {displayedPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600 dark:text-slate-400 text-lg">No posts found matching your criteria.</p>
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
              {showAll ? "Show Less" : "View More Blog Posts"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}