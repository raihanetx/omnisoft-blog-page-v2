
import React from 'react';
import BlogCardSkeleton from './BlogCardSkeleton';

const SkeletonParagraph: React.FC<{ lines?: number }> = ({ lines = 4 }) => (
    <div className="space-y-3">
        {Array.from({ length: lines - 1 }).map((_, i) => (
            <div key={i} className="h-5 shimmer-bg rounded-full w-full"></div>
        ))}
        <div className="h-5 shimmer-bg rounded-full w-5/6"></div>
    </div>
);


const BlogPostPageSkeleton: React.FC = () => {
    return (
        <div>
            {/* Header Skeleton */}
            <div className="relative">
                <div className="h-96 w-full shimmer-bg"></div>
                <div className="absolute top-full left-0 w-full h-[4px]">
                    <div className="flex items-center h-full">
                        <div className="flex-1 h-full shimmer-bg"></div>
                        <div className="w-32 flex-shrink-0 relative">
                            <div className="w-32 h-32 rounded-full shimmer-bg border-4 border-[#ab5ef4]/50 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"></div>
                        </div>
                        <div className="flex-1 h-full shimmer-bg"></div>
                    </div>
                </div>
            </div>

            <main className="pt-24 pb-20">
                <div className="container mx-auto px-4">
                    <header className="text-center max-w-6xl mx-auto">
                        <div className="h-12 shimmer-bg rounded-lg w-3/4 mx-auto mb-4"></div>
                        <div className="h-6 shimmer-bg rounded w-full mx-auto mb-6"></div>
                        <div className="h-4 shimmer-bg rounded w-1/2 mx-auto mb-6"></div>
                        <div className="flex justify-center items-center gap-3 flex-wrap">
                            <div className="h-8 w-24 shimmer-bg rounded-full"></div>
                            <div className="h-8 w-20 shimmer-bg rounded-full"></div>
                            <div className="h-8 w-28 shimmer-bg rounded-full"></div>
                        </div>
                    </header>
                    
                    {/* REVISED: Professional, Prose-based Article Skeleton */}
                    <article className="max-w-6xl mx-auto mt-20 space-y-10">
                        <SkeletonParagraph lines={5} />
                        <div className="h-9 shimmer-bg rounded-full w-1/2 my-6"></div>
                        <SkeletonParagraph lines={7} />
                        <div className="h-64 shimmer-bg rounded-xl my-8"></div>
                        <SkeletonParagraph lines={4} />
                    </article>
                </div>
                
                {/* More from author skeleton */}
                <section className="mt-24">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="h-10 shimmer-bg rounded w-1/3 mb-10"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            <BlogCardSkeleton />
                            <BlogCardSkeleton />
                            <BlogCardSkeleton />
                        </div>
                    </div>
                </section>

                {/* Suggested for you skeleton */}
                <section className="mt-24">
                     <div className="max-w-6xl mx-auto px-4">
                        <div className="h-10 shimmer-bg rounded w-1/3 mb-10"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            <BlogCardSkeleton />
                            <BlogCardSkeleton />
                            <BlogCardSkeleton />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default BlogPostPageSkeleton;