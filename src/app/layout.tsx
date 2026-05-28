import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import AppToaster from "@/components/AppToaster";

export const metadata: Metadata = {
  title: "Job Tracker | Full-Stack Job Application Tracker",
  description: "Track your job applications with authentication, analytics, a public demo mode and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Navbar />
          {children}
          <AppToaster />
        </body>
      </html>
    </ClerkProvider>
  );
}