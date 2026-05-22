import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { updateApplication } from "../../actions";
import { notFound } from "next/navigation";

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
    <main className="mx-auto max-w-2xl p-6">
      <h1 className="text-3xl font-bold">Edit Application</h1>

      <form action={updateApplication} className="mt-6 space-y-4">
        <input type="hidden" name="applicationId" value={application.id} />

        <div>
          <label className="block text-sm font-medium">Company</label>
          <input
            name="company"
            required
            defaultValue={application.company}
            className="mt-1 w-full rounded border p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Role</label>
          <input
            name="role"
            required
            defaultValue={application.role}
            className="mt-1 w-full rounded border p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Location</label>
          <input
            name="location"
            defaultValue={application.location ?? ""}
            className="mt-1 w-full rounded border p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Status</label>
          <select
            name="status"
            defaultValue={application.status}
            className="mt-1 w-full rounded border p-2"
          >
            <option>Applied</option>
            <option>Interview</option>
            <option>Rejected</option>
            <option>Offer</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Applied Date</label>
          <input
            type="date"
            name="appliedDate"
            defaultValue={application.appliedDate?.toISOString().split("T")[0]}
            className="mt-1 w-full rounded border p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Job URL</label>
          <input
            name="jobUrl"
            defaultValue={application.jobUrl ?? ""}
            className="mt-1 w-full rounded border p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Notes</label>
          <textarea
            name="notes"
            defaultValue={application.notes ?? ""}
            className="mt-1 w-full rounded border p-2"
            rows={4}
          />
        </div>

        <button
          type="submit"
          className="rounded bg-black px-4 py-2 text-white"
        >
          Save Changes
        </button>
      </form>
    </main>
  );
}