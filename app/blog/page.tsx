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
    DialogDescription,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, BookOpen, Globe, X } from 'lucide-react';
import { blogs } from '../utils/data/blog';

export type Blog = {
    id: number;
    title: string;
    description: string;
    tag: string;
    date: string;
    content: string;
    mediumUrl?: string; // Add this field for Medium URLs
    externalUrl?: string; // Add this field for other external URLs
};

export default function Blogs() {
    const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
    const [readOption, setReadOption] = useState<'internal' | 'medium' | 'external'>('internal');


    const handleReadBlog = (blog: Blog) => {
        if (blog.mediumUrl) {
            setSelectedBlog(blog);
            setReadOption('medium');
        } else if (blog.externalUrl) {
            setSelectedBlog(blog);
            setReadOption('external');
        } else {
            setSelectedBlog(blog);
            setReadOption('internal');
        }
    };

    const handleOpenMedium = () => {
        if (selectedBlog?.mediumUrl) {
            window.open(selectedBlog.mediumUrl, '_blank', 'noopener,noreferrer');
        }
    };

    const handleOpenExternal = () => {
        if (selectedBlog?.externalUrl) {
            window.open(selectedBlog.externalUrl, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-2">
            <div className="text-center mb-8 sm:mb-12 relative">
                <div className="absolute inset-0 -z-10 flex justify-center">
                    <div className="h-40 w-40 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 blur-[90px] rounded-full" />
                </div>

                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full
          bg-gradient-to-r from-indigo-600 to-purple-600
          text-white text-sm font-semibold tracking-wide
          shadow-lg shadow-indigo-500/30">
                    ✍️ My Blogs
                </div>

                <h2 className="mt-8 text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-gray-900">
                    My Thoughts &{' '}
                    <span className="relative inline-block">
                        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            Learnings
                        </span>
                        <span className="block h-1 w-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mt-2" />
                    </span>
                </h2>

                <p className="text-gray-600 max-w-xl mx-auto mt-1 sm:mt-2 text-base sm:text-lg leading-relaxed">
                    A collection of insights, experiences, and lessons from my journey in tech.
                    <span className="block mt-2 text-sm text-indigo-600">
                        📝 Articles available on Medium & external platforms
                    </span>

                </p>
            </div>
            <Tabs defaultValue="all" className="mb-8">
                <TabsList className="mx-auto w-fit">
                    <TabsTrigger value="all">
                        All Articles ({blogs.length})
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="mt-6">
                    <BlogGrid blogs={blogs} onReadBlog={handleReadBlog} />
                </TabsContent>
            </Tabs>


            {/* Blog Dialog */}
            <Dialog open={!!selectedBlog} onOpenChange={() => setSelectedBlog(null)}>
                <DialogContent
                    className="
            w-[95vw] sm:w-full
            max-w-3xl lg:max-w-4xl
            max-h-[90vh]
            overflow-y-auto
            p-6 sm:p-10
            rounded-2xl
          "
                >
                    {selectedBlog && (
                        <>
                            <DialogHeader className="space-y-4">
                                <div className="flex justify-between items-start">
                                    <div className="flex-1">
                                        <DialogTitle className="text-2xl sm:text-3xl font-bold leading-tight">
                                            {selectedBlog.title}
                                        </DialogTitle>
                                        <DialogDescription className="mt-2">
                                            {selectedBlog.description}
                                        </DialogDescription>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => setSelectedBlog(null)}
                                        className="ml-2"
                                    >
                                        <X className="h-4 w-4" />
                                    </Button>
                                </div>

                                <div className="flex flex-wrap items-center justify-between gap-3">
                                    <div className="flex items-center gap-3">
                                        <Badge>{selectedBlog.tag}</Badge>
                                        <span className="text-sm text-muted-foreground">
                                            {selectedBlog.date}
                                        </span>
                                    </div>

                                    {/* Read Options */}
                                    <div className="flex items-center gap-2">
                                        {selectedBlog.mediumUrl && (
                                            <Button
                                                variant={readOption === 'medium' ? 'default' : 'outline'}
                                                size="sm"
                                                onClick={() => setReadOption('medium')}
                                                className="gap-2"
                                            >
                                                <BookOpen className="h-4 w-4" />
                                                Read on Medium
                                            </Button>
                                        )}
                                        {selectedBlog.externalUrl && (
                                            <Button
                                                variant={readOption === 'external' ? 'default' : 'outline'}
                                                size="sm"
                                                onClick={() => setReadOption('external')}
                                                className="gap-2"
                                            >
                                                <Globe className="h-4 w-4" />
                                                External Link
                                            </Button>
                                        )}
                                        <Button
                                            variant={readOption === 'internal' ? 'default' : 'outline'}
                                            size="sm"
                                            onClick={() => setReadOption('internal')}
                                            className="gap-2"
                                        >
                                            Read Here
                                        </Button>
                                    </div>
                                </div>
                            </DialogHeader>

                            {/* Content based on selected option */}
                            {readOption === 'internal' && (
                                <article
                                    className="
                    mt-8
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
                            )}

                            {readOption === 'medium' && selectedBlog.mediumUrl && (
                                <div className="mt-8 text-center py-12">
                                    <BookOpen className="h-16 w-16 mx-auto text-indigo-500 mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">
                                        Read on Medium
                                    </h3>
                                    <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                                        This article is available on Medium with better formatting,
                                        comments, and engagement features.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Button
                                            onClick={handleOpenMedium}
                                            className="gap-2"
                                            size="lg"
                                        >
                                            <ExternalLink className="h-4 w-4" />
                                            Open in Medium
                                        </Button>
                                        <Button
                                            variant="outline"
                                            onClick={() => setReadOption('internal')}
                                        >
                                            Read Summary Here
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {readOption === 'external' && selectedBlog.externalUrl && (
                                <div className="mt-8 text-center py-12">
                                    <Globe className="h-16 w-16 mx-auto text-indigo-500 mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">
                                        External Article
                                    </h3>
                                    <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                                        This article is hosted externally. Click below to read it on the original site.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Button
                                            onClick={handleOpenExternal}
                                            className="gap-2"
                                            size="lg"
                                        >
                                            <ExternalLink className="h-4 w-4" />
                                            Open Article
                                        </Button>
                                        <Button
                                            variant="outline"
                                            onClick={() => setReadOption('internal')}
                                        >
                                            Read Summary Here
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
}

// Separate Blog Grid Component
interface BlogGridProps {
    blogs: Blog[];
    onReadBlog: (blog: Blog) => void;
}

function BlogGrid({ blogs, onReadBlog }: BlogGridProps) {
    if (blogs.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-muted-foreground">No blogs found in this category.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {blogs.map((blog) => (
                <Card
                    key={blog.id}
                    className="
            group relative overflow-hidden rounded-2xl
            border border-border/60
            bg-background/80 backdrop-blur
            transition-all duration-300
            hover:-translate-y-2
            hover:shadow-2xl hover:shadow-indigo-500/10
          "
                >
                    {/* Source Indicator */}
                    {blog.mediumUrl && (
                        <div className="absolute top-4 right-4 z-10">
                            <Badge variant="outline" className="bg-white/90 backdrop-blur-sm">
                                <BookOpen className="h-3 w-3 mr-1" />
                                Medium
                            </Badge>
                        </div>
                    )}
                    {blog.externalUrl && !blog.mediumUrl && (
                        <div className="absolute top-4 right-4 z-10">
                            <Badge variant="outline" className="bg-white/90 backdrop-blur-sm">
                                <Globe className="h-3 w-3 mr-1" />
                                External
                            </Badge>
                        </div>
                    )}

                    {/* Gradient Hover Overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity
            bg-gradient-to-br from-indigo-500/5 to-purple-500/10" />

                    {/* Glow Ring */}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl
            ring-1 ring-transparent group-hover:ring-indigo-500/30 transition" />

                    <CardHeader className="relative space-y-4">
                        <div className="flex items-center justify-between text-xs">
                            <Badge variant="secondary" className="px-2 py-1">
                                {blog.tag}
                            </Badge>
                            <span className="text-muted-foreground">
                                {blog.date}
                            </span>
                        </div>

                        <CardTitle
                            className="
                text-lg sm:text-xl font-semibold leading-snug
                transition-colors
                group-hover:text-indigo-600
              "
                        >
                            {blog.title}
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="relative flex flex-col h-full">
                        <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                            {blog.description}
                        </p>

                        <Button
                            variant="outline"
                            className="
                mt-auto w-full
                transition
                group-hover:border-indigo-500
                group-hover:text-indigo-600
                gap-2
              "
                            onClick={() => onReadBlog(blog)}
                        >
                            {blog.mediumUrl ? (
                                <>
                                    <BookOpen className="h-4 w-4" />
                                    Read on Medium
                                </>
                            ) : blog.externalUrl ? (
                                <>
                                    <Globe className="h-4 w-4" />
                                    Read Article
                                </>
                            ) : (
                                'Read Article →'
                            )}
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}