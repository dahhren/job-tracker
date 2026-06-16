import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import StatusBadge from "@/components/StatusBadge";
import StatusChart from "@/components/StatusChart";
import ApplicationsOverTimeChart from "@/components/ApplicationsOverTimeChart";

export default async function Dashboard() {
  const { userId } = await auth();

  if (!userId) {
    return (
      <main className="page-bg min-h-screen p-6">
        <div className="card-bg rounded-xl p-6">
          You must be signed in.
        </div>
      </main>
    );
  }

  const applications = await prisma.jobApplication.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const recentApplications = applications.slice(0, 5);

  const total = applications.length;

  const applied = applications.filter(
    (app) => app.status === "Applied"
  ).length;

  const interviews = applications.filter(
    (app) => app.status === "Interview"
  ).length;

  const rejected = applications.filter(
    (app) => app.status === "Rejected"
  ).length;

  const offers = applications.filter((app) => app.status === "Offer").length;

  const stats = [
    {
      label: "Total",
      value: total,
    },
    {
      label: "Applied",
      value: applied,
    },
    {
      label: "Interviews",
      value: interviews,
    },
    {
      label: "Rejected",
      value: rejected,
    },
    {
      label: "Offers",
      value: offers,
    },
  ];

  const statusData = [
    { status: "Applied", count: applied },
    { status: "Interviews", count: interviews },
    { status: "Rejected", count: rejected },
    { status: "Offer", count: offers },
  ];

  const applicationsByDate = applications.reduce<Record<string, number>>(
    (acc, app) => {
      const date = app.appliedDate.toLocaleDateString();

      acc[date] = (acc[date] || 0) + 1;
      return acc;
    },
    {}
  );

  const applicationsOverTimeChartData = Object.entries(applicationsByDate).map(
    ([date, count]) => ({ date, count })
  );

  return (
    <main className="page-bg min-h-screen p-6">
      <section className="rounded-2xl border border-cyan-200 bg-gradient-to-r from-cyan-50 to-slate-100 p-8 dark:border-slate-800 dark:from-slate-900 dark:to-slate-800">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h1 className="text-4xl font-bold text-slate-950 dark:text-white">
              Job Search Dashboard
            </h1>
            <p className="mt-2 max-w-xl text-slate-700 dark:text-slate-300">
              Track applications, interviews, rejections, and offers in one
              organized workspace.
            </p>
          </div>

          <Link
            href="/dashboard/applications/new"
            className="w-fit rounded bg-cyan-500 px-4 py-2 font-medium text-white transition hover:bg-cyan-600"
          >
            Add Application
          </Link>
        </div>
      </section>

      <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {stats.map((stat) => (
          <div key={stat.label} className="card-bg rounded-xl p-5">
            <h2 className="muted-text font-medium">{stat.label}</h2>
            <p className="mt-2 text-3xl font-bold text-slate-950 dark:text-white">
              {stat.value}
            </p>
          </div>
        ))}
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="card-bg rounded-xl p-6">
          <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
            Applications by Status
          </h2>
          <p className="muted-text mt-1 text-sm">
            Breakdown of your job search pipeline.
          </p>

          <div className="mt-6">
            <StatusChart data={statusData} />
          </div>
        </div>

        <div className="card-bg rounded-xl p-6">
          <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
            Applications Over Time
          </h2>
          <p className="muted-text mt-1 text-sm">
            Number of applications submitted by date.
          </p>

          <div className="mt-6">
            <ApplicationsOverTimeChart data={applicationsOverTimeChartData} />
          </div>
        </div>
      </section>

      <section className="card-bg mt-8 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
            Recent Applications
          </h2>

          <Link
            href="/dashboard/applications"
            className="text-sm text-cyan-600 underline transition hover:text-cyan-700 dark:text-cyan-300 dark:hover:text-cyan-200"
          >
            View all
          </Link>
        </div>

        <div className="mt-4 space-y-3">
          {recentApplications.length === 0 ? (
            <p className="muted-text">
              No applications yet. Add your first one to get started.
            </p>
          ) : (
            recentApplications.map((app) => (
              <div
                key={app.id}
                className="flex flex-col justify-between gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950 md:flex-row md:items-center"
              >
                <div>
                  <h3 className="font-semibold text-slate-950 dark:text-white">
                    {app.role}
                  </h3>
                  <p className="muted-text text-sm">{app.company}</p>
                </div>

                <StatusBadge status={app.status} />
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  );
}