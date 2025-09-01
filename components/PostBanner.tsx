
import React from 'react';

const authorImages: Record<string, string> = {
    'Alex Morgan': 'https://placehold.co/200x200/ab5ef4/FFFFFF?text=AM',
    'Samantha Bee': 'https://placehold.co/200x200/ab5ef4/FFFFFF?text=SB',
    'John Doe': 'https://placehold.co/200x200/ab5ef4/FFFFFF?text=JD',
    'Jane Smith': 'https://placehold.co/200x200/ab5ef4/FFFFFF?text=JS'
};
const defaultAuthorImage = 'https://placehold.co/200x200/ab5ef4/FFFFFF?text=User';

interface PostBannerProps {
    author: string;
    bgColor: string;
}

const PostBanner: React.FC<PostBannerProps> = ({ author, bgColor }) => {
    return (
        <div className="relative h-96">
            <div style={{ backgroundColor: bgColor }} className="w-full h-full"></div>
            <div className="absolute inset-0 bg-black/60"></div>
            
            <div className="absolute top-full left-0 w-full h-[4px]">
                <div className="flex items-center h-full">
                    <div className="flex-1 h-full" style={{ background: 'linear-gradient(to right, transparent, #6347ab)' }}></div>
                    <div className="w-32 flex-shrink-0 relative">
                         <img 
                            src={authorImages[author] || defaultAuthorImage} 
                            alt={author} 
                            className="w-32 h-32 rounded-full object-cover border-4 border-button-secondary absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
                            loading="lazy"
                        />
                    </div>
                    <div className="flex-1 h-full" style={{ background: 'linear-gradient(to left, transparent, #6347ab)' }}></div>
                </div>
            </div>
        </div>
    );
};

export default PostBanner;