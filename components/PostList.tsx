
import React from 'react';
import { BlogPost, BlogCategory } from '../../types';
import BlogCard from './BlogCard';

interface PostListProps {
    posts: BlogPost[];
    onSelectPost: (post: BlogPost) => void;
}

const PostList: React.FC<PostListProps> = ({ posts, onSelectPost }) => {
    const frontendPosts = posts.filter(p => p.category === BlogCategory.FRONTEND);
    const backendPosts = posts.filter(p => p.category === BlogCategory.BACKEND);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {frontendPosts.length > 0 && (
                <>
                    <h2 className="text-4xl font-bold sm:col-span-2 lg:col-span-3">Frontend</h2>
                    {frontendPosts.map(post => (
                        <BlogCard key={post.id} post={post} onSelectPost={onSelectPost} />
                    ))}
                </>
            )}
            {backendPosts.length > 0 && (
                <>
                    <h2 className={`text-4xl font-bold sm:col-span-2 lg:col-span-3 ${frontendPosts.length > 0 ? 'mt-16' : ''}`}>Backend</h2>
                    {backendPosts.map(post => (
                        <BlogCard key={post.id} post={post} onSelectPost={onSelectPost} />
                    ))}
                </>
            )}
        </div>
    );
};

export default PostList;