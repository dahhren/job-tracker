import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[80vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
        404 Error
      </p>

      <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
        Page not found
      </h1>

      <p className="mt-4 max-w-xl text-gray-500">
        The page you are looking for does not exist or may have been moved.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="rounded bg-black px-5 py-3 font-medium text-white"
        >
          Go Home
        </Link>

        <Link
          href="/demo"
          className="rounded border px-5 py-3 font-medium"
        >
          View Demo
        </Link>
      </div>
    </main>
  );
}