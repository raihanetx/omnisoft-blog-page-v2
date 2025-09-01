
import React from 'react';

const BlogCardSkeleton: React.FC = () => {
    return (
        <div className="bg-white dark:bg-gradient-to-br dark:from-card-gradient-from/80 dark:to-card-gradient-to/80 rounded-3xl p-6 flex flex-col dark:border-4 dark:border-button-secondary/50 border border-gray-200">
            {/* Image Placeholder */}
            <div className="shimmer-bg rounded-2xl mb-4 aspect-[16/9]"></div>
            
            {/* Title Placeholder */}
            <div className="h-7 shimmer-bg rounded w-5/6 mb-4"></div>

            {/* Author/Date Placeholder */}
            <div className="space-y-2 mb-4">
                <div className="h-4 shimmer-bg rounded w-1/2"></div>
                <div className="h-4 shimmer-bg rounded w-1/3"></div>
            </div>

            {/* Tags Placeholder */}
            <div className="flex flex-row flex-wrap items-center gap-2 mb-6">
                <div className="h-6 w-16 shimmer-bg rounded-full"></div>
                <div className="h-6 w-20 shimmer-bg rounded-full"></div>
            </div>
            
            {/* Button Placeholder */}
            <div className="mt-auto self-center h-10 w-32 shimmer-bg rounded-lg"></div>
        </div>
    );
};

export default BlogCardSkeleton;