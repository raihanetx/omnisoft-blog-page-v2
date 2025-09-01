


import React from 'react';
import { BlogPost, BlogCategory } from '../../types';
import BlogCard from '../BlogCard';

interface PostListProps {
    posts: BlogPost[];
    onSelectPost: (post: BlogPost) => void;
}

const PostList: React.FC<PostListProps> = ({ posts, onSelectPost }) => {
    const frontendPosts = posts.filter(p => p.category === BlogCategory.FRONTEND);
    const backendPosts = posts.filter(p => p.category === BlogCategory.BACKEND);

    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
            {frontendPosts.length > 0 && (
                <>
                    <h2 className="text-4xl font-bold col-span-2 lg:col-span-3 text-gray-900 dark:text-white">Frontend</h2>
                    {frontendPosts.map(post => (
                        <BlogCard key={post.id} post={post} onSelectPost={onSelectPost} />
                    ))}
                </>
            )}
            {backendPosts.length > 0 && (
                <>
                    <h2 className={`text-4xl font-bold col-span-2 lg:col-span-3 text-gray-900 dark:text-white ${frontendPosts.length > 0 ? 'mt-16' : ''}`}>Backend</h2>
                    {backendPosts.map(post => (
                        <BlogCard key={post.id} post={post} onSelectPost={onSelectPost} />
                    ))}
                </>
            )}
        </div>
    );
};

export default PostList;