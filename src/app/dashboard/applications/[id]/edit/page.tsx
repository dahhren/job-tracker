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
    return <div className="p-6">You must be signed in.</div>;
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
    <main className="min-h-screen bg-slate-950 p-6 text-white">
    <div className="mx-auto max-w-2xl">
      <h1 className="text-3xl font-bold">Edit Application</h1>

      <form action={updateApplication} autoComplete="off" className="mt-6 space-y-4">
        <input type="hidden" name="applicationId" value={application.id} />

        <div>
          <label className="block text-sm font-medium text-slate-200">Company</label>
          <input
            name="company"
            required
            defaultValue={application.company}
            className="mt-1 w-full rounded border p-2"
            autoComplete="off"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-200">Role</label>
          <input
            name="role"
            required
            defaultValue={application.role}
            className="mt-1 w-full rounded border border-slate-700 bg-slate-900 p-2 text-white placeholder:text-slate-500"
            autoComplete="off"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-200">Location</label>
          <input
            name="location"
            defaultValue={application.location ?? ""}
            className="mt-1 w-full rounded border border-slate-700 bg-slate-900 p-2 text-white placeholder:text-slate-500"
            autoComplete="off"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-200">Status</label>
          <select
            name="status"
            defaultValue={application.status}
            className="mt-1 w-full rounded border border-slate-700 bg-slate-900 p-2 text-white"
          >
            <option>Applied</option>
            <option>Interview</option>
            <option>Rejected</option>
            <option>Offer</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-200">Applied Date</label>
          <div className="mt-1">
            <DatePickerButton
              name="appliedDate"
              defaultValue={application.appliedDate.toISOString().split("T")[0]}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-200">Job URL</label>
          <input
            name="jobUrl"
            defaultValue={application.jobUrl ?? ""}
            className="mt-1 w-full rounded border border-slate-700 bg-slate-900 p-2 text-white placeholder:text-slate-500"
            autoComplete="off"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-200">Notes</label>
          <textarea
            name="notes"
            defaultValue={application.notes ?? ""}
            className="mt-1 w-full rounded border p-2"
            rows={4}
            autoComplete="off"
          />
        </div>

        <button
          type="submit"
          className="rounded bg-cyan-500 px-4 py-2 text-white hover:bg-cyan-600"
        >
          Save Changes
        </button>
      </form>
      </div>
    </main>
  );
}