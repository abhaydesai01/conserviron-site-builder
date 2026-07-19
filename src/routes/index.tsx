import { createFileRoute } from "@tanstack/react-router";
import { Button, Card, CredibilityBar, Eyebrow, HeroImage, Section, StatBlock } from "@/components/ui-bits";
import { ArrowRight, Compass, Layers, Sprout } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Conserviron Sustainability Foundation — A better tomorrow for all" },
      {
        name: "description",
        content:
          "Science-led conservation, spatial planning and CSR solutions for governments, corporates and the ecosystems and communities they depend on. A Section 8 non-profit consultancy.",
      },
      { property: "og:title", content: "Conserviron Sustainability Foundation" },
      {
        property: "og:description",
        content:
          "Integrated, science-led solutions for Conservation Oriented Development — for governments, corporates and communities across India.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const HERO_IMG =
  "https://images.unsplash.com/photo-1516737490857-847e4dfb1a3f?auto=format&fit=crop&w=2400&q=80";

function HomePage() {
  return (
    <>
      <HeroImage src={HERO_IMG} alt="Mist over an Indian wetland at dawn">
        <div className="text-paper">
          <Eyebrow className="text-paper/80">Conservation Oriented Development</Eyebrow>
          <h1 className="mt-6 text-5xl md:text-7xl lg:text-[88px] font-normal text-paper leading-[0.98]">
            A better tomorrow<br />for all.
          </h1>
          <p className="mt-8 max-w-xl text-lg md:text-xl text-paper/85 leading-relaxed">
            Science-led conservation, spatial planning and CSR solutions for
            governments, corporates and the ecosystems and communities they
            depend on.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button variant="primary" to="/contact">
              Discuss a project <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline-light" to="/work">
              See our work
            </Button>
          </div>
          <div className="mt-12 text-xs uppercase tracking-[0.2em] text-paper/60">
            A Section 8 non-profit · NGO Darpan registered · 80G & 12A certified
          </div>
        </div>
      </HeroImage>

      <CredibilityBar />

      {/* Three pillars */}
      <Section bg="paper">
        <div className="max-w-3xl">
          <Eyebrow>What we do</Eyebrow>
          <h2 className="mt-4 text-4xl md:text-5xl">
            Three practices, one integrated approach.
          </h2>
          <p className="mt-5 text-lg text-stone">
            We bring senior forest officers, ecologists, GIS specialists and
            field experts together on assignments where the science, the map
            and the community all have to line up.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <Link to="/services">
            <Card>
              <Compass className="h-8 w-8 text-forest" strokeWidth={1.4} />
              <h3 className="mt-6 text-2xl">Conservation Oriented Development</h3>
              <p className="mt-4 text-stone leading-relaxed">
                Spatial digital planning, GIS, ecosystem assessments, EIA and
                conservation plans for protected areas, forests and wildlife
                corridors.
              </p>
              <div className="mt-6 text-sm font-medium text-clay group-hover:underline">
                Explore services →
              </div>
            </Card>
          </Link>
          <Link to="/services">
            <Card>
              <Sprout className="h-8 w-8 text-forest" strokeWidth={1.4} />
              <h3 className="mt-6 text-2xl">Rural Integrated Planning</h3>
              <p className="mt-4 text-stone leading-relaxed">
                Site-specific models for integrated development that reduce
                community dependency on natural resources through Public–Private–Community
                Partnerships.
              </p>
              <div className="mt-6 text-sm font-medium text-clay group-hover:underline">
                Explore services →
              </div>
            </Card>
          </Link>
          <Link to="/services">
            <Card>
              <Layers className="h-8 w-8 text-forest" strokeWidth={1.4} />
              <h3 className="mt-6 text-2xl">CSR — Design to Monitoring</h3>
              <p className="mt-4 text-stone leading-relaxed">
                End-to-end planning, implementation and monitoring of Corporate
                Social Responsibility programs, from livelihoods to education
                for sustainable development.
              </p>
              <div className="mt-6 text-sm font-medium text-clay group-hover:underline">
                Explore services →
              </div>
            </Card>
          </Link>
        </div>
      </Section>

      {/* Approach band */}
      <Section bg="forest-deep">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Eyebrow className="text-moss">Our approach</Eyebrow>
            <h2 className="mt-5 text-4xl md:text-5xl text-paper">
              Conservation that works at landscape scale.
            </h2>
            <p className="mt-6 text-paper/75 leading-relaxed">
              Forest, wildlife and environmental managers as technocrats — making
              optimum use of available technology for immediate and long-term
              conservation measures.
            </p>
          </div>
          <div className="md:col-span-7 grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {[
              ["01", "Ecological Restoration", "Restoring degraded habitats and water bodies using science-led, region-appropriate methods."],
              ["02", "Institutions in Local Self-Governance", "Strengthening panchayat and community institutions to steward local ecosystems."],
              ["03", "Conservation & Livelihoods", "Building livelihoods that reduce pressure on forests and align communities with conservation."],
              ["04", "Efforts at Landscape Level", "Planning across corridors and catchments, not just administrative boundaries."],
            ].map(([n, t, d]) => (
              <div key={n} className="border-t border-paper/20 pt-5">
                <div className="text-xs tracking-[0.2em] text-clay">{n}</div>
                <div className="mt-3 font-serif text-2xl text-paper">{t}</div>
                <p className="mt-3 text-sm text-paper/70 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Selected Work */}
      <Section bg="paper">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl">
              Assignments across wildlife, wetlands and infrastructure.
            </h2>
          </div>
          <Button variant="ghost" to="/work">
            View all work <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {PROJECTS.map((p) => (
            <Link key={p.title} to="/work" className="group block">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-sand">
                <img
                  src={p.img}
                  alt={p.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-forest-deep">
                  {p.tag}
                </div>
              </div>
              <h3 className="mt-6 text-2xl leading-snug group-hover:text-clay transition-colors">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-stone leading-relaxed">{p.summary}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section bg="sand" className="py-16 md:py-20">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <StatBlock value="2021" label="Incorporated as a Section 8 company" />
          <StatBlock value="80G · 12A" label="Certified for tax-exempt support" />
          <StatBlock value="9+" label="Directors, personnel and advisors" />
          <StatBlock value="Pan-India" label="Landscape-scale projects" />
        </div>
      </Section>

      {/* Team teaser */}
      <Section bg="paper">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow>The team</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl">
              Led by senior forest officers, ecologists and field experts.
            </h2>
            <p className="mt-5 text-stone">
              Retired Chief Conservators, Divisional Forest Officers,
              taxonomists, GIS specialists and academic researchers — assembled
              around each assignment.
            </p>
            <div className="mt-8">
              <Button variant="outline" to="/team">
                Meet the full team
              </Button>
            </div>
          </div>
          <div className="md:col-span-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM_TEASER.map((m) => (
              <div key={m.name} className="border-t border-moss/40 pt-5">
                <div className="aspect-[4/5] w-full rounded bg-gradient-to-br from-forest/20 to-sand overflow-hidden">
                  <img src={m.img} alt="" className="h-full w-full object-cover mix-blend-luminosity opacity-90" />
                </div>
                <div className="mt-4 font-serif text-lg text-forest-deep leading-tight">{m.name}</div>
                <div className="mt-1 text-xs text-stone">{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA band */}
      <Section bg="forest-deep" className="py-24">
        <div className="grid gap-8 md:grid-cols-12 items-end">
          <div className="md:col-span-8">
            <Eyebrow className="text-moss">Commission a project</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl text-paper max-w-2xl">
              Have a conservation, planning or CSR mandate?
            </h2>
            <p className="mt-5 text-paper/70 max-w-xl">
              Tell us the geography, the stakeholders and the outcome you're
              working toward. We'll come back with a scoped proposal.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Button variant="primary" to="/contact">
              Discuss a project <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

const PROJECTS = [
  {
    tag: "DPR / Wildlife",
    title: "Wildlife Rescue Centre, Sohna",
    summary: "Detailed Project Report prepared and submitted to APCCF (Wildlife), Haryana Forest Department.",
    img: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1200&q=80",
    alt: "Indian forest canopy",
  },
  {
    tag: "Wetlands / Catchment",
    title: "Charlotte Lake Catchment Plan, Matheran",
    summary: "Detailed Project Report developed for the Bombay Environmental Action Group (BEAG).",
    img: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=1200&q=80",
    alt: "Forested hill lake in the Western Ghats",
  },
  {
    tag: "Linear Infrastructure",
    title: "NH-353D Umred–Nagbhir Wildlife Mitigation",
    summary: "Selected as Technical Consultants for the Wildlife Conservation & Mitigation Plan for the 45.834 km section.",
    img: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=1200&q=80",
    alt: "Highway cutting through a forested landscape",
  },
];

const TEAM_TEASER = [
  { name: "Dr. Nudrat Zawar Sayed", role: "Director · Wildlife & Environment", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" },
  { name: "Shri Umesh Dhotekar", role: "Director · Retired RFO", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80" },
  { name: "Shri Anwar Ahmad", role: "Director · Retired CCF", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80" },
  { name: "Dr. Shivaji Chavan", role: "Advisor · MFS (Retd.)", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80" },
];
