import Link from "next/link";
import { demoApplications } from "@/lib/demoData";
import StatusBadge from "@/components/StatusBadge";

export default function DemoPage() {
  const total = demoApplications.length;
  const interviews = demoApplications.filter(
    (app) => app.status === "Interview"
  ).length;
  const offers = demoApplications.filter((app) => app.status === "Offer").length;
  const rejected = demoApplications.filter(
    (app) => app.status === "Rejected"
  ).length;
  const applied = demoApplications.filter(
    (app) => app.status === "Applied"
  ).length;

  const recentApplications = demoApplications.slice(0, 3);

  return (
    <main className="mx-auto max-w-6xl p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">Demo Mode</p>
          <h1 className="text-3xl font-bold">JobTracker Demo Dashboard</h1>
          <p className="mt-2 text-gray-500">
            Explore a sample job search dashboard without creating an account.
          </p>
        </div>

        <Link
          href="/demo/applications"
          className="rounded bg-black px-4 py-2 text-white"
        >
          View Demo Applications
        </Link>
      </div>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <div className="rounded-xl border p-5">
          <p className="text-sm text-gray-500">Total</p>
          <p className="mt-2 text-3xl font-bold">{total}</p>
        </div>

        <div className="rounded-xl border p-5">
          <p className="text-sm text-gray-500">Applied</p>
          <p className="mt-2 text-3xl font-bold">{applied}</p>
        </div>

        <div className="rounded-xl border p-5">
          <p className="text-sm text-gray-500">Interviews</p>
          <p className="mt-2 text-3xl font-bold">{interviews}</p>
        </div>

        <div className="rounded-xl border p-5">
          <p className="text-sm text-gray-500">Offers</p>
          <p className="mt-2 text-3xl font-bold">{offers}</p>
        </div>

        <div className="rounded-xl border p-5">
          <p className="text-sm text-gray-500">Rejected</p>
          <p className="mt-2 text-3xl font-bold">{rejected}</p>
        </div>
      </section>

      <section className="mt-8 rounded-xl border p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Recent Applications</h2>
          <Link href="/demo/applications" className="text-sm underline">
            View all
          </Link>
        </div>

        <div className="mt-4 grid gap-4">
          {recentApplications.map((app) => (
            <div
              key={app.id}
              className="flex flex-col gap-3 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="font-semibold">{app.role}</h3>
                <p className="text-sm text-gray-500">{app.company}</p>
                <p className="mt-1 text-sm text-gray-500">
                  Applied: {new Date(app.appliedDate).toLocaleDateString()}
                </p>
              </div>

              <StatusBadge status={app.status} />
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-xl border border-dashed p-6 text-center">
        <h2 className="text-xl font-semibold">Want to track your own jobs?</h2>
        <p className="mt-2 text-gray-500">
          Create an account to save real applications, update statuses, and manage
          your job search.
        </p>

        <Link
          href="/dashboard"
          className="mt-4 inline-block rounded bg-black px-4 py-2 text-white"
        >
          Start Tracking
        </Link>
      </section>
    </main>
  );
}