import Link from "next/link";

export default function DemoBanner() {
  return (
    <div className="rounded-xl border border-dashed border-cyan-500/30 bg-cyan-500/10 p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-cyan-300">Demo Mode</p>
          <p className="text-sm text-slate-300">
            This page uses read-only sample data so visitors can explore the app
            without creating an account.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Link
            href="/dashboard"
            className="rounded bg-cyan-500 px-4 py-2 text-sm text-white hover:bg-cyan-600"
          >
            Create Account
          </Link>

          <a
            href="https://github.com/dahhren/job-tracker"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:bg-slate-900"
          >
            View GitHub
          </a>
        </div>
      </div>
    </div>
  );
}