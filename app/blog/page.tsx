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
    isMedium: boolean;
    mediumUrl?: string;
    externalUrl?: string;
};

export default function Blogs() {
    const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
    const [readOption, setReadOption] = useState<'internal' | 'medium' | 'external' | null>(null);

    const handleReadBlog = (blog: Blog) => {
        setSelectedBlog(blog);

        if (blog.isMedium) {
            setReadOption('medium');
        } else if (blog.externalUrl) {
            setReadOption('external');
        } else {
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
        <section className="max-w-7xl mx-auto px-4 py-2">
            <div className="text-center mb-10 relative">
                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full
          bg-gradient-to-r from-indigo-600 to-purple-600
          text-white text-sm font-semibold shadow-lg">
                    ✍️ My Blogs
                </div>

                <h2 className="mt-6 text-2xl sm:text-3xl font-extrabold text-gray-900">
                    My Thoughts &{' '}
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Learnings
                    </span>
                </h2>

                <p className="text-gray-600 max-w-xl mx-auto mt-2">
                    A collection of insights, experiences, and lessons from my journey in tech.
                </p>
            </div>

            <Tabs defaultValue="all">
                <TabsList className="mx-auto w-fit">
                    <TabsTrigger value="all">
                        All Articles ({blogs.length})
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="mt-6">
                    <BlogGrid blogs={blogs} onReadBlog={handleReadBlog} />
                </TabsContent>
            </Tabs>

            <Dialog open={!!selectedBlog} onOpenChange={() => setSelectedBlog(null)}>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-8 rounded-2xl">
                    {selectedBlog && (
                        <>
                            <DialogHeader className="space-y-4">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <DialogTitle className="text-3xl font-bold">
                                            {selectedBlog.title}
                                        </DialogTitle>
                                        <DialogDescription className="mt-2">
                                            {selectedBlog.description}
                                        </DialogDescription>
                                    </div>
                                </div>

                                <div className="flex flex-wrap justify-between items-center gap-3">
                                    <div className="flex items-center gap-3">
                                        <Badge>{selectedBlog.tag}</Badge>
                                        <span className="text-sm text-muted-foreground">
                                            {selectedBlog.date}
                                        </span>
                                    </div>
                                    <div className="flex gap-2">
                                        {selectedBlog.isMedium && (
                                            <Button
                                                size="sm"
                                                variant={readOption === 'medium' ? 'default' : 'outline'}
                                                onClick={() => setReadOption('medium')}
                                                className="gap-2"
                                            >
                                                <BookOpen className="h-4 w-4" />
                                                Read on Medium
                                            </Button>
                                        )}

                                        {selectedBlog.externalUrl && (
                                            <Button
                                                size="sm"
                                                variant={readOption === 'external' ? 'default' : 'outline'}
                                                onClick={() => setReadOption('external')}
                                                className="gap-2"
                                            >
                                                <Globe className="h-4 w-4" />
                                                External
                                            </Button>
                                        )}

                                        <Button
                                            size="sm"
                                            variant={readOption === 'internal' ? 'default' : 'outline'}
                                            onClick={() => setReadOption('internal')}
                                        >
                                            Read Here
                                        </Button>
                                    </div>
                                </div>
                            </DialogHeader>

                            {readOption === 'internal' && (
                                <article className="mt-8 prose prose-lg max-w-none dark:prose-invert">
                                    {selectedBlog.content}
                                </article>
                            )}

                            {readOption === 'medium' && (
                                <div className="mt-10 text-center">
                                    <BookOpen className="h-16 w-16 mx-auto text-indigo-500 mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">
                                        Read on Medium
                                    </h3>
                                    <p className="text-muted-foreground mb-6">
                                        This article is published on Medium with full formatting and engagement.
                                    </p>

                                    <div className="flex justify-center gap-4">
                                        {selectedBlog.mediumUrl && (
                                            <Button onClick={handleOpenMedium} size="lg" className="gap-2">
                                                <ExternalLink className="h-4 w-4" />
                                                Open Medium
                                            </Button>
                                        )}
                                        <Button variant="outline" onClick={() => setReadOption('internal')}>
                                            Read Summary Here
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {/* External View */}
                            {readOption === 'external' && selectedBlog.externalUrl && (
                                <div className="mt-10 text-center">
                                    <Globe className="h-16 w-16 mx-auto text-indigo-500 mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">
                                        External Article
                                    </h3>

                                    <Button onClick={handleOpenExternal} size="lg" className="gap-2">
                                        <ExternalLink className="h-4 w-4" />
                                        Open Article
                                    </Button>
                                </div>
                            )}
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
}


interface BlogGridProps {
    blogs: Blog[];
    onReadBlog: (blog: Blog) => void;
}

function BlogGrid({ blogs, onReadBlog }: BlogGridProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
                <Card
                    key={blog.id}
                    className="group rounded-2xl transition hover:-translate-y-2 hover:shadow-xl"
                >
                    {blog.isMedium && (
                        <div className="absolute top-4 right-4">
                            <Badge variant="outline" className="gap-1">
                                <BookOpen className="h-3 w-3" />
                                Medium
                            </Badge>
                        </div>
                    )}

                    <CardHeader>
                        <div className="flex justify-between text-xs">
                            <Badge variant="secondary">{blog.tag}</Badge>
                            <span className="text-muted-foreground">{blog.date}</span>
                        </div>
                        <CardTitle className="mt-3 text-lg group-hover:text-indigo-600">
                            {blog.title}
                        </CardTitle>
                    </CardHeader>

                    <CardContent>
                        <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                            {blog.description}
                        </p>

                        <Button
                            variant="outline"
                            className="w-full gap-2"
                            onClick={() => onReadBlog(blog)}
                        >
                            {blog.isMedium ? (
                                <>
                                    <BookOpen className="h-4 w-4" />
                                    Read on Medium
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
