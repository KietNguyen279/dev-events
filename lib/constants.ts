// Centralized constants for the app
// Exporting an `events` array compatible with the EventCard component props.
// Image paths reference files under public/images (served from "/images/...").

export type EventItem = {
  title: string;
  image: string; // e.g., "/images/event1.png"
  slug: string; // used for routing like "/events/[slug]"
  location: string; // City, Country or "Online"
  date: string; // Human-readable date (e.g., "Mar 18, 2026")
  time: string; // Time with timezone (e.g., "09:00–17:00 PST")
};

export const events: EventItem[] = [
  {
    title: "React Summit 2026",
    image: "/images/event1.png",
    slug: "react-summit-2026",
    location: "Amsterdam, NL",
    date: "May 30–31, 2026",
    time: "09:00–18:00 CEST",
  },
  {
    title: "Next.js Conf 2026",
    image: "/images/event2.png",
    slug: "nextjs-conf-2026",
    location: "San Francisco, USA",
    date: "Oct 14–15, 2026",
    time: "10:00–17:00 PDT",
  },
  {
    title: "JSNation 2026",
    image: "/images/event1.png",
    slug: "jsnation-2026",
    location: "Online + Berlin, DE",
    date: "Jun 18–19, 2026",
    time: "09:30–17:30 CEST",
  },
  {
    title: "GraphQL Conf 2026",
    image: "/images/event2.png",
    slug: "graphql-conf-2026",
    location: "Zurich, CH",
    date: "Sep 9–10, 2026",
    time: "09:00–17:00 CEST",
  },
  {
    title: "KubeCon + CloudNativeCon Europe 2026",
    image: "/images/event1.png",
    slug: "kubecon-eu-2026",
    location: "Vienna, AT",
    date: "Apr 27–30, 2026",
    time: "08:30–17:30 CEST",
  },
  {
    title: "Hack The Future 48h Hackathon",
    image: "/images/event2.png",
    slug: "hack-the-future-2026",
    location: "Toronto, CA",
    date: "Jul 24–26, 2026",
    time: "Starts 18:00 EDT (Fri)",
  },
  {
    title: "PyCon US 2026",
    image: "/images/event1.png",
    slug: "pycon-us-2026",
    location: "Pittsburgh, USA",
    date: "May 1–9, 2026",
    time: "09:00–18:00 EDT",
  },
  {
    title: "AWS re:Invent 2026",
    image: "/images/event2.png",
    slug: "aws-reinvent-2026",
    location: "Las Vegas, USA",
    date: "Nov 30 – Dec 4, 2026",
    time: "All-day PST",
  },
];
