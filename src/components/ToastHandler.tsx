"use client";

import { useEffect } from "react";
import { toast } from "sonner";
import { useSearchParams } from "next/navigation";

export default function ToastHandler() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const success = searchParams.get("success");

    if (!success) return;

    const messages: Record<string, string> = {
      created: "Application added successfully.",
      updated: "Application updated successfully.",
      deleted: "Application deleted successfully.",
      "status-updated": "Status updated successfully.",
    };

    if (messages[success]) {
      toast.success(messages[success]);
    }

    const params = new URLSearchParams(window.location.search);
    params.delete("success");

    const newUrl = params.toString()
      ? `${window.location.pathname}?${params.toString()}`
      : window.location.pathname;

    window.history.replaceState(null, "", newUrl);
  }, [searchParams]);

  return null;
}