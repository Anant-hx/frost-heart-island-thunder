import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteShell, t as PageIntro } from "./site-shell-CHa7hIjJ.mjs";
import { o as learningByClass, s as monthlyReach, u as snapshot } from "./data-G793Muqt.mjs";
import { t as Button } from "./button-cE6I9NG8.mjs";
import { a as Bar, c as Legend, i as CartesianGrid, n as YAxis, o as ResponsiveContainer, r as XAxis, s as Tooltip, t as BarChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-BfPXt-fN.js
var import_jsx_runtime = require_jsx_runtime();
function DashboardPage() {
	function downloadCsv() {
		const rows = [[
			"class",
			"reading_pct",
			"arithmetic_pct"
		], ...learningByClass.map((r) => [
			r.classLabel,
			String(r.reading),
			String(r.arithmetic)
		])];
		const blob = new Blob([rows.map((r) => r.join(",")).join("\n")], { type: "text/csv" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "vidyanta-learning-by-class.csv";
		a.click();
		URL.revokeObjectURL(url);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Live impact dashboard",
		title: "Reach is never shown on its own.",
		lede: `Updated ${snapshot.dashboardUpdated}. Downloads, app installs and video views are not on this page.`
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 pb-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
						k: "Learners reached",
						v: "1.2 crore",
						s: "Active last 30 days included in method note"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
						k: "Class 5 at grade level",
						v: "61%",
						s: "Pledge 80% by 2030",
						warn: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
						k: "Teachers trained",
						v: "12,000",
						s: "Still in programme two terms later"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
						k: "Girls among learners",
						v: "50%",
						s: "Minimum under the equity pledge"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-8 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "rounded-lg border border-line bg-paper p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "mb-4 font-medium",
						children: "Learning by class, partner schools"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-72",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
								data: learningByClass,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
										stroke: "#EDE4D4",
										vertical: false
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "classLabel",
										tick: {
											fill: "#5B6A7A",
											fontSize: 12
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, { tick: {
										fill: "#5B6A7A",
										fontSize: 12
									} }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
										dataKey: "reading",
										name: "Reading %",
										fill: "#1F7A72",
										radius: [
											4,
											4,
											0,
											0
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
										dataKey: "arithmetic",
										name: "Arithmetic %",
										fill: "#1B2A4A",
										radius: [
											4,
											4,
											0,
											0
										]
									})
								]
							})
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "rounded-lg border border-line bg-paper p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "mb-4 font-medium",
						children: "Learners reached (crore), 2026"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-72",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
								data: monthlyReach,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
										stroke: "#EDE4D4",
										vertical: false
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "month",
										tick: {
											fill: "#5B6A7A",
											fontSize: 12
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, { tick: {
										fill: "#5B6A7A",
										fontSize: 12
									} }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
										dataKey: "learners",
										name: "Crore learners",
										fill: "#B56E0C",
										radius: [
											4,
											4,
											0,
											0
										]
									})
								]
							})
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					onClick: downloadCsv,
					variant: "outline",
					children: "Download class-level CSV"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted self-center",
					children: "Method: NIPUN Bharat-aligned term assessments. Public figures are grouped. No child is identified."
				})]
			})
		]
	})] });
}
function Tile({ k, v, s, warn }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-line bg-paper p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-wider text-muted",
				children: k
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `mt-2 font-display text-3xl tabular-nums ${warn ? "text-amber" : "text-navy"}`,
				children: v
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: s
			})
		]
	});
}
//#endregion
export { DashboardPage as component };
