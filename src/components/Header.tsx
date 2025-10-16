import { motion } from "framer-motion";

export const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full pt-12 pb-6"
    >
      <div className="text-center">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-[hsl(var(--gmi-text))] mb-2">
          GreatMind
        </h1>
        <p className="font-sans text-sm text-[hsl(var(--gmi-text))]/60 tracking-wide">
          Understand. Coach. Elevate.
        </p>
      </div>
    </motion.header>
  );
};
