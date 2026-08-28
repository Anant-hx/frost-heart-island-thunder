import { createFileRoute } from "@tanstack/react-router";
import { PledgeGapChart } from "@/components/learning-chart";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { pledges } from "@/lib/data";

export const Route = createFileRoute("/pledges")({ component: PledgesPage });

function PledgesPage() {
  return (
    <SiteShell>
      <PageIntro
        kicker="Public pledges"
        title="A pledge without a number, a date and a method is a sentiment."
        lede="Each pledge is written so an outsider can check it. Sentiments cannot be reported to a Board committee."
      />
      <div className="mx-auto max-w-5xl px-4 pb-16">
        <figure className="mb-8 rounded-lg border border-line bg-paper p-4">
          <figcaption className="mb-2 font-medium">Two numbers you can hold us to</figcaption>
          <PledgeGapChart />
        </figure>
        <div className="grid gap-5 md:grid-cols-2">
          {pledges.map((p) => (
            <article key={p.id} className="rounded-lg border border-line bg-paper p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-teal">Target {p.id}</p>
              <h2 className="mt-2 font-display text-2xl">{p.title}</h2>
              <p className="mt-3 text-muted">{p.pledge}</p>
              <dl className="mt-5 space-y-2 text-sm">
                <div>
                  <dt className="text-muted">Current position</dt>
                  <dd className="font-medium">{p.now}</dd>
                </div>
                <div>
                  <dt className="text-muted">How it is measured</dt>
                  <dd>{p.measure}</dd>
                </div>
                <div>
                  <dt className="text-muted">Business line</dt>
                  <dd>{p.line}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
