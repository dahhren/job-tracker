import Link from "next/link";
import { demoApplications } from "@/lib/demoData";
import StatusBadge from "@/components/StatusBadge";

export default function DemoApplicationsPage() {
  return (
    <main className="mx-auto max-w-6xl p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">Demo Mode</p>
          <h1 className="text-3xl font-bold">Demo Applications</h1>
          <p className="mt-2 text-gray-500">
            Sample job applications showing how JobTracker organizes a job search.
          </p>
        </div>

        <Link href="/demo" className="rounded border px-4 py-2">
          Back to Demo Dashboard
        </Link>
      </div>

      <div className="mt-8 grid gap-4">
        {demoApplications.map((app) => (
          <div key={app.id} className="rounded-xl border p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold">{app.role}</h2>
                <p className="text-gray-500">{app.company}</p>

                <div className="mt-2 flex flex-wrap gap-2 text-sm text-gray-500">
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

                <p className="mt-3 text-sm text-gray-600">{app.notes}</p>

                <a
                  href={app.jobUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm underline"
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
        <p className="mt-2 text-gray-500">
          Sign in to create, edit, delete, and track your own applications.
        </p>

        <Link
          href="/dashboard"
          className="mt-4 inline-block rounded bg-black px-4 py-2 text-white"
        >
          Create Your Own Tracker
        </Link>
      </section>
    </main>
  );
}