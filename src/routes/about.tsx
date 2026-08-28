import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { company } from "@/lib/data";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <SiteShell>
      <PageIntro
        kicker="About us"
        title="An India where no child’s ability to read, count and reason is decided by the pin code she is born in."
        lede="The vision describes the country, not the company’s ambition. That is deliberate. It is harder to reach and easier to be judged against."
      />
      <div className="mx-auto max-w-3xl px-4 pb-16 space-y-10">
        <section>
          <h2 className="font-display text-2xl">Mission</h2>
          <p className="mt-3 text-muted">
            We build learning tools that work on the devices families already own and in the schools that connectivity
            has not reached. We train the teachers who use them. We publish what children actually learn — including the
            years the numbers disappoint us.
          </p>
        </section>
        <dl className="grid gap-4 sm:grid-cols-2">
          {[
            ["Registered name", company.name],
            ["Founded", String(company.founded)],
            ["Office", company.hq],
            ["Regional offices", company.offices.join(", ")],
            ["People", `About ${company.employees}, of whom ${company.fieldStaff} are field and academic staff`],
            ["Legal form", "Private limited company (hypothetical)"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-lg border border-line bg-paper p-4">
              <dt className="text-xs uppercase tracking-wider text-muted">{k}</dt>
              <dd className="mt-1">{v}</dd>
            </div>
          ))}
        </dl>
        <section>
          <h2 className="font-display text-2xl">The mark</h2>
          <div className="mt-5 overflow-hidden rounded-lg border border-line bg-paper p-6">
            <img src="/logo-lockup.png" alt="Vidyanta Learning Private Limited logo" className="mx-auto max-w-full h-auto keep-lite" />
          </div>
          <ul className="mt-5 space-y-2 text-muted">
            <li>Rounded navy square — an institution, not an app icon fad.</li>
            <li>White open book — learning stays the foundation. Technology serves the book.</li>
            <li>Four rising bars — measured learning levels, not user growth. Two amber, two teal.</li>
            <li>Amber sun above the tallest bar — the last child still out of reach.</li>
            <li>Wordmark: VIDYANTA / Learning Private Limited / Learning that reaches everyone.</li>
          </ul>
        </section>
        <section>
          <h2 className="font-display text-2xl">Values</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-muted">
            <li>Evidence before enthusiasm.</li>
            <li>The teacher is the customer, not the obstacle.</li>
            <li>Reach the last child first.</li>
            <li>Plain language: a parent who left school at Class 8 should be able to read what we publish.</li>
            <li>Say the difficult number.</li>
          </ul>
        </section>
      </div>
    </SiteShell>
  );
}
