import { Rss } from 'lucide-react';
import { Button } from './ui/button';
import {
  generateBlogRSS,
  generateArticlesRSS,
  generateCombinedRSS,
  downloadRSSFeed,
} from '../utils/generateRSS';

export function RSSFeedLinks() {
  const handleDownload = (type: 'blog' | 'articles' | 'all') => {
    let content: string;
    let filename: string;

    switch (type) {
      case 'blog':
        content = generateBlogRSS();
        filename = 'blog.xml';
        break;
      case 'articles':
        content = generateArticlesRSS();
        filename = 'articles.xml';
        break;
      case 'all':
        content = generateCombinedRSS();
        filename = 'feed.xml';
        break;
    }

    downloadRSSFeed(content, filename);
  };

  return (
    <div className="flex flex-wrap gap-2 items-center">
      <span className="text-sm text-[#8b949e]">Subscribe via RSS:</span>
      
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleDownload('all')}
        className="!border-[#4a4a4a] !bg-[#3a3a3a] !text-white hover:!bg-[#4a4a4a] hover:!text-white text-xs"
      >
        <Rss className="w-3 h-3 mr-1" />
        All Content
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={() => handleDownload('blog')}
        className="!border-[#4a4a4a] !bg-[#3a3a3a] !text-white hover:!bg-[#4a4a4a] hover:!text-white text-xs"
      >
        <Rss className="w-3 h-3 mr-1" />
        Blog Only
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={() => handleDownload('articles')}
        className="!border-[#4a4a4a] !bg-[#3a3a3a] !text-white hover:!bg-[#4a4a4a] hover:!text-white text-xs"
      >
        <Rss className="w-3 h-3 mr-1" />
        Articles Only
      </Button>
    </div>
  );
}