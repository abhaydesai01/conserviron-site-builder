import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-forest-deep text-paper">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="font-serif text-3xl leading-tight">Conserviron</div>
            <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-paper/60">
              Sustainability Foundation
            </div>
            <p className="mt-6 text-sm text-paper/70 leading-relaxed max-w-sm">
              A Section 8 technical conservation consultancy delivering
              science-led planning, EIA and CSR solutions for governments,
              corporates and institutions across India.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.2em] text-paper/50 mb-4">
              Registered Office
            </div>
            <address className="not-italic text-sm text-paper/80 leading-relaxed">
              VRUKSHA, 116, H. B. Estate,<br />
              Sonegaon, Nagpur, 440025<br />
              Maharashtra, India
            </address>
            <div className="mt-6 text-[11px] uppercase tracking-[0.2em] text-paper/50 mb-4">
              National Coordination Office
            </div>
            <address className="not-italic text-sm text-paper/80 leading-relaxed">
              114 Mohammadi Manzil, First Floor,<br />
              Barkatali Virani Marg,<br />
              Mumbai, 400008, Maharashtra
            </address>
          </div>

          <div className="md:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.2em] text-paper/50 mb-4">
              Contact
            </div>
            <ul className="space-y-2 text-sm text-paper/80">
              <li>+91 91360 04830</li>
              <li>+91 75583 94877</li>
              <li className="pt-2">
                <a href="mailto:info@conserviron.org" className="hover:text-clay">
                  info@conserviron.org
                </a>
              </li>
              <li>
                <a href="mailto:umesh.dhotekar@gmail.com" className="hover:text-clay">
                  umesh.dhotekar@gmail.com
                </a>
              </li>
              <li>
                <a href="mailto:sayed.nudrat@gmail.com" className="hover:text-clay">
                  sayed.nudrat@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-[11px] uppercase tracking-[0.2em] text-paper/50 mb-4">
              Navigate
            </div>
            <ul className="space-y-2 text-sm">
              {[
                ["/", "Home"],
                ["/about", "About"],
                ["/services", "Services"],
                ["/work", "Our Work"],
                ["/team", "Team"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-paper/80 hover:text-clay">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-paper/15 pt-8">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.15em] text-paper/60">
            <span>Section 8 Company</span>
            <span>·</span>
            <span>Companies Act, 2013</span>
            <span>·</span>
            <span>Incorporated 23 July 2021</span>
            <span>·</span>
            <span>NGO Darpan Registered</span>
            <span>·</span>
            <span>80G Certified</span>
            <span>·</span>
            <span>12A Certified</span>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-paper/50">
            <div>© {new Date().getFullYear()} Conserviron Sustainability Foundation. All rights reserved.</div>
            <div>Registered under the Companies Act, 2013.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
