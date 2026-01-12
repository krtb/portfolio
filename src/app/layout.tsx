import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "./providers";
import { ThemeToggle } from "@/components/theme-toggle";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kurt Bauer | Software Engineer",
  description: "Building integrations, developer tools, and customer-facing solutions with React and Node.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <nav className="fixed top-0 w-full bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800 z-50">
            <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
              <a href="/" className="font-medium text-zinc-900 dark:text-zinc-100">
                KB
              </a>
              <div className="flex items-center gap-1">
                <a
                  href="/projects"
                  className="px-3 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  Projects
                </a>
                <a
                  href="/about"
                  className="px-3 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  About
                </a>
                <ThemeToggle />
              </div>
            </div>
          </nav>
          <div className="pt-14">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}