import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="rounded-full border px-4 py-2 text-sm text-gray-600">
          Job search organization made simple
        </div>

        <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-tight md:text-6xl">
          Track every job application in one clean dashboard.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-500">
          JobTracker helps you organize applications, monitor interview progress,
          track rejections and offers, and stay consistent during your job search.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/dashboard"
            className="rounded bg-black px-6 py-3 font-medium text-white"
          >
            Go to Dashboard
          </Link>

          <Link
            href="/dashboard/applications/new"
            className="rounded border px-6 py-3 font-medium"
          >
            Add Application
          </Link>
        </div>

        <div className="mt-14 grid w-full gap-4 md:grid-cols-3">
          <div className="rounded-xl border p-6 text-left">
            <h2 className="text-lg font-semibold">Track Applications</h2>
            <p className="mt-2 text-gray-500">
              Save company names, roles, locations, job links, notes, and dates.
            </p>
          </div>

          <div className="rounded-xl border p-6 text-left">
            <h2 className="text-lg font-semibold">Monitor Progress</h2>
            <p className="mt-2 text-gray-500">
              Update statuses from Applied to Interview, Rejected, or Offer.
            </p>
          </div>

          <div className="rounded-xl border p-6 text-left">
            <h2 className="text-lg font-semibold">Analyze Your Search</h2>
            <p className="mt-2 text-gray-500">
              View dashboard counts and understand your job search pipeline.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}