import { useState } from "react";
import { motion } from "framer-motion";
import { Paperclip, Mic, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput = ({ onSend, disabled = false }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSend(message.trim());
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-2 
                    focus-within:border-[hsl(var(--gmi-accent))]/50 transition-all">
        <button
          type="button"
          className="p-2 rounded-lg hover:bg-white/10 transition-colors text-[hsl(var(--gmi-text))]/60 hover:text-[hsl(var(--gmi-text))]"
        >
          <Paperclip className="w-5 h-5" />
        </button>
        
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask about performance, engagement, or leadership…"
          disabled={disabled}
          className="flex-1 bg-transparent outline-none text-[hsl(var(--gmi-text))] placeholder:text-[hsl(var(--gmi-text))]/40 
                   font-sans text-sm px-2"
        />

        <button
          type="button"
          className="p-2 rounded-lg hover:bg-white/10 transition-colors text-[hsl(var(--gmi-text))]/60 hover:text-[hsl(var(--gmi-text))]"
        >
          <Mic className="w-5 h-5" />
        </button>

        <motion.button
          type="submit"
          disabled={!message.trim() || disabled}
          whileHover={{ scale: message.trim() ? 1.05 : 1 }}
          whileTap={{ scale: message.trim() ? 0.95 : 1 }}
          className={cn(
            "p-2 rounded-lg transition-all",
            message.trim()
              ? "bg-[hsl(var(--gmi-accent))] text-white shadow-[0_0_20px_-5px_hsl(var(--gmi-accent-glow))]"
              : "bg-white/5 text-[hsl(var(--gmi-text))]/40 cursor-not-allowed"
          )}
        >
          <ArrowUpRight className="w-5 h-5" />
        </motion.button>
      </div>
    </form>
  );
};
