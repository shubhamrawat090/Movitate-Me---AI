
import React from 'react';
import { micromark } from 'micromark';

interface ChatMessageProps {
    role: 'user' | 'model' | 'error';
    content: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ role, content }) => {
    const isUser = role === 'user';
    const isError = role === 'error';

    const containerClasses = isUser ? 'justify-end' : 'justify-start';
    
    let bubbleClasses = 'px-4 py-3 rounded-2xl max-w-lg md:max-w-xl lg:max-w-2xl';
    if (isUser) {
        bubbleClasses += ' bg-orange-600 text-white rounded-br-none';
    } else if (isError) {
        bubbleClasses += ' bg-red-800/70 text-red-200 border border-red-500/50 rounded-bl-none';
    } else {
        bubbleClasses += ' bg-slate-700 text-slate-200 rounded-bl-none';
    }

    // Use micromark to safely render markdown-like text (for line breaks)
    const sanitizedHtml = micromark(content);

    return (
        <div className={`flex items-end ${containerClasses}`}>
            <div 
                className={`${bubbleClasses} prose prose-invert prose-p:my-0`}
                dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
            />
        </div>
    );
};

export default ChatMessage;
