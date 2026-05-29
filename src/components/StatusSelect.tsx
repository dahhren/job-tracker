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
        className="rounded border border-slate-700 bg-slate-900 px-2 py-1 text-sm text-white"
        >
        <option>Applied</option>
        <option>Interview</option>
        <option>Rejected</option>
        <option>Offer</option>
      </select>
    </form>
    );
}