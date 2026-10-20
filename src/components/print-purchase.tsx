"use client";

import { useState } from "react";
import { formatPrice, type Option, type Print } from "@/lib/prints";

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
    <fieldset className="m-0 flex flex-col border-0 p-0">
      <legend className="mb-3 p-0 text-[13px] font-medium text-ink">{legend}</legend>
      <div className="flex flex-wrap gap-2.5">
        {options.map((option) => {
          const selected = option.id === value;
          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(option.id)}
              className={`min-h-12 cursor-pointer border px-5 font-inter text-sm ${
                selected
                  ? "border-ink bg-ink text-white"
                  : "border-field bg-white text-ink hover:border-ink"
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
  const price = print.sizes.find((option) => option.id === selection.size)?.price;
  const summary = [
    size,
    labelFor(print.papers, selection.paper),
    labelFor(print.frames, selection.frame),
  ].join(" · ");

  return (
    <>
      <div className="flex flex-col gap-4">
        <span className="text-[13px] font-medium uppercase tracking-[0.14em] text-ink-muted">
          {print.location}
        </span>
        <h1 className="m-0 font-playfair text-5xl font-medium leading-[1.05] sm:text-[64px]">
          {print.title}
        </h1>
        <p className="m-0 font-playfair text-[26px]">
          {price === undefined ? `[PRICE for ${size}]` : formatPrice(price)}
        </p>
        <p className="m-0 text-[17px] leading-[1.65] text-ink-body">
          [Two or three sentences on the moment behind this photograph — the time of day, the light,
          why this place.]
        </p>
        <span className="text-[13px] text-ink-muted">Edition of [NUMBER] · Signed &amp; numbered</span>
      </div>

      <OptionGroup legend="Size" options={print.sizes} value={selection.size} onChange={choose("size")} />
      <OptionGroup legend="Paper" options={print.papers} value={selection.paper} onChange={choose("paper")} />
      <OptionGroup legend="Framing" options={print.frames} value={selection.frame} onChange={choose("frame")} />

      <div className="flex flex-col gap-3">
        <button
          type="button"
          onClick={() => setAdded(true)}
          className="min-h-14 cursor-pointer border-0 bg-ink font-inter text-[15px] font-medium text-white"
        >
          {added ? "Added to cart" : "Add to cart"}
        </button>
        <p className="m-0 text-sm text-ink-muted" aria-live="polite">
          {summary}
        </p>
      </div>
    </>
  );
}
