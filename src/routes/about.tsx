import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, PageHeader, Section } from "@/components/ui-bits";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Conserviron Sustainability Foundation" },
      {
        name: "description",
        content:
          "Conserviron Sustainability Foundation is a Section 8 non-profit incorporated in 2021, delivering integrated, science-led conservation for governments, corporates and communities.",
      },
      { property: "og:title", content: "About — Conserviron" },
      { property: "og:description", content: "Vision, goal, objectives and approach of a Section 8 technical conservation consultancy." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About the foundation"
        title="Harmony between environment and people, through integrated conservation."
        intro="Conserviron Sustainability Foundation strives for harmony between environment and people by promoting integrated solutions to Conservation Oriented Development."
        image="https://images.unsplash.com/photo-1441829266145-6d4bfc7bc4d3?auto=format&fit=crop&w=2400&q=80"
      />

      {/* Vision / Goal / Objectives */}
      <Section bg="paper">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow>Vision</Eyebrow>
            <h2 className="mt-4 text-3xl font-normal">A better tomorrow for all.</h2>
            <p className="mt-4 text-stone leading-relaxed">
              Striving for harmony amongst environment and people by promoting
              integrated solutions to Conservation Oriented Development.
            </p>
          </div>
          <div className="md:col-span-4">
            <Eyebrow>Goal</Eyebrow>
            <h2 className="mt-4 text-3xl font-normal">Managers as technocrats.</h2>
            <p className="mt-4 text-stone leading-relaxed">
              Forest, wildlife and environmental managers as technocrats,
              making optimum use of available technology for immediate and
              long-term conservation measures.
            </p>
          </div>
          <div className="md:col-span-4">
            <Eyebrow>Objectives</Eyebrow>
            <ol className="mt-4 space-y-5">
              {OBJECTIVES.map((o, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-serif text-2xl text-clay leading-none">
                    0{i + 1}
                  </span>
                  <p className="text-sm text-ink leading-relaxed">{o}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* Legal fact chips */}
      <Section bg="sand" className="py-16">
        <Eyebrow>Credentials & registrations</Eyebrow>
        <h2 className="mt-4 text-3xl md:text-4xl max-w-3xl">
          A Section 8 company under the Companies Act, 2013.
        </h2>
        <div className="mt-10 flex flex-wrap gap-3">
          {[
            "Section 8 Company",
            "Companies Act, 2013",
            "Incorporated 23 July 2021",
            "NGO Darpan Registered",
            "80G Certified",
            "12A Certified",
          ].map((c) => (
            <span
              key={c}
              className="rounded-full border border-forest-deep/30 bg-paper px-4 py-2 text-sm font-medium text-forest-deep"
            >
              {c}
            </span>
          ))}
        </div>
      </Section>

      {/* Approach */}
      <Section bg="paper">
        <div className="max-w-3xl">
          <Eyebrow>Our approach</Eyebrow>
          <h2 className="mt-4 text-4xl md:text-5xl">
            Four commitments that shape every engagement.
          </h2>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {APPROACH.map((a) => (
            <div key={a.title} className="border-t border-moss/40 pt-6">
              <div className="flex items-baseline justify-between">
                <div className="font-serif text-2xl text-forest-deep">{a.title}</div>
                <div className="text-xs tracking-[0.2em] text-clay">{a.n}</div>
              </div>
              <p className="mt-4 text-stone leading-relaxed">{a.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Collaborations */}
      <Section bg="forest-deep">
        <div className="grid gap-12 md:grid-cols-12 items-start">
          <div className="md:col-span-4">
            <Eyebrow className="text-moss">Collaborations</Eyebrow>
            <h2 className="mt-4 text-4xl text-paper">
              Working with international peers.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-8 text-paper/85 text-lg leading-relaxed">
            <p>
              In collaboration with the <span className="text-clay">University of Wales, Bangor (UK)</span>,
              we deliver corporate-sector capacity building on environmental
              issues, CSR investments, EIA and business sustainability.
            </p>
            <p>
              A planned <span className="text-clay">Education for Sustainable Development</span> initiative
              brings together experts and consultants from Sweden to shape
              conservation-oriented planning in education.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

const OBJECTIVES = [
  "To protect and conserve forests, wildlife, allied natural resources and the environment by formulating, managing and implementing conservation-based projects in India and overseas, and by providing conservation-based services to government departments and private and corporate organisations.",
  "To provide consultation, advisory and technical services that ensure conservation of natural resources and a harmonious relationship between people and nature.",
  "To conduct capacity and competency building, awareness and education programs — building a movement for conservation that sustains ecosystem services and the well-being of both resources and people.",
];

const APPROACH = [
  { n: "01", title: "Ecological Restoration", body: "Restoring degraded habitats, wetlands and water bodies through science-led, region-appropriate interventions grounded in ecological baselines." },
  { n: "02", title: "Institutions in Local Self-Governance", body: "Strengthening panchayats and community institutions so that stewardship of local ecosystems is embedded, not imposed." },
  { n: "03", title: "Conservation & Livelihoods", body: "Designing livelihood options that reduce pressure on forests and align community aspirations with conservation outcomes." },
  { n: "04", title: "Efforts at Landscape Level", body: "Planning across corridors, catchments and land uses — not just administrative boundaries — so ecological function is preserved at scale." },
];
