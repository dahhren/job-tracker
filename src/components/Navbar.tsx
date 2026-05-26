"use client";

import Link from "next/link";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

export default function Navbar() {
  const { isSignedIn } = useUser();

  return (
    <nav className="sticky top-0 z-50 border-b bg-rose-200 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl text-gray-800 font-bold">
          JobTracker
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="text-sm text-gray-600 hover:text-black">
            Dashboard
          </Link>

          <Link
            href="/dashboard/applications"
            className="text-sm text-gray-600 hover:text-black"
          >
            Applications
          </Link>

          {!isSignedIn ? (
            <SignInButton mode="modal">
              <button className="rounded bg-black px-4 py-2 text-sm text-white">
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