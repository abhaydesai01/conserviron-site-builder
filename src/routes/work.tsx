import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, PageHeader, Section } from "@/components/ui-bits";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Our Work — Conserviron Sustainability Foundation" },
      {
        name: "description",
        content:
          "Selected assignments in wildlife rescue, wetland catchment planning and linear-infrastructure mitigation across India.",
      },
      { property: "og:title", content: "Our Work — Conserviron" },
      { property: "og:description", content: "DPRs, mitigation plans and catchment treatment across India." },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkPage,
});

const CASES = [
  {
    tag: "DPR / Wildlife",
    title: "Detailed Project Report — Wildlife Rescue Centre, Sohna, Haryana",
    img: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=2000&q=80",
    alt: "Forested landscape",
    client: "Haryana Forest Department (submitted to APCCF, Wildlife)",
    location: "Sohna, Haryana",
    scope: "End-to-end preparation of the Detailed Project Report for a wildlife rescue centre.",
    outcome: "Report completed and submitted to APCCF (Wildlife), Haryana Forest Department.",
  },
  {
    tag: "Wetlands / Catchment",
    title: "Catchment Treatment Plan — Charlotte Lake, Matheran",
    img: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=2000&q=80",
    alt: "Lake ringed by dense forest",
    client: "Bombay Environmental Action Group (BEAG)",
    location: "Matheran, Maharashtra",
    scope: "Detailed Project Report and catchment treatment plan for the lake and its immediate catchment.",
    outcome: "DPR developed and submitted to BEAG.",
  },
  {
    tag: "Linear Infrastructure",
    title: "Wildlife Conservation & Mitigation Plan — NH-353D, Umred–Nagbhir",
    img: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=2000&q=80",
    alt: "Highway cutting through dense forest",
    client: "NH-353D four-laning project",
    location: "Umred–Nagbhir, Maharashtra (km 48/400 to 96/700, excluding Bhiwapur city portion)",
    scope: "Selected as Technical Consultants / Experts to prepare the Wildlife Conservation & Mitigation Plan for the 45.834 km section.",
    outcome: "Appointed as technical experts on the project.",
  },
];

const CAPABILITIES = [
  "Detailed Project Reports (DPRs)",
  "Environmental Impact Assessment (EIA)",
  "GIS & spatial planning",
  "Conservation & mitigation plans",
  "Floral and faunal surveys",
  "Catchment & wetland plans",
  "CSR design & monitoring",
];

const FUTURE = [
  "Nature conservation and education programs",
  "Endangered and threatened species & habitat",
  "Implementation of the Ramsar Convention on Wetlands",
  "Forestry and land-use projects that protect wildlife, empower communities and build sustainable economies",
  "Restoration of water bodies for wildlife and indigenous communities",
  "Conservation effectiveness of relocation of communities from protected areas",
];

function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title="Selected assignments across wildlife, wetlands and linear infrastructure."
        intro="Three projects that illustrate how we combine technical rigour with landscape-scale thinking."
        image="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?auto=format&fit=crop&w=2400&q=80"
      />

      {CASES.map((c, i) => (
        <Section key={c.title} bg={i % 2 === 0 ? "paper" : "sand"}>
          <div className="grid gap-12 md:grid-cols-12 items-start">
            <div className={`md:col-span-7 ${i % 2 === 1 ? "md:order-2" : ""}`}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                <img src={c.img} alt={c.alt} className="h-full w-full object-cover" />
                <div className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-forest-deep">
                  {c.tag}
                </div>
              </div>
            </div>
            <div className="md:col-span-5">
              <Eyebrow>Case 0{i + 1}</Eyebrow>
              <h2 className="mt-4 text-3xl md:text-4xl leading-tight">{c.title}</h2>
              <dl className="mt-8 space-y-5 border-t border-moss/40 pt-6">
                {[
                  ["Client", c.client],
                  ["Location", c.location],
                  ["Scope", c.scope],
                  ["Outcome", c.outcome],
                ].map(([k, v]) => (
                  <div key={k} className="grid grid-cols-3 gap-4">
                    <dt className="text-xs uppercase tracking-[0.18em] text-stone">{k}</dt>
                    <dd className="col-span-2 text-sm text-ink leading-relaxed">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Section>
      ))}

      <Section bg="paper">
        <div className="max-w-3xl">
          <Eyebrow>Capabilities</Eyebrow>
          <h2 className="mt-4 text-4xl md:text-5xl">
            We can be commissioned for:
          </h2>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {CAPABILITIES.map((c) => (
            <div key={c} className="rounded-xl border border-moss/30 bg-paper px-5 py-4 text-sm font-medium text-forest-deep">
              {c}
            </div>
          ))}
        </div>
      </Section>

      <Section bg="forest-deep">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow className="text-moss">Where we're headed</Eyebrow>
            <h2 className="mt-4 text-4xl text-paper">Future focus areas.</h2>
          </div>
          <ul className="md:col-span-8 grid gap-4 sm:grid-cols-2">
            {FUTURE.map((f, i) => (
              <li key={f} className="border-t border-paper/20 pt-4 text-paper/85 text-sm leading-relaxed">
                <span className="text-clay mr-2">0{i + 1}</span>{f}
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
