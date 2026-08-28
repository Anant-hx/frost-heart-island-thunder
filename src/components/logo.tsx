import { Link } from "@tanstack/react-router";

export function LogoMark({ className = "size-12" }: { className?: string }) {
  return (
    <img
      src="/logo-mark.png"
      alt=""
      className={`keep-lite ${className}`}
      width={150}
      height={150}
    />
  );
}

export function Logo({ invert = false }: { invert?: boolean }) {
  if (invert) {
    return (
      <Link to="/" className="flex items-center gap-3 min-h-11 shrink-0">
        <LogoMark className="size-12 ring-1 ring-paper/30 rounded-[22%]" />
        <span className="leading-none">
          <span className="block text-[1.2rem] font-bold tracking-[0.14em] uppercase text-paper">Vidyanta</span>
          <span className="mt-0.5 block text-[0.62rem] font-semibold tracking-[0.12em] uppercase text-teal">
            Learning Private Limited
          </span>
        </span>
        <span className="sr-only">Vidyanta home</span>
      </Link>
    );
  }

  return (
    <Link to="/" className="flex items-center min-h-11 shrink-0">
      <img
        src="/logo-lockup.png"
        alt="Vidyanta Learning Private Limited"
        className="keep-lite h-11 sm:h-12 w-auto max-w-[min(100%,22rem)]"
        width={628}
        height={172}
      />
    </Link>
  );
}
