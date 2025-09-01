

import React, { useState, useEffect } from 'react';
// FIX: The type 'Variants' is not exported in some framer-motion versions, causing a compilation error.
// Removing the explicit type annotation allows TypeScript to infer the type correctly.
import { motion, AnimatePresence } from 'framer-motion';
import { BlogPost } from './types';
import MainPage from './components/MainPage';
import BlogPostPage from './components/BlogPostPage';
import { BLOG_POSTS } from './constants';

// A more modern, professional transition.
// The new page smoothly slides up and fades in, while the old page quickly fades out.
const pageVariants = {
    // Initial state for the entering element
    hidden: { 
        opacity: 0,
        y: '2vh', 
    },
    // Animation for the entering element
    enter: { 
        opacity: 1,
        y: '0vh',
        transition: {
            duration: 0.5,
            ease: 'circOut',
        }
    },
    // Animation for the exiting element
    exit: { 
        opacity: 0,
        transition: {
            duration: 0.25,
            ease: 'easeOut'
        }
    }
};

type ViewState = 
    | { type: 'main' }
    | { type: 'post'; post: BlogPost };

const App: React.FC = () => {
    const [view, setView] = useState<ViewState>({ type: 'main' });

    useEffect(() => {
        // Scroll to top on any page change for a consistent experience.
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [view]);

    const handleSelectPost = (post: BlogPost) => {
        // Prevent re-navigating to the same post if already on it.
        if (view.type === 'post' && view.post.id === post.id) return;
        setView({ type: 'post', post });
    };

    const renderPage = () => {
        let key: string;
        let pageComponent: React.ReactNode;

        switch (view.type) {
            case 'post':
                key = `post-${view.post.id}`;
                pageComponent = (
                    <BlogPostPage 
                        post={view.post} 
                        allPosts={BLOG_POSTS}
                        onSelectPost={handleSelectPost}
                    />
                );
                break;
            case 'main':
            default:
                key = 'main';
                pageComponent = <MainPage posts={BLOG_POSTS} onSelectPost={handleSelectPost} />;
                break;
        }

        return (
            <motion.div
                key={key}
                variants={pageVariants}
                initial="hidden"
                animate="enter"
                exit="exit"
            >
                {pageComponent}
            </motion.div>
        );
    };

    return (
        <div className="min-h-screen">
            <div className="w-full">
                <AnimatePresence mode="wait">
                    {renderPage()}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default App;