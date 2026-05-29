"use client";

import { updateApplicationStatus } from "@/app/dashboard/applications/actions";

type StatusSelectProps = {
  applicationId: string;
  currentStatus: string;
};

export default function StatusSelect({
  applicationId,
  currentStatus,
}: StatusSelectProps) {
  return (
    <form action={updateApplicationStatus}>
      <input type="hidden" name="applicationId" value={applicationId} />

      <select
        name="status"
        defaultValue={currentStatus}
        onChange={(event) => {
            event.currentTarget.form?.requestSubmit();
        }}
        className="rounded-md border border-slate-700 bg-slate-950 px-3 py-1.5 text-sm text-white outline-none transition hover:border-cyan-500 focus:border-cyan-500"
        >
        <option>Applied</option>
        <option>Interview</option>
        <option>Rejected</option>
        <option>Offer</option>
      </select>
    </form>
    );
}