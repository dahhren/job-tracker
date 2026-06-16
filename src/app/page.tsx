import Link from "next/link";
import {
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Database,
  Lock,
  Search,
  Sparkles,
} from "lucide-react";

const features = [
  {
    title: "Track Applications",
    description:
      "Save company names, roles, locations, job links, notes, and application dates in one place.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Pipeline Status",
    description:
      "Quickly update each application as Applied, Interview, Offer, or Rejected.",
    icon: CheckCircle2,
  },
  {
    title: "Search and Filter",
    description:
      "Find applications faster with search, filtering, and sorting tools.",
    icon: Search,
  },
  {
    title: "Dashboard Charts",
    description:
      "Visualize your job search with status breakdowns and applications over time.",
    icon: BarChart3,
  },
  {
    title: "Secure Accounts",
    description: "Protected user dashboards powered by Clerk authentication.",
    icon: Lock,
  },
  {
    title: "Cloud Database",
    description:
      "Application data is stored with Prisma and Supabase PostgreSQL.",
    icon: Database,
  },
];

const techStack = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Clerk",
  "Prisma",
  "Supabase",
  "PostgreSQL",
  "Vercel",
  "Recharts",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-slate-950 dark:text-white">
      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center sm:py-32">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm text-cyan-700 dark:border-cyan-500/20 dark:bg-cyan-500/10 dark:text-cyan-300">
          <Sparkles className="h-4 w-4" />
          Full-stack job application tracker
        </div>

        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-6xl">
          Organize your job search with a clean, full-stack tracker.
        </h1>

        <p className="muted-text mt-6 max-w-2xl text-lg leading-8">
          JobTracker helps users save applications, update statuses, search and
          filter opportunities, view dashboard analytics, and manage their job
          search from one secure dashboard.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/demo"
            className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600"
          >
            View Demo
          </Link>

          <Link
            href="/dashboard"
            className="secondary-btn rounded-lg px-6 py-3 font-semibold transition hover:border-cyan-500/50 hover:bg-cyan-500/10"
          >
            Open Dashboard
          </Link>

          <a
            href="https://github.com/dahhren/job-tracker"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-btn rounded-lg px-6 py-3 font-semibold transition hover:border-cyan-500/50 hover:bg-cyan-500/10"
          >
            GitHub Repo
          </a>
        </div>

        <p className="muted-text mt-5 text-sm">
          Recruiters can use demo mode without creating an account.
        </p>
      </section>

      <section className="border-y border-slate-200 bg-slate-100/60 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 py-10 sm:grid-cols-3">
          <div className="card-bg rounded-xl p-6">
            <p className="text-3xl font-bold text-slate-950 dark:text-white">
              CRUD
            </p>
            <p className="muted-text mt-2 text-sm">
              Create, edit, delete, and update job applications.
            </p>
          </div>

          <div className="card-bg rounded-xl p-6">
            <p className="text-3xl font-bold text-slate-950 dark:text-white">
              Auth
            </p>
            <p className="muted-text mt-2 text-sm">
              Secure sign-in and protected dashboard routes.
            </p>
          </div>

          <div className="card-bg rounded-xl p-6">
            <p className="text-3xl font-bold text-slate-950 dark:text-white">
              Live
            </p>
            <p className="muted-text mt-2 text-sm">
              Deployed on Vercel with Supabase PostgreSQL.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="muted-text text-sm font-semibold uppercase tracking-wide">
            Features
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white sm:text-4xl">
            Built like a real productivity app.
          </h2>
          <p className="muted-text mt-4">
            The app combines authentication, database-backed CRUD operations,
            analytics, filtering, and a recruiter-friendly public demo.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="card-bg rounded-2xl p-6 transition hover:bg-slate-50 dark:hover:bg-slate-800/60"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500 text-white">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
                  {feature.title}
                </h3>
                <p className="muted-text mt-2 text-sm leading-6">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-100/60 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <p className="muted-text text-sm font-semibold uppercase tracking-wide">
                Tech Stack
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white sm:text-4xl">
                Modern full-stack tools.
              </h2>
              <p className="muted-text mt-4">
                Built with a modern TypeScript stack and deployed as a live
                production project.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="card-bg rounded-3xl p-8 text-center sm:p-12">
          <h2 className="text-3xl font-bold text-slate-950 dark:text-white sm:text-4xl">
            Try the public demo first.
          </h2>
          <p className="muted-text mx-auto mt-4 max-w-2xl">
            Demo mode uses sample data, so visitors can explore the dashboard,
            application cards, charts, and workflow without signing up.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/demo"
              className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600"
            >
              View Demo
            </Link>

            <Link
              href="/dashboard"
              className="secondary-btn rounded-lg px-6 py-3 font-semibold transition hover:border-cyan-500/50 hover:bg-cyan-500/10"
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}