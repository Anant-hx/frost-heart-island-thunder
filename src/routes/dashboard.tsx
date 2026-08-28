import { createFileRoute } from "@tanstack/react-router";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { learningByClass, monthlyReach, snapshot } from "@/lib/data";

export const Route = createFileRoute("/dashboard")({ component: DashboardPage });

function DashboardPage() {
  function downloadCsv() {
    const rows = [
      ["class", "reading_pct", "arithmetic_pct"],
      ...learningByClass.map((r) => [r.classLabel, String(r.reading), String(r.arithmetic)]),
    ];
    const blob = new Blob([rows.map((r) => r.join(",")).join("\n")], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "vidyanta-learning-by-class.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <SiteShell>
      <PageIntro
        kicker="Live impact dashboard"
        title="Reach is never shown on its own."
        lede={`Updated ${snapshot.dashboardUpdated}. Downloads, app installs and video views are not on this page.`}
      />
      <div className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Tile k="Learners reached" v="1.2 crore" s="Active last 30 days included in method note" />
          <Tile k="Class 5 at grade level" v="61%" s="Pledge 80% by 2030" warn />
          <Tile k="Teachers trained" v="12,000" s="Still in programme two terms later" />
          <Tile k="Girls among learners" v="50%" s="Minimum under the equity pledge" />
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <figure className="rounded-lg border border-line bg-paper p-4">
            <figcaption className="mb-4 font-medium">Learning by class, partner schools</figcaption>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={learningByClass}>
                  <CartesianGrid stroke="#EDE4D4" vertical={false} />
                  <XAxis dataKey="classLabel" tick={{ fill: "#5B6A7A", fontSize: 12 }} />
                  <YAxis tick={{ fill: "#5B6A7A", fontSize: 12 }} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="reading" name="Reading %" fill="#1F7A72" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="arithmetic" name="Arithmetic %" fill="#1B2A4A" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </figure>
          <figure className="rounded-lg border border-line bg-paper p-4">
            <figcaption className="mb-4 font-medium">Learners reached (crore), 2026</figcaption>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyReach}>
                  <CartesianGrid stroke="#EDE4D4" vertical={false} />
                  <XAxis dataKey="month" tick={{ fill: "#5B6A7A", fontSize: 12 }} />
                  <YAxis tick={{ fill: "#5B6A7A", fontSize: 12 }} />
                  <Tooltip />
                  <Bar dataKey="learners" name="Crore learners" fill="#B56E0C" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </figure>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button type="button" onClick={downloadCsv} variant="outline">
            Download class-level CSV
          </Button>
          <p className="text-sm text-muted self-center">
            Method: NIPUN Bharat-aligned term assessments. Public figures are grouped. No child is identified.
          </p>
        </div>
      </div>
    </SiteShell>
  );
}

function Tile({ k, v, s, warn }: { k: string; v: string; s: string; warn?: boolean }) {
  return (
    <div className="rounded-lg border border-line bg-paper p-5">
      <p className="text-xs uppercase tracking-wider text-muted">{k}</p>
      <p className={`mt-2 font-display text-3xl tabular-nums ${warn ? "text-amber" : "text-navy"}`}>{v}</p>
      <p className="mt-1 text-sm text-muted">{s}</p>
    </div>
  );
}
