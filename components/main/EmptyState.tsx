
import React from 'react';

const EmptyState: React.FC = () => {
    return (
        <div className="text-center py-16">
            <h2 className="text-2xl text-gray-600 dark:text-gray-400">No posts found.</h2>
            <p className="text-gray-500 dark:text-gray-500">Try adjusting your search or filter.</p>
        </div>
    );
};

export default EmptyState;