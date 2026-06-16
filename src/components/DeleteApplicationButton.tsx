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
        className="rounded border border-red-300 px-3 py-1 text-sm text-red-600 transition hover:bg-red-50 dark:border-red-500/30 dark:text-red-300 dark:hover:bg-red-500/10"
      >
        Delete
      </button>
    </form>
  );
}