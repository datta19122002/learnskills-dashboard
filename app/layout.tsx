import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "LearnSphere Dashboard",
  description: "Student Learning Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />

        <main className="lg:ml-72 min-h-screen p-4 lg:p-8 pb-24 lg:pb-8">
          {children}
        </main>
      </body>
    </html>
  );
}