import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AppToaster from "@/components/AppToaster";
import ThemeProvider from "@/components/ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "JobTracker | Full-Stack Job Application Tracker",
  description:
    "Track job applications with authentication, analytics, search, filtering, sorting, and a public demo mode.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body>
          <ThemeProvider>
            <Navbar />
            {children}
            <AppToaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}