"use client";

import { useRef } from "react";

type DatePickerButtonProps = {
  name: string;
  defaultValue?: string;
};

export default function DatePickerButton({
  name,
  defaultValue,
}: DatePickerButtonProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function openDatePicker() {
    const input = inputRef.current;

    if (!input) return;

    if (typeof input.showPicker === "function") {
      input.showPicker();
    } else {
      input.click();
    }
  }

  return (
    <div className="flex gap-2">
      <input
        ref={inputRef}
        name={name}
        type="date"
        defaultValue={defaultValue}
        autoComplete="off"
        className="input-bg w-full rounded px-3 py-2 outline-none transition focus:border-cyan-500"
      />

      <button
        type="button"
        onClick={openDatePicker}
        className="secondary-btn rounded px-4 py-2 text-sm font-medium transition hover:border-cyan-500/50 hover:bg-cyan-500/10"
      >
        Calendar
      </button>
    </div>
  );
}