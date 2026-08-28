import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { districtsAhead, districtsBehind } from "@/lib/data";

export const Route = createFileRoute("/behind")({ component: BehindPage });

function BehindPage() {
  return (
    <SiteShell>
      <PageIntro
        kicker="Where we are behind"
        title="A report that only carries the good districts is an advertisement."
        lede="Five districts have been below the programme average for two years. They are named here, with the change we are making in each. Nobody in these districts is in trouble for the number. If naming a district got somebody into trouble, the next thing that would happen is that the data would stop being accurate."
      />
      <div className="mx-auto max-w-5xl px-4 pb-16">
        <div className="overflow-x-auto rounded-lg border border-line bg-paper">
          <table className="w-full min-w-[32rem] text-left text-sm">
            <thead className="bg-navy text-paper">
              <tr>
                <th className="px-4 py-3 font-medium">District</th>
                <th className="px-4 py-3 font-medium">State</th>
                <th className="px-4 py-3 font-medium">Class 5 at grade level</th>
                <th className="px-4 py-3 font-medium">What is changing</th>
              </tr>
            </thead>
            <tbody>
              {districtsBehind.map((d) => (
                <tr key={d.name} className="border-t border-line">
                  <td className="px-4 py-3 font-medium">{d.name}</td>
                  <td className="px-4 py-3">{d.state}</td>
                  <td className="px-4 py-3 tabular-nums text-amber">{d.figure}</td>
                  <td className="px-4 py-3 text-muted">{d.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="mt-12 font-display text-2xl">Where the number moved</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {districtsAhead.map((d) => (
            <li key={d.name} className="rounded-lg border border-line bg-paper p-4">
              <p className="font-medium">
                {d.name}, {d.state}
              </p>
              <p className="text-teal">{d.gain} in two years</p>
            </li>
          ))}
        </ul>
      </div>
    </SiteShell>
  );
}
