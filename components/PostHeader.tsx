
import React from 'react';
import { BlogPost } from '../../types';

interface PostHeaderProps {
    post: BlogPost;
}

const PostHeader: React.FC<PostHeaderProps> = ({ post }) => {
    return (
        <header className="text-center max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4">{post.title}</h1>
            <p className="text-xl text-gray-400 mb-6">{post.subtitle}</p>
            <p className="text-md text-gray-300 mb-6">By <span className="text-button-secondary font-semibold">{post.author}</span> on {post.date}</p>
            <div className="flex justify-center items-center gap-3 flex-wrap">
                {post.tags.map(tag => (
                    <span key={tag} className="bg-button-secondary/50 text-white text-sm font-medium px-4 py-1.5 rounded-full">
                        {tag}
                    </span>
                ))}
            </div>
        </header>
    );
};

export default PostHeader;