import Link from "next/link";
import StatusBadge from "@/components/StatusBadge";
import StatusSelect from "@/components/StatusSelect";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import DeleteApplicationButton from "@/components/DeleteApplicationButton";

type ApplicationsPageProps = {
  searchParams: Promise<{
    status?: string;
    search?: string;
    sort?: string;
  }>;
};

export default async function ApplicationsPage({
  searchParams,
}: ApplicationsPageProps) {
  const { userId } = await auth();
  const { status, search, sort } = await searchParams;

  if (!userId) {
    return <div className="p-6">You must be signed in.</div>;
  }

  const applications = await prisma.jobApplication.findMany({
    where: {
      userId,
      ...(status && status !== "All"
        ? {
            status,
          }
        : {}),
      ...(search
        ? {
            OR: [
              {
                company: {
                  contains: search,
                  mode: "insensitive",
                },
              },
              {
                role: {
                  contains: search,
                  mode: "insensitive",
                },
              },
            ],
          }
        : {}),
    },
    orderBy: {
      appliedDate: sort === "oldest" ? "asc" : "desc",
    },
  });

  return (
    <main className="p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Applications</h1>
          <p className="mt-1 text-gray-500">
            Manage and track your job applications.
          </p>
        </div>

        <Link
          href="/dashboard/applications/new"
          className="rounded bg-black px-4 py-2 text-white"
        >
          Add Application
        </Link>
      </div>

      <form className="mt-6 grid gap-3 md:grid-cols-[1fr_180px_160px_auto_auto]">
        <input
          name="search"
          defaultValue={search ?? ""}
          placeholder="Search company or role..."
          className="w-full rounded border p-2 md:max-w-sm"
        />

        <select
          name="status"
          defaultValue={status ?? "All"}
          className="rounded border p-2"
        >
          <option>All</option>
          <option>Applied</option>
          <option>Interview</option>
          <option>Rejected</option>
          <option>Offer</option>
        </select>

        <select 
            name="sort"
            defaultValue={sort ?? "newest"}
            className="rounded border p-2"
        >
          <option value="newest">Newest Applied</option>
          <option value="oldest">Oldest Applied</option>
        </select>

        <button
          type="submit"
          className="rounded bg-black px-4 py-2 text-white"
        >
          Filter
        </button>

        <Link
          href="/dashboard/applications"
          className="rounded border px-4 py-2 text-center"
        >
          Reset
        </Link>
      </form>

      <div className="mt-6 space-y-3">
        {applications.length === 0 ? (
            <div className="rounded-xl border border-dashed p-10 text-center">
                <h2 className="text-lg font-semibold">No applications found</h2>
                <p className="mt-2 text-gray-500">
                    Add a new application or adjust your search and filters.
                </p>

                <Link
                    href="/dashboard/applications/new"
                    className="mt-4 inline-block rounded bg-black px-4 py-2 text-white"
                >
                    Add Application
                </Link>
            </div>
        ) : (
          applications.map((app) => (
            <div
              key={app.id}
              className="flex flex-col justify-between gap-4 rounded-lg border p-4 md:flex-row md:items-center"
            >
              <div>
                <h2 className="text-lg font-semibold">{app.role}</h2>
                <p className="text-gray-700">{app.company}</p>

                <div className="mt-2 flex flex-wrap gap-2 text-sm text-gray-500">
                  {app.location && <span>{app.location}</span>}
                  {app.location && <span>•</span>}
                  <span>Applied: {app.appliedDate.toLocaleDateString()}</span>
                  <span>•</span>
                  <span>Updated: {app.updatedAt.toLocaleDateString()}</span>
                </div>

                <div>
                    <StatusBadge status={app.status} />
                    <StatusSelect applicationId={app.id} currentStatus={app.status} />
                </div>

                {app.jobUrl && (
                  <a
                    href={app.jobUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm underline"
                  >
                    View Job Posting
                  </a>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                <Link
                  href={`/dashboard/applications/${app.id}/edit`}
                  className="rounded border px-3 py-1 text-sm"
                >
                  Edit
                </Link>

                <DeleteApplicationButton applicationId={app.id} />
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
}