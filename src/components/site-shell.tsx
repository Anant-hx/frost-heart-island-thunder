import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-cream text-navy">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageIntro({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="mx-auto max-w-3xl px-4 pt-12 pb-8">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">{kicker}</p>
      <h1 className="mt-3 font-display text-3xl sm:text-4xl text-navy">{title}</h1>
      {lede && <p className="mt-4 text-lg text-muted">{lede}</p>}
    </header>
  );
}
