import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteShell, t as PageIntro } from "./site-shell-CHa7hIjJ.mjs";
import { c as pledges } from "./data-G793Muqt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pledges-CBu6dJul.js
var import_jsx_runtime = require_jsx_runtime();
function PledgesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Public pledges",
		title: "A pledge without a number, a date and a method is a sentiment.",
		lede: "Each pledge is written so an outsider can check it. Sentiments cannot be reported to a Board committee."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-5xl px-4 pb-16 grid gap-5 md:grid-cols-2",
		children: pledges.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "rounded-lg border border-line bg-paper p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs font-semibold uppercase tracking-wider text-teal",
					children: ["Target ", p.id]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-2xl",
					children: p.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted",
					children: p.pledge
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-5 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted",
							children: "Current position"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "font-medium",
							children: p.now
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted",
							children: "How it is measured"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: p.measure })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted",
							children: "Business line"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: p.line })] })
					]
				})
			]
		}, p.id))
	})] });
}
//#endregion
export { PledgesPage as component };
