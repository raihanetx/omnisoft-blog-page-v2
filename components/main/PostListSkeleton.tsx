


import React from 'react';
import BlogCardSkeleton from '../skeletons/BlogCardSkeleton';

interface PostListSkeletonProps {
    frontendCount: number;
    backendCount: number;
}

const PostListSkeleton: React.FC<PostListSkeletonProps> = ({ frontendCount, backendCount }) => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
            {frontendCount > 0 && (
                Array.from({ length: frontendCount }).map((_, i) => <BlogCardSkeleton key={`frontend-skel-${i}`} />)
            )}
            {backendCount > 0 && (
                <>
                    {/* This spacer element mimics the margin-top of the 'Backend' H2 heading */}
                    {frontendCount > 0 && (
                        <div className="col-span-2 lg:col-span-3 mt-16 h-0" />
                    )}
                    {Array.from({ length: backendCount }).map((_, i) => <BlogCardSkeleton key={`backend-skel-${i}`} />)}
                </>
            )}
        </div>
    );
};

export default PostListSkeleton;