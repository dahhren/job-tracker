import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

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
      <h1 className="text-3xl font-bold">Applications</h1>

      <div className="mt-6 rounded-lg border">
        {applications.length === 0 ? (
          <p className="p-4 text-gray-500">No applications yet.</p>
        ) : (
          applications.map((app) => (
            <div key={app.id} className="border-b p-4">
              <h2 className="font-semibold">{app.role}</h2>
              <p>{app.company}</p>
              <p className="text-sm text-gray-500">{app.status}</p>
            </div>
          ))
        )}
      </div>
    </main>
  );
}