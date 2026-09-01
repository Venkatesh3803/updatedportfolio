import tmdb from "../assets/images/2023-05-27 (2).png";
import writewave from "../assets/images/writewave.png";
import dressup from "../assets/images/dressup.png";
import crowdfunding from "../assets/images/crowdfunding.png";
import pdfengine from "../assets/images/pdfengine.svg";

const projectsData = [
  {
    id: 5,
    image: pdfengine,
    title: "PDF Engine",
    shortDesc:
      "I got tired of ad-heavy PDF sites for simple merges — so I built a clean, client-side tool that just works. No uploads leave the browser if it doesn't need to.",
    description:
      "Most PDF tools are either slow or plastered with ads. I needed something I could trust for personal docs — so I built PDF Engine as a small, honest utility.\n\nWhy I built it:\nI was merging offer letters / resumes / college PDFs constantly and hated waiting for server uploads. The idea was: do as much as possible in the browser, keep the UI quiet, no dark patterns.\n\nWhat I actually shipped:\n— Create PDFs from scratch with clean formatting\n— Merge / organize / preview files without leaving the page\n— Fast client-side processing so it feels instant, even on mobile\n— A deliberately boring UI — white space, paper textures, zero clutter\n\nWhat was tricky:\nHandling large files without freezing the tab. I had to chunk processing and add fallbacks for memory-heavy docs. Also learned the hard way that PDF rendering quirks differ across browsers.\n\nIf I rebuilt it today I'd add proper drag-to-reorder, text extraction, and offline PWA support.",
    gitHub: "",
    liveProject: "https://pdf-engine-client.vercel.app/",
    technologies: "React Js",
    // enriched fields for case study page
    year: "2024",
    category: "Utility — Client-side",
    role: "Solo — Design + Frontend",
    team: "Solo",
    status: "Live",
    timeline: "3 weeks, nights & weekends",
    stack: ["React", "Canvas / PDF APIs", "Vercel"],
    highlights: [
      "Client-side processing — no server upload for core ops",
      "Mobile-first, works on low-end devices",
      "Deliberately minimal — no ads, no upsell",
    ],
  },
  {
    id: 1,
    image: tmdb,
    title: "TMDB Clone",
    shortDesc:
      "My first serious React project. I wanted to really understand APIs, caching and search — not just follow a tutorial. Rebuilt TMDB's core flows with the real API.",
    description:
      "This was my 'learn React properly' project. Instead of another todo app, I picked TMDB because it's real API, real images, real pagination — and it forces you to think about UX.\n\nWhy this, not a simpler clone:\nI wanted to hit the boring-but-important stuff: debounced search, caching, handling missing posters, rating normalisation, and keeping navigation snappy with lots of images.\n\nWhat I built:\n— Movie & TV database with live TMDB API integration — always up-to-date\n— Search + filters (genre, year, rating) that don't feel laggy\n— Detail pages: cast, crew, trailers, ratings — with fallbacks when data is sparse\n— Community ratings/reviews UI so it feels lived-in, not static\n\nWhat I learned:\nImage optimisation matters more than I thought — lazy-loading + placeholders saved the UX. And API limits teach you to cache aggressively and fail gracefully.\n\nHonest note: this codebase is 2023-me. It works, but I'd rewrite data-fetching with TanStack Query and add proper skeletons today.",
    gitHub: "https://github.com/Venkatesh3803/reactTMDBclone",
    liveProject: "https://tmdbclone2.netlify.app",
    technologies: "React Js",
    year: "2023",
    category: "Frontend — API heavy",
    role: "Solo — Frontend",
    team: "Solo",
    status: "Live",
    timeline: "4 weeks — first major React project",
    stack: ["React", "TMDB API", "Netlify"],
    highlights: [
      "Real API integration, not mocked data",
      "Debounced search & filters",
      "Handles missing / broken media gracefully",
    ],
  },
  {
    id: 2,
    image: dressup,
    title: "Dress Up",
    shortDesc:
      "A full MERN store I built to force myself to do e-commerce properly — auth, cart, search, checkout, state that doesn't fall apart after refresh.",
    description:
      "Dress Up started as 'let's make a shopping site' and turned into a lesson in state management. Easy to fake a store with static data; hard to make auth, cart, and orders play nice together.\n\nWhat I forced myself to ship properly:\n— Catalog with images, variants, and real filtering — not just mocked cards\n— Cart that persists, updates quantities, handles out-of-stock without jank\n— Redux Toolkit as single source of truth — so checkout doesn't lose state\n— Auth (register/login) with protected routes for cart & orders\n— Responsive checkout that works on a cheap Android phone — because that's where most users are\n— REST APIs for catalog / cart / orders — designed before I wrote the UI\n\nHard parts:\nInventory edge cases (what if two people buy the last size M?). Getting Redux slices right took two rewrites. And making the UI feel fast while images load was a real exercise in skeletons + caching.\n\nTakeaway: I now sketch the data flow before I touch Tailwind. Saves days.",
    gitHub: "https://github.com/Venkatesh3803/dressup-frontend",
    liveProject: "https://dress-up.onrender.com/",
    technologies: "MERN Stack | Redux Toolkit",
    year: "2023",
    category: "E-commerce — Full Stack",
    role: "Solo — Full stack",
    team: "Solo",
    status: "Live on Render (cold start → ~30s)",
    timeline: "5–6 weeks",
    stack: ["MongoDB", "Express", "React", "Node", "Redux Toolkit"],
    highlights: [
      "Persisted cart + orders",
      "Redux Toolkit state, no prop-drilling",
      "Auth + protected checkout flow",
    ],
  },
  {
    id: 3,
    image: crowdfunding,
    title: "We The People",
    shortDesc:
      "Crowdfunding is about trust — money + stories. I built this to practice auth, roles, and campaign workflows where an edge case actually costs someone.",
    description:
      "I wanted to build something where data modelling really matters. Crowdfunding has users, campaigns, contributions, updates — and you can't afford sloppy permissions.\n\nHow I approached it:\n— Designed the API first: auth, campaign CRUD, contribution flow, and who can see/edit what\n— Built proper auth + role checks — because 'my campaign vs someone else's campaign' should be obvious in code, not just UI\n— Campaign create / edit / manage with validation that doesn't let you publish half-baked pages\n— Contributions tracked cleanly so totals and history don't drift\n— React UI that's calm and readable — people donate when they understand, not when they're dazzled\n— MongoDB schemas modelled for growth: users, campaigns, contributions as separate, indexed collections\n\nWhat bit me:\nRace conditions on contributions if you don't think about it. And keeping campaign status (draft / active / closed) consistent across frontend and backend.\n\nIf I did it again: add webhooks-style updates, better admin view, and proper email receipts (I faked them).",
    gitHub: "https://github.com/Venkatesh3803/crowdfund-frontend",
    liveProject: "https://crowdfunding-b2f1.onrender.com/",
    technologies: "React | Node | Express | MongoDB",
    year: "2024",
    category: "Platform — Full Stack",
    role: "Solo — Full stack",
    team: "Solo",
    status: "Live on Render",
    timeline: "4–5 weeks",
    stack: ["React", "Node", "Express", "MongoDB", "JWT Auth"],
    highlights: [
      "Role-aware campaign ownership",
      "Clean contribution ledger",
      "Indexed MongoDB models for scale",
    ],
  },
  {
    id: 4,
    image: writewave,
    title: "WriteWave",
    shortDesc:
      "A quiet blogging app. I was bored of Medium clones with the same card grid — so I made an editor and reader that feel like paper, not a dashboard.",
    description:
      "WriteWave is a small, opinionated writing app. Not Notion, not Medium — just write, save, publish, read.\n\nWhat I cared about:\n— Editor that stays out of the way — no 20 toolbars, just type\n— Draft → publish flow that feels intentional, not accidental\n— Reader view with good typography — because blogs fail if they hurt to read\n— Auth + personal dashboards, so your drafts are actually yours\n— Backend APIs for auth & posts that are boring in the best way — predictable, validated, tested by hand\n— Mongo collections that keep users and posts separate but easy to query\n\nDetails I enjoyed:\nGetting line-height and measure (ch) right so long posts don't tire the eyes. And making the app feel quick even on slow mobile data.\n\nNext time: collaborative editing is tempting but I'd rather add tags, bookmarks, and a proper search first.",
    gitHub: "https://github.com/Venkatesh3803/writewave_frontend",
    liveProject: "https://writewave-tk7r.onrender.com/",
    technologies: "MERN Stack",
    year: "2023–24",
    category: "Content — MERN",
    role: "Solo — Full stack",
    team: "Solo",
    status: "Live on Render",
    timeline: "3–4 weeks",
    stack: ["MongoDB", "Express", "React", "Node"],
    highlights: [
      "Distraction-free editor",
      "Reader-first typography",
      "Draft/publish lifecycle",
    ],
  },
];

export default projectsData;
