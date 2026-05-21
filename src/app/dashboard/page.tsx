import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Dashboard() {
  const { userId } = await auth();

  if (!userId) {
    return <div className="p-6">You must be signed in.</div>;
  }

  const applications = await prisma.jobApplication.findMany({
    where: {
      userId,
    },
  });

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

  return (
    <main className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="mt-1 text-gray-500">
            Track your job search progress.
          </p>
        </div>

        <Link
          href="/dashboard/applications/new"
          className="rounded bg-black px-4 py-2 text-white"
        >
          Add Application
        </Link>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-5">
        <div className="rounded-lg border p-4">
          <h2 className="font-semibold text-gray-600">Total</h2>
          <p className="mt-2 text-3xl font-bold">{total}</p>
        </div>

        <div className="rounded-lg border p-4">
          <h2 className="font-semibold text-gray-600">Applied</h2>
          <p className="mt-2 text-3xl font-bold">{applied}</p>
        </div>

        <div className="rounded-lg border p-4">
          <h2 className="font-semibold text-gray-600">Interviews</h2>
          <p className="mt-2 text-3xl font-bold">{interviews}</p>
        </div>

        <div className="rounded-lg border p-4">
          <h2 className="font-semibold text-gray-600">Rejected</h2>
          <p className="mt-2 text-3xl font-bold">{rejected}</p>
        </div>

        <div className="rounded-lg border p-4">
          <h2 className="font-semibold text-gray-600">Offers</h2>
          <p className="mt-2 text-3xl font-bold">{offers}</p>
        </div>
      </div>

      <div className="mt-8 rounded-lg border p-6">
        <h2 className="text-xl font-semibold">Next Steps</h2>
        <p className="mt-2 text-gray-500">
          Add applications, update statuses, and monitor your job search progress.
        </p>
      </div>
    </main>
  );
}