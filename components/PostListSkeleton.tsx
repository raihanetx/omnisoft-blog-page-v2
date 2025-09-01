
import React from 'react';
import BlogCardSkeleton from './BlogCardSkeleton';

interface PostListSkeletonProps {
    frontendCount: number;
    backendCount: number;
}

const PostListSkeleton: React.FC<PostListSkeletonProps> = ({ frontendCount, backendCount }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {frontendCount > 0 && (
                <>
                    <div className="h-10 shimmer-bg rounded w-1/3 sm:col-span-2 lg:col-span-3"></div>
                    {Array.from({ length: frontendCount }).map((_, i) => <BlogCardSkeleton key={`frontend-skel-${i}`} />)}
                </>
            )}
            {backendCount > 0 && (
                <>
                    <div className={`h-10 shimmer-bg rounded w-1/3 sm:col-span-2 lg:col-span-3 ${frontendCount > 0 ? 'mt-16' : ''}`}></div>
                    {Array.from({ length: backendCount }).map((_, i) => <BlogCardSkeleton key={`backend-skel-${i}`} />)}
                </>
            )}
        </div>
    );
};

export default PostListSkeleton;