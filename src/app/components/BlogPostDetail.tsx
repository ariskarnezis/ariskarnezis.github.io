import { useParams, useNavigate, useLocation } from "react-router";
import { blogPostsData } from "../data/blogPosts";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { ContentSidebar } from "./ContentSidebar";
import { useMemo } from "react";
import { Link } from "react-router";
import { SEOHelmet } from "./SEOHelmet";

// Helper function to parse markdown formatting (bold and italic)
function parseMarkdown(text: string): (string | JSX.Element)[] {
  const elements: (string | JSX.Element)[] = [];
  let currentIndex = 0;
  let keyCounter = 0;

  while (currentIndex < text.length) {
    // Check for bold+italic: ***text*** or ___text___
    if (
      (text.startsWith('***', currentIndex) || text.startsWith('___', currentIndex))
    ) {
      const delimiter = text.slice(currentIndex, currentIndex + 3);
      const endIndex = text.indexOf(delimiter, currentIndex + 3);
      
      if (endIndex !== -1) {
        elements.push(
          <strong key={keyCounter++}>
            <em>{text.slice(currentIndex + 3, endIndex)}</em>
          </strong>
        );
        currentIndex = endIndex + 3;
        continue;
      }
    }

    // Check for bold: **text** or __text__
    if (
      (text.startsWith('**', currentIndex) || text.startsWith('__', currentIndex))
    ) {
      const delimiter = text.slice(currentIndex, currentIndex + 2);
      const endIndex = text.indexOf(delimiter, currentIndex + 2);
      
      if (endIndex !== -1) {
        elements.push(
          <strong key={keyCounter++}>
            {text.slice(currentIndex + 2, endIndex)}
          </strong>
        );
        currentIndex = endIndex + 2;
        continue;
      }
    }

    // Check for italic: *text* or _text_
    if (text[currentIndex] === '*' || text[currentIndex] === '_') {
      const delimiter = text[currentIndex];
      const endIndex = text.indexOf(delimiter, currentIndex + 1);
      
      // Make sure it's not part of a word (for underscore)
      if (endIndex !== -1 && endIndex !== currentIndex + 1) {
        elements.push(
          <em key={keyCounter++}>
            {text.slice(currentIndex + 1, endIndex)}
          </em>
        );
        currentIndex = endIndex + 1;
        continue;
      }
    }

    // Regular text - find next markdown character or end of string
    const nextSpecialChar = text.slice(currentIndex).search(/[*_]/);
    const endPos = nextSpecialChar === -1 
      ? text.length 
      : currentIndex + nextSpecialChar;
    
    if (endPos > currentIndex) {
      elements.push(text.slice(currentIndex, endPos));
      currentIndex = endPos;
    } else {
      // If we can't match any pattern, just add the character and move on
      elements.push(text[currentIndex]);
      currentIndex++;
    }
  }

  return elements;
}

// Helper function to extract headings for table of contents
function extractHeadings(content: string) {
  const headings: { id: string; text: string; level: number }[] = [];
  const paragraphs = content.split('\n\n');
  
  paragraphs.forEach((paragraph) => {
    if (paragraph.startsWith('## ')) {
      const text = paragraph.replace('## ', '');
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      headings.push({ id, text, level: 2 });
    } else if (paragraph.startsWith('### ')) {
      const text = paragraph.replace('### ', '');
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      headings.push({ id, text, level: 3 });
    }
  });
  
  return headings;
}

export function BlogPostDetail() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  const post = blogPostsData.find((p) => p.id === postId);
  
  // Get the scrollTo value from navigation state
  const scrollToId = (location.state as { scrollTo?: string })?.scrollTo || `blog-${postId}`;

  // Get related posts (same category, excluding current)
  const relatedPosts = useMemo(() => {
    if (!post) return [];
    
    // First try to get posts from the same category
    let related = blogPostsData
      .filter((p) => p.id !== post.id && p.category === post.category)
      .slice(0, 3);
    
    // If we don't have enough, fill with other posts
    if (related.length < 3) {
      const remaining = blogPostsData
        .filter((p) => p.id !== post.id && !related.find(r => r.id === p.id))
        .slice(0, 3 - related.length);
      related = [...related, ...remaining];
    }
    
    return related.map((p) => ({
      id: p.id,
      title: p.title,
      category: p.category,
      date: p.date,
      readTime: p.readTime,
      linkPrefix: "blog"
    }));
  }, [post]);

  // Extract table of contents
  const tableOfContents = useMemo(() => {
    if (!post) return [];
    return extractHeadings(post.content);
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Post Not Found</h1>
          <Button onClick={() => navigate("/")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#2d2d2d] pt-16">
      <SEOHelmet
        title={`${post.title} | Blog`}
        description={post.excerpt}
        image={post.headerImage}
        type="article"
        publishedTime={new Date(post.date).toISOString()}
        tags={post.tags}
      />
      {/* Header */}
      <div className="bg-white dark:bg-[#3a3a3a] border-b dark:border-[#4a4a4a]">
        <div className="container mx-auto px-6 max-w-7xl py-8">
          <Button 
            onClick={() => navigate(`/#${scrollToId}`)}
            className="bg-[#d9653a] hover:bg-[#c25532] dark:bg-[#d9653a] dark:hover:bg-[#c25532] text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Posts
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 max-w-7xl py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
          {/* Post Content */}
          <article className="bg-white dark:bg-[#3a3a3a] rounded-lg shadow-sm p-8 lg:p-12">
            {/* Meta Information */}
            <div className="mb-8">
              <Badge className="mb-4 bg-[#d9653a] hover:bg-[#d9653a]">
                {post.category}
              </Badge>
              
              <h1 className="text-5xl mb-6 text-slate-900 dark:text-white leading-tight font-serif">
                {post.title}
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-white mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center gap-6 text-slate-500 dark:text-slate-400 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-6">
                {post.tags.map((tag, index) => (
                  <Badge key={index} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Header Image */}
            {post.headerImage && (
              <div className="mb-12 rounded-lg overflow-hidden -mx-8 lg:-mx-12">
                <img 
                  src={post.headerImage} 
                  alt={post.title}
                  className="w-full h-auto max-h-[400px] object-cover"
                />
              </div>
            )}

            {/* Post Body */}
            <div className="prose prose-slate prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => {
                // Handle headings with IDs for TOC
                if (paragraph.startsWith('## ')) {
                  const text = paragraph.replace('## ', '');
                  const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                  return (
                    <h2 key={index} id={id} className="text-3xl mt-12 mb-6 text-slate-900 dark:text-white scroll-mt-24">
                      {text}
                    </h2>
                  );
                }
                if (paragraph.startsWith('### ')) {
                  const text = paragraph.replace('### ', '');
                  const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                  return (
                    <h3 key={index} id={id} className="text-2xl mt-8 mb-4 text-slate-900 dark:text-white scroll-mt-24">
                      {text}
                    </h3>
                  );
                }
                
                // Handle regular paragraphs with markdown formatting
                if (paragraph.trim()) {
                  return (
                    <p key={index} className="text-lg text-slate-700 dark:text-white leading-relaxed mb-6">
                      {parseMarkdown(paragraph)}
                    </p>
                  );
                }
                
                return null;
              })}
            </div>

            {/* Footer */}
            <div className="flex justify-center mt-16">
              <Button
                onClick={() => navigate(`/#${scrollToId}`)}
                className="bg-[#d9653a] hover:bg-[#c25532] dark:bg-[#d9653a] dark:hover:bg-[#c25532] text-white"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Posts
              </Button>
            </div>
          </article>

          {/* Sidebar */}
          <ContentSidebar 
            tableOfContents={tableOfContents}
            relatedItems={relatedPosts}
            relatedTitle="MORE POSTS"
          />
        </div>
      </div>
    </div>
  );
}