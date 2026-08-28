import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteShell, t as PageIntro } from "./site-shell-CHa7hIjJ.mjs";
import { c as pledges } from "./data-G793Muqt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sdg4-BoWp7yvx.js
var import_jsx_runtime = require_jsx_runtime();
function Sdg4Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Our SDG 4 commitment",
		title: "Quality education is ten numbered targets. We work on four.",
		lede: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 pb-16 space-y-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "Why this matters in India"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "India has done the hard part of getting children into school. Almost every child of primary age is enrolled. In 2024, only 23 of every 100 rural Class 3 children could read a story written for Class 2. At Class 5 the figure was about 49 of 100. About one child in nine still leaves during Classes 9 and 10. India’s NITI Aayog score on Goal 4 is 61 out of 100. The gap is no longer buildings. It is learning."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "The four pledges"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-4 space-y-4",
					children: pledges.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-lg border border-line bg-paper p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs font-semibold text-teal",
								children: [
									"Target ",
									p.id,
									" · ",
									p.line
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-medium",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: p.pledge
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-navy",
								children: p.now
							})
						]
					}, p.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/pledges",
						className: "text-teal underline",
						children: "Full pledges, methods and current position"
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "How you can check us"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-3 list-disc space-y-2 pl-5 text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Every number appears on the impact dashboard, updated within ten working days of month close." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Underlying data can be downloaded as a spreadsheet." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Annual figures are checked by an external assurance partner and by an Academic Council of four education researchers who do not work for us." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "If numbers fall, they are published in the same place and format." })
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-lg bg-navy p-6 text-paper",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "What we do not claim"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-paper/80",
					children: "We do not claim to improve examination results, because we do not measure them. We do not claim that technology alone teaches a child. We do not claim to work on early childhood care, vocational degrees, scholarships or school buildings. Other organisations do that work. Some of them are our partners."
				})]
			})
		]
	})] });
}
//#endregion
export { Sdg4Page as component };
