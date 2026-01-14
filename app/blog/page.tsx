'use client';

import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { blogs } from '../utils/data/blog';

export type Blog = {
    id: number;
    title: string;
    description: string;
    tag: string;
    date: string;
    content: string;
};

export default function Blogs() {
    const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

            <div className="text-center mb-20">
                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full 
          bg-gradient-to-r from-indigo-600 to-purple-600 
          text-white text-sm font-semibold shadow-lg shadow-indigo-500/20">
                    ✍️ My Blogs
                </div>

                <h2 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight">
                    My Thoughts & <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Learnings</span>
                </h2>

                <p className="text-muted-foreground max-w-2xl mx-auto mt-5 text-base">
                    Here are some of my blog posts on various topics.
                </p>
            </div>

            {/* BLOG CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {blogs.map((blog) => (
                    <Card
                        key={blog.id}
                        className="
              group relative overflow-hidden
              border border-border/60
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-2xl hover:shadow-indigo-500/10
            "
                    >
                        {/* Glow Ring */}
                        <div className="pointer-events-none absolute inset-0 rounded-xl 
              ring-1 ring-transparent group-hover:ring-indigo-500/30 transition" />

                        <CardHeader className="space-y-4">
                            <div className="flex items-center justify-between">
                                <Badge variant="secondary" className="text-xs">
                                    {blog.tag}
                                </Badge>
                                <span className="text-xs text-muted-foreground">
                                    {blog.date}
                                </span>
                            </div>

                            <CardTitle
                                className="
                  text-xl font-semibold leading-snug
                  transition-colors
                  group-hover:text-indigo-600
                "
                            >
                                {blog.title}
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="flex flex-col justify-between h-full">
                            <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                                {blog.description}
                            </p>

                            <Button
                                variant="outline"
                                className="
                  mt-auto w-full
                  group-hover:border-indigo-500
                  group-hover:text-indigo-600
                "
                                onClick={() => setSelectedBlog(blog)}
                            >
                                Read Article →
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* MODAL */}
            <Dialog open={!!selectedBlog} onOpenChange={() => setSelectedBlog(null)}>
                <DialogContent className="min-w-4xl max-h-[85vh] overflow-y-auto p-8">
                    {selectedBlog && (
                        <>
                            <DialogHeader className="space-y-4">
                                <DialogTitle className="text-3xl font-bold leading-tight">
                                    {selectedBlog.title}
                                </DialogTitle>

                                <div className="flex flex-wrap items-center gap-3">
                                    <Badge>{selectedBlog.tag}</Badge>
                                    <span className="text-sm text-muted-foreground">
                                        {selectedBlog.date}
                                    </span>
                                </div>
                            </DialogHeader>

                            <article
                                className="
    mt-10
    prose prose-lg
    prose-headings:font-semibold
    prose-headings:tracking-tight
    prose-p:leading-relaxed
    prose-p:text-base
    prose-li:marker:text-muted-foreground
    prose-blockquote:border-l-indigo-500
    prose-blockquote:text-muted-foreground
    prose-neutral
    dark:prose-invert
    max-w-none
  "
                            >
                                {selectedBlog.content}
                            </article>

                        </>
                    )}
                </DialogContent>
            </Dialog>

        </section>
    );
}
