import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/newsroom")({ component: NewsPage });

function NewsPage() {
  return (
    <SiteShell>
      <PageIntro
        kicker="Newsroom"
        title="Press notes, impact reports and statements"
        lede="Figures on this page are the same figures as the dashboard. We do not issue a separate set of numbers for the press."
      />
      <article className="mx-auto max-w-3xl px-4 pb-16">
        <p className="text-sm text-muted">Gurugram, 12 June 2026 · For immediate release</p>
        <h2 className="mt-3 font-display text-2xl">
          Vidyanta reports 61 per cent of Class 5 children in partner schools now reading at grade level, and names five
          districts where it is falling short
        </h2>
        <div className="mt-6 space-y-4 text-muted">
          <p>
            Vidyanta Learning Private Limited today published its third annual impact report, covering 31,000 partner
            schools across nine states. The report finds that 61 per cent of children in Class 5 in partner schools can
            read and do arithmetic at their grade level, against 54 per cent when the company began measuring in 2024.
          </p>
          <p>
            The company also named five districts in which learning gains were below the programme average for the
            second consecutive year, and set out what it is changing in each.
          </p>
          <blockquote className="border-l-2 border-amber pl-4 text-navy">
            “A report that only carries the good districts is an advertisement. We would rather be asked hard questions
            about five districts than be trusted for the wrong reasons about all thirty-one thousand schools.”
            <footer className="mt-2 text-sm text-muted">— Managing Director</footer>
          </blockquote>
          <p>
            Vidyanta supports United Nations Sustainable Development Goal 4 and reports specifically against four of its
            ten targets: 4.1, 4.4, 4.5 and 4.c. All figures have been assured by an independent partner and reviewed by
            the Academic Council. Underlying data is on the impact dashboard.
          </p>
        </div>
      </article>
    </SiteShell>
  );
}
