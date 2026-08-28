import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { LearningChart, PledgeGapChart } from "@/components/learning-chart";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { t } from "@/lib/copy";
import { pledges, products, snapshot } from "@/lib/data";
import { usePrefs } from "@/store/prefs";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const copy = t(usePrefs((s) => s.lang));
  return (
    <SiteShell>
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14 grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">{copy.home.kicker}</p>
            <h1 className="mt-4 font-display text-3xl sm:text-5xl text-navy">{copy.home.headline}</h1>
            <p className="mt-5 max-w-xl text-lg text-muted">{copy.home.sub}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="primary" size="lg">
                <Link to="/behind">
                  {copy.home.ctaBehind} <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/sdg4">{copy.home.ctaSdg}</Link>
              </Button>
            </div>
          </div>
          <figure className="overflow-hidden rounded-lg border border-line">
            <img
              src="/photos/classroom.jpg"
              alt="Children reading in a government primary school classroom"
              className="h-full w-full object-cover aspect-[4/3] lg:aspect-auto lg:min-h-96"
            />
            <figcaption className="px-3 py-2 text-xs text-muted bg-cream">
              Illustrative field photograph. Partner-school classrooms look like this, not like a studio.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-4 sm:grid-cols-3">
          <Stat value="1.2 crore" label={copy.home.learners} />
          <Stat value="31,000" label={copy.home.schools} />
          <Stat value={`${snapshot.class5AtGrade}%`} label={copy.home.grade} note={copy.home.against} warn />
        </div>
        <p className="mt-6 font-display text-2xl text-navy">{copy.home.core}</p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14 grid gap-6 lg:grid-cols-2">
        <figure className="rounded-lg border border-line bg-paper p-4">
          <figcaption className="mb-2 font-medium">Learning by class in partner schools</figcaption>
          <LearningChart />
        </figure>
        <figure className="rounded-lg border border-line bg-paper p-4">
          <figcaption className="mb-2 font-medium">Today versus the 2030 pledge</figcaption>
          <PledgeGapChart />
          <p className="mt-2 text-xs text-muted">Amber is where we are. Teal is where we said we would be.</p>
        </figure>
      </section>

      <section className="bg-navy text-paper">
        <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-amber">Our work on SDG 4</p>
            <h2 className="mt-3 font-display text-3xl">Quality education, in the schools we actually serve.</h2>
            <p className="mt-4 text-paper/75">
              Vidyanta exists to improve what children learn in government and low-fee schools. That maps to four parts
              of the United Nations Quality Education goal: foundational learning, skills for work, equity for girls and
              underserved districts, and teacher support. We do not build classrooms, run scholarships or offer degrees.
              Other organisations do that work. We stay with reading, arithmetic, skills and teachers.
            </p>
            <Button asChild variant="invert" className="mt-6">
              <Link to="/pledges">
                See our public pledges <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <ul className="grid gap-3">
            {pledges.map((p) => (
              <li key={p.id} className="rounded-lg border border-paper/15 bg-ink px-4 py-3">
                <p className="text-xs font-semibold text-amber">{p.id}</p>
                <p className="font-medium">{p.title}</p>
                <p className="text-sm text-paper/70">{p.now}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-display text-3xl">What we sell</h2>
        <p className="mt-2 max-w-2xl text-muted">
          Not test-prep. Not degrees. Not premium parent tutoring. Tools for government and low-fee private schools.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {products.map((p, i) => (
            <article key={p.name} className="overflow-hidden rounded-lg border border-line bg-paper">
              <img
                src={i === 2 ? "/photos/teacher.jpg" : i === 1 ? "/photos/practice.jpg" : "/photos/classroom.jpg"}
                alt=""
                className="h-40 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="font-display text-xl">{p.name}</h3>
                <p className="mt-2 text-sm text-muted">{p.blurb}</p>
              </div>
            </article>
          ))}
        </div>
        <Button asChild variant="outline" className="mt-6">
          <Link to="/work">How the products map to SDG 4</Link>
        </Button>
      </section>
    </SiteShell>
  );
}

function Stat({
  value,
  label,
  note,
  warn,
}: {
  value: string;
  label: string;
  note?: string;
  warn?: boolean;
}) {
  return (
    <div className="rounded-lg border border-line bg-paper p-5">
      <p className={`font-display text-4xl tabular-nums ${warn ? "text-amber" : "text-teal"}`}>{value}</p>
      <p className="mt-2 text-sm text-navy">{label}</p>
      {note && <p className="mt-1 text-xs text-muted">{note}</p>}
    </div>
  );
}
