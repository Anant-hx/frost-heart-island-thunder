import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteShell, t as PageIntro } from "./site-shell-CHa7hIjJ.mjs";
import { d as stories } from "./data-G793Muqt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/stories-Dx3Ls2PP.js
var import_jsx_runtime = require_jsx_runtime();
function StoriesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Stories from the field",
		title: "Accounts with written consent. No child is named without a parent’s permission.",
		lede: "Field stories are not a substitute for the dashboard. They sit next to it."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-4xl px-4 pb-16 grid gap-6",
		children: stories.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "rounded-lg border border-line bg-paper p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display text-2xl leading-snug",
					children: [
						"“",
						s.quote,
						"”"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 font-medium",
					children: [
						s.who,
						" · ",
						s.role
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: s.place
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-xs text-muted",
					children: s.consent
				})
			]
		}, s.id))
	})] });
}
//#endregion
export { StoriesPage as component };
