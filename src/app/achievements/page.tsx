"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const achievements: {
  category: string;
  icon: React.ReactNode;
  items: { title: string; description: string; year: string }[];
}[] = [
  // Achievements will be added soon
];

// Flatten all achievements into a single timeline
const timelineItems = achievements.flatMap(category => 
  category.items.map(item => ({
    ...item,
    category: category.category,
    icon: category.icon
  }))
);

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function AchievementsPage() {
  return (
    <div className="container py-12 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center mb-8 text-center"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Achievements
        </h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400 max-w-[700px]">
          Achievements and contributions coming soon
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-1"
      >
        {timelineItems.map((achievement) => (
          <motion.div 
            key={achievement.title} 
            variants={item}
            className="relative pl-8 py-4 border-l border-gray-200 dark:border-gray-800"
          >
            <div className="absolute left-0 top-5 -translate-x-1/2 p-1 bg-white dark:bg-gray-950 rounded-full border border-gray-200 dark:border-gray-800">
              {achievement.icon}
            </div>
            
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-medium text-base">{achievement.title}</h3>
              <Badge variant="outline" className="ml-auto flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span>{achievement.year}</span>
              </Badge>
            </div>
            
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {achievement.description}
            </p>
            
            <Badge variant="secondary" className="mt-2">
              {achievement.category}
            </Badge>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 