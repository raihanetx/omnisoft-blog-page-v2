
import React from 'react';

const BlogCardSkeleton: React.FC = () => {
    return (
        <div className="bg-gradient-to-br from-card-gradient-from/80 to-card-gradient-to/80 rounded-3xl p-6 flex flex-col border-4 border-button-secondary/50">
            <div className="shimmer-bg rounded-2xl mb-4 aspect-[16/9]"></div>
            <div className="h-8 shimmer-bg rounded w-3/4 mb-4"></div>
            <div className="h-4 shimmer-bg rounded w-1/2 mb-2"></div>
            <div className="h-4 shimmer-bg rounded w-1/2 mb-4"></div>
            <div className="flex flex-row flex-wrap items-center gap-2 mb-6">
                <div className="h-6 w-16 shimmer-bg rounded"></div>
                <div className="h-6 w-20 shimmer-bg rounded"></div>
            </div>
            <div className="mt-auto self-center h-10 w-32 shimmer-bg rounded-lg"></div>
        </div>
    );
};

export default BlogCardSkeleton;