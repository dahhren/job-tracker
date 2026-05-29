import Link from "next/link";
import { demoApplications } from "@/lib/demoData";
import StatusBadge from "@/components/StatusBadge";

export default function DemoApplicationsPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="mx-auto max-w-6xl">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-slate-400">Demo Mode</p>
          <h1 className="text-3xl font-bold">Demo Applications</h1>
          <p className="mt-2 text-slate-400">
            Sample job applications showing how JobTracker organizes a job search.
          </p>
        </div>

        <Link href="/demo" className="rounded border border-slate-700 px-4 py-2 text-slate-200 hover:bg-slate-900">
          Back to Demo Dashboard
        </Link>
      </div>

      <div className="mt-8 grid gap-4">
        {demoApplications.map((app) => (
          <div key={app.id} className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold">{app.role}</h2>
                <p className="text-slate-400">{app.company}</p>

                <div className="mt-2 flex flex-wrap gap-2 text-sm text-slate-400">
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

                <p className="mt-3 text-sm text-slate-300">{app.notes}</p>

                <a
                  href={app.jobUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm text-cyan-300 underline hover:text-cyan-200"
                >
                  View Job Posting
                </a>
              </div>

              <StatusBadge status={app.status} />
            </div>
          </div>
        ))}
      </div>

      <section className="mt-8 rounded-xl border border-dashed p-6 text-center">
        <h2 className="text-xl font-semibold">This is read-only demo data</h2>
        <p className="mt-2 text-slate-400">
          Sign in to create, edit, delete, and track your own applications.
        </p>

        <Link
          href="/dashboard"
          className="mt-4 inline-block rounded bg-black px-4 py-2 text-white"
        >
          Create Your Own Tracker
        </Link>
      </section>
      </div>
    </main>
  );
}