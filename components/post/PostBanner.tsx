

import React, { useState } from 'react';

// REVISED: Updated author images to a new selection of random male portraits from an online source.
const authorImages: Record<string, string> = {
    'Alex Morgan': 'https://randomuser.me/api/portraits/men/32.jpg',
    'Samantha Bee': 'https://randomuser.me/api/portraits/men/40.jpg',
    'John Doe': 'https://randomuser.me/api/portraits/men/50.jpg',
    'Jane Smith': 'https://randomuser.me/api/portraits/men/60.jpg',
};
const defaultAuthorImage = 'https://randomuser.me/api/portraits/men/1.jpg';

interface PostBannerProps {
    author: string;
    imageUrl?: string;
}

const PostBanner: React.FC<PostBannerProps> = ({ author, imageUrl }) => {
    const [isBannerLoaded, setIsBannerLoaded] = useState(!imageUrl);
    const [isAuthorImageLoaded, setIsAuthorImageLoaded] = useState(false);
    const gradientColor = '#6347ab'; 
    const authorImageUrl = authorImages[author] || defaultAuthorImage;

    return (
        <div className="relative h-96">
            {/* Banner Image */}
            <div className="absolute inset-0">
                {!isBannerLoaded && (
                    <div className="absolute inset-0 shimmer-bg"></div>
                )}
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt="Blog post banner"
                        className={`w-full h-full object-cover transition-opacity duration-500 ${isBannerLoaded ? 'opacity-100' : 'opacity-0'}`}
                        loading="lazy"
                        onLoad={() => setIsBannerLoaded(true)}
                    />
                ) : (
                    <div className="w-full h-full bg-gray-200 dark:bg-card-gradient-to"></div>
                )}
            </div>
            <div className="absolute inset-0 bg-black/60"></div>
            
            {/* Line and Author Image */}
            <div className="absolute top-full left-0 w-full h-[4px]">
                <div className="flex items-center h-full">
                    <div className="flex-1 h-full" style={{ background: `linear-gradient(to right, transparent, ${gradientColor})` }}></div>
                    <div className="w-32 flex-shrink-0 relative">
                        {!isAuthorImageLoaded && (
                            <div className="w-32 h-32 rounded-full shimmer-bg border-4 dark:border-button-secondary/50 border-gray-400/50 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"></div>
                        )}
                         <img 
                            src={authorImageUrl} 
                            alt={author} 
                            className={`w-32 h-32 rounded-full object-cover border-4 dark:border-button-secondary border-gray-400 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out ${isAuthorImageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                            loading="lazy"
                            onLoad={() => setIsAuthorImageLoaded(true)}
                        />
                    </div>
                    <div className="flex-1 h-full" style={{ background: `linear-gradient(to left, transparent, ${gradientColor})` }}></div>
                </div>
            </div>
        </div>
    );
};

export default PostBanner;