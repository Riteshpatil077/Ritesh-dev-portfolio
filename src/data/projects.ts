export interface Project {
  title: string;
  description: string;
  github?: string;
  link?: string;
  tags: string[];
  repo?: {
    owner: string;
    name: string;
  };
}

export const projects: Project[] = [
  {
    title: "SecureChatApp",
    description: "A secure real-time chat application with end-to-end encryption, AES-256-GCM, ECDSA digital signatures, RSA-OAEP key exchange, TOTP + OTP authentication, Socket.IO, encrypted media, self-destructing conversations, Groq AI assistant, and PWA support.",
    github: "https://github.com/Riteshpatil077/SecureChatApp",
    link: "https://securechatapp.vercel.app",
    tags: ["React", "Vite", "Node.js", "Express.js", "Socket.IO", "MySQL", "Web Crypto API", "AES-256-GCM", "JWT", "Groq AI", "PWA"],
    repo: {
      owner: "Riteshpatil077",
      name: "SecureChatApp"
    }
  },
  {
    title: "Pressly",
    description: "A modern full-stack e-commerce platform for digital magazine subscriptions, featuring interactive PDF flipbook reading, JWT authentication, OTP-based password recovery, role-based access, shopping cart, subscription management, and admin dashboard.",
    github: "https://github.com/Riteshpatil077/Pressly",
    tags: ["Next.js 15", "React", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "JWT", "bcrypt", "NodeMailer", "React-PDF"],
    repo: {
      owner: "Riteshpatil077",
      name: "Pressly"
    }
  },
  {
    title: "Advanced Analytics & Enterprise Admin Dashboard",
    description: "A full-stack enterprise ERP and analytics dashboard centralizing sales, subscriptions, invoicing, financial workflows, packaging, logistics, and user management with 40+ PostgreSQL tables and Chart.js analytics.",
    github: "https://github.com/Riteshpatil077/admin-dashboard",
    link: "https://admin-dashboard.vercel.app",
    tags: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "Chart.js", "Axios", "Lucide"],
    repo: {
      owner: "Riteshpatil077",
      name: "admin-dashboard"
    }
  },
  {
    title: "Expense Tracker",
    description: "A full-stack financial management platform for tracking expenses, income, and categories with interactive charts, JWT auth, PDF/Excel reports, email delivery, background task processing with Celery + Redis, and Dockerized deployment.",
    github: "https://github.com/Riteshpatil077/expense-tracker",
    tags: ["React", "Vite", "Tailwind CSS", "Recharts", "Django", "Django REST Framework", "PostgreSQL", "Celery", "Redis", "Docker"],
    repo: {
      owner: "Riteshpatil077",
      name: "expense-tracker"
    }
  },
  {
    title: "श्री कृष्णा ज्वेलर्स",
    description: "A full-stack bilingual (Marathi + English) jewellery shop management system covering inventory, sales, purchases, gold exchange calculations, purity/fine-weight, customer profiles, loans, EMI tracking, profit analysis, WhatsApp/email sharing, and printable receipts.",
    github: "https://github.com/Riteshpatil077/jewellery-shop",
    link: "https://jewellery-shop.vercel.app",
    tags: ["React", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "Prisma", "REST APIs"],
    repo: {
      owner: "Riteshpatil077",
      name: "jewellery-shop"
    }
  },
  {
    title: "Atmosphere",
    description: "A modern live weather forecast dashboard with global location search, geolocation, Celsius/Fahrenheit toggle, 24-hour & 5-day forecasts, atmospheric metrics, dynamic themes, and a responsive glassmorphism interface.",
    github: "https://github.com/Riteshpatil077/atmosphere",
    tags: ["HTML5", "CSS3", "JavaScript ES6+", "Open-Meteo API", "OpenWeatherMap API", "OpenStreetMap Nominatim"],
    repo: {
      owner: "Riteshpatil077",
      name: "atmosphere"
    }
  },
  {
    title: "URL Shortener & Analytics Microservice",
    description: "A production-grade full-stack URL shortening service with collision-resistant short codes, click analytics, IP tracking, URL history pagination, RESTful APIs, Flask Application Factory architecture, and Gunicorn production server.",
    github: "https://github.com/Riteshpatil077/url-shortener",
    link: "https://url-shortener.vercel.app",
    tags: ["Python", "Flask", "SQLAlchemy", "PostgreSQL", "SQLite", "Gunicorn", "Jinja2", "HTML5", "CSS3"],
    repo: {
      owner: "Riteshpatil077",
      name: "url-shortener"
    }
  },
  {
    title: "Banco ERP Solution",
    description: "An enterprise-grade full-stack ERP application managing sales, subscriptions, inventory, master data, and accounting with printable invoices/ledgers/stickers, PDF generation, Excel export, automated DB backups, and JWT authentication.",
    github: "https://github.com/Riteshpatil077/banco-erp",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "JWT", "Chart.js", "jsPDF", "ExcelJS"],
    repo: {
      owner: "Riteshpatil077",
      name: "banco-erp"
    }
  },
];
