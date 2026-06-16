import Link from "next/link";
import { demoApplications } from "@/lib/demoData";
import StatusBadge from "@/components/StatusBadge";

export default function DemoApplicationsPage() {
  return (
    <main className="page-bg min-h-screen p-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="muted-text text-sm font-medium">Demo Mode</p>
            <h1 className="text-3xl font-bold text-slate-950 dark:text-white">
              Demo Applications
            </h1>
            <p className="muted-text mt-2">
              Sample job applications showing how JobTracker organizes a job
              search.
            </p>
          </div>

          <Link
            href="/demo"
            className="secondary-btn rounded px-4 py-2 transition hover:border-cyan-500/50 hover:bg-cyan-500/10"
          >
            Back to Demo Dashboard
          </Link>
        </div>

        <div className="mt-8 grid gap-4">
          {demoApplications.map((app) => (
            <div key={app.id} className="card-bg rounded-xl p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
                    {app.role}
                  </h2>

                  <p className="muted-text">{app.company}</p>

                  <div className="muted-text mt-2 flex flex-wrap gap-2 text-sm">
                    <span>{app.location}</span>
                    <span>•</span>
                    <span>
                      Applied: {new Date(app.appliedDate).toLocaleDateString()}
                    </span>
                    <span>•</span>
                    <span>
                      Updated: {new Date(app.updatedDate).toLocaleDateString()}
                    </span>
                  </div>

                  <p className="soft-text mt-3 text-sm">{app.notes}</p>

                  <a
                    href={app.jobUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm text-cyan-600 underline transition hover:text-cyan-700 dark:text-cyan-300 dark:hover:text-cyan-200"
                  >
                    View Job Posting
                  </a>
                </div>

                <StatusBadge status={app.status} />
              </div>
            </div>
          ))}
        </div>

        <section className="mt-8 rounded-xl border border-dashed border-slate-300 bg-white p-6 text-center dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
            This is read-only demo data
          </h2>

          <p className="muted-text mt-2">
            Sign in to create, edit, delete, and track your own applications.
          </p>

          <Link
            href="/dashboard"
            className="mt-4 inline-block rounded bg-cyan-500 px-4 py-2 font-medium text-white transition hover:bg-cyan-600"
          >
            Create Your Own Tracker
          </Link>
        </section>
      </div>
    </main>
  );
}