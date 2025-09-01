
import React, { useState } from 'react';
import { BlogPost } from '../types';

interface BlogCardProps {
    post: BlogPost;
    onSelectPost: (post: BlogPost) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, onSelectPost }) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    return (
        <div className="group bg-white dark:bg-gradient-to-br dark:from-card-gradient-from dark:to-card-gradient-to rounded-3xl p-6 flex flex-col transition-all duration-300 hover:scale-105 dark:border-4 dark:border-button-secondary border border-gray-200 shadow-md hover:shadow-xl dark:shadow-none">
            <div className="rounded-2xl mb-4 aspect-[16/9] overflow-hidden relative bg-gray-200 dark:bg-card-gradient-to">
                {post.imageUrl && (
                    <>
                        {!isImageLoaded && (
                            <div className="absolute inset-0 shimmer-bg"></div>
                        )}
                        <img
                            src={post.imageUrl}
                            alt={post.title}
                            className={`w-full h-full object-cover transition-opacity duration-500 group-hover:scale-105 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                            loading="lazy"
                            onLoad={() => setIsImageLoaded(true)}
                        />
                    </>
                )}
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{post.title}</h3>
            <div className="text-sm text-gray-500 dark:text-gray-300 flex flex-col items-start gap-1 mb-4">
                <span className="flex items-center gap-2"><i className="far fa-user w-4 text-center"></i> {post.author}</span>
                <span className="flex items-center gap-2"><i className="far fa-calendar-alt w-4 text-center"></i> {post.date}</span>
            </div>
            <div className="flex flex-row flex-wrap items-center gap-2 mb-6">
                {post.tags.map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-700 dark:bg-black/20 text-xs px-2 py-1 rounded dark:text-white">
                        {tag}
                    </span>
                ))}
            </div>
            <button
                onClick={() => onSelectPost(post)}
                className="mt-auto self-center text-center bg-white text-button-primary border-2 border-button-secondary hover:bg-button-secondary hover:text-white font-bold py-2 px-6 rounded-lg w-fit transition-colors duration-300"
            >
                Read More »
            </button>
        </div>
    );
};

export default BlogCard;
