import Link from "next/link";
import { createApplication } from "../actions";
import DatePickerButton from "@/components/DatePickerButton";

export default function NewApplicationPage() {
  return (
    <main className="page-bg min-h-screen p-6">
      <div className="mx-auto max-w-2xl">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-slate-950 dark:text-white">
            Add Job Application
          </h1>
          <p className="muted-text mt-1">
            Save the details for a new job opportunity.
          </p>
        </div>

        <form
          action={createApplication}
          autoComplete="off"
          className="card-bg space-y-4 rounded-xl p-6"
        >
          <div>
            <label className="soft-text block text-sm font-medium">
              Company
            </label>
            <input
              name="company"
              required
              className="input-bg mt-1 w-full rounded p-2 outline-none transition focus:border-cyan-500"
              placeholder="Google"
              autoComplete="off"
            />
          </div>

          <div>
            <label className="soft-text block text-sm font-medium">Role</label>
            <input
              name="role"
              required
              className="input-bg mt-1 w-full rounded p-2 outline-none transition focus:border-cyan-500"
              placeholder="Frontend Developer"
              autoComplete="off"
            />
          </div>

          <div>
            <label className="soft-text block text-sm font-medium">
              Location
            </label>
            <input
              name="location"
              className="input-bg mt-1 w-full rounded p-2 outline-none transition focus:border-cyan-500"
              placeholder="Toronto, ON"
              autoComplete="off"
            />
          </div>

          <div>
            <label className="soft-text block text-sm font-medium">
              Status
            </label>
            <select
              name="status"
              className="input-bg mt-1 w-full rounded p-2 outline-none transition focus:border-cyan-500"
              defaultValue="Applied"
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
              <DatePickerButton name="appliedDate" />
            </div>
          </div>

          <div>
            <label className="soft-text block text-sm font-medium">
              Job URL
            </label>
            <input
              name="jobUrl"
              className="input-bg mt-1 w-full rounded p-2 outline-none transition focus:border-cyan-500"
              placeholder="https://company.com/careers/job"
              autoComplete="off"
            />
          </div>

          <div>
            <label className="soft-text block text-sm font-medium">
              Notes
            </label>
            <textarea
              name="notes"
              className="input-bg mt-1 w-full rounded p-2 outline-none transition focus:border-cyan-500"
              placeholder="Notes about the application..."
              rows={4}
              autoComplete="off"
            />
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <button
              type="submit"
              className="rounded bg-cyan-500 px-4 py-2 font-medium text-white transition hover:bg-cyan-600"
            >
              Save Application
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