import type { Lang } from "@/store/prefs";

const en = {
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
    menu: "Menu",
  },
  home: {
    kicker: "United Nations Sustainable Development Goal 4",
    headline: "If a child in Class 3 cannot read, the system has already failed her.",
    sub: "Vidyanta builds learning tools for schools that connectivity has not reached, trains the teachers who use them, and publishes what children actually learn.",
    ctaBehind: "See where we are behind",
    ctaSdg: "Read our SDG 4 commitment",
    learners: "Learners reached",
    schools: "Partner schools",
    grade: "Class 5 at grade level",
    against: "against a 2030 pledge of 80%",
    core: "We measure learning, not downloads.",
  },
  footer: {
    tag: "Learning that reaches everyone",
    note: "Vidyanta Learning Private Limited is a hypothetical company created for a written analysis of communication assignment. Industry data is drawn from ASER, UDISE+, NITI Aayog, UNESCO and the World Bank.",
    privacy: "Children’s data is not tracked. Learner pages carry no advertising pixels.",
  },
  liteOn: "Lite on",
  liteOff: "Lite",
};

const hi = {
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
    menu: "मेनू",
  },
  home: {
    kicker: "संयुक्त राष्ट्र सतत विकास लक्ष्य 4",
    headline: "अगर कक्षा 3 की बच्ची पढ़ नहीं सकती, तो व्यवस्था पहले ही नाकाम हो चुकी है.",
    sub: "विद्यंत ऐसे स्कूलों के लिए सीखने के औज़ार बनाता है जहाँ नेटवर्क नहीं पहुँचा, शिक्षकों को प्रशिक्षित करता है, और यह छापता है कि बच्चे सच में क्या सीखे.",
    ctaBehind: "देखें हम कहाँ पीछे हैं",
    ctaSdg: "एसडीजी 4 की प्रतिबद्धता पढ़ें",
    learners: "पहुँचे शिक्षार्थी",
    schools: "साझेदार स्कूल",
    grade: "कक्षा 5 स्तर पर",
    against: "2030 का वादा 80%",
    core: "हम सीख मापते हैं, डाउनलोड नहीं.",
  },
  footer: {
    tag: "सीखना जो सब तक पहुँचे",
    note: "विद्यंत लर्निंग प्राइवेट लिमिटेड एक काल्पनिक कंपनी है. उद्योग के आँकड़े ASER, UDISE+, नीति आयोग, यूनेस्को और विश्व बैंक से हैं.",
    privacy: "बच्चों का डेटा ट्रैक नहीं होता. शिक्षार्थी पृष्ठों पर विज्ञापन पिक्सेल नहीं हैं.",
  },
  liteOn: "लाइट चालू",
  liteOff: "लाइट",
};

export const ui = { en, hi };

export function t(lang: Lang) {
  return ui[lang];
}
