import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { deleteApplication } from "./actions";

export default async function ApplicationsPage() {
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

  return (
    <main className="p-6">
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-bold">Applications</h1>
        <Link
            href="/dashboard/applications/new"
            className="rounded bg-black px-4 py-2 text-white"
        >
            Add Application
        </Link>
    </div> 

      <div className="mt-6 rounded-lg border">
        {applications.length === 0 ? (
          <p className="p-4 text-gray-500">No applications yet.</p>
        ) : (
          applications.map((app) => (
  <div
    key={app.id}
    className="flex items-center justify-between border-b p-4"
  >
    <div>
      <h2 className="font-semibold">{app.role}</h2>
      <p>{app.company}</p>
      <p className="text-sm text-gray-500">{app.status}</p>
    </div>

    <form action={deleteApplication}>
      <input type="hidden" name="applicationId" value={app.id} />

      <button
        type="submit"
        className="rounded border px-3 py-1 text-sm text-red-600"
      >
        Delete
      </button>
    </form>
  </div>
))
        )}
      </div>
    </main>
  );
}