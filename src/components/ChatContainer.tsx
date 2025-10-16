import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChatBubble } from "./ChatBubble";
import { ChatInput } from "./ChatInput";
import { SuggestionsRow } from "./SuggestionsRow";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
}

export const ChatContainer = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser: true,
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm analyzing your question and preparing insights. This is a demo response showing how the chat interface works with the Great Manager Institute aesthetic.",
        isUser: false,
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const handleSelectSuggestion = (text: string) => {
    handleSend(text);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-3xl mx-auto flex flex-col h-[calc(100vh-12rem)] 
               bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl 
               shadow-[0_0_40px_-15px_hsl(var(--gmi-accent-glow))]"
    >
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-playfair text-2xl text-[hsl(var(--gmi-text))] mb-2">
                  Hi, I'm your GreatMind
                </h2>
                <p className="font-sans text-sm text-[hsl(var(--gmi-text))]/60">
                  Your partner in understanding and elevating teams.
                </p>
              </motion.div>
            </div>
          </div>
        ) : (
          <>
            {messages.map((message) => (
              <ChatBubble
                key={message.id}
                message={message.text}
                isUser={message.isUser}
              />
            ))}
            {isTyping && (
              <ChatBubble
                message="Thinking like a Great Manager…"
                isUser={false}
                isTyping
              />
            )}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* Suggestions Row (only show when empty) */}
      {messages.length === 0 && (
        <div className="px-6 pb-4">
          <SuggestionsRow onSelectSuggestion={handleSelectSuggestion} />
        </div>
      )}

      {/* Input Area */}
      <div className="p-6 pt-0">
        <ChatInput onSend={handleSend} disabled={isTyping} />
      </div>
    </motion.div>
  );
};
