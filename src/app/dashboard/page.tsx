import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { Suspense } from "react";
import ToastHandler from "@/components/ToastHandler";
import Link from "next/link";
import StatusBadge from "@/components/StatusBadge";
import StatusChart from "@/components/StatusChart";
import ApplicationsOverTimeChart from "@/components/ApplicationsOverTimeChart";

export default async function Dashboard() {
  const { userId } = await auth();

  if (!userId) {
    return <div className="p-6">You must be signed in.</div>;
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

  const offers = applications.filter(
    (app) => app.status === "Offer"
  ).length;

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

      acc[date] = (acc[date] || 0) +1;
      return acc;
    },
    {}
  );

  const applicationsOverTimeChartData = Object.entries(applicationsByDate).map(
    ([date, count]) => ({ date, count })
  );

  return (
    <main className="p-6">
      <Suspense fallback={null}>
        <ToastHandler />
      </Suspense>
      <section className="rounded-2xl border bg-linear-to-r from-gray-900 to-gray-700 p-8 text-white">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h1 className="text-4xl font-bold">Job Search Dashboard</h1>
            <p className="mt-2 max-w-xl text-gray-200">
              Track applications, interviews, rejections, and offers in one
              organized workspace.
            </p>
          </div>

          <Link
            href="/dashboard/applications/new"
            className="w-fit rounded bg-white px-4 py-2 font-medium text-black"
          >
            Add Application
          </Link>
        </div>
      </section>

      <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-xl border p-5">
            <h2 className="font-medium text-gray-500">{stat.label}</h2>
            <p className="mt-2 text-3xl font-bold">{stat.value}</p>
          </div>
        ))}
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border p-6">
          <h2 className="text-xl font-semibold">Applications by Status</h2>
          <p className="mt-1 text-sm text-gray-500">
            Breakdown of your job search pipeline.
          </p>

          <div className="mt-6">
            <StatusChart data={statusData} />
          </div>
        </div>

        <div className="rounded-xl border p-6">
          <h2 className="text-xl font-semibold">Applications Over Time</h2>
          <p className="mt-1 text-sm text-gray-500">
            Number of applications submitted by date.
          </p>

          <div className="mt-6">
            <ApplicationsOverTimeChart data={applicationsOverTimeChartData} />
          </div>
        </div>
      </section>    

      <section className="mt-8 rounded-xl border p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Recent Applications</h2>

          <Link
            href="/dashboard/applications"
            className="text-sm underline"
          >
            View all
          </Link>
        </div>

        <div className="mt-4 space-y-3">
          {recentApplications.length === 0 ? (
            <p className="text-gray-500">
              No applications yet. Add your first one to get started.
            </p>
          ) : (
            recentApplications.map((app) => (
              <div
                key={app.id}
                className="flex flex-col justify-between gap-3 rounded-lg border p-4 md:flex-row md:items-center"
              >
                <div>
                  <h3 className="font-semibold">{app.role}</h3>
                  <p className="text-sm text-gray-500">{app.company}</p>
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