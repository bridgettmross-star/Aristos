type PlaceholderProps = {
  label: string;
  className?: string;
};

// Grey stand-in for imagery that hasn't been supplied yet.
export function Placeholder({ label, className = "" }: PlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center bg-frame p-3 text-center text-[13px] text-frame-label ${className}`}
    >
      {label}
    </div>
  );
}
