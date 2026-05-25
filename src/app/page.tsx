import Link from "next/link";
<head> <meta name="google-site-verification" content="4R-cISbZUnpF3YHRZ-rtPyIbuf62w1LJ5ufOLHGqlts" /></head>
export default function Home() {
  return (
    <main>
      {/* Hero Section */}
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

      {/* Tech Stack Section */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-2xl border p-8">
          <h2 className="text-2xl font-bold">
            Built with a modern full-stack architecture
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">Frontend</h3>
              <p className="mt-2 text-sm text-gray-500">
                Next.js, React, TypeScript, Tailwind CSS
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">Authentication</h3>
              <p className="mt-2 text-sm text-gray-500">
                Clerk user authentication and protected routes
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">Database</h3>
              <p className="mt-2 text-sm text-gray-500">
                PostgreSQL database hosted on Supabase
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">ORM</h3>
              <p className="mt-2 text-sm text-gray-500">
                Prisma for schema management and database queries
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 
