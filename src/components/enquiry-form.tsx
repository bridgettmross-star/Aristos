"use client";

import { useState, type FormEvent } from "react";
import { contactEmail, enquiryAccessKey, enquiryEndpoint, enquiryTopics } from "@/lib/contact";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "min-h-12 w-full border border-field bg-white px-4 font-inter text-[15px] text-ink focus:border-ink focus:outline-none";
const label = "text-[13px] font-medium";

export function EnquiryForm({ printTitles }: { printTitles: string[] }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    try {
      const fields = Object.fromEntries(new FormData(event.currentTarget));
      const response = await fetch(enquiryEndpoint, {
        method: "POST",
        // Give up after 20 seconds so nobody is left waiting on "Sending…"
        signal: AbortSignal.timeout(20000),
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...fields,
          access_key: enquiryAccessKey,
          subject: `Website enquiry: ${fields.topic}`,
          from_name: "Aristos website",
        }),
      });
      const result = await response.json().catch(() => null);
      setStatus(response.ok && result?.success === true ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="flex flex-col gap-3 bg-paper-soft p-8">
        <h2 className="m-0 font-playfair text-[28px] font-medium">Thank you</h2>
        <p className="m-0 text-[17px] leading-[1.65] text-ink-body">
          Your enquiry has been sent. We&apos;ll reply to the email address you gave.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className={label}>
            Name
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={field} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className={label}>
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={field}
          />
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="topic" className={label}>
            What&apos;s it about?
          </label>
          <select id="topic" name="topic" className={field} defaultValue={enquiryTopics[0]}>
            {enquiryTopics.map((topic) => (
              <option key={topic}>{topic}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="print" className={label}>
            Print <span className="font-normal text-ink-muted">(optional)</span>
          </label>
          <select id="print" name="print" className={field} defaultValue="">
            <option value="">Not about a specific print</option>
            {printTitles.map((title) => (
              <option key={title}>{title}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className={label}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className={`${field} min-h-40 resize-y py-3 leading-[1.6]`}
        />
      </div>

      <div className="flex flex-col items-start gap-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="min-h-12 cursor-pointer border-0 bg-ink px-8 font-inter text-[15px] font-medium text-white disabled:cursor-default disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send enquiry"}
        </button>
        {status === "error" && (
          <p role="alert" className="m-0 text-[15px] text-ink-body">
            Your enquiry couldn&apos;t be sent. Please email{" "}
            <a href={`mailto:${contactEmail}`} className="text-ink">
              {contactEmail}
            </a>{" "}
            instead.
          </p>
        )}
      </div>
    </form>
  );
}
