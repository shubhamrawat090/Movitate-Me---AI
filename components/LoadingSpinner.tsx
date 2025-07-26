
import React from 'react';

const LoadingSpinner: React.FC = () => {
    return (
        <div className="flex items-center space-x-2 p-3">
            <div className="w-2 h-2 bg-slate-500 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
            <div className="w-2 h-2 bg-slate-500 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
            <div className="w-2 h-2 bg-slate-500 rounded-full animate-pulse"></div>
        </div>
    );
};

export default LoadingSpinner;
