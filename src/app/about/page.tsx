"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Rocket, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const aboutSections = [
  {
    title: "Hello World!",
    icon: <Heart className="h-5 w-5 text-primary" />,
    content: "I'm Ritesh Ramesh Patil, a Full-Stack Developer focused on building practical and scalable web applications. I work across both frontend and backend development, and I enjoy solving real business problems — from secure real-time communication and ERP systems to analytics dashboards, financial applications, e-commerce platforms, and business management systems.",
  },
  {
    title: "What I Do",
    icon: <Rocket className="h-5 w-5 text-primary" />,
    content: "I build applications using React, Next.js, Node.js, Express.js, Python, Django, Flask, PostgreSQL, and MySQL. During my internship at Ishwarya BI Technologies, I worked on an ERP system for a book-publishing business, a crusher-management system, REST APIs, database operations, deployment, optimization, and AI chatbot integration.",
  },
];

const portfolioProjects = [
  {
    title: "SecureChatApp",
    description: "Secure real-time encrypted messaging platform with AES-256-GCM, ECDSA, RSA-OAEP, TOTP, Socket.IO, Groq AI, and PWA support.",
    githubUrl: "https://github.com/Riteshpatil077/SecureChatApp",
    liveUrl: "https://securechatapp.vercel.app",
    tags: ["React", "Node.js", "Socket.IO", "MySQL", "Web Crypto API", "Groq AI"],
  },
  {
    title: "Pressly",
    description: "Full-stack digital magazine subscription e-commerce platform with PDF flipbook, JWT auth, OTP recovery, admin dashboard, and subscription management.",
    githubUrl: "https://github.com/Riteshpatil077/Pressly",
    tags: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
  },
  {
    title: "Advanced Analytics & Enterprise Admin Dashboard",
    description: "Enterprise ERP & analytics dashboard with sales analytics, invoicing, GST handling, subscription lifecycle, logistics, and 40+ table PostgreSQL architecture.",
    githubUrl: "https://github.com/Riteshpatil077/admin-dashboard",
    liveUrl: "https://admin-dashboard.vercel.app",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Chart.js"],
  },
  {
    title: "Expense Tracker",
    description: "Full-stack financial management platform with expense/income tracking, PDF/Excel reports, email delivery, Celery + Redis background tasks, and Docker deployment.",
    githubUrl: "https://github.com/Riteshpatil077/expense-tracker",
    tags: ["React", "Vite", "Django", "PostgreSQL", "Celery", "Redis", "Docker"],
  },
  {
    title: "श्री कृष्णा ज्वेलर्स",
    description: "Bilingual (Marathi + English) jewellery shop management system with inventory, sales, gold exchange calculations, loan management, EMI tracking, and profit analysis.",
    githubUrl: "https://github.com/Riteshpatil077/jewellery-shop",
    liveUrl: "https://jewellery-shop.vercel.app",
    tags: ["React", "Node.js", "Express.js", "PostgreSQL", "Prisma"],
  },
  {
    title: "Atmosphere",
    description: "Live weather forecast dashboard with global search, geolocation, 24-hour & 5-day forecasts, atmospheric metrics, and dynamic glassmorphism UI.",
    githubUrl: "https://github.com/Riteshpatil077/atmosphere",
    tags: ["HTML5", "CSS3", "JavaScript", "Open-Meteo API", "OpenWeatherMap"],
  },
  {
    title: "URL Shortener & Analytics Microservice",
    description: "Production-grade URL shortening service with analytics, IP tracking, click count, RESTful APIs, Flask Application Factory, and Gunicorn server.",
    githubUrl: "https://github.com/Riteshpatil077/url-shortener",
    liveUrl: "https://url-shortener.vercel.app",
    tags: ["Python", "Flask", "SQLAlchemy", "PostgreSQL", "Gunicorn"],
  },
  {
    title: "Banco ERP Solution",
    description: "Enterprise ERP web application managing sales, subscriptions, inventory, accounting, printable invoices/ledgers, PDF generation, Excel export, and automated DB backups.",
    githubUrl: "https://github.com/Riteshpatil077/banco-erp",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "JWT", "Chart.js"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function AboutPage() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center mb-12 text-center"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          About Me
        </h1>
        <p className="mt-4 text-muted-foreground max-w-[700px]">
          Full-Stack Developer building practical, real-world applications
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6 md:grid-cols-2"
      >
        {aboutSections.map((section) => (
          <motion.div key={section.title} variants={item}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {section.icon}
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{section.content}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Portfolio Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-20"
      >
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">
          Portfolio
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {portfolioProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={item}
              className="group relative"
            >
              <Card className="h-full hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-muted font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="h-4 w-4" />
                        Source Code
                      </Link>
                    )}
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}