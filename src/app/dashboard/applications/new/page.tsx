import { createApplication } from "../actions";

export default function NewApplicationPage() {
  return (
    <main className="mx-auto max-w-2xl p-6">
      <h1 className="text-3xl font-bold">Add Job Application</h1>

      <form action={createApplication} className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium">Company</label>
          <input
            name="company"
            required
            className="mt-1 w-full rounded border p-2"
            placeholder="Google"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Role</label>
          <input
            name="role"
            required
            className="mt-1 w-full rounded border p-2"
            placeholder="Frontend Developer"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Location</label>
          <input
            name="location"
            className="mt-1 w-full rounded border p-2"
            placeholder="Toronto, ON"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Status</label>
          <select
            name="status"
            className="mt-1 w-full rounded border p-2"
            defaultValue="Applied"
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
            className="mt-1 w-full rounded border p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Job URL</label>
          <input
            name="jobUrl"
            className="mt-1 w-full rounded border p-2"
            placeholder="https://company.com/careers/job"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Notes</label>
          <textarea
            name="notes"
            className="mt-1 w-full rounded border p-2"
            placeholder="Notes about the application..."
            rows={4}
          />
        </div>

        <button
          type="submit"
          className="rounded bg-black px-4 py-2 text-white"
        >
          Save Application
        </button>
      </form>
    </main>
  );
}