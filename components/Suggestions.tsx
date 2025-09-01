
import React from 'react';
import { BlogPost } from '../../types';
import SuggestedPostCard from './SuggestedPostCard';

interface SuggestionsProps {
    post: BlogPost;
    allPosts: BlogPost[];
    onSelectPost: (post: BlogPost) => void;
}

const Suggestions: React.FC<SuggestionsProps> = ({ post, allPosts, onSelectPost }) => {
    const sameAuthorPosts = allPosts.filter(p => p.author === post.author && p.id !== post.id);
    const otherPostsForSuggestions = allPosts.filter(p => p.author !== post.author && p.id !== post.id);

    let authorSuggestions = [...sameAuthorPosts];
    if (authorSuggestions.length < 3) {
        const needed = 3 - authorSuggestions.length;
        authorSuggestions.push(...otherPostsForSuggestions.slice(0, needed));
    }
    authorSuggestions = authorSuggestions.slice(0, 3);

    const authorSuggestionIds = new Set(authorSuggestions.map(p => p.id));
    const otherSuggestions = otherPostsForSuggestions.filter(p => !authorSuggestionIds.has(p.id)).slice(0, 3);

    return (
        <>
            {authorSuggestions.length > 0 && (
                <section className="mt-24">
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-4xl font-bold mb-10 text-left">More from {post.author}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {authorSuggestions.map(p => (
                                <SuggestedPostCard key={p.id} post={p} onSelectPost={onSelectPost} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {otherSuggestions.length > 0 && (
                 <section className="mt-24">
                     <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-4xl font-bold mb-10 text-left">Suggested for you</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {otherSuggestions.map(p => (
                                <SuggestedPostCard key={p.id} post={p} onSelectPost={onSelectPost} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default Suggestions;