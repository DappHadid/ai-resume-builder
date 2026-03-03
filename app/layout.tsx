import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Resume Builder",
  description: "Build professional resumes with AI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geist.className} bg-white text-gray-900`}>
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200">
          <div className="flex justify-between items-center px-10 py-5">
            <Link href="/" className="font-bold text-lg">
              AI Resume 🚀
            </Link>

            <div className="flex gap-8 text-sm font-medium">
              <Link href="/resume" className="hover:text-black text-gray-600">
                Generate
              </Link>
              <Link href="/dashboard" className="hover:text-black text-gray-600">
                Dashboard
              </Link>
            </div>
          </div>
        </nav>

        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
