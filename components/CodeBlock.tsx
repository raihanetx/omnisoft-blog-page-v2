

import React, { useState } from 'react';

interface CodeBlockProps {
    children: React.ReactNode;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {
    const [isCopied, setIsCopied] = useState(false);

    // Convert children to a flat string to handle various node types (like arrays of strings and whitespace)
    const codeString = React.Children.toArray(children).join('');

    const handleCopy = () => {
        // Use the flattened string for clipboard operations
        if (!codeString) return;
        navigator.clipboard.writeText(codeString.trim()).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
        }, (err) => {
            console.error('Could not copy text: ', err);
        });
    };

    return (
        <div className="my-8 relative">
            <pre className="bg-gray-100 dark:bg-[#3a275e] text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-[#865dff] rounded-xl p-6 overflow-x-auto text-sm">
                {/* Use the flattened and trimmed string for rendering */}
                <code>{codeString.trim()}</code>
            </pre>
            <button
                onClick={handleCopy}
                className="absolute top-4 right-4 px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 text-gray-700 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white rounded-md transition-colors duration-200"
                aria-label="Copy code to clipboard"
            >
                {isCopied ? 'Copied!' : 'Copy'}
            </button>
        </div>
    );
};

export default CodeBlock;