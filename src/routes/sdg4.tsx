import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { pledges } from "@/lib/data";

export const Route = createFileRoute("/sdg4")({ component: Sdg4Page });

function Sdg4Page() {
  return (
    <SiteShell>
      <PageIntro
        kicker="Our SDG 4 commitment"
        title="How Vidyanta works on Quality Education"
        lede="We support United Nations Sustainable Development Goal 4 by improving learning in schools that connectivity and paid tuition have not reached."
      />
      <div className="mx-auto max-w-3xl px-4 pb-16 space-y-10">
        <img
          src="/photos/practice.jpg"
          alt="Children practising arithmetic with workbooks on a classroom floor"
          className="w-full rounded-lg border border-line object-cover aspect-video"
        />
        <section>
          <h2 className="font-display text-2xl">Why this matters in India</h2>
          <p className="mt-3 text-muted">
            India has done the hard part of getting children into school. Almost every child of primary age is enrolled.
            In 2024, only 23 of every 100 rural Class 3 children could read a story written for Class 2. At Class 5 the
            figure was about 49 of 100. About one child in nine still leaves during Classes 9 and 10. India’s NITI Aayog
            score on Goal 4 is 61 out of 100. The gap is no longer buildings. It is learning.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl">The four pledges</h2>
          <ol className="mt-4 space-y-4">
            {pledges.map((p) => (
              <li key={p.id} className="rounded-lg border border-line bg-paper p-4">
                <p className="text-xs font-semibold text-teal">
                  Target {p.id} · {p.line}
                </p>
                <p className="mt-1 font-medium">{p.title}</p>
                <p className="mt-2 text-sm text-muted">{p.pledge}</p>
                <p className="mt-2 text-sm text-navy">{p.now}</p>
              </li>
            ))}
          </ol>
          <p className="mt-4">
            <Link to="/pledges" className="text-teal underline">
              Full pledges, methods and current position
            </Link>
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl">How you can check us</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
            <li>Every number appears on the impact dashboard, updated within ten working days of month close.</li>
            <li>Underlying data can be downloaded as a spreadsheet.</li>
            <li>Annual figures are checked by an external assurance partner and by an Academic Council of four education researchers who do not work for us.</li>
            <li>If numbers fall, they are published in the same place and format.</li>
          </ul>
        </section>
        <section>
          <h2 className="font-display text-2xl">Where we work, and where we do not</h2>
          <p className="mt-3 text-muted">
            Our products and pledges sit under four parts of Goal 4: completion of quality primary and secondary
            learning (4.1), skills for work (4.4), equal access for girls and children in underserved districts (4.5),
            and qualified teachers (4.c).
          </p>
          <p className="mt-3 text-muted">
            We do not construct school buildings, administer scholarships, run universities or provide early-childhood
            care. Those are the work of government and specialist partners. Publishing only the work we do — and the
            numbers attached to it — is how we keep this page honest.
          </p>
        </section>
      </div>
    </SiteShell>
  );
}
