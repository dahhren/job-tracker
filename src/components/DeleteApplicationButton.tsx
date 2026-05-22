"use client";

import { deleteApplication } from "@/app/dashboard/applications/actions";

type DeleteApplicationButtonProps = {
  applicationId: string;
};

export default function DeleteApplicationButton({
  applicationId,
}: DeleteApplicationButtonProps) {
  return (
    <form
      action={deleteApplication}
      onSubmit={(event) => {
        const confirmed = confirm(
          "Are you sure you want to delete this application?"
        );

        if (!confirmed) {
          event.preventDefault();
        }
      }}
    >
      <input type="hidden" name="applicationId" value={applicationId} />

      <button
        type="submit"
        className="rounded border px-3 py-1 text-sm text-red-600 hover:bg-red-50"
      >
        Delete
      </button>
    </form>
  );
}