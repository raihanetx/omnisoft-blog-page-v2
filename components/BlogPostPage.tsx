


import React from 'react';
import { BlogPost } from '../types';

import PostBanner from './post/PostBanner';
import PostHeader from './post/PostHeader';
import PostContent from './post/PostContent';
import Suggestions from './post/Suggestions';
import CallToAction from './shared/CallToAction';

interface BlogPostPageProps {
    post: BlogPost;
    allPosts: BlogPost[];
    onSelectPost: (post: BlogPost) => void;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, allPosts, onSelectPost }) => {

    return (
        <div className="relative">
            <PostBanner author={post.author} imageUrl={post.imageUrl} />

            <main className="pt-24 pb-20">
                <div className="container mx-auto px-4">
                    <PostHeader post={post} />
                    <PostContent postId={post.id} />
                </div>

                <Suggestions post={post} allPosts={allPosts} onSelectPost={onSelectPost} />
                
                 <div className="max-w-6xl mx-auto px-4">
                    <CallToAction />
                </div>
            </main>
        </div>
    );
};

export default BlogPostPage;