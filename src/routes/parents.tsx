import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/parents")({ component: ParentsPage });

function ParentsPage() {
  return (
    <SiteShell>
      <PageIntro
        kicker="For parents"
        title="Free in your school, in your language. You will hear what your child learned every term."
        lede="You do not need an app login. The school captures consent. Messages come as text, a voice note, or a phone call."
      />
      <div className="mx-auto max-w-3xl px-4 pb-16 space-y-8">
        <img
          src="/photos/parent.jpg"
          alt="A parent and child looking at a mobile phone together"
          className="w-full rounded-lg border border-line object-cover aspect-[4/3]"
        />
        <article className="rounded-lg border border-line bg-paper p-5">
          <p className="text-xs uppercase tracking-wider text-teal">Sample WhatsApp · Odia voice also sent</p>
          <p className="mt-3">
            Namaste. This is Vidyanta, from your child’s school. This term Meera can read a Class 2 story without
            stopping. She still finds subtraction with borrowing hard. Try ten minutes with 43 − 18 using pebbles or
            matchsticks. This message is free. Reply HELP for the helpline.
          </p>
        </article>
        <section>
          <h2 className="font-display text-2xl">What we promise you</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
            <li>The government-school version costs you nothing.</li>
            <li>You choose the language at enrolment. We do not write to you in a language you did not pick.</li>
            <li>Your child’s name is not published. Progress is sent only to the parent who consented.</li>
            <li>Community radio series “The Last Child” explains foundational literacy in local languages.</li>
            <li>Toll-free number and WhatsApp helpline, staffed in nine languages.</li>
          </ul>
        </section>
      </div>
    </SiteShell>
  );
}
