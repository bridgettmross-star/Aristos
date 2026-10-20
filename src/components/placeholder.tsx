type PlaceholderProps = {
  label: string;
  tone?: "light" | "dark";
  className?: string;
};

// Grey stand-in for imagery that hasn't been supplied yet.
export function Placeholder({ label, tone = "light", className = "" }: PlaceholderProps) {
  const colors =
    tone === "light" ? "bg-frame text-frame-label" : "bg-night-frame text-stone-dim";
  return (
    <div
      className={`flex items-center justify-center p-3 text-center text-[13px] ${colors} ${className}`}
    >
      {label}
    </div>
  );
}
