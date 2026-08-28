import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { channels } from "@/lib/data";

export const Route = createFileRoute("/investors")({ component: InvestorsPage });

function InvestorsPage() {
  return (
    <SiteShell>
      <PageIntro
        kicker="Investors and the Board"
        title="Measured learning outcomes are the competitive moat and the defence against a tightening advertising regime."
        lede="Impact is presented as a lead indicator of contract renewal, not as a separate charitable section."
      />
      <div className="mx-auto max-w-3xl px-4 pb-16 space-y-8">
        <article className="rounded-lg border border-line bg-paper p-5">
          <p className="text-xs uppercase tracking-wider text-teal">Quarterly investor letter · extract</p>
          <p className="mt-3 text-muted">
            Revenue mix remains weighted to government contracts and low-fee licences. The Class 5 grade-level figure
            moved from 54% to 61% in two years. Five districts are named on the public dashboard as below average for a
            second year. We would rather be asked hard questions about five districts than be trusted for the wrong
            reasons about thirty-one thousand schools.
          </p>
        </article>
        <section>
          <h2 className="font-display text-2xl">How the message is carried</h2>
          <ul className="mt-4 grid gap-3">
            {channels.map((c) => (
              <li key={c.name} className="rounded-lg border border-line bg-paper p-4">
                <p className="font-medium">
                  {c.name} · {c.share}
                </p>
                <p className="text-sm text-muted">{c.detail}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </SiteShell>
  );
}
