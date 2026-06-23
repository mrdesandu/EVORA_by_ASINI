interface LogoProps {
  variant?: "mark" | "full" | "crest";
  tone?: "rose" | "cream";
  className?: string;
}

/**
 * EVORA signature mark: a simple symmetric lotus built from layered petal
 * arcs. Used alone (variant="mark") in the nav, or with the wordmark
 * (variant="full") in the footer and auth screens.
 * variant="crest" renders the circular gold medallion logo.
 */
export default function Logo({ variant = "mark", tone = "rose", className = "" }: LogoProps) {
  const color = tone === "rose" ? "#C9416A" : "#FBF3EC";

  const mark = (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke={color} strokeWidth="1.4">
        <path d="M32 50C32 50 14 42 14 26C14 18 20 12 26 14C30 15.4 32 20 32 26C32 20 34 15.4 38 14C44 12 50 18 50 26C50 42 32 50 32 50Z" />
        <path d="M32 50C32 50 20 40 20 28C20 22 24.5 18 28.5 19.6C31 20.6 32 23.6 32 28" />
        <path d="M32 50C32 50 44 40 44 28C44 22 39.5 18 35.5 19.6C33 20.6 32 23.6 32 28" />
      </g>
      <circle cx="32" cy="27" r="2" fill={color} />
    </svg>
  );



  if (variant === "crest") {
    return (
      <img
        src="/logo.png"
        alt="EVORA Logo"
        className={`object-contain rounded-full ${className}`}
      />
    );
  }
  if (variant === "mark") return mark;

  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <div className="w-10 h-10">{mark}</div>
      <span
        className="font-display tracking-[0.25em] text-lg"
        style={{ color }}
      >
        EVORA
      </span>
      <span
        className="font-body tracking-[0.18em] text-[0.55rem] uppercase"
        style={{ color, opacity: 0.85 }}
      >
        Inspired By Nature, Crafted For You
      </span>
    </div>
  );
}
