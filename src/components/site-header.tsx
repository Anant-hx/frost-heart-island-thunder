import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { t } from "@/lib/copy";
import { cn } from "@/lib/cn";
import { usePrefs } from "@/store/prefs";

const primary = [
  { to: "/sdg4", key: "sdg" as const },
  { to: "/pledges", key: "pledges" as const },
  { to: "/dashboard", key: "dashboard" as const },
  { to: "/behind", key: "behind" as const },
  { to: "/parents", key: "parents" as const },
  { to: "/teachers", key: "teachers" as const },
  { to: "/newsroom", key: "news" as const },
  { to: "/about", key: "about" as const },
];

const extra = [
  { to: "/work", key: "work" as const },
  { to: "/stories", key: "stories" as const },
  { to: "/reports", key: "reports" as const },
  { to: "/investors", key: "investors" as const },
];

export function SiteHeader() {
  const lang = usePrefs((s) => s.lang);
  const setLang = usePrefs((s) => s.setLang);
  const lite = usePrefs((s) => s.lite);
  const toggleLite = usePrefs((s) => s.toggleLite);
  const copy = t(lang);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    document.documentElement.classList.toggle("lite", lite);
    document.documentElement.lang = lang === "hi" ? "hi" : "en";
  }, [lite, lang]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/95 backdrop-blur-sm">
      <div className="bg-navy text-paper px-4 py-2 text-center text-xs sm:text-sm">{copy.demo}</div>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Logo />
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setLang(lang === "en" ? "hi" : "en")}
            className="min-h-11 rounded-md border border-line px-3 text-sm"
            aria-label="Switch language"
          >
            {lang === "en" ? "हिंदी" : "English"}
          </button>
          <button
            type="button"
            onClick={toggleLite}
            className={cn(
              "min-h-11 rounded-md border border-line px-3 text-sm hidden sm:inline-flex items-center",
              lite && "bg-sand",
            )}
          >
            {lite ? copy.liteOn : copy.liteOff}
          </button>
          <button
            type="button"
            className="md:hidden min-h-11 min-w-11 inline-flex items-center justify-center rounded-md border border-line"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={copy.nav.menu}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      <nav className="hidden md:block border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-1 px-4 py-1">
          {primary.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "rounded-md px-3 py-2 min-h-11 inline-flex items-center text-sm text-muted hover:text-navy",
                pathname === l.to && "text-navy bg-sand",
              )}
            >
              {copy.nav[l.key]}
            </Link>
          ))}
        </div>
      </nav>
      {open && (
        <nav className="md:hidden border-t border-line bg-paper px-4 py-3 grid gap-1">
          {[...primary, ...extra].map((l) => (
            <Link key={l.to} to={l.to} className="min-h-11 flex items-center rounded-md px-2 text-navy hover:bg-sand">
              {copy.nav[l.key]}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
