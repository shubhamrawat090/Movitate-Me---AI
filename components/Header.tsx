
import React from 'react';

const Header: React.FC = () => {
    return (
        <div className="text-center mb-8">
            <div className="flex justify-center items-center gap-3 mb-4">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.362-3.797A8.333 8.333 0 0112 2.25c1.153 0 2.243.3 3.224.864z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.25 5.25 0 00-1.023-.195A3.75 3.75 0 008.25 12a3.75 3.75 0 003.75 6z" />
                </svg>
                <h1 className="text-4xl sm:text-5xl font-bold">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">
                        Mo
                    </span>
                    <span className="text-teal-400">
                        wit
                    </span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">
                        ate Me - AI
                    </span>
                </h1>
            </div>
            <p className="text-slate-400 text-lg">Tell me your problem. I'll give you a <span className="font-semibold text-orange-400">spicy</span> roast and a <span className="font-semibold text-teal-400">gentle</span> push.</p>
        </div>
    );
};

export default Header;