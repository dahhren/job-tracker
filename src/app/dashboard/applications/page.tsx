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
    return (
      <main className="min-h-screen bg-slate-950 p-6 text-white">
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          You must be signed in.
        </div>
      </main>
    );
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
    <main className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Applications</h1>
            <p className="mt-1 text-slate-400">
              Manage and track your job applications.
            </p>
          </div>

          <Link
            href="/dashboard/applications/new"
            className="w-fit rounded bg-cyan-500 px-4 py-2 font-medium text-white transition hover:bg-cyan-600"
          >
            Add Application
          </Link>
        </div>

        <form className="mt-6 grid gap-3 md:grid-cols-[1fr_180px_160px_auto_auto]">
          <input
            name="search"
            defaultValue={search ?? ""}
            placeholder="Search company or role..."
            className="w-full rounded border border-slate-700 bg-slate-900 p-2 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-500 md:max-w-sm"
          />

          <select
            name="status"
            defaultValue={status ?? "All"}
            className="rounded border border-slate-700 bg-slate-900 p-2 text-white outline-none transition focus:border-cyan-500"
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
            className="rounded border border-slate-700 bg-slate-900 p-2 text-white outline-none transition focus:border-cyan-500"
          >
            <option value="newest">Newest Applied</option>
            <option value="oldest">Oldest Applied</option>
          </select>

          <button
            type="submit"
            className="rounded bg-cyan-500 px-4 py-2 font-medium text-white transition hover:bg-cyan-600"
          >
            Filter
          </button>

          <Link
            href="/dashboard/applications"
            className="rounded border border-slate-700 px-4 py-2 text-center text-slate-200 transition hover:bg-slate-900"
          >
            Reset
          </Link>
        </form>

        <div className="mt-6 space-y-4">
          {applications.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900 p-10 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 shadow-sm">
                <span className="text-xl">💼</span>
              </div>

              <h2 className="mt-4 text-xl font-semibold text-white">
                No applications found
              </h2>

              <p className="mx-auto mt-2 max-w-md text-slate-400">
                Start by adding your first job application, or adjust your
                current search and filters to find existing applications.
              </p>

              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/dashboard/applications/new"
                  className="rounded bg-cyan-500 px-4 py-2 text-white transition hover:bg-cyan-600"
                >
                  Add Application
                </Link>

                <Link
                  href="/dashboard"
                  className="rounded border border-slate-700 px-4 py-2 text-slate-200 transition hover:bg-slate-800"
                >
                  Back to Dashboard
                </Link>
              </div>
            </div>
          ) : (
            applications.map((app) => (
              <div
                key={app.id}
                className="flex flex-col justify-between gap-5 rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:border-slate-700 md:flex-row md:items-center"
              >
                <div className="min-w-0">
                  <h2 className="text-lg font-semibold text-white">
                    {app.role}
                  </h2>

                  <p className="mt-1 text-sm font-medium text-slate-300">
                    {app.company}
                  </p>

                  <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-400">
                    {app.location && <span>{app.location}</span>}
                    {app.location && <span>•</span>}
                    <span>
                      Applied: {app.appliedDate.toLocaleDateString()}
                    </span>
                    <span>•</span>
                    <span>
                      Updated: {app.updatedAt.toLocaleDateString()}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-col items-start gap-2">
                    <StatusBadge status={app.status} />

                    <StatusSelect
                      applicationId={app.id}
                      currentStatus={app.status}
                    />
                  </div>

                  {app.jobUrl && (
                    <a
                      href={app.jobUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-sm text-cyan-300 underline hover:text-cyan-200"
                    >
                      View Job Posting
                    </a>
                  )}
                </div>

                <div className="flex shrink-0 flex-wrap gap-2 md:self-center">
                  <Link
                    href={`/dashboard/applications/${app.id}/edit`}
                    className="rounded border border-slate-700 px-3 py-1 text-sm text-slate-200 transition hover:bg-slate-800"
                  >
                    Edit
                  </Link>

                  <DeleteApplicationButton applicationId={app.id} />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}