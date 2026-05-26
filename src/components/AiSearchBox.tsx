"use client";

import { useChat } from '@ai-sdk/react';
import { Search, Sparkles, User, Bot, Loader2 } from "lucide-react";
import ReactMarkdown from 'react-markdown';

export default function AiSearchBox() {
  // @ts-ignore
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();

  return (
    <div className="w-full max-w-3xl mx-auto mt-8">
      <form 
        onSubmit={handleSubmit}
        className="relative group w-full"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-[var(--ai)] to-indigo-500/40 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative flex items-center bg-[#111115] border border-white/10 rounded-2xl p-2 shadow-2xl backdrop-blur-xl transition-all focus-within:border-[var(--ai)]">
          <Sparkles className="w-6 h-6 text-[var(--ai)] ml-4" />
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Ex: Quero um CRM para salão com WhatsApp e IA..."
            className="flex-1 bg-transparent border-none outline-none text-lg text-white placeholder:text-gray-500 px-4 py-4 font-mono"
            disabled={isLoading}
          />
          <button 
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-[var(--text)] text-[var(--bg)] px-6 py-3 rounded-xl font-bold font-space flex items-center gap-2 hover:bg-[var(--ai)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Pensando..." : "Perguntar"}
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
          </button>
        </div>
      </form>

      {messages.length > 0 && (
        <div className="mt-6 bg-[var(--surface-2)] border border-[var(--border)] rounded-2xl p-6 shadow-2xl text-left max-h-[400px] overflow-y-auto">
          {messages.map(m => (
            <div key={m.id} className={`flex gap-4 mb-6 ${m.role === 'user' ? 'opacity-80' : ''}`}>
              <div className="shrink-0 mt-1">
                {m.role === 'user' ? 
                  <div className="w-8 h-8 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center">
                    <User size={16} className="text-[var(--text-dim)]" />
                  </div>
                  :
                  <div className="w-8 h-8 rounded-full bg-[var(--ai)] flex items-center justify-center">
                    <Bot size={16} className="text-black" />
                  </div>
                }
              </div>
              <div className="flex-1 prose prose-invert max-w-none text-[15px] leading-relaxed text-[var(--text)]">
                {m.role === 'user' ? (
                  <p>{m.content}</p>
                ) : (
                  <ReactMarkdown>{m.content}</ReactMarkdown>
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-4 animate-pulse">
              <div className="shrink-0 mt-1">
                <div className="w-8 h-8 rounded-full bg-[var(--ai)] flex items-center justify-center opacity-50">
                  <Bot size={16} className="text-black" />
                </div>
              </div>
              <div className="flex-1 bg-[var(--surface)] h-4 mt-2 rounded w-1/3"></div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
