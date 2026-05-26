"use client";

import { Search, Sparkles } from "lucide-react";
import { useState } from "react";

export default function AiSearchBox() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
    // In the future this will call the AI endpoint
    console.log("Searching for:", query);
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="relative w-full max-w-3xl mx-auto mt-8 group"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-neon/40 to-indigo-500/40 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative flex items-center bg-[#111115] border border-white/10 rounded-2xl p-2 shadow-2xl backdrop-blur-xl transition-all focus-within:border-neon/50">
        <Sparkles className="w-6 h-6 text-neon ml-4" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ex: Quero um CRM para salão com WhatsApp e IA..."
          className="flex-1 bg-transparent border-none outline-none text-lg text-white placeholder:text-gray-500 px-4 py-4 font-mono"
        />
        <button 
          type="submit"
          className="bg-neon text-black px-6 py-3 rounded-xl font-bold font-space flex items-center gap-2 hover:bg-[#b0f020] transition-colors"
        >
          Pesquisar
          <Search className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}
