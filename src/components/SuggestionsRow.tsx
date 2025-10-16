import { motion } from "framer-motion";

interface SuggestionsRowProps {
  onSelectSuggestion: (text: string) => void;
}

const suggestions = [
  "What's affecting my team's morale this quarter?",
  "Show me why attrition is high in Sales",
  "Generate a leadership readiness dashboard",
  "Coach me on a difficult conversation",
  "Diagnose team engagement patterns"
];

export const SuggestionsRow = ({ onSelectSuggestion }: SuggestionsRowProps) => {
  return (
    <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
      <div className="flex gap-2 min-w-max px-1">
        {suggestions.map((suggestion, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectSuggestion(suggestion)}
            className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 
                     text-[hsl(var(--gmi-text))]/80 text-sm font-sans whitespace-nowrap
                     hover:bg-white/10 hover:border-[hsl(var(--gmi-accent))]/30 transition-all"
          >
            {suggestion}
          </motion.button>
        ))}
      </div>
    </div>
  );
};
