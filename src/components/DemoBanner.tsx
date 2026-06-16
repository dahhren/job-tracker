import Link from "next/link";

export default function DemoBanner() {
  return (
    <div className="rounded-xl border border-dashed border-cyan-300 bg-cyan-50 p-4 dark:border-cyan-500/30 dark:bg-cyan-500/10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-cyan-700 dark:text-cyan-300">
            Demo Mode
          </p>
          <p className="soft-text text-sm">
            This page uses read-only sample data so visitors can explore the app
            without creating an account.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Link
            href="/dashboard"
            className="rounded bg-cyan-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-cyan-600"
          >
            Create Account
          </Link>

          <a
            href="https://github.com/dahhren/job-tracker"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-btn rounded px-4 py-2 text-sm transition hover:border-cyan-500/50 hover:bg-cyan-500/10"
          >
            View GitHub
          </a>
        </div>
      </div>
    </div>
  );
}