import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import AppToaster from "@/components/AppToaster";

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