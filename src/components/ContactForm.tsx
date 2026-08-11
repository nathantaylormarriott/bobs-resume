import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { TiltCard } from "@/components/TiltCard";
import { Reveal } from "@/components/Reveal";

const FORM_NAME = "contact";
const FORM_ENDPOINT = "/forms.html";

function encodeFormData(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key] ?? "")}`)
    .join("&");
}

const fieldClass =
  "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-ink outline-none transition placeholder:text-muted-foreground focus:border-primary/40 focus:ring-2 focus:ring-primary/15";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries()) as Record<string, string>;

    setStatus("submitting");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData({ "form-name": FORM_NAME, ...payload }),
      });

      if (!response.ok) throw new Error("Form submission failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <Reveal delay={120} className="md:col-span-6 lg:col-span-12" data-print-exclude>
      <TiltCard className="p-7 md:p-8" intensity={1}>
        <FormLabel>Get in touch</FormLabel>
        <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink md:text-2xl">Send a message</h3>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Leave your details and I&apos;ll get back to you as soon as possible.
        </p>

        {status === "success" ? (
          <div className="mt-6 flex items-start gap-3 rounded-xl border border-primary/20 bg-accent px-4 py-4 text-sm text-accent-foreground">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="font-medium text-ink">Message sent</p>
              <p className="mt-1 text-muted-foreground">Thanks for reaching out — I&apos;ll be in touch soon.</p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-3 text-sm font-medium text-primary transition hover:underline"
              >
                Send another message
              </button>
            </div>
          </div>
        ) : (
          <form
            name={FORM_NAME}
            method="POST"
            action={FORM_ENDPOINT}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="mt-6 grid gap-4 md:grid-cols-2"
          >
            <input type="hidden" name="form-name" value={FORM_NAME} />
            <p className="hidden" aria-hidden="true">
              <label>
                Don&apos;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>

            <div className="md:col-span-1">
              <label htmlFor="contact-name" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                required
                autoComplete="name"
                placeholder="Your name"
                className={fieldClass}
              />
            </div>

            <div className="md:col-span-1">
              <label htmlFor="contact-email" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className={fieldClass}
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="contact-message" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder="How can I help?"
                className={`${fieldClass} min-h-[140px] resize-y`}
              />
            </div>

            {status === "error" && (
              <div className="md:col-span-2 flex items-start gap-2 rounded-xl border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm text-destructive">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <p>Something went wrong. Please try again or email directly.</p>
              </div>
            )}

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-primary bg-primary px-5 py-3.5 text-sm font-medium text-primary-foreground transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
              >
                <Send className="h-4 w-4" />
                {status === "submitting" ? "Sending…" : "Send message"}
              </button>
            </div>
          </form>
        )}
      </TiltCard>
    </Reveal>
  );
}

function FormLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </div>
  );
}
