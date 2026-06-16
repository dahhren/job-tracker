import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { updateApplication } from "../../actions";
import { notFound } from "next/navigation";
import DatePickerButton from "@/components/DatePickerButton";

type EditApplicationPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditApplicationPage({
  params,
}: EditApplicationPageProps) {
  const { userId } = await auth();
  const { id } = await params;

  if (!userId) {
    return (
      <main className="page-bg min-h-screen p-6">
        <div className="card-bg rounded-xl p-6">You must be signed in.</div>
      </main>
    );
  }

  const application = await prisma.jobApplication.findFirst({
    where: {
      id,
      userId,
    },
  });

  if (!application) {
    notFound();
  }

  return (
    <main className="page-bg min-h-screen p-6">
      <div className="mx-auto max-w-2xl">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-slate-950 dark:text-white">
            Edit Application
          </h1>
          <p className="muted-text mt-1">
            Update the details for this job application.
          </p>
        </div>

        <form
          action={updateApplication}
          autoComplete="off"
          className="card-bg space-y-4 rounded-xl p-6"
        >
          <input type="hidden" name="applicationId" value={application.id} />

          <div>
            <label className="soft-text block text-sm font-medium">
              Company
            </label>
            <input
              name="company"
              required
              defaultValue={application.company}
              className="input-bg mt-1 w-full rounded p-2 outline-none transition focus:border-cyan-500"
              autoComplete="off"
            />
          </div>

          <div>
            <label className="soft-text block text-sm font-medium">Role</label>
            <input
              name="role"
              required
              defaultValue={application.role}
              className="input-bg mt-1 w-full rounded p-2 outline-none transition focus:border-cyan-500"
              autoComplete="off"
            />
          </div>

          <div>
            <label className="soft-text block text-sm font-medium">
              Location
            </label>
            <input
              name="location"
              defaultValue={application.location ?? ""}
              className="input-bg mt-1 w-full rounded p-2 outline-none transition focus:border-cyan-500"
              autoComplete="off"
            />
          </div>

          <div>
            <label className="soft-text block text-sm font-medium">
              Status
            </label>
            <select
              name="status"
              defaultValue={application.status}
              className="input-bg mt-1 w-full rounded p-2 outline-none transition focus:border-cyan-500"
            >
              <option>Applied</option>
              <option>Interview</option>
              <option>Rejected</option>
              <option>Offer</option>
            </select>
          </div>

          <div>
            <label className="soft-text block text-sm font-medium">
              Applied Date
            </label>
            <div className="mt-1">
              <DatePickerButton
                name="appliedDate"
                defaultValue={application.appliedDate.toISOString().split("T")[0]}
              />
            </div>
          </div>

          <div>
            <label className="soft-text block text-sm font-medium">
              Job URL
            </label>
            <input
              name="jobUrl"
              defaultValue={application.jobUrl ?? ""}
              className="input-bg mt-1 w-full rounded p-2 outline-none transition focus:border-cyan-500"
              autoComplete="off"
            />
          </div>

          <div>
            <label className="soft-text block text-sm font-medium">
              Notes
            </label>
            <textarea
              name="notes"
              defaultValue={application.notes ?? ""}
              className="input-bg mt-1 w-full rounded p-2 outline-none transition focus:border-cyan-500"
              rows={4}
              autoComplete="off"
            />
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <button
              type="submit"
              className="rounded bg-cyan-500 px-4 py-2 font-medium text-white transition hover:bg-cyan-600"
            >
              Save Changes
            </button>

            <Link
              href="/dashboard/applications"
              className="secondary-btn rounded px-4 py-2 text-center font-medium transition hover:border-cyan-500/50 hover:bg-cyan-500/10"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}