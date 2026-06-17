import { blogPostsData } from '../data/blogPosts';
import { articlesData } from '../data/articles';

interface RSSItem {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  guid: string;
  category?: string;
  author?: string;
}

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function formatDateToRFC822(dateString: string): string {
  const date = new Date(dateString);
  return date.toUTCString();
}

function generateRSSFeed(
  items: RSSItem[],
  title: string,
  description: string,
  link: string
): string {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://yourdomain.com';
  
  const rssItems = items
    .map(
      (item) => `
    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${escapeXml(siteUrl + item.link)}</link>
      <guid isPermaLink="true">${escapeXml(siteUrl + item.link)}</guid>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${item.pubDate}</pubDate>
      ${item.category ? `<category>${escapeXml(item.category)}</category>` : ''}
      ${item.author ? `<author>${escapeXml(item.author)}</author>` : ''}
    </item>`
    )
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(title)}</title>
    <link>${escapeXml(siteUrl + link)}</link>
    <description>${escapeXml(description)}</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${escapeXml(siteUrl + link)}" rel="self" type="application/rss+xml" />
    ${rssItems}
  </channel>
</rss>`;
}

export function generateBlogRSS(): string {
  const items: RSSItem[] = blogPostsData.map((post) => ({
    title: post.title,
    link: `/blog/${post.id}`,
    description: post.excerpt,
    pubDate: formatDateToRFC822(post.date),
    guid: post.id,
    category: post.category,
  }));

  return generateRSSFeed(
    items,
    'Personal Blog - Research Associate',
    'Personal reflections, experiences, and insights from academic research and conference travels',
    '/rss/blog.xml'
  );
}

export function generateArticlesRSS(): string {
  const items: RSSItem[] = articlesData.map((article) => ({
    title: article.title,
    link: `/article/${article.id}`,
    description: article.excerpt,
    pubDate: formatDateToRFC822(article.date),
    guid: article.id,
    category: article.category,
  }));

  return generateRSSFeed(
    items,
    'Research Articles - Wave Scattering & Random Media',
    'Science journalism and research insights on wave scattering, random media, and effective medium theory',
    '/rss/articles.xml'
  );
}

export function generateCombinedRSS(): string {
  const blogItems: RSSItem[] = blogPostsData.map((post) => ({
    title: `[Blog] ${post.title}`,
    link: `/blog/${post.id}`,
    description: post.excerpt,
    pubDate: formatDateToRFC822(post.date),
    guid: `blog-${post.id}`,
    category: post.category,
  }));

  const articleItems: RSSItem[] = articlesData.map((article) => ({
    title: `[Article] ${article.title}`,
    link: `/article/${article.id}`,
    description: article.excerpt,
    pubDate: formatDateToRFC822(article.date),
    guid: `article-${article.id}`,
    category: article.category,
  }));

  const allItems = [...blogItems, ...articleItems].sort((a, b) => {
    return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
  });

  return generateRSSFeed(
    allItems,
    'All Content - Research Portfolio',
    'All blog posts and articles from my research portfolio - personal reflections and science journalism',
    '/rss/feed.xml'
  );
}

// Helper function to download RSS feed as a file
export function downloadRSSFeed(content: string, filename: string) {
  const blob = new Blob([content], { type: 'application/rss+xml' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
