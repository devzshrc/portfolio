// Blog post type and utilities
export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  published: boolean
}

// In-memory blog storage (can be replaced with database)
const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    excerpt: "A comprehensive guide to building modern web applications with Next.js and React.",
    content: `# Getting Started with Next.js

Next.js is a powerful React framework that makes building web applications easier and more efficient.

## Why Next.js?

Next.js provides several key benefits:
- Server-side rendering for better performance
- Static site generation for fast loading
- API routes for backend functionality
- Built-in optimization and deployment

## Getting Started

To create a new Next.js project, run:

\`\`\`bash
npx create-next-app@latest my-app
\`\`\`

This will set up a new project with all the necessary configuration.

## Building Your First Page

Create a new file in the \`app\` directory and start building!`,
    date: "2024-01-15",
    published: true,
  },
  {
    id: "2",
    slug: "design-systems-best-practices",
    title: "Design Systems: Best Practices",
    excerpt: "Learn how to build scalable and maintainable design systems for your organization.",
    content: `# Design Systems: Best Practices

A well-designed design system is the foundation of consistent, scalable product design.

## What is a Design System?

A design system is a collection of reusable components, patterns, and guidelines that help teams build products faster and more consistently.

## Key Components

- **Components**: Reusable UI elements
- **Patterns**: Common solutions to recurring problems
- **Guidelines**: Best practices and usage rules
- **Documentation**: Clear instructions for implementation

## Getting Started

Start small with your most commonly used components and expand from there.`,
    date: "2024-01-10",
    published: true,
  },
]

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  return blogPosts
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  return blogPosts.find((post) => post.slug === slug && post.published) || null
}

export async function createBlogPost(post: Omit<BlogPost, "id">): Promise<BlogPost> {
  const newPost: BlogPost = {
    ...post,
    id: Math.random().toString(36).substr(2, 9),
  }
  blogPosts.push(newPost)
  return newPost
}

export async function updateBlogPost(id: string, updates: Partial<BlogPost>): Promise<BlogPost | null> {
  const index = blogPosts.findIndex((post) => post.id === id)
  if (index === -1) return null
  blogPosts[index] = { ...blogPosts[index], ...updates }
  return blogPosts[index]
}

export async function deleteBlogPost(id: string): Promise<boolean> {
  const index = blogPosts.findIndex((post) => post.id === id)
  if (index === -1) return false
  blogPosts.splice(index, 1)
  return true
}
