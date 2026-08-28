import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/teachers")({ component: TeachersPage });

function TeachersPage() {
  return (
    <SiteShell>
      <PageIntro
        kicker="For teachers"
        title="The tool supports you. You can override anything it suggests."
        lede="Teachers do not sign the contract. They can quietly stop using a product, which ends a renewal as effectively as a cancellation."
      />
      <div className="mx-auto max-w-3xl px-4 pb-16 space-y-8">
        <img
          src="/photos/teacher.jpg"
          alt="A teacher working with children at the chalkboard"
          className="w-full rounded-lg border border-line object-cover aspect-[4/3]"
        />
        <section className="rounded-lg bg-navy p-6 text-paper">
          <h2 className="font-display text-2xl">The override promise, in writing</h2>
          <p className="mt-3 text-paper/80">
            No feature of the product can be enforced against a teacher’s judgement. We will not report individual
            teacher usage data to district officials for disciplinary purposes. Teachers whose classes improve are named.
            Teachers whose classes do not are never ranked.
          </p>
        </section>
        <ul className="list-disc space-y-2 pl-5 text-muted">
          <li>Two-day block workshops each term, run by trainers who have taught in government schools.</li>
          <li>Printed handbook in the local language, because school connectivity cannot be assumed.</li>
          <li>Moderated WhatsApp groups for classroom questions. Company staff answer within one working day.</li>
          <li>We reduced mandatory data-entry fields after teachers said repeated entry was the problem, not the lessons.</li>
        </ul>
      </div>
    </SiteShell>
  );
}
