import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteShell, t as PageIntro } from "./site-shell-CHa7hIjJ.mjs";
import { l as products } from "./data-G793Muqt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work-B-_o93on.js
var import_jsx_runtime = require_jsx_runtime();
function WorkPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "What we do",
		title: "Offline-first tools for the school that exists, not the one a product manager would prefer.",
		lede: "Roughly half of Indian schools still have no internet. A product that needs broadband has, by design, excluded them."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 pb-16 space-y-8",
		children: [products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "border-t border-line pt-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: p.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: p.blurb
			})]
		}, p.name)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "rounded-lg bg-mist p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "Who pays"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: "State education departments and district administrations buy at scale. Low-fee private school chains license per school. A free tier is available to any government school in India without charge. Direct-to-parent subscriptions are a minority of revenue and are priced to cross-subsidise the free government tier."
			})]
		})]
	})] });
}
//#endregion
export { WorkPage as component };
