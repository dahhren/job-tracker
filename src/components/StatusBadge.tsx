type StatusBadgeProps = {
  status: string;
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const styles: Record<string, string> = {
    Applied: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
    Interview: "bg-amber-500/10 text-amber-300 border border-amber-500/20",
    Rejected: "bg-red-500/10 text-red-300 border border-red-500/20",
    Offer: "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium ${
        styles[status] ?? "bg-slate-800 text-slate-300 border border-slate-700"
      }`}
    >
      {status}
    </span>
  );
}