import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button, Eyebrow, PageHeader, Section } from "@/components/ui-bits";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Conserviron Sustainability Foundation" },
      {
        name: "description",
        content:
          "Conservation Oriented Development, Rural Integrated Planning and CSR — a full technical services suite for governments, corporates and institutions.",
      },
      { property: "og:title", content: "Services — Conserviron" },
      { property: "og:description", content: "GIS planning, EIA, DPRs, conservation plans, CSR design and monitoring." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const FAMILIES = [
  {
    id: "cod",
    label: "Conservation Oriented Development",
    intro: "Spatial planning, ecological studies and technical inputs for protected areas, forests and wildlife corridors.",
    items: [
      "Spatial digital planning & management support systems for protected areas, managed forests, wildlife corridors and district/specialised planning agencies",
      "Development of interpretation centres, nature trails, wetlands centres and environmental awareness material",
      "Specialised environmental studies",
      "Ecosystem assessments (local, regional, state and national)",
      "Environment Impact Assessment (EIA) studies",
      "Facilitation and consultation for Government environmental clearances for developmental projects",
      "Hardware & software planning for sustainable ecotourism and rural tourism",
      "Promotion of green buildings through low-cost interventions",
      "Spatial digital planning & management support systems for disaster mitigation and emergency management",
      "Facilitation in implementation of the Forest Rights Act",
      "Capacity building in modern tools & technology: conservation-oriented infrastructure, wildlife crime prevention, wildlife health, wildlife forensics, wildlife rescue, field-based studies",
      "Drafting of conservation plans and technical inputs into working plans",
      "Floral and faunal surveys",
      "Research in environmental issues, natural resource management and social geography",
      "Advice on wild-animal–human conflict and rescue operations",
      "Corporate-sector capacity building on environmental issues, CSR investments, EIA and business sustainability (in collaboration with University of Wales, Bangor, UK)",
    ],
  },
  {
    id: "rural",
    label: "Rural Integrated Planning",
    intro: "Site-specific models that reduce community dependency on natural resources through Public–Private–Community Partnerships.",
    items: [
      "Evolving, planning, developing and testing site-specific models for integrated development",
      "Rural integrated conservation-oriented developmental planning, with implementation strategy and monitoring protocols",
      "Dependency-reduction of communities crucial to conservation, through Public–Private–Community Partnerships (PPCP)",
    ],
  },
  {
    id: "csr",
    label: "CSR — Design to Monitoring",
    intro: "End-to-end planning, implementation and monitoring of Corporate Social Responsibility programs.",
    items: [
      "Conservation-oriented planning in education — Education for Sustainable Development (planned with experts and consultants from Sweden)",
      "Technical support in infrastructural planning and location-based services for health and infrastructure development via digital planning & management support systems",
      "Capacity & competency building for planners, managers, implementers and monitoring agencies in CSR",
      "Capacity & competency building for livelihood programs and their up-scaling",
      "Integrated solutions for Conservation Oriented Development across sectors, tied to CSR",
      "Promotion and facilitation of Public–Private–Community Partnerships",
    ],
  },
];

function ServicesPage() {
  const [active, setActive] = useState<string>(FAMILIES[0].id);

  useEffect(() => {
    const opts: IntersectionObserverInit = { rootMargin: "-40% 0px -55% 0px", threshold: 0 };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, opts);
    FAMILIES.forEach((f) => {
      const el = document.getElementById(f.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Technical services for governments, corporates and institutions."
        intro="Three practice areas, delivered by senior forest officers, ecologists, GIS specialists and field experts working as one team."
        image="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2400&q=80"
      />

      {/* Sticky sub-nav */}
      <div className="sticky top-[76px] z-40 border-y border-moss/25 bg-paper/95 backdrop-blur">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="flex flex-wrap gap-x-8 gap-y-2 py-4 text-sm">
            {FAMILIES.map((f) => (
              <a
                key={f.id}
                href={`#${f.id}`}
                className={cn(
                  "border-b py-1 transition-colors",
                  active === f.id
                    ? "border-clay text-clay font-medium"
                    : "border-transparent text-stone hover:text-forest-deep",
                )}
              >
                {f.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {FAMILIES.map((f, idx) => (
        <Section key={f.id} id={f.id} bg={idx % 2 === 0 ? "paper" : "sand"}>
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>Family 0{idx + 1}</Eyebrow>
              <h2 className="mt-4 text-4xl md:text-5xl leading-tight">{f.label}</h2>
              <p className="mt-5 text-stone leading-relaxed">{f.intro}</p>
            </div>
            <div className="md:col-span-8">
              <ul className="grid gap-4 sm:grid-cols-2">
                {f.items.map((it) => (
                  <li
                    key={it}
                    className="flex gap-3 border-t border-moss/30 pt-4 text-sm leading-relaxed text-ink"
                  >
                    <Check className="mt-1 h-4 w-4 shrink-0 text-forest" strokeWidth={2.2} />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      ))}

      <Section bg="forest-deep" className="py-24">
        <div className="grid gap-8 md:grid-cols-12 items-end">
          <div className="md:col-span-8">
            <Eyebrow className="text-moss">Not sure which fits?</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl text-paper max-w-2xl">
              Tell us about your project.
            </h2>
            <p className="mt-5 text-paper/70 max-w-xl">
              A short brief — the geography, the stakeholders, the outcome —
              is enough for us to come back with a scoped proposal.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Button variant="primary" to="/contact">
              Discuss a project
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
