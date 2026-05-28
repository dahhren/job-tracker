import Link from "next/link";

export default function DemoBanner() {
  return (
    <div className="rounded-xl border border-dashed bg-gray-50 p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium">Demo Mode</p>
          <p className="text-sm text-gray-500">
            This page uses read-only sample data so visitors can explore the app
            without creating an account.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Link
            href="/dashboard"
            className="rounded bg-black px-4 py-2 text-sm text-white"
          >
            Create Account
          </Link>

          <a
            href="https://github.com/dahhren/job-tracker"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border px-4 py-2 text-sm"
          >
            View GitHub
          </a>
        </div>
      </div>
    </div>
  );
}