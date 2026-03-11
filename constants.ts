import { CaseStudy, PlaygroundItem } from './types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    slug: "mta-open-source",
    title: "MTA Open Source App",
    category: "Data Visualization Design",
    tags: ["UI/UX", "Mobile App"],
    imageUrl: "assets/imgs/Case1.png",
    description: "Designing a web app that visualizes MTA ridership and weather patterns.",
    timeline: "5 Weeks",
    role: "Designer, Developer",
    tools: "Figma, D3.js, CSS, HTML, AfterEffects"
  },
  {
    id: 2,
    slug: "mcdonalds-game",
    title: "McDonald’s Game Design",
    category: "Game & System Design",
    tags: ["Product Design", "Branding"],
    imageUrl: "assets/imgs/Case2.png",
    description: "Designing mobile games for Happy Meal campaigns and standardizing a design system in Figma.",
    timeline: "3 Months",
    role: "Lead Game Designer",
    tools: "Figma, Unity, Illustrator"
  },
  {
    id: 3,
    slug: "faceless-affair",
    title: "Faceless Affair",
    category: "Interactive Narrative",
    subhead: "An interactive mystery game",
    tags: ["UX Design", "Game Design"],
    imageUrl: "assets/imgs/Case6.png",
    description: "An interactive mystery game exploring narrative depth through digital interaction.",
    timeline: "8 Weeks",
    role: "UX Designer, Writer",
    tools: "Twine, Figma, Photoshop"
  },
  {
    id: 4,
    slug: "higher-ed-campaign",
    title: "Higher Education Campaign Design",
    category: "Campaign Design",
    subhead: "Designing campaigns for universities",
    tags: ["Social Media", "Web Design"],
    imageUrl: "assets/imgs/Case3.png",
    description: "Developing cohesive visual identities for academic outreach and engagement.",
    timeline: "6 Months",
    role: "Visual Designer",
    tools: "InDesign, AfterEffects, Figma"
  },
  {
    id: 5,
    slug: "editorial-design",
    title: "Editorial Design",
    category: "Typographic Motion",
    subhead: "Designing for Print",
    tags: ["Print Design", "Illustration"],
    imageUrl: "assets/imgs/Case5.png",
    description: "A typographic exploration of visual language in social movements.",
    timeline: "Ongoing",
    role: "Print Designer",
    tools: "Print Design, Branding"
  },
  {
    id: 6,
    slug: "secret-garden-viz",
    title: "The Secret Garden Data Visualization",
    category: "Information Design",
    subhead: "Exploring literature through data",
    tags: ["Information Design", "Web Design"],
    imageUrl: "assets/imgs/Case4.png",
    description: "Mapping the linguistic landscape of classic literature.",
    timeline: "5 Weeks",
    role: "Information Designer",
    tools: "D3.js, Python, Figma"
  },
  {
    id: 7,
    slug: "kinetics-branding",
    title: "Kinetics: High-Performance Branding",
    category: "Brand Identity",
    tags: ["Visual Identity", "Typography"],
    imageUrl: "assets/imgs/Case4.png",
    description: "Dynamic brand system for an emerging electric bike manufacturer.",
    timeline: "12 Weeks",
    role: "Brand Strategist",
    tools: "Illustrator, AfterEffects"
  }
];

export const PLAYGROUND_ITEMS: PlaygroundItem[] = [
  { id: 1, title: "Generative Topography", type: "Processing", imageUrl: "https://picsum.photos/seed/pg1/800/800" },
  { id: 2, title: "Abstract Form Study", type: "3D Rendering", imageUrl: "https://picsum.photos/seed/pg2/600/900" },
  { id: 3, title: "Kinetic Typography", type: "Motion", imageUrl: "https://picsum.photos/seed/pg3/900/600" },
  { id: 4, title: "Color Theory Experiment", type: "Web Art", imageUrl: "https://picsum.photos/seed/pg4/700/700" },
  { id: 5, title: "Daily Sketch #42", type: "Illustration", imageUrl: "https://picsum.photos/seed/pg5/800/1000" },
  { id: 6, title: "Glitch Landscape", type: "Photography", imageUrl: "https://picsum.photos/seed/pg6/1000/800" },
  { id: 7, title: "Noise Field 01", type: "Code", imageUrl: "https://picsum.photos/seed/pg7/800/800" },
  { id: 8, title: "Brutalist Layout", type: "Design", imageUrl: "https://picsum.photos/seed/pg8/600/800" },
  { id: 9, title: "Fluid Dynamics", type: "Simulation", imageUrl: "https://picsum.photos/seed/pg9/800/600" },
  { id: 10, title: "Monospaced Dreams", type: "Typography", imageUrl: "https://picsum.photos/seed/pg10/700/700" },
  { id: 11, title: "Neon Gradients", type: "Color", imageUrl: "https://picsum.photos/seed/pg11/800/1100" },
  { id: 12, title: "ASCII Portrait", type: "Code Art", imageUrl: "https://picsum.photos/seed/pg12/1100/800" },
  { id: 13, title: "Recursive Shapes", type: "Processing", imageUrl: "https://picsum.photos/seed/pg13/800/800" },
  { id: 14, title: "Organic Mesh", type: "3D", imageUrl: "https://picsum.photos/seed/pg14/600/900" },
  { id: 15, title: "Digital Bloom", type: "Motion", imageUrl: "https://picsum.photos/seed/pg15/900/600" },
  { id: 16, title: "Pixel Sort Study", type: "Algorithm", imageUrl: "https://picsum.photos/seed/pg16/700/700" },
  { id: 17, title: "Cybernetic Flora", type: "Illustration", imageUrl: "https://picsum.photos/seed/pg17/800/1200" },
  { id: 18, title: "Shadow Play", type: "Photography", imageUrl: "https://picsum.photos/seed/pg18/1200/800" },
  { id: 19, title: "Wave Function", type: "Generative", imageUrl: "https://picsum.photos/seed/pg19/800/800" },
  { id: 20, title: "Modular Grid", type: "System", imageUrl: "https://picsum.photos/seed/pg20/600/800" },
  { id: 21, title: "Particle Drift", type: "Simulation", imageUrl: "https://picsum.photos/seed/pg21/800/600" },
  { id: 22, title: "Ink & Pixel", type: "Mixed Media", imageUrl: "https://picsum.photos/seed/pg22/700/700" },
  { id: 23, title: "Vector Rhythm", type: "Vector", imageUrl: "https://picsum.photos/seed/pg23/800/1000" },
  { id: 24, title: "Dark Matter", type: "3D Render", imageUrl: "https://picsum.photos/seed/pg24/1000/800" }
];