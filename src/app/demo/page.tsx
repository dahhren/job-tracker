import Link from "next/link";
import { demoApplications } from "@/lib/demoData";
import StatusBadge from "@/components/StatusBadge";
import StatusChart from "@/components/StatusChart";
import ApplicationsOverTimeChart from "@/components/ApplicationsOverTimeChart";
import DemoBanner from "@/components/DemoBanner";

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

  const statusChartData = [
    {
      status: "Applied",
      count: applied,
    },
    {
      status: "Interview",
      count: interviews,
    },
    {
      status: "Rejected",
      count: rejected,
    },
    {
      status: "Offer",
      count: offers,
    },
  ];

  const applicationsByDate = demoApplications.reduce<Record<string, number>>(
    (acc, app) => {
      const date = new Date(app.appliedDate).toLocaleDateString();

      acc[date] = (acc[date] || 0) + 1;

      return acc;
    },
    {}
  );

  const applicationsOverTimeData = Object.entries(applicationsByDate).map(
    ([date, count]) => ({
      date,
      count,
    })
  );

  const recentApplications = demoApplications.slice(0, 3);

  return (
    <main className="page-bg min-h-screen p-6">
      <div className="mx-auto max-w-6xl">
        <DemoBanner />

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="muted-text text-sm font-medium">Demo Mode</p>
            <h1 className="text-3xl font-bold text-slate-950 dark:text-white">
              JobTracker Demo Dashboard
            </h1>
            <p className="muted-text mt-2">
              Explore a sample job search dashboard without creating an account.
            </p>
          </div>

          <Link
            href="/demo/applications"
            className="rounded bg-cyan-500 px-4 py-2 font-medium text-white transition hover:bg-cyan-600"
          >
            View Demo Applications
          </Link>
        </div>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <div className="card-bg rounded-xl p-5">
            <p className="muted-text text-sm">Total</p>
            <p className="mt-2 text-3xl font-bold text-slate-950 dark:text-white">
              {total}
            </p>
          </div>

          <div className="card-bg rounded-xl p-5">
            <p className="muted-text text-sm">Applied</p>
            <p className="mt-2 text-3xl font-bold text-slate-950 dark:text-white">
              {applied}
            </p>
          </div>

          <div className="card-bg rounded-xl p-5">
            <p className="muted-text text-sm">Interviews</p>
            <p className="mt-2 text-3xl font-bold text-slate-950 dark:text-white">
              {interviews}
            </p>
          </div>

          <div className="card-bg rounded-xl p-5">
            <p className="muted-text text-sm">Offers</p>
            <p className="mt-2 text-3xl font-bold text-slate-950 dark:text-white">
              {offers}
            </p>
          </div>

          <div className="card-bg rounded-xl p-5">
            <p className="muted-text text-sm">Rejected</p>
            <p className="mt-2 text-3xl font-bold text-slate-950 dark:text-white">
              {rejected}
            </p>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="card-bg rounded-xl p-6">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
              Applications by Status
            </h2>
            <p className="muted-text mt-1 text-sm">
              Sample breakdown of a job search pipeline.
            </p>

            <div className="mt-6">
              <StatusChart data={statusChartData} />
            </div>
          </div>

          <div className="card-bg rounded-xl p-6">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
              Applications Over Time
            </h2>
            <p className="muted-text mt-1 text-sm">
              Sample application activity by date.
            </p>

            <div className="mt-6">
              <ApplicationsOverTimeChart data={applicationsOverTimeData} />
            </div>
          </div>
        </section>

        <section className="card-bg mt-8 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
              Recent Applications
            </h2>
            <Link
              href="/demo/applications"
              className="text-sm text-cyan-600 underline transition hover:text-cyan-700 dark:text-cyan-300 dark:hover:text-cyan-200"
            >
              View all
            </Link>
          </div>

          <div className="mt-4 grid gap-4">
            {recentApplications.map((app) => (
              <div
                key={app.id}
                className="flex flex-col gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="font-semibold text-slate-950 dark:text-white">
                    {app.role}
                  </h3>
                  <p className="muted-text text-sm">{app.company}</p>
                  <p className="muted-text mt-1 text-sm">
                    Applied: {new Date(app.appliedDate).toLocaleDateString()}
                  </p>
                </div>

                <StatusBadge status={app.status} />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-xl border border-dashed border-slate-300 bg-white p-6 text-center dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
            Want to track your own jobs?
          </h2>
          <p className="muted-text mt-2">
            Create an account to save real applications, update statuses, and
            manage your job search.
          </p>

          <Link
            href="/dashboard"
            className="mt-4 inline-block rounded bg-cyan-500 px-4 py-2 font-medium text-white transition hover:bg-cyan-600"
          >
            Start Tracking
          </Link>
        </section>
      </div>
    </main>
  );
}