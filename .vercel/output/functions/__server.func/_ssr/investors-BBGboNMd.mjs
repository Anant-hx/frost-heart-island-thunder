import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteShell, t as PageIntro } from "./site-shell-CHa7hIjJ.mjs";
import { t as channels } from "./data-G793Muqt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/investors-BBGboNMd.js
var import_jsx_runtime = require_jsx_runtime();
function InvestorsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Investors and the Board",
		title: "Measured learning outcomes are the competitive moat and the defence against a tightening advertising regime.",
		lede: "Impact is presented as a lead indicator of contract renewal, not as a separate charitable section."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 pb-16 space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "rounded-lg border border-line bg-paper p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-wider text-teal",
				children: "Quarterly investor letter · extract"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "Revenue mix remains weighted to government contracts and low-fee licences. The Class 5 grade-level figure moved from 54% to 61% in two years. Five districts are named on the public dashboard as below average for a second year. We would rather be asked hard questions about five districts than be trusted for the wrong reasons about thirty-one thousand schools."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-2xl",
			children: "How the message is carried"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-4 grid gap-3",
			children: channels.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-lg border border-line bg-paper p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-medium",
					children: [
						c.name,
						" · ",
						c.share
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: c.detail
				})]
			}, c.name))
		})] })]
	})] });
}
//#endregion
export { InvestorsPage as component };
