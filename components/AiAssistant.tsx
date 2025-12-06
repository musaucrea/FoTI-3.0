import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello! I am the FoTI Smart Assistant. Are you looking for a unique research-based tour, or are you a student looking for guidance?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // Pass the *previous* messages (excluding the one we just added locally for optimistic UI if we wanted, 
      // but here we pass the history excluding the new one to the service, or include it. 
      // The service expects history. Let's pass the current history state before the update + new message separately logic?
      // Actually the service in this simple implementation takes history + new message. 
      // Let's pass the history excluding the *current* user message we just set, because the service sends the new message.
      
      const responseText = await sendMessageToGemini(messages, userMsg.text);
      
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'Sorry, something went wrong.', isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Chat Window */}
      <div 
        className={`bg-white rounded-2xl shadow-2xl border border-gray-200 w-80 sm:w-96 mb-4 transition-all duration-300 transform origin-bottom-right pointer-events-auto flex flex-col overflow-hidden ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-10 pointer-events-none h-0'
        }`}
        style={{ maxHeight: '600px', height: isOpen ? '500px' : '0' }}
      >
        {/* Header */}
        <div className="bg-emerald-900 text-white p-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="font-semibold">FoTI Assistant</span>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-emerald-600 text-white rounded-br-none' 
                    : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
                } ${msg.isError ? 'bg-red-50 border-red-200 text-red-600' : ''}`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white text-gray-800 border border-gray-200 rounded-2xl rounded-bl-none px-4 py-2 shadow-sm flex items-center space-x-2">
                <Loader2 className="w-4 h-4 animate-spin text-emerald-600" />
                <span className="text-xs text-gray-500">Thinking...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 bg-white border-t border-gray-100">
          <div className="relative flex items-center">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about tours or research..."
              className="w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none text-sm"
              rows={1}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="absolute right-2 p-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`pointer-events-auto p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
          isOpen 
            ? 'bg-gray-100 text-gray-600 rotate-90' 
            : 'bg-emerald-600 text-white hover:bg-emerald-700 hover:scale-105'
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
};
