"use client";

import Link from "next/link";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

export default function Navbar() {
  const { isSignedIn } = useUser();

  return (
    <nav className="flex items-center justify-between border-b p-4">
      <Link href="/" className="font-bold text-xl">
        JobTracker
      </Link>

      <div className="flex items-center gap-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/applications">Applications</Link>

        {!isSignedIn ? (
          <SignInButton mode="modal">
            <button className="rounded bg-black px-4 py-2 text-white">
              Sign In
            </button>
          </SignInButton>
        ) : (
          <UserButton />
        )}
      </div>
    </nav>
  );
}