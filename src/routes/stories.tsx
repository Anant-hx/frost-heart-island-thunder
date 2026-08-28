import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { stories } from "@/lib/data";

export const Route = createFileRoute("/stories")({ component: StoriesPage });

function StoriesPage() {
  return (
    <SiteShell>
      <PageIntro
        kicker="Stories from the field"
        title="Accounts with written consent. No child is named without a parent’s permission."
        lede="Field stories are not a substitute for the dashboard. They sit next to it. Photographs are illustrative of the setting, not portraits of the named people."
      />
      <div className="mx-auto max-w-4xl px-4 pb-16 grid gap-8">
        {stories.map((s) => (
          <article key={s.id} className="overflow-hidden rounded-lg border border-line bg-paper">
            <img src={s.photo} alt="" className="h-56 w-full object-cover" />
            <div className="p-6">
              <p className="font-display text-2xl leading-snug">“{s.quote}”</p>
              <p className="mt-4 font-medium">
                {s.who} · {s.role}
              </p>
              <p className="text-sm text-muted">{s.place}</p>
              <p className="mt-3 text-xs text-muted">{s.consent}</p>
            </div>
          </article>
        ))}
      </div>
    </SiteShell>
  );
}
