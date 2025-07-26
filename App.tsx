
import React, { useState, useCallback, useRef, useEffect } from 'react';
import Header from './components/Header';
import InputForm from './components/InputForm';
import LoadingSpinner from './components/LoadingSpinner';
import ChatMessage from './components/ChatMessage';
import { sendMessageToAI } from './services/geminiService';

interface Message {
    id: number;
    role: 'user' | 'model' | 'error';
    content: string;
}

const App: React.FC = () => {
    const [userInput, setUserInput] = useState<string>('');
    const [messages, setMessages] = useState<Message[]>([
        { id: Date.now(), role: 'model', content: "Tell me your problem. I'll give you a spicy roast and a gentle push." }
    ]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const chatHistoryRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Scroll to bottom whenever messages change
        if (chatHistoryRef.current) {
            chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
        }
    }, [messages, isLoading]);

    const handleFormSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        if (isLoading || !userInput.trim()) return;

        const userMessage: Message = { id: Date.now(), role: 'user', content: userInput };
        setMessages(prevMessages => [...prevMessages, userMessage]);
        setIsLoading(true);
        setUserInput(''); // Clear input immediately

        try {
            const response = await sendMessageToAI(userInput);
            const aiMessage: Message = { id: Date.now() + 1, role: 'model', content: response };
            setMessages(prevMessages => [...prevMessages, aiMessage]);
        } catch (err) {
            const errorMessage = (err instanceof Error) ? err.message : 'An unexpected error occurred.';
            const errorBotMessage: Message = { id: Date.now() + 1, role: 'error', content: errorMessage };
            setMessages(prevMessages => [...prevMessages, errorBotMessage]);
        } finally {
            setIsLoading(false);
        }
    }, [userInput, isLoading]);

    return (
        <div className="h-screen bg-slate-900 text-white flex flex-col font-sans">
            <main className="w-full max-w-3xl mx-auto flex flex-col flex-grow my-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-2xl shadow-orange-500/10 overflow-hidden">
                {/* Chat History */}
                <div ref={chatHistoryRef} className="flex-grow p-4 sm:p-6 space-y-6 overflow-y-auto">
                    <Header />
                    {messages.map((msg) => (
                        <ChatMessage key={msg.id} role={msg.role} content={msg.content} />
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                             <div className="bg-slate-700 rounded-lg rounded-bl-none p-2">
                                <LoadingSpinner />
                             </div>
                        </div>
                    )}
                </div>

                {/* Input Form */}
                <InputForm
                    userInput={userInput}
                    setUserInput={setUserInput}
                    onSubmit={handleFormSubmit}
                    isLoading={isLoading}
                />
            </main>
        </div>
    );
};

export default App;
