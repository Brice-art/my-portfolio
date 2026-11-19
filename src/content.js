export const projects = [
  {
    id: "booking-platform",
    title: "Production Booking Platform",
    summary: "A client's Laravel booking system, recovered and improved in production.",
    description:
      "Took over an existing booking platform and made it reliable again. Restored email delivery, fixed real-time updates with Laravel Reverb, hardened Stripe verification against duplicate charges, improved deployment on Laravel Cloud, and added production smoke tests.",
    stack: ["Laravel", "Stripe", "Reverb", "PHPUnit", "Laravel Cloud"],
    liveUrl: null,
    sourceUrl: "https://github.com/Brice-art",
    label: "Production",
  },
  {
    id: "huye-finds",
    title: "Huye Finds",
    summary: "Helping students find affordable places around the University of Rwanda.",
    description:
      "A mobile-first directory of restaurants, accommodation, and essential services in Huye. Built with real-time search, location filtering, and a simple interface designed around student life.",
    stack: ["TypeScript", "React", "Node.js", "PostgreSQL"],
    liveUrl: "https://huye-finds.vercel.app",
    sourceUrl: "https://github.com/Brice-art/HuyeFinds-frontend",
    label: "Live",
  },
  {
    id: "rshift",
    title: "RShift Chrome Extension",
    summary: "Work shifts turned into Google Calendar events with one click.",
    description:
      "Built to remove a repetitive part of my own work week. The extension reads shift data from a scheduling site, authenticates with Google through OAuth, and creates calendar events automatically.",
    stack: ["JavaScript", "Chrome API", "OAuth 2.0", "Google Calendar API"],
    liveUrl: null,
    sourceUrl: "https://github.com/Brice-art/Rshift-extraction-chrome-extension",
    label: "Open source",
  },
];

export const skills = [
  {
    title: "Frontend",
    items: ["React", "JavaScript", "TypeScript", "HTML & CSS", "Tailwind"],
  },
  {
    title: "Backend",
    items: ["Laravel / PHP", "Node.js", "REST APIs", "JWT auth", "Stripe"],
  },
  {
    title: "Data & tools",
    items: ["PostgreSQL", "MongoDB", "Git", "PHPUnit", "Laravel Cloud"],
  },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/Brice-art" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/briceali/" },
  { label: "Email", href: "mailto:bricealibyilingiro@gmail.com" },
];
