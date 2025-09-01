

import React, { useState, useMemo, useEffect } from 'react';
import { BlogPost, BlogCategory } from '../types';

import FilterControls from './main/FilterControls';
import PostList from './main/PostList';
import EmptyState from './main/EmptyState';
import CallToAction from './shared/CallToAction';
import PostListSkeleton from './main/PostListSkeleton';

interface MainPageProps {
    posts: BlogPost[];
    onSelectPost: (post: BlogPost) => void;
}

const MainPage: React.FC<MainPageProps> = ({ posts, onSelectPost }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500); // Simulate a network request
        return () => clearTimeout(timer);
    }, []);

    const filteredPosts = useMemo(() => {
        return posts.filter(post => {
            const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
            const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                  post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
            return matchesCategory && matchesSearch;
        });
    }, [posts, searchTerm, selectedCategory]);

    const frontendPosts = useMemo(() => posts.filter(p => p.category === BlogCategory.FRONTEND), [posts]);
    const backendPosts = useMemo(() => posts.filter(p => p.category === BlogCategory.BACKEND), [posts]);

    const renderBody = () => {
        if (loading) {
            return <PostListSkeleton frontendCount={frontendPosts.length} backendCount={backendPosts.length} />;
        }
        if (filteredPosts.length > 0) {
            return <PostList posts={filteredPosts} onSelectPost={onSelectPost} />;
        }
        return <EmptyState />;
    };

    return (
        <main className="container mx-auto px-4 py-16 max-w-7xl">
            <header className="text-center mb-16">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-900 dark:text-white">
                    omnisoft Blogs
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    Insights, updates, and stories from the world of software & tech
                </p>
            </header>

            <FilterControls
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
            />
            
            {renderBody()}

            {!loading && <CallToAction />}
        </main>
    );
};

export default MainPage;