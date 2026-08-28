import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { corrections } from "@/lib/data";

export const Route = createFileRoute("/reports")({ component: ReportsPage });

function ReportsPage() {
  return (
    <SiteShell>
      <PageIntro
        kicker="Reports and downloads"
        title="The annual impact report is the document everything else points back to."
        lede="Published every June. Assured. Method and limitations included. Missed targets listed with met ones."
      />
      <div className="mx-auto max-w-3xl px-4 pb-16 space-y-8">
        <ul className="divide-y divide-line rounded-lg border border-line bg-paper">
          {[
            "Annual impact report 2025–26 (illustrative)",
            "External assurance statement (unedited)",
            "Methodology note: sample, instrument, confidence intervals",
            "Data protection policy (plain language)",
            "ASCI compliance statement",
          ].map((item) => (
            <li key={item} className="px-4 py-4 text-sm">
              {item}
              <span className="ml-2 text-muted">· PDF in the class report annex</span>
            </li>
          ))}
        </ul>

        <section>
          <h2 className="font-display text-2xl">Correction log</h2>
          <p className="mt-2 text-muted">
            A changed number does not quietly replace an earlier one. The original figure is retained and struck through.
          </p>
          <ol className="mt-6 space-y-4">
            {corrections.map((c) => (
              <li key={c.date} className="rounded-lg border border-line bg-paper p-4">
                <p className="text-xs text-teal">{c.date}</p>
                <p className="mt-1">
                  <span className="line-through text-muted">{c.was}</span>
                  <span className="mx-2">→</span>
                  <span className="font-medium">{c.now}</span>
                </p>
                <p className="mt-2 text-sm text-muted">{c.why}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </SiteShell>
  );
}
