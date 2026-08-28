import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteShell, t as PageIntro } from "./site-shell-CHa7hIjJ.mjs";
import { n as company } from "./data-G793Muqt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-Btg_yG0U.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "About us",
		title: "An India where no child’s ability to read, count and reason is decided by the pin code she is born in.",
		lede: "The vision describes the country, not the company’s ambition. That is deliberate. It is harder to reach and easier to be judged against."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 pb-16 space-y-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "Mission"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "We build learning tools that work on the devices families already own and in the schools that connectivity has not reached. We train the teachers who use them. We publish what children actually learn — including the years the numbers disappoint us."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [
					["Registered name", company.name],
					["Founded", String(company.founded)],
					["Office", company.hq],
					["Regional offices", company.offices.join(", ")],
					["People", `About ${company.employees}, of whom ${company.fieldStaff} are field and academic staff`],
					["Legal form", "Private limited company (hypothetical)"]
				].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-line bg-paper p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs uppercase tracking-wider text-muted",
						children: k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1",
						children: v
					})]
				}, k))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "The mark"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-3 space-y-2 text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Open book — learning stays the foundation. Technology serves the book." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Four rising bars — measured learning levels, not user growth." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Amber dot above the tallest bar — the last child still out of reach." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Indigo, amber, teal — trust, the foundational years, growth." })
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "Values"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-3 list-disc space-y-1 pl-5 text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Evidence before enthusiasm." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "The teacher is the customer, not the obstacle." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Reach the last child first." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Plain language: a parent who left school at Class 8 should be able to read what we publish." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Say the difficult number." })
				]
			})] })
		]
	})] });
}
//#endregion
export { AboutPage as component };
