import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, d as useRouterState, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { n as persist, r as create, t as createJSONStorage } from "../_libs/zustand.mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-shell-CHa7hIjJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Logo({ invert = false }) {
	const navy = invert ? "#FFFDF8" : "#1B2A4A";
	const amber = "#B56E0C";
	const teal = invert ? "#7BC4BC" : "#1F7A72";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: "flex items-center gap-3 min-h-11 shrink-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				width: "40",
				height: "40",
				viewBox: "0 0 64 64",
				"aria-hidden": "true",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M6 46c8-8 18-10 26-10s18 2 26 10",
						fill: "none",
						stroke: navy,
						strokeWidth: "4",
						strokeLinecap: "round"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M10 46c6-5 13-7 22-7s16 2 22 7",
						fill: navy,
						opacity: "0.15"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "16",
						y: "28",
						width: "7",
						height: "14",
						rx: "1.5",
						fill: amber
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "25",
						y: "22",
						width: "7",
						height: "20",
						rx: "1.5",
						fill: amber
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "34",
						y: "16",
						width: "7",
						height: "26",
						rx: "1.5",
						fill: teal
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "43",
						y: "10",
						width: "7",
						height: "32",
						rx: "1.5",
						fill: teal
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "46.5",
						cy: "6.5",
						r: "3.2",
						fill: amber
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "leading-tight",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `block font-display text-lg tracking-tight ${invert ? "text-paper" : "text-navy"}`,
					children: "Vidyanta"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `hidden sm:block text-xs ${invert ? "text-paper/70" : "text-muted"}`,
					children: "Learning that reaches everyone"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Vidyanta home"
			})
		]
	});
}
var ui = {
	en: {
		demo: "Hypothetical company for IIM Rohtak WAC · Section B Group 8. Company figures are illustrative.",
		nav: {
			work: "What we do",
			sdg: "SDG 4",
			pledges: "Pledges",
			dashboard: "Dashboard",
			behind: "Where we are behind",
			stories: "Stories",
			reports: "Reports",
			parents: "Parents",
			teachers: "Teachers",
			investors: "Investors",
			news: "Newsroom",
			about: "About",
			menu: "Menu"
		},
		home: {
			kicker: "United Nations Sustainable Development Goal 4",
			headline: "A child in Class 3 who cannot read is not a statistic. She is the whole problem.",
			sub: "Vidyanta builds learning tools for schools that connectivity has not reached, trains the teachers who use them, and publishes what children actually learn. We name the four targets we are answerable for.",
			ctaBehind: "See where we are behind",
			ctaSdg: "Read our SDG 4 commitment",
			learners: "Learners reached",
			schools: "Partner schools",
			grade: "Class 5 at grade level",
			against: "against a 2030 pledge of 80%",
			core: "We measure learning, not downloads."
		},
		footer: {
			tag: "Learning that reaches everyone",
			note: "Vidyanta Learning Private Limited is a hypothetical company created for a written analysis of communication assignment. Industry data is drawn from ASER, UDISE+, NITI Aayog, UNESCO and the World Bank.",
			privacy: "Children’s data is not tracked. Learner pages carry no advertising pixels."
		},
		liteOn: "Lite on",
		liteOff: "Lite"
	},
	hi: {
		demo: "आईआईएम रोहतक WAC के लिए काल्पनिक कंपनी · सेक्शन B ग्रुप 8. कंपनी के आँकड़े उदाहरण मात्र हैं.",
		nav: {
			work: "हम क्या करते हैं",
			sdg: "एसडीजी 4",
			pledges: "प्रतिबद्धताएँ",
			dashboard: "डैशबोर्ड",
			behind: "जहाँ हम पीछे हैं",
			stories: "कहानियाँ",
			reports: "रिपोर्ट",
			parents: "अभिभावक",
			teachers: "शिक्षक",
			investors: "निवेशक",
			news: "समाचार कक्ष",
			about: "हमारे बारे में",
			menu: "मेनू"
		},
		home: {
			kicker: "संयुक्त राष्ट्र सतत विकास लक्ष्य 4",
			headline: "कक्षा 3 की बच्ची जो पढ़ नहीं सकती, कोई आँकड़ा नहीं है. वही पूरी समस्या है.",
			sub: "विद्यंत ऐसे स्कूलों के लिए सीखने के औज़ार बनाता है जहाँ नेटवर्क नहीं पहुँचा, शिक्षकों को प्रशिक्षित करता है, और यह छापता है कि बच्चे सच में क्या सीखे. हम चार लक्ष्यों का ही दावा करते हैं.",
			ctaBehind: "देखें हम कहाँ पीछे हैं",
			ctaSdg: "एसडीजी 4 की प्रतिबद्धता पढ़ें",
			learners: "पहुँचे शिक्षार्थी",
			schools: "साझेदार स्कूल",
			grade: "कक्षा 5 स्तर पर",
			against: "2030 का वादा 80%",
			core: "हम सीख मापते हैं, डाउनलोड नहीं."
		},
		footer: {
			tag: "सीखना जो सब तक पहुँचे",
			note: "विद्यंत लर्निंग प्राइवेट लिमिटेड एक काल्पनिक कंपनी है. उद्योग के आँकड़े ASER, UDISE+, नीति आयोग, यूनेस्को और विश्व बैंक से हैं.",
			privacy: "बच्चों का डेटा ट्रैक नहीं होता. शिक्षार्थी पृष्ठों पर विज्ञापन पिक्सेल नहीं हैं."
		},
		liteOn: "लाइट चालू",
		liteOff: "लाइट"
	}
};
function t(lang) {
	return ui[lang];
}
var memory = {
	getItem: () => null,
	setItem: () => {},
	removeItem: () => {}
};
var usePrefs = create()(persist((set) => ({
	lang: "en",
	lite: false,
	setLang: (lang) => set({ lang }),
	toggleLite: () => set((s) => ({ lite: !s.lite }))
}), {
	name: "vidyanta-prefs",
	storage: createJSONStorage(() => typeof window === "undefined" ? memory : localStorage)
}));
function SiteFooter() {
	const copy = t(usePrefs((s) => s.lang));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-16 border-t border-line bg-navy text-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { invert: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-md text-sm text-paper/75",
						children: copy.footer.note
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-wider text-amber",
					children: "On this site"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/sdg4",
							className: "hover:underline",
							children: "SDG 4"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/dashboard",
							className: "hover:underline",
							children: "Live dashboard"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/reports",
							className: "hover:underline",
							children: "Reports"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/investors",
							className: "hover:underline",
							children: "Investors"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-wider text-amber",
					children: "People"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/parents",
							className: "hover:underline",
							children: "Parents"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/teachers",
							className: "hover:underline",
							children: "Teachers"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/stories",
							className: "hover:underline",
							children: "Field stories"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/newsroom",
							className: "hover:underline",
							children: "Newsroom"
						}) })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-paper/10 px-4 py-4 text-center text-xs text-paper/60",
			children: copy.footer.privacy
		})]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var primary = [
	{
		to: "/sdg4",
		key: "sdg"
	},
	{
		to: "/pledges",
		key: "pledges"
	},
	{
		to: "/dashboard",
		key: "dashboard"
	},
	{
		to: "/behind",
		key: "behind"
	},
	{
		to: "/parents",
		key: "parents"
	},
	{
		to: "/teachers",
		key: "teachers"
	},
	{
		to: "/newsroom",
		key: "news"
	},
	{
		to: "/about",
		key: "about"
	}
];
var extra = [
	{
		to: "/work",
		key: "work"
	},
	{
		to: "/stories",
		key: "stories"
	},
	{
		to: "/reports",
		key: "reports"
	},
	{
		to: "/investors",
		key: "investors"
	}
];
function SiteHeader() {
	const lang = usePrefs((s) => s.lang);
	const setLang = usePrefs((s) => s.setLang);
	const lite = usePrefs((s) => s.lite);
	const toggleLite = usePrefs((s) => s.toggleLite);
	const copy = t(lang);
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.toggle("lite", lite);
		document.documentElement.lang = lang === "hi" ? "hi" : "en";
	}, [lite, lang]);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-line bg-cream/95 backdrop-blur-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-navy text-paper px-4 py-2 text-center text-xs sm:text-sm",
				children: copy.demo
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 shrink-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setLang(lang === "en" ? "hi" : "en"),
							className: "min-h-11 rounded-md border border-line px-3 text-sm",
							"aria-label": "Switch language",
							children: lang === "en" ? "हिंदी" : "English"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: toggleLite,
							className: cn("min-h-11 rounded-md border border-line px-3 text-sm hidden sm:inline-flex items-center", lite && "bg-sand"),
							children: lite ? copy.liteOn : copy.liteOff
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "md:hidden min-h-11 min-w-11 inline-flex items-center justify-center rounded-md border border-line",
							onClick: () => setOpen((v) => !v),
							"aria-expanded": open,
							"aria-label": copy.nav.menu,
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "hidden md:block border-t border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex max-w-6xl flex-wrap items-center gap-1 px-4 py-1",
					children: primary.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: cn("rounded-md px-3 py-2 min-h-11 inline-flex items-center text-sm text-muted hover:text-navy", pathname === l.to && "text-navy bg-sand"),
						children: copy.nav[l.key]
					}, l.to))
				})
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "md:hidden border-t border-line bg-paper px-4 py-3 grid gap-1",
				children: [...primary, ...extra].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					className: "min-h-11 flex items-center rounded-md px-2 text-navy hover:bg-sand",
					children: copy.nav[l.key]
				}, l.to))
			})
		]
	});
}
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col bg-cream text-navy",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function PageIntro({ kicker, title, lede }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mx-auto max-w-3xl px-4 pt-12 pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold uppercase tracking-[0.16em] text-teal",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-3xl sm:text-4xl text-navy",
				children: title
			}),
			lede && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lg text-muted",
				children: lede
			})
		]
	});
}
//#endregion
export { usePrefs as a, t as i, SiteShell as n, cn as r, PageIntro as t };
