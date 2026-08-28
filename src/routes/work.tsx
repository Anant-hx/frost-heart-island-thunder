import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { products } from "@/lib/data";

export const Route = createFileRoute("/work")({ component: WorkPage });

function WorkPage() {
  return (
    <SiteShell>
      <PageIntro
        kicker="What we do"
        title="Offline-first tools for the school that exists, not the one a product manager would prefer."
        lede="Roughly half of Indian schools still have no internet. A product that needs broadband has, by design, excluded them."
      />
      <div className="mx-auto max-w-3xl px-4 pb-16 space-y-8">
        <img
          src="/photos/classroom.jpg"
          alt="A government school classroom"
          className="w-full rounded-lg border border-line object-cover aspect-video"
        />
        {products.map((p) => (
          <article key={p.name} className="border-t border-line pt-6">
            <h2 className="font-display text-2xl">{p.name}</h2>
            <p className="mt-2 text-muted">{p.blurb}</p>
          </article>
        ))}
        <section className="rounded-lg bg-mist p-6">
          <h2 className="font-display text-2xl">Who pays</h2>
          <p className="mt-2 text-muted">
            State education departments and district administrations buy at scale. Low-fee private school chains license
            per school. A free tier is available to any government school in India without charge. Direct-to-parent
            subscriptions are a minority of revenue and are priced to cross-subsidise the free government tier.
          </p>
        </section>
      </div>
    </SiteShell>
  );
}
