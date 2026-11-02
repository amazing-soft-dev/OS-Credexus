export const company = {
  name: "Credexus",
  email: "hello@credexus.org",
  lede: "Credexus introduces engineers from Canada, Latin America, Europe, and Asia to Fortune 500 companies and startups that are already working.",
} as const;

export type PhotoCredit = {
  photographer: string;
  page: string;
};

export const hero = {
  image: "/images/hero.jpg",
  alt: "A woman in an orange blazer seated in a blue chair against a warm gold studio backdrop.",
  credit: {
    photographer: "Tochukwu Ekeh",
    page: "https://www.pexels.com/photo/portrait-of-confident-professional-woman-in-orange-blazer-32303053/",
  },
} as const satisfies { image: string; alt: string; credit: PhotoCredit };

export const nav = [
  { to: "/", label: "Home", index: "01" },
  { to: "/about", label: "About", index: "02" },
  { to: "/disciplines", label: "Disciplines", index: "03" },
  { to: "/notes", label: "Notes", index: "04" },
] as const;

export const hiringRegions = [
  { value: "canada", label: "Canada" },
  { value: "latam", label: "Latin America" },
  { value: "europe", label: "Europe" },
  { value: "asia", label: "Asia" },
  { value: "any", label: "No preference" },
] as const;

export type HiringRegion = (typeof hiringRegions)[number]["value"];

export const regions = [
  {
    slug: "canada",
    name: "Canada",
    image: "/images/region-canada.jpg",
    alt: "Daylight view of the Vancouver marina, with boats in front of downtown towers.",
    credit: {
      photographer: "William Jacobs",
      page: "https://www.pexels.com/photo/vancouver-waterfront-and-marina-with-cityscape-39056747/",
    },
    summary:
      "Product engineers and specialists who are used to working with US and Canadian companies, often overlapping a full business day.",
  },
  {
    slug: "latam",
    name: "Latin America",
    image: "/images/region-latam.jpg",
    alt: "A daylight street in Medellín, with brick houses climbing the hillside behind it.",
    credit: {
      photographer: "Palu Malerba",
      page: "https://www.pexels.com/photo/houses-on-mountain-at-the-city-of-medellin-in-antioquia-colombia-14202433/",
    },
    summary:
      "Engineers across Mexico, Brazil, Argentina, Colombia, and the wider region, hired for proximity to North American hours.",
  },
  {
    slug: "europe",
    name: "Europe",
    image: "/images/region-europe.jpg",
    alt: "A sunlit stone street in Lisbon, with tram tracks and pale stone buildings.",
    credit: {
      photographer: "Uğurcan Özmen",
      page: "https://www.pexels.com/photo/sunlit-urban-street-scene-in-lisbon-portugal-28553922/",
    },
    summary:
      "Senior engineers from across the continent, including people who have already shipped inside regulated industries.",
  },
  {
    slug: "asia",
    name: "Asia",
    image: "/images/region-asia.jpg",
    alt: "Daylight aerial view of Tokyo, with Tokyo Tower among dense towers.",
    credit: {
      photographer: "Robert Schwarz",
      page: "https://www.pexels.com/photo/tokyo-city-skyline-featuring-iconic-tower-32654991/",
    },
    summary:
      "Engineers who extend a team's day, or who own a region of the product outright, from South, Southeast, and East Asia.",
  },
] as const;

export const disciplineSlugs = [
  "frontend",
  "backend",
  "fullstack",
  "mobile",
  "data",
  "ai",
  "salesforce",
  "gis",
] as const;

export type DisciplineSlug = (typeof disciplineSlugs)[number];

export type DisciplineLayout = "portrait" | "square" | "wide" | "landscape";

export type Discipline = {
  slug: DisciplineSlug;
  name: string;
  number: string;
  summary: string;
  image: string;
  alt: string;
  credit: PhotoCredit;
  layout: DisciplineLayout;
  intro: string;
  looksLike: string[];
  companiesAsk: string;
};

export const disciplines: Discipline[] = [
  {
    slug: "frontend",
    name: "Frontend",
    number: "01",
    summary: "Interfaces that stay clear when the product gets complicated.",
    image: "/images/discipline-frontend.jpg",
    alt: "A person drawing on a tablet beside a laptop showing design layouts, on a bright desk.",
    credit: {
      photographer: "Antoni Shkraba",
      page: "https://www.pexels.com/photo/woman-working-with-laptop-in-office-4348394/",
    },
    layout: "portrait",
    intro:
      "Frontend engineers at Credexus build the surface customers actually touch. We introduce people who can hold a design system, a rendering model, and the awkward states in between.",
    looksLike: [
      "React and TypeScript as a default, with the judgment to leave them when the product needs something else",
      "Accessible interface work, not a checklist added at the end",
      "Design systems, performance, and the states that are not in the mock",
    ],
    companiesAsk:
      "Companies usually come to us when a product has outgrown a single generalist. They want someone who can sit with design, ship the interface, and leave the codebase easier to change.",
  },
  {
    slug: "backend",
    name: "Backend",
    number: "02",
    summary: "Services, data, and the parts of the product nobody sees until they fail.",
    image: "/images/discipline-backend.jpg",
    alt: "A data-center aisle lined with server racks and a rolling terminal.",
    credit: {
      photographer: "Brett Sayles",
      page: "https://www.pexels.com/photo/server-racks-on-data-center-4508751/",
    },
    layout: "square",
    intro:
      "Backend engineers here own APIs, data stores, and the operational shape of a system. The introduction is about how they debug a production incident, not how many frameworks they can name.",
    looksLike: [
      "Service design, data modeling, and queues that match the actual load",
      "Languages and frameworks chosen for the team already in the building",
      "Reliability work: tracing, failure modes, and migrations that can be reversed",
    ],
    companiesAsk:
      "The brief is usually a system that has started to creak. They want an engineer who can add the next capability without turning the platform into a second product.",
  },
  {
    slug: "fullstack",
    name: "Full stack",
    number: "03",
    summary: "Engineers who can take a slice of the product from the schema to the screen.",
    image: "/images/discipline-fullstack.jpg",
    alt: "Two monitors showing code, with a keyboard on the desk in front of them.",
    credit: {
      photographer: "Jakub Zerdzicki",
      page: "https://www.pexels.com/photo/modern-workspace-with-coding-screens-and-keyboard-34212896/",
    },
    layout: "wide",
    intro:
      "Full stack, for us, means an engineer who can ship a vertical slice and knows when to ask for a specialist. It is not a claim that one person replaces a team.",
    looksLike: [
      "A working product sense: what to cut, what to instrument, what to leave",
      "Comfort on both sides of the request, with a stronger side they can name",
      "Enough operational care to deploy what they build",
    ],
    companiesAsk:
      "Startups ask for a full stack engineer when the next hire has to cover more than one surface. Larger companies ask when a squad needs someone who can move a feature without waiting on three handoffs.",
  },
  {
    slug: "mobile",
    name: "Mobile",
    number: "04",
    summary: "iOS, Android, and cross-platform work that still feels native.",
    image: "/images/discipline-mobile.jpg",
    alt: "Close view of a smartphone screen filled with app icons.",
    credit: {
      photographer: "Nothing Ahead",
      page: "https://www.pexels.com/photo/close-up-shot-of-mobile-apps-8296105/",
    },
    layout: "portrait",
    intro:
      "Mobile introductions start with the platform the company actually ships. We do not treat iOS, Android, and React Native as interchangeable labels.",
    looksLike: [
      "Native iOS or Android when the product depends on platform behavior",
      "React Native or similar when one team has to cover both stores",
      "Release discipline: store review, crash reporting, and offline states",
    ],
    companiesAsk:
      "The useful brief names the store, the current stack, and whether the hire will be the first mobile engineer or one more on a team that already has a release train.",
  },
  {
    slug: "data",
    name: "Data",
    number: "05",
    summary: "Models, pipelines, and the people who make a number trustworthy.",
    image: "/images/discipline-data.jpg",
    alt: "Hands holding a phone with charts, beside printed graphs and a laptop.",
    credit: {
      photographer: "Tima Miroshnichenko",
      page: "https://www.pexels.com/photo/hands-holding-a-smartphone-with-data-on-screen-7567443/",
    },
    layout: "landscape",
    intro:
      "Data engineers and analytics engineers here are hired to make a company's numbers boring. The work is modeling, pipelines, and the definitions everyone else argues about.",
    looksLike: [
      "Warehouses, transformation layers, and pipelines that can be rerun",
      "A clear line between analytics engineering and product analysis",
      "Care for definitions: what a metric includes, and what it refuses to include",
    ],
    companiesAsk:
      "Companies ask when a dashboard is no longer believed. They need someone who can repair the model and explain it to the people who use it.",
  },
  {
    slug: "ai",
    name: "AI",
    number: "06",
    summary: "Applied machine learning that has to live in a product, not a demo.",
    image: "/images/discipline-ai.jpg",
    alt: "A software engineer working at a computer with code on the screens.",
    credit: {
      photographer: "ThisIsEngineering",
      page: "https://www.pexels.com/photo/female-software-engineer-coding-on-computer-3861972/",
    },
    layout: "square",
    intro:
      "AI hiring at Credexus is for systems that have to be evaluated, monitored, and changed. We introduce engineers who have put a model in front of users and stayed for what happened next.",
    looksLike: [
      "Retrieval, evaluation, and the unglamorous work of bad outputs",
      "Product integration: latency, cost, and a fallback when the model is wrong",
      "Enough research literacy to know when a paper is not a plan",
    ],
    companiesAsk:
      "The brief should say what the system is allowed to get wrong. That tells us whether you need an applied engineer, a researcher, or both.",
  },
  {
    slug: "salesforce",
    name: "Salesforce",
    number: "07",
    summary: "CRM work for companies whose process is the product.",
    image: "/images/discipline-salesforce.jpg",
    alt: "A woman at a laptop in an office, with a chart on the board behind her.",
    credit: {
      photographer: "ANTONI SHKRABA",
      page: "https://www.pexels.com/photo/portrait-of-woman-working-in-office-8278980/",
    },
    layout: "landscape",
    intro:
      "Salesforce engineers and architects here design the system of record, not a pile of unmanaged fields. The introduction includes how they handle integrations and who will own the org after launch.",
    looksLike: [
      "Sales Cloud, Service Cloud, and the adjacent clouds the company actually uses",
      "Integrations with the product, the data warehouse, and the tools finance already trusts",
      "Governance: who can change the org, and how a change is reviewed",
    ],
    companiesAsk:
      "They usually need someone who can talk to revenue operations and to engineering without translating either side into slogans.",
  },
  {
    slug: "gis",
    name: "GIS",
    number: "08",
    summary: "Spatial products for teams that work on land, infrastructure, and maps.",
    image: "/images/discipline-gis.jpg",
    alt: "A person pointing at a paper chart, with a compass, ruler, and magnifying glass on the table.",
    credit: {
      photographer: "cottonbro studio",
      page: "https://www.pexels.com/photo/person-pointing-on-a-map-5302805/",
    },
    layout: "wide",
    intro:
      "GIS engineers build products where location is the data, not a pin on a marketing page. We introduce people who have shipped spatial systems, not only drawn a map.",
    looksLike: [
      "PostGIS, spatial indexes, and the cost of a query that looks simple",
      "ArcGIS, QGIS, and web maps when the audience is an operator in the field",
      "Data that has a source, a projection, and a reason to be trusted",
    ],
    companiesAsk:
      "Utilities, logistics, climate, and public-sector teams ask when the map is the workflow. The brief should name the data, the users, and whether the hire is embedding in a software team or leading the spatial work.",
  },
];

export function getDiscipline(slug: string | undefined) {
  return disciplines.find((item) => item.slug === slug);
}

export const steps = [
  {
    number: "01",
    title: "Define the role",
    body: "You tell us the work, the stack, the seniority, and the hours that have to overlap. A vague brief produces a vague introduction.",
  },
  {
    number: "02",
    title: "Meet matched engineers",
    body: "We introduce a small number of engineers who fit the role. You meet them. We do not send a pile of profiles and call it a search.",
  },
  {
    number: "03",
    title: "You hire. We stay close.",
    body: "The engineer joins your team, on contract or as a direct hire. We stay available while the first months settle.",
  },
] as const;

export const engagements = [
  {
    title: "Contract",
    summary: "For a defined problem with a start and a finish.",
    points: [
      "An engineer embedded with your team",
      "A scope you can describe in the brief",
      "A clean end, or a conversation about what comes next",
    ],
  },
  {
    title: "Direct hire",
    summary: "For a seat you intend to keep.",
    points: [
      "Introductions to engineers open to joining you",
      "You employ them. We do not sit in the middle of the relationship",
      "Help narrowing the brief before anyone is put forward",
    ],
  },
  {
    title: "Dedicated team",
    summary: "For work that needs more than one discipline at once.",
    points: [
      "A small group assembled around the product, not a catalog",
      "One point of contact at Credexus",
      "The same regions and the same standard as a single hire",
    ],
  },
] as const;

export const notes = [
  {
    slug: "hiring-across-regions",
    title: "Hiring across regions is a brief, not a timezone trick",
    dek: "Canada, Latin America, Europe, and Asia are not four flavors of the same engineer.",
    image: "/images/note-regions.jpg",
    alt: "A person on a laptop video call, with another person visible on the screen.",
    credit: {
      photographer: "Anna Shvets",
      page: "https://www.pexels.com/photo/people-on-a-video-call-4226261/",
    },
    paragraphs: [
      "A company usually starts with a timezone. They want overlap with a city they already work in, and they treat the rest of the world as a way to buy that overlap more cheaply. The introduction fails when that is the whole brief.",
      "An engineer in São Paulo, Warsaw, Toronto, or Singapore is not a shifted version of a hire you would have made locally. Employment norms, notice periods, language in the codebase, and what 'senior' has meant in their last company all travel with them.",
      "Credexus asks for the overlap you actually need, and then for the work. Five hours of shared time is a different hire from a team that owns a surface while your office sleeps. Both are reasonable. They are not the same search.",
      "The region is part of the match. It is not a discount code, and it is not a way to avoid saying what the role is.",
    ],
  },
  {
    slug: "the-role-brief",
    title: "The role brief is the product",
    dek: "Most bad introductions start with a title and a pile of tools.",
    image: "/images/note-brief.jpg",
    alt: "An open dotted notebook and a white pen on a sunlit wooden desk.",
    credit: {
      photographer: "Jakub Zerdzicki",
      page: "https://www.pexels.com/photo/sunlit-workspace-with-notebook-and-smartphone-34109400/",
    },
    paragraphs: [
      "Send us a title and a list of frameworks and we can still introduce someone. They will be a plausible engineer. They may not be the one who can do the job you have.",
      "A useful brief says what will be true in six months if the hire works. It names the system they will touch, the people they will sit with, and the decisions they are allowed to make. Seniority is a consequence of that, not a line at the top.",
      "Stack still matters. A Salesforce org and a GIS platform and a React product are different crafts. Name the one you have, including the parts you are ready to change and the parts you are not.",
      "If you cannot write that yet, that is a fine place to start. The first conversation is about the brief. The introductions come after it can survive contact with a stranger.",
    ],
  },
  {
    slug: "specialists",
    title: "Specialists are not generalists with a new label",
    dek: "Salesforce and GIS make the point. So do AI and data, once the demo is over.",
    image: "/images/note-specialists.jpg",
    alt: "A compass and a pencil on a notebook, laid over a pinned paper map.",
    credit: {
      photographer: "Lara Jameson",
      page: "https://www.pexels.com/photo/mechanical-pencil-a-note-pad-and-a-navigational-compass-lying-on-a-world-map-8828668/",
    },
    paragraphs: [
      "A full stack engineer can learn a CRM. That is not the same as hiring someone who has carried a Salesforce org through a merger. A product engineer can place a pin on a map. That is not the same as hiring someone who has argued about a projection with the people who use the map in the field.",
      "Credexus keeps those searches separate on purpose. The disciplines page is not a menu of synonyms. Frontend, backend, full stack, and mobile are the general software work. Data, AI, Salesforce, and GIS are specialties with their own standards.",
      "The failure mode is a job post that asks for all of them. It reads as ambition. It hires nobody, or it hires a generalist and then resents them for not being the specialist the post described.",
      "If you need two of these, say so as two roles, or as a dedicated team. We would rather introduce two people who fit than one person who has been asked to be a department.",
    ],
  },
] as const;

export type Note = (typeof notes)[number];

export function getNote(slug: string | undefined) {
  return notes.find((item) => item.slug === slug);
}

export const team = [
  {
    name: "Mira Calder",
    role: "Founder",
    image: "/images/team-mira.jpg",
    alt: "Portrait of a woman in a black top against a plain light backdrop.",
    credit: {
      photographer: "Daniel & Hannah Snipes",
      page: "https://www.pexels.com/photo/professional-headshot-of-confident-female-in-greenville-30004323/",
    },
  },
  {
    name: "Jonas Hale",
    role: "Head of introductions",
    image: "/images/team-jonas.jpg",
    alt: "Portrait of a man in a black tuxedo holding a phone against a grey backdrop.",
    credit: {
      photographer: "Pexels",
      page: "https://www.pexels.com/photo/a-man-in-black-suit-holding-a-mobile-phone-6146058/",
    },
  },
  {
    name: "Priya Raman",
    role: "Canada",
    image: "/images/team-priya.jpg",
    alt: "Portrait of a woman in a red sari and glasses, seated against a curtain.",
    credit: {
      photographer: "Mouli Ghosh",
      page: "https://www.pexels.com/photo/portrait-of-an-indian-woman-in-eyeglasses-17450829/",
    },
  },
  {
    name: "Mateo Silva",
    role: "Latin America",
    image: "/images/team-mateo.jpg",
    alt: "Portrait of a man in a navy blazer and light blue shirt against a warm studio backdrop.",
    credit: {
      photographer: "Pexels LATAM",
      page: "https://www.pexels.com/photo/professional-portrait-of-man-in-blue-suit-39284039/",
    },
  },
  {
    name: "Elena Varga",
    role: "Europe",
    image: "/images/team-elena.jpg",
    alt: "Portrait of a woman in a white shirt, standing in a bright office.",
    credit: {
      photographer: "Gustavo Fring",
      page: "https://www.pexels.com/photo/portrait-of-a-woman-at-the-office-4872067/",
    },
  },
  {
    name: "Kenji Sato",
    role: "Asia",
    image: "/images/team-kenji.jpg",
    alt: "Portrait of a man in a navy blazer and white shirt, standing by a window.",
    credit: {
      photographer: "Moni Rathnak",
      page: "https://www.pexels.com/photo/a-businessman-in-a-suit-15399144/",
    },
  },
] as const;

export const faqs = [
  {
    question: "How does an introduction start?",
    answer:
      "Write to hello@credexus.org or use the form. Tell us the role. We reply with questions until the brief is specific enough to put in front of an engineer.",
  },
  {
    question: "Do you work with early-stage startups?",
    answer:
      "Yes, when the company is already building and can host an engineer. We also introduce engineers to Fortune 500 teams. The standard for the brief is the same.",
  },
  {
    question: "Which regions do the engineers come from?",
    answer:
      "Canada, Latin America, Europe, and Asia. The region is part of the match, along with the craft and the hours you need to share.",
  },
  {
    question: "Do you employ the engineers?",
    answer:
      "On a contract, the commercial shape depends on the engagement. On a direct hire, you employ them. We do not pretend to be their manager after they join your team.",
  },
  {
    question: "Can we hire someone permanently?",
    answer:
      "Yes. Direct hire is one of the three ways to work with us. You meet the engineer, you make the offer, and they join you.",
  },
  {
    question: "What do you need from us to begin?",
    answer:
      "The work, the stack, the seniority you think you need, and the overlap in hours. A current job post is a start. It is usually not the brief.",
  },
  {
    question: "How is a dedicated team different from one contract?",
    answer:
      "A dedicated team is more than one discipline, assembled around a product, with one point of contact here. It is not a pre-built bench waiting on a shelf.",
  },
  {
    question: "Do you cover Salesforce and GIS as well as product engineering?",
    answer:
      "Yes. Frontend, backend, full stack, mobile, data, AI, Salesforce, and GIS are separate searches. We do not fold the specialist roles into a generalist profile.",
  },
] as const;
