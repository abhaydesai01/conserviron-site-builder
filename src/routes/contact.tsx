import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Button, Eyebrow, PageHeader, Section } from "@/components/ui-bits";
import { Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Conserviron Sustainability Foundation" },
      {
        name: "description",
        content:
          "Commissioning a study, planning a CSR program, or need technical experts on a project? Reach us at our Nagpur or Mumbai offices.",
      },
      { property: "og:title", content: "Contact — Conserviron" },
      { property: "og:description", content: "Two offices in Nagpur and Mumbai. Phone, email and enquiry form." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    org: "",
    email: "",
    phone: "",
    type: "Government",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in your name, email and message.");
      return;
    }
    console.log("Enquiry:", form);
    toast.success("Thank you — we'll be in touch shortly.");
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Let's talk about your project."
        intro="Commissioning a study, planning a CSR program, or need technical experts on a project? Send us a brief and we'll come back to you."
      />

      <Section bg="paper">
        <div className="grid gap-16 md:grid-cols-12">
          {/* Form */}
          <div className="md:col-span-7">
            <Eyebrow>Send an enquiry</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl">Tell us about your mandate.</h2>

            {submitted ? (
              <div className="mt-10 rounded-xl border border-forest/40 bg-sand p-10 text-center">
                <div className="font-serif text-3xl text-forest-deep">Thank you.</div>
                <p className="mt-4 text-stone">
                  Your enquiry has been received. A member of our team will get
                  back to you within two working days.
                </p>
                <div className="mt-6">
                  <Button
                    as="button"
                    variant="outline"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", org: "", email: "", phone: "", type: "Government", message: "" });
                    }}
                  >
                    Send another
                  </Button>
                </div>
              </div>
            ) : (
              <div className="mt-10 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Name" required>
                    <input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="input"
                    />
                  </Field>
                  <Field label="Organisation">
                    <input
                      value={form.org}
                      onChange={(e) => setForm({ ...form, org: e.target.value })}
                      className="input"
                    />
                  </Field>
                  <Field label="Email" required>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="input"
                    />
                  </Field>
                  <Field label="Phone">
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="input"
                    />
                  </Field>
                </div>
                <Field label="Type of enquiry">
                  <select
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className="input"
                  >
                    <option>Government</option>
                    <option>Corporate — CSR</option>
                    <option>Institution</option>
                    <option>Other</option>
                  </select>
                </Field>
                <Field label="Message" required>
                  <textarea
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="input resize-none"
                    placeholder="Geography, stakeholders, outcome you're working toward…"
                  />
                </Field>
                <div className="pt-2">
                  <Button as="button" variant="primary" onClick={handleSubmit}>
                    Send enquiry
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="md:col-span-5 space-y-8">
            <OfficeCard
              label="Registered Office"
              city="Nagpur"
              lines={["VRUKSHA, 116, H. B. Estate", "Sonegaon, Nagpur, 440025", "Maharashtra, India"]}
              mapUrl="https://maps.google.com/?q=Sonegaon,+Nagpur,+Maharashtra"
              mapImg="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
            />
            <OfficeCard
              label="National Coordination Office"
              city="Mumbai"
              lines={["114 Mohammadi Manzil, First Floor", "Barkatali Virani Marg", "Mumbai, 400008, Maharashtra"]}
              mapUrl="https://maps.google.com/?q=Barkatali+Virani+Marg,+Mumbai"
              mapImg="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80"
            />

            <div className="rounded-xl border border-moss/30 p-6">
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-4 w-4 text-forest" />
                <div className="text-sm">
                  <div className="text-stone text-xs uppercase tracking-[0.15em] mb-1">Phone</div>
                  <div>+91 91360 04830</div>
                  <div>+91 75583 94877</div>
                </div>
              </div>
              <div className="mt-5 flex items-start gap-3">
                <Mail className="mt-1 h-4 w-4 text-forest" />
                <div className="text-sm">
                  <div className="text-stone text-xs uppercase tracking-[0.15em] mb-1">Email</div>
                  <a href="mailto:info@conserviron.org" className="link-clay block">info@conserviron.org</a>
                  <a href="mailto:umesh.dhotekar@gmail.com" className="text-stone hover:text-clay block mt-1">umesh.dhotekar@gmail.com</a>
                  <a href="mailto:sayed.nudrat@gmail.com" className="text-stone hover:text-clay block">sayed.nudrat@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <style>{`
        .input {
          width: 100%;
          background: var(--color-paper);
          border: 1px solid color-mix(in srgb, var(--color-moss) 35%, transparent);
          border-radius: 10px;
          padding: 12px 14px;
          font-size: 15px;
          color: var(--color-ink);
          transition: border-color 0.2s, box-shadow 0.2s;
          font-family: var(--font-sans);
        }
        .input:focus {
          outline: none;
          border-color: var(--color-forest);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-forest) 15%, transparent);
        }
      `}</style>
    </>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="mb-2 text-xs uppercase tracking-[0.15em] text-stone">
        {label}{required && <span className="text-clay"> *</span>}
      </div>
      {children}
    </label>
  );
}

function OfficeCard({
  label, city, lines, mapUrl, mapImg,
}: {
  label: string; city: string; lines: string[]; mapUrl: string; mapImg: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-moss/30">
      <a href={mapUrl} target="_blank" rel="noreferrer" className="block relative aspect-[16/9] overflow-hidden bg-sand">
        <img src={mapImg} alt={`${city} map`} className="h-full w-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-forest-deep/40" />
        <div className="absolute inset-0 flex items-center justify-center text-paper font-serif text-3xl">
          {city}
        </div>
      </a>
      <div className="p-6">
        <div className="text-xs uppercase tracking-[0.15em] text-stone mb-3">{label}</div>
        <div className="flex items-start gap-3">
          <MapPin className="mt-1 h-4 w-4 text-forest shrink-0" />
          <address className="not-italic text-sm leading-relaxed">
            {lines.map((l, i) => (<div key={i}>{l}</div>))}
          </address>
        </div>
      </div>
    </div>
  );
}
