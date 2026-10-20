"use client";

import { useState } from "react";
import type { Option, Print } from "@/lib/prints";

type Selection = { size: string; paper: string; frame: string };

function labelFor(options: Option[], id: string) {
  return options.find((option) => option.id === id)?.label ?? "";
}

function OptionGroup({
  legend,
  options,
  value,
  onChange,
}: {
  legend: string;
  options: Option[];
  value: string;
  onChange: (id: string) => void;
}) {
  return (
    <fieldset className="m-0 flex flex-col gap-3.5 border-0 p-0">
      <legend className="mb-3.5 p-0 text-[11px] font-normal tracking-[0.28em] text-stone">
        {legend}
      </legend>
      <div className="flex flex-wrap gap-2.5">
        {options.map((option) => {
          const selected = option.id === value;
          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(option.id)}
              className={`min-h-12 cursor-pointer border px-5 font-jost text-[13px] tracking-[0.06em] ${
                selected
                  ? "border-cream bg-cream font-normal text-night"
                  : "border-night-border bg-transparent font-light text-cream hover:border-stone"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export function PrintPurchase({ print }: { print: Print }) {
  const [selection, setSelection] = useState<Selection>({
    size: print.sizes[0].id,
    paper: print.papers[0].id,
    frame: print.frames[0].id,
  });
  const [added, setAdded] = useState(false);

  function choose(key: keyof Selection) {
    return (id: string) => {
      setSelection((current) => ({ ...current, [key]: id }));
      setAdded(false);
    };
  }

  const size = labelFor(print.sizes, selection.size);
  const summary = [
    size,
    labelFor(print.papers, selection.paper),
    labelFor(print.frames, selection.frame),
  ].join(" · ");

  return (
    <>
      <div className="flex flex-col gap-[18px]">
        <span className="text-xs uppercase tracking-[0.32em] text-gold">{print.location}</span>
        <h1 className="m-0 font-cormorant text-[64px] font-light leading-[0.95] sm:text-[88px]">
          {print.title}
        </h1>
        {/* TODO: replace with real pricing per size */}
        <p className="m-0 font-cormorant text-[28px] font-normal">[PRICE for {size}]</p>
        <p className="m-0 text-base leading-[1.8] text-stone-light">
          [Two or three sentences on the moment behind this photograph — the time of day, the light,
          why this cove.]
        </p>
        <span className="text-xs tracking-[0.22em] text-stone">
          EDITION OF [NUMBER] · SIGNED &amp; NUMBERED
        </span>
      </div>

      <OptionGroup legend="SIZE" options={print.sizes} value={selection.size} onChange={choose("size")} />
      <OptionGroup legend="PAPER" options={print.papers} value={selection.paper} onChange={choose("paper")} />
      <OptionGroup legend="FRAMING" options={print.frames} value={selection.frame} onChange={choose("frame")} />

      <div className="flex flex-col gap-3.5">
        <button
          type="button"
          onClick={() => setAdded(true)}
          className="min-h-15 cursor-pointer border-0 bg-cream font-jost text-xs font-medium tracking-[0.28em] text-night"
        >
          {added ? "ADDED TO CART" : "ADD TO CART"}
        </button>
        <p className="m-0 text-[13px] text-stone" aria-live="polite">
          {summary}
        </p>
      </div>
    </>
  );
}
