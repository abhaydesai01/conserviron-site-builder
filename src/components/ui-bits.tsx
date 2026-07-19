import { type ReactNode, type HTMLAttributes, forwardRef } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("eyebrow", className)}>{children}</div>;
}

export function Section({
  children,
  className,
  bg = "paper",
  id,
}: {
  children: ReactNode;
  className?: string;
  bg?: "paper" | "sand" | "forest-deep" | "forest";
  id?: string;
}) {
  const bgClass = {
    paper: "bg-paper text-ink",
    sand: "bg-sand text-ink",
    "forest-deep": "bg-forest-deep text-paper",
    forest: "bg-forest text-paper",
  }[bg];
  return (
    <section id={id} className={cn("w-full py-20 md:py-28", bgClass, className)}>
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">{children}</div>
    </section>
  );
}

type BtnProps = {
  variant?: "primary" | "ghost" | "outline" | "outline-light";
  as?: "link" | "button" | "a";
  to?: string;
  href?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function Button({
  variant = "primary",
  as = "link",
  to,
  href,
  children,
  className,
  onClick,
  type = "button",
}: BtnProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[10px] px-6 py-3 text-sm font-medium tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 focus-visible:ring-offset-paper";
  const variants = {
    primary:
      "bg-clay text-paper hover:bg-clay-dark shadow-[0_1px_0_rgba(0,0,0,0.05)]",
    ghost:
      "text-forest-deep hover:text-clay border border-transparent hover:border-moss/40",
    outline:
      "border border-forest-deep/40 text-forest-deep hover:bg-forest-deep hover:text-paper",
    "outline-light":
      "border border-paper/50 text-paper hover:bg-paper hover:text-forest-deep",
  }[variant];
  const cls = cn(base, variants, className);

  if (as === "link" && to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }
  if (as === "a" && href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "group rounded-xl border border-moss/25 bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:border-moss/50 hover:shadow-[0_20px_40px_-24px_rgba(20,52,43,0.35)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  ),
);
Card.displayName = "Card";

export function CredibilityBar() {
  const items = [
    "Haryana Forest Department",
    "Bombay Environmental Action Group (BEAG)",
    "NH-353D Umred–Nagbhir",
    "University of Wales, Bangor",
    "Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ)",
  ];
  return (
    <div className="border-y border-moss/25 bg-sand/60">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-8">
        <div className="eyebrow mb-4 text-center text-stone">Works alongside</div>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-stone">
          {items.map((it, i) => (
            <span key={i} className="whitespace-nowrap font-medium">
              {it}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function StatBlock({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="border-l border-moss/40 pl-5">
      <div className="font-serif text-4xl md:text-5xl text-forest-deep">
        {value}
      </div>
      <div className="mt-2 text-sm text-stone">{label}</div>
    </div>
  );
}

export function HeroImage({
  src,
  alt,
  overlay = "strong",
  children,
}: {
  src: string;
  alt: string;
  overlay?: "strong" | "soft";
  children: ReactNode;
}) {
  return (
    <div className="relative min-h-[92vh] w-full overflow-hidden bg-forest-deep">
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover ken-burns"
      />
      <div
        className={cn(
          "absolute inset-0",
          overlay === "strong"
            ? "bg-gradient-to-b from-forest-deep/85 via-forest-deep/55 to-forest-deep/85"
            : "bg-gradient-to-b from-forest-deep/60 via-forest-deep/30 to-forest-deep/70",
        )}
      />
      <div className="relative z-10 mx-auto flex min-h-[92vh] w-full max-w-[1200px] items-center px-6 md:px-10">
        <div className="max-w-3xl">{children}</div>
      </div>
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image?: string;
}) {
  return (
    <div className="relative overflow-hidden border-b border-moss/25 bg-sand">
      {image && (
        <>
          <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-paper/60 to-paper/90" />
        </>
      )}
      <div className="relative mx-auto max-w-[1200px] px-6 md:px-10 pt-40 pb-20 md:pt-48 md:pb-28">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 text-5xl md:text-6xl lg:text-7xl font-normal max-w-4xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-lg text-stone leading-relaxed">{intro}</p>
        )}
      </div>
    </div>
  );
}
