import { createApplication } from "../actions";
import DatePickerButton from "@/components/DatePickerButton";

export default function NewApplicationPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="mx-auto max-w-2xl">
      <h1 className="text-3xl font-bold">Add Job Application</h1>

      <form action={createApplication} autoComplete="off" className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-200">Company</label>
          <input
            name="company"
            required
            className="mt-1 w-full rounded border border-slate-700 bg-slate-900 p-2 text-white placeholder:text-slate-500"
            placeholder="Google"
            autoComplete="off"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-200">Role</label>
          <input
            name="role"
            required
            className="mt-1 w-full rounded border border-slate-700 bg-slate-900 p-2 text-white placeholder:text-slate-500"
            placeholder="Frontend Developer"
            autoComplete="off"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-200">Location</label>
          <input
            name="location"
            className="mt-1 w-full rounded border border-slate-700 bg-slate-900 p-2 text-white placeholder:text-slate-500"
            placeholder="Toronto, ON"
            autoComplete="off"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-200">Status</label>
          <select
            name="status"
            className="mt-1 w-full rounded border border-slate-700 bg-slate-900 p-2 text-white"
            defaultValue="Applied"
          >
            <option>Applied</option>
            <option>Interview</option>
            <option>Rejected</option>
            <option>Offer</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-200">Applied Date</label>
          <DatePickerButton name="appliedDate" />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-200">Job URL</label>
          <input
            name="jobUrl"
            className="mt-1 w-full rounded border border-slate-700 bg-slate-900 p-2 text-white placeholder:text-slate-500"
            placeholder="https://company.com/careers/job"
            autoComplete="off"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-200">Notes</label>
          <textarea
            name="notes"
            className="mt-1 w-full rounded border p-2"
            placeholder="Notes about the application..."
            rows={4}
            autoComplete="off"
          />
        </div>

        <button
          type="submit"
          className="rounded bg-cyan-500 px-4 py-2 text-white hover:bg-cyan-600"
        >
          Save Application
        </button>
      </form>
      </div>
    </main>
  );
}