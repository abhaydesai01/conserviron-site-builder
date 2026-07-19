import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, PageHeader, Section } from "@/components/ui-bits";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Conserviron Sustainability Foundation" },
      {
        name: "description",
        content:
          "Directors, key personnel and advisors — retired forest officers, ecologists, GIS specialists and academic researchers.",
      },
      { property: "og:title", content: "Team — Conserviron" },
      { property: "og:description", content: "Senior forest officers, ecologists and field experts." },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: TeamPage,
});

type Member = { name: string; role: string; bio: string; img: string };

const DIRECTORS: Member[] = [
  {
    name: "Dr. Nudrat Zawar Sayed",
    role: "Director",
    bio: "Nineteen years across environment and wildlife; forest, wildlife and environmental conservation; academician and researcher; expertise in plantation. Invited faculty at Bhavan's College, Andheri (Biodiversity, Wildlife Conservation & Management).",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Shri Umesh Dhotekar",
    role: "Director",
    bio: "Retired Range Forest Officer; expertise in capacity & competency building; specialist in human–wildlife conflict; handled numerous wildlife-crime cases.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Shri Anwar Ahmad",
    role: "Director",
    bio: "Retired Chief Conservator of Forests and Field Director, Sanjay Gandhi National Park.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Mr. Rohan Ganediwal",
    role: "Director",
    bio: "A businessman with a strong commitment to conservation of forest, wildlife and environment.",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
  },
];

const PERSONNEL: Member[] = [
  {
    name: "Shri Popatrao B. Bhalekar",
    role: "Retired Divisional Forest Officer",
    bio: "30 years' experience across tribal, remote and sensitive forest areas — Allapalli/Gadchiroli, Dhule, Nandurbar, Nashik, Satara, Pune, Mumbai, Alibagh. State-level silver medal for wildlife protection (2012–13).",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Shri Ishtayaque Patel",
    role: "Field & Capacity Building · RS-GIS Expert",
    bio: "Conducts capacity workshops; expert in remote sensing and GIS.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Shri Tarun Nayi",
    role: "Taxonomist & Field Executive",
    bio: "Botanist with interests in taxonomy, ethnobotany and ecology.",
    img: "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=800&q=80",
  },
];

const ADVISORS: Member[] = [
  {
    name: "Dr. Shivaji Chavan",
    role: "Advisor",
    bio: "Retired Maharashtra Forest Service officer with 28 years' experience; environmental economics and carbon budgeting; modern tools & technology in forest/wildlife/environment. Academician, trainer and researcher.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Dr. Anjana Pant",
    role: "Advisor",
    bio: "15+ years in research, teaching, project management and training; work on forest management for biodiversity and productivity across Satpura, Terai, Anaimalai and Garo conservation areas; human–elephant conflict in West Bengal. Currently a Technical Expert with GIZ.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
  },
];

function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="The team"
        title="Senior forest officers, ecologists and field experts."
        intro="Directors, key personnel and advisors — assembled around each assignment to bring both experience and technical rigour to the work."
        image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2400&q=80"
      />

      <TeamGroup title="Directors" members={DIRECTORS} bg="paper" />
      <TeamGroup title="Key Personnel" members={PERSONNEL} bg="sand" />
      <TeamGroup title="Advisors" members={ADVISORS} bg="paper" />
    </>
  );
}

function TeamGroup({ title, members, bg }: { title: string; members: Member[]; bg: "paper" | "sand" }) {
  return (
    <Section bg={bg}>
      <Eyebrow>{title}</Eyebrow>
      <h2 className="mt-4 text-4xl md:text-5xl">{title}</h2>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {members.map((m) => (
          <div key={m.name} className="group flex flex-col">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-moss/30 bg-sand">
              <img
                src={m.img}
                alt={m.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-forest-deep/95 via-forest-deep/50 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <p className="text-sm text-paper leading-relaxed">{m.bio}</p>
              </div>
            </div>
            <div className="mt-5 font-serif text-xl text-forest-deep leading-tight">{m.name}</div>
            <div className="mt-1 text-xs uppercase tracking-[0.15em] text-stone">{m.role}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
