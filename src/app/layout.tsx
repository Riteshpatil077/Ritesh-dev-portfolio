import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://riteshpatil.dev'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Ritesh Ramesh Patil | Full-Stack Developer',
    template: 'Ritesh Ramesh Patil | %s'
  },
  description: 'Full-Stack Developer focused on building practical, scalable web applications using React, Next.js, Node.js, Express.js, Python, Flask, Django, PostgreSQL, and modern development tools.',
  keywords: ['Full-Stack Developer', 'React', 'Next.js', 'Node.js', 'Express.js', 'Python', 'Django', 'Flask', 'PostgreSQL', 'TypeScript', 'Web Development', 'Software Engineer'],
  authors: [{ name: 'Ritesh Ramesh Patil' }],
  creator: 'Ritesh Ramesh Patil',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://riteshpatil.dev',
    siteName: 'Ritesh Ramesh Patil - Portfolio',
    title: 'Ritesh Ramesh Patil | Full-Stack Developer',
    description: 'Full-Stack Developer focused on building practical, scalable web applications.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ritesh Ramesh Patil - Full-Stack Developer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ritesh Ramesh Patil | Full-Stack Developer',
    description: 'Full-Stack Developer focused on building practical, scalable web applications.',
    images: ['/og-image.jpg'],
    creator: '@Riteshpatil077'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
