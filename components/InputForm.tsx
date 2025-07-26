
import React from 'react';

interface InputFormProps {
    userInput: string;
    setUserInput: (value: string) => void;
    onSubmit: (e: React.FormEvent) => void;
    isLoading: boolean;
}

const InputForm: React.FC<InputFormProps> = ({ userInput, setUserInput, onSubmit, isLoading }) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (!isLoading && userInput.trim()) {
                onSubmit(e as any);
            }
        }
    };

    return (
        <form onSubmit={onSubmit} className="flex items-center p-4 bg-slate-800 border-t border-slate-700">
            <textarea
                id="problem-input"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Message MowitateBot..."
                className="flex-grow p-3 text-slate-200 bg-slate-700/80 border-2 border-slate-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 resize-none max-h-40"
                disabled={isLoading}
                rows={1}
                aria-label="Your message"
            />
            <button
                type="submit"
                disabled={isLoading || !userInput.trim()}
                className="ml-4 flex-shrink-0 flex items-center justify-center w-12 h-12 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 disabled:bg-slate-600 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-110 disabled:scale-100"
                aria-label="Send message"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
            </button>
        </form>
    );
};

export default InputForm;
