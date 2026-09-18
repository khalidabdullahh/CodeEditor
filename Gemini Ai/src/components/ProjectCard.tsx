"use client";

import { motion } from "motion/react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  category: string;
  imageColor: string;
  link: string;
}

export default function ProjectCard({ title, category, imageColor, link }: ProjectCardProps) {
  return (
    <Link href={link} className="block group">
      <motion.div 
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative overflow-hidden aspect-[4/3] rounded-2xl bg-muted border border-border"
      >
        <div 
          className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundColor: imageColor }}
        />
        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 bg-background/20 backdrop-blur-[2px]">
          <span className="px-6 py-2 text-sm font-medium border rounded-full bg-background border-border text-foreground">
            View Project
          </span>
        </div>
      </motion.div>
      <div className="mt-4 space-y-1">
        <p className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
          {category}
        </p>
        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>
    </Link>
  );
}
