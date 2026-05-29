"use client";

import Link from "next/link";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

export default function Navbar() {
  const { isSignedIn } = useUser();

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 text-white backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-cyan-400">
          JobTracker
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/dashboard" 
            className="text-sm text-slate-300 hover:text-cyan-300"
          >
            Dashboard
          </Link>

          <Link
            href="/dashboard/applications"
            className="text-sm text-slate-300 hover:text-cyan-300"
          >
            Applications
          </Link>

          {!isSignedIn ? (
            <SignInButton mode="modal">
              <button 
              className="rounded bg-cyan-500 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-600"
              >
                Sign In
              </button>
            </SignInButton>
          ) : (
            <UserButton />
          )}
        </div>
      </div>
    </nav>
  );
}