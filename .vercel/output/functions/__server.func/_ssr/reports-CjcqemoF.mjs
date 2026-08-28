import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteShell, t as PageIntro } from "./site-shell-CHa7hIjJ.mjs";
import { r as corrections } from "./data-G793Muqt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reports-CjcqemoF.js
var import_jsx_runtime = require_jsx_runtime();
function ReportsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Reports and downloads",
		title: "The annual impact report is the document everything else points back to.",
		lede: "Published every June. Assured. Method and limitations included. Missed targets listed with met ones."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 pb-16 space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "divide-y divide-line rounded-lg border border-line bg-paper",
			children: [
				"Annual impact report 2025–26 (illustrative)",
				"External assurance statement (unedited)",
				"Methodology note: sample, instrument, confidence intervals",
				"Data protection policy (plain language)",
				"ASCI compliance statement"
			].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "px-4 py-4 text-sm",
				children: [item, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-2 text-muted",
					children: "· PDF in the class report annex"
				})]
			}, item))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "Correction log"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: "A changed number does not quietly replace an earlier one. The original figure is retained and struck through."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-6 space-y-4",
				children: corrections.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-lg border border-line bg-paper p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-teal",
							children: c.date
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "line-through text-muted",
									children: c.was
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mx-2",
									children: "→"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: c.now
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: c.why
						})
					]
				}, c.date))
			})
		] })]
	})] });
}
//#endregion
export { ReportsPage as component };
