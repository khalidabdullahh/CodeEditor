"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none"
    >
      <div className="flex items-center gap-8 px-6 py-3 border rounded-full shadow-sm bg-background/80 backdrop-blur-md border-border pointer-events-auto">
        <Link 
          href="#home" 
          className="text-sm font-medium transition-colors hover:text-primary text-foreground/70"
        >
          Home
        </Link>
        <Link 
          href="#work" 
          className="text-sm font-medium transition-colors hover:text-primary text-foreground/70"
        >
          Work
        </Link>
        <Link 
          href="#about" 
          className="text-sm font-medium transition-colors hover:text-primary text-foreground/70"
        >
          About
        </Link>
        <Link 
          href="#contact" 
          className="text-sm font-medium transition-colors hover:text-primary text-foreground/70"
        >
          Contact
        </Link>
      </div>
    </motion.nav>
  );
}
