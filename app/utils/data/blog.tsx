import { Blog } from "@/app/blog/page";


export const blogs: Blog[] = [
  {
    id: 1,
    title: "Getting Started with Next.js 14",
    description: "A comprehensive guide to the latest features in Next.js 14",
    tag: "Next.js",
    date: "2024-01-15",
    content: "Full article content here...",
    mediumUrl: "https://medium.com/@yourusername/nextjs-14-guide-123", // Add Medium URL
  },
  {
    id: 2,
    title: "TypeScript Best Practices",
    description: "Essential TypeScript patterns for better code",
    tag: "TypeScript",
    date: "2024-01-10",
    content: "Full article content here...",
    mediumUrl: "https://medium.com/@yourusername/typescript-best-practices-456",
  },
  {
    id: 3,
    title: "React Performance Optimization",
    description: "Techniques to optimize React applications",
    tag: "React",
    date: "2024-01-05",
    content: "Full article content here...",
    // No mediumUrl means it's internal only
  },
  {
    id: 4,
    title: "Published on Dev.to",
    description: "My article on another platform",
    tag: "Web Development",
    date: "2024-01-20",
    content: "Summary content here...",
    externalUrl: "https://dev.to/yourusername/article-title", // External platform
  },
];
