import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MessageCircle, MapPin, Briefcase, GraduationCap, Plane, Laptop, ArrowUpRight, Download } from "lucide-react";
import { TiltCard } from "@/components/TiltCard";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { ShinyLink } from "@/components/ui/shiny-button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bobby Rawlings — Logistics Coordinator | FMCG Logistics" },
      { name: "description", content: "Bobby Rawlings — Logistics Coordinator based in Aylesbury. Extensive experience coordinating fast-paced logistics operations within FMCG manufacturing at Arla Foods." },
      { name: "keywords", content: "Bobby Rawlings, Logistics Coordinator, FMCG Logistics, Aylesbury, SAP, Despatch, Warehouse, Arla Foods" },
      { property: "og:title", content: "Bobby Rawlings — Logistics Coordinator" },
      { property: "og:description", content: "Logistics Coordinator · FMCG Logistics · SAP · Aylesbury, UK." },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.png" },
      { name: "twitter:title", content: "Bobby Rawlings — Logistics Coordinator" },
      { name: "twitter:description", content: "Logistics Coordinator · FMCG Logistics · SAP · Aylesbury, UK." },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Bobby Rawlings",
          jobTitle: "Logistics Coordinator",
          telephone: "+447711894120",
          email: "bobbyrawlings@icloud.com",
          address: { "@type": "PostalAddress", addressLocality: "Aylesbury", addressRegion: "Buckinghamshire", addressCountry: "UK" },
          alumniOf: ["Middlesex University", "The Cottesloe School"],
          knowsAbout: ["Site Planning", "FMCG Logistics", "SAP", "Despatch Operations", "Warehouse Management"],
        }),
      },
    ],
  }),
  component: Resume,
});

const PHONE = "+447711894120";
const PHONE_DISPLAY = "07711 894120";
const EMAIL = "bobbyrawlings@icloud.com";
const RESUME_PDF_PATH = "/Bobby-Rawlings-Resume.pdf";
const RESUME_PDF_FILENAME = "Bobby Rawlings - 07711894120 - Logistics Coordinator - bobbyrawlings@icloud.com.pdf";

const competencies = [
  "Site Planning & Despatch",
  "FMCG Logistics Operations",
  "SAP & Microsoft Excel",
  "Transport Planning",
  "Warehouse & Cold Store Operations",
  "Team Leadership",
  "Health & Safety Compliance",
  "Food Safety & Traceability",
  "Continuous Improvement",
  "Operational Risk Management",
];

const experience = [
  {
    role: "Site Planner",
    company: "Arla Foods",
    period: "November 2025 – Present",
    sub: "High-volume FMCG manufacturing — daily despatch and logistics coordination",
    points: [
      "Coordinate daily despatch operations within a high-volume FMCG manufacturing environment, ensuring products are released accurately and on schedule.",
      "Plan and prioritise workloads, responding quickly to operational changes while maintaining service levels.",
      "Use SAP to manage operational information, maintain transport plans and ensure accurate system data.",
      "Monitor schedules throughout the day, identifying potential risks and implementing solutions to minimise disruption.",
      "Work closely with Production, Warehouse, Logistics and Transport teams to ensure smooth operational flow.",
      "Maintain accurate operational documentation and ensure full product traceability.",
      "Analyse operational performance and identify opportunities to improve efficiency and reduce turnaround times.",
      "Support continuous improvement initiatives by reviewing processes and recommending operational improvements.",
      "Lead and support operational teams while maintaining high standards of Health & Safety, food safety and compliance.",
    ],
  },
  {
    role: "Bay Technician",
    company: "Arla Foods",
    period: "June 2022 – November 2025",
    sub: "Team leadership, despatch accuracy and transport planning in a fast-paced FMCG environment",
    points: [
      "Led by example in a fast-paced environment, managed a team of operatives professionally whilst fostering a positive and motivated team culture.",
      "Planned ahead of schedule to ensure strict time slots were met and ensured goods were despatched accurately and on time, being proactive in preventing any delays.",
      "Balanced multiple and conflicting workloads, demonstrating the ability to prioritise tasks efficiently and adapt to make robust decisions under pressure.",
      "Experienced in utilising the SAP system, maintaining records in line with the Transport Plan and ensuring all information was accurate and up to date.",
      "Continuously promoted service improvement, analysed team performance and revised strategies in order to achieve low Bay Turnover.",
      "Verified vehicle documentation, trailer numbers, and load accuracy to confirm that all products met required standards and temperatures.",
      "Ensured all documentation and records were completed precisely to enable traceability and issue resolution.",
      "Enforced a high standard of Health & Safety awareness across all operations and logged safety observations through the LIA system.",
    ],
  },
  {
    role: "Despatch Operative",
    company: "Arla Foods",
    period: "June 2019 – June 2022",
    sub: "Cold store operations, warehouse technology and food hygiene compliance",
    points: [
      "Completed all cold store operations, including order picking, physical inventory, loading and housekeeping duties.",
      "Monitored advanced warehouse technology such as Automated Guided Vehicles to achieve daily targets efficiently.",
      "Maintained strict adherence to Food Hygiene and Health & Safety standards.",
      "Reported faults promptly, and performed basic maintenance and fault diagnosis to prevent downtime.",
    ],
  },
];

const education = [
  {
    degree: "BA (Hons) Film",
    school: "Middlesex University",
    period: "September 2016 – June 2018",
    note: "Completed two years of a Film degree combining practical filmmaking with analytical and written study, developing strong communication and expression.",
  },
  {
    degree: "A Levels: Film Studies, English Literature, Art and Creative Writing",
    school: "The Cottesloe School",
    period: "September 2014 – June 2016",
  },
];

function Resume() {
  return (
    <main className="min-h-screen bg-background px-4 py-8 sm:px-6 sm:py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:gap-5 md:grid-cols-6 lg:grid-cols-12">

          <Reveal delay={0} className="md:col-span-6 lg:col-span-7">
            <TiltCard className="h-full p-8 md:p-10">
              <Label>Profile</Label>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink md:text-5xl lg:text-6xl">
                Bobby Rawlings
              </h1>
              <p className="mt-3 text-lg font-medium text-primary md:text-xl">
                Logistics Coordinator
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                FMCG Logistics · SAP · Despatch &amp; Warehouse Operations
              </p>
              <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-foreground/80">
                Site Planner with extensive experience coordinating fast-paced logistics operations within
                a leading FMCG manufacturing environment. Experienced in planning workloads, managing
                changing operational priorities and ensuring the timely movement of products through
                effective coordination with transport, warehouse and production teams.
              </p>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-foreground/80">
                Confident using SAP, Microsoft Excel and Microsoft Teams to manage operational data,
                maintain accurate records and support informed decision-making. Known for remaining calm
                under pressure, identifying risks early and adapting plans to meet service requirements
                while maintaining high standards of accuracy and compliance.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-primary" /> Aylesbury</span>
                <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-block" />
                <span className="inline-flex items-center gap-1.5"><Laptop className="h-4 w-4 text-primary" /> Hybrid</span>
                <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-block" />
                <span className="inline-flex items-center gap-1.5"><Plane className="h-4 w-4 text-primary" /> Open to national travel</span>
              </div>
            </TiltCard>
          </Reveal>

          <Reveal delay={80} className="md:col-span-6 lg:col-span-5">
            <TiltCard className="h-full p-6 md:p-8" intensity={1}>
              <Label>Contact</Label>
              <div className="mt-4 grid gap-3">
                <ContactButton href={`tel:${PHONE}`} icon={<Phone className="h-5 w-5" />} label="Call" value={PHONE_DISPLAY} tone="primary" />
                <ContactButton href={`https://wa.me/${PHONE.replace("+", "")}`} icon={<MessageCircle className="h-5 w-5" />} label="WhatsApp" value="Message on WhatsApp" external tone="accent" />
                <ContactButton href={`mailto:${EMAIL}`} icon={<Mail className="h-5 w-5" />} label="Email" value={EMAIL} />
                <DownloadPdfButton href={RESUME_PDF_PATH} filename={RESUME_PDF_FILENAME} />
              </div>
            </TiltCard>
          </Reveal>

          <Reveal delay={140} className="md:col-span-6 lg:col-span-12">
            <TiltCard className="h-full p-7 md:p-8" intensity={1}>
              <Label>Core Competencies</Label>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink md:text-2xl">Where I bring value</h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {competencies.map((c) => (
                  <span key={c} className="rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-[13px] font-medium text-foreground/80 transition hover:border-primary/40 hover:bg-accent hover:text-accent-foreground">
                    {c}
                  </span>
                ))}
              </div>
            </TiltCard>
          </Reveal>

          {experience.map((job, i) => (
            <Reveal
              key={`${job.company}-${job.role}`}
              delay={200 + i * 80}
              className={i === 2 ? "md:col-span-6 lg:col-span-12" : "md:col-span-6 lg:col-span-6"}
            >
              <TiltCard className="h-full p-7 md:p-8" intensity={1}>
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <Label>{job.period}</Label>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink md:text-2xl">{job.role}</h3>
                    <div className="mt-1 text-[15px] font-medium text-primary">{job.company}</div>
                    <div className="mt-1 max-w-xl text-sm text-muted-foreground">{job.sub}</div>
                  </div>
                  <div className="shrink-0 rounded-xl border border-border bg-secondary p-2.5 text-primary">
                    <Briefcase className="h-4 w-4" />
                  </div>
                </div>
                <ul className="mt-6 space-y-2.5 text-[14px] leading-relaxed text-foreground/80">
                  {job.points.map((p) => (
                    <li key={p} className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary/70">
                      {p}
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </Reveal>
          ))}

          <Reveal delay={440} className="md:col-span-6 lg:col-span-12">
            <TiltCard className="h-full p-7 md:p-8" intensity={1}>
              <Label>Education</Label>
              <div className="mt-4 grid gap-5 md:grid-cols-2">
                {education.map((e) => (
                  <div key={e.degree} className="flex items-start gap-3">
                    <div className="shrink-0 rounded-xl border border-border bg-secondary p-2.5 text-primary">
                      <GraduationCap className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{e.period}</div>
                      <div className="mt-0.5 text-[15px] font-semibold text-ink">{e.degree}</div>
                      <div className="text-sm text-muted-foreground">{e.school}</div>
                      {"note" in e && e.note && (
                        <div className="mt-1 text-sm leading-relaxed text-foreground/70">{e.note}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </TiltCard>
          </Reveal>

          <ContactForm />
        </div>
      </main>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </div>
  );
}

function ContactButton({
  href, icon, label, value, external, tone,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  external?: boolean;
  tone?: "primary" | "accent";
}) {
  const isPrimary = tone === "primary";
  const isAccent = tone === "accent";
  const isNativeProtocol = href.startsWith("mailto:") || href.startsWith("tel:");

  const openHref = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isNativeProtocol) return;
    // Ensure mailto/tel open the system client even if a parent handler interferes
    event.preventDefault();
    window.location.href = href;
  };

  const content = (
    <>
      <div className={`rounded-lg p-2.5 ${isPrimary ? "bg-white/15 text-primary-foreground" : isAccent ? "bg-primary/10 text-primary" : "bg-secondary text-primary"}`}>
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className={`text-[11px] font-semibold uppercase tracking-wider ${isPrimary ? "text-primary-foreground/80" : isAccent ? "text-primary/80" : "text-muted-foreground"}`}>{label}</div>
        <div className={`mt-0.5 truncate text-sm font-medium ${isPrimary ? "text-primary-foreground" : "text-ink"}`}>{value}</div>
      </div>
      <ArrowUpRight className={`h-4 w-4 shrink-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${isPrimary ? "text-primary-foreground/90" : isAccent ? "text-primary" : "text-primary opacity-0 group-hover:opacity-100"}`} />
    </>
  );

  if (isPrimary) {
    return (
      <ShinyLink
        href={href}
        onClick={openHref}
        className="group flex items-center rounded-xl border border-primary bg-primary px-4 py-3.5 text-primary-foreground shadow-[0_2px_8px_oklch(0.55_0.16_255/0.25)] transition-shadow duration-300 hover:shadow-[0_0_20px_oklch(0.55_0.16_255/0.3)] hover:brightness-110"
      >
        {content}
      </ShinyLink>
    );
  }

  return (
    <a
      href={href}
      onClick={openHref}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group flex w-full items-center gap-4 rounded-xl px-4 py-3.5 transition ${
        isAccent
          ? "border border-primary/25 bg-accent text-left hover:border-primary/40 hover:bg-accent/80"
          : "border border-border bg-surface hover:border-primary/40 hover:bg-secondary"
      }`}
    >
      {content}
    </a>
  );
}

function DownloadPdfButton({ href, filename }: { href: string; filename: string }) {
  return (
    <a
      href={href}
      download={filename}
      className="group flex w-full items-center gap-4 rounded-xl border border-border bg-surface px-4 py-3.5 text-left transition hover:border-primary/40 hover:bg-secondary"
    >
      <div className="rounded-lg bg-secondary p-2.5 text-primary">
        <Download className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Resume</div>
        <div className="mt-0.5 text-sm font-medium text-ink">Download PDF</div>
      </div>
      <ArrowUpRight className="h-4 w-4 shrink-0 text-primary opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
    </a>
  );
}
