/**
 * Public site copy and the two links to swap when the store listings exist.
 * Until then they open the store fronts, and the buttons say the app is not listed yet.
 */
export const site = {
  name: "Casual Fit",
  url: "https://casualfit.app",
  email: "support@casualfit.app",
  updated: "18 October 2026",
  description:
    "Casual Fit is a personal trainer in your phone. It tells you the workout, how to do it, what to eat, and whether you are making progress.",
} as const;

export const stores = {
  apple: "https://apps.apple.com/",
  google: "https://play.google.com/store",
} as const;

export const nav = [
  { href: "/#monday", label: "Monday" },
  { href: "/#plate", label: "Plate" },
  { href: "/#plans", label: "Plans" },
  { href: "/#download", label: "Download" },
] as const;

export const ticker = [
  "Barbell bench press",
  "Jollof",
  "Goblet squat",
  "Plantain",
  "Hip thrust",
  "Porridge",
  "Lat pulldown",
  "Beans",
  "Romanian deadlift",
  "Egusi",
  "Push-up",
  "A roast",
  "Dead bug",
  "Beans on toast",
] as const;

export const week = [
  { day: "Mon", state: "train" },
  { day: "Tue", state: "train" },
  { day: "Wed", state: "train" },
  { day: "Thu", state: "train" },
  { day: "Fri", state: "train" },
  { day: "Sat", state: "train" },
  { day: "Sun", state: "rest" },
] as const;

export const monday = [
  { name: "Goblet squat", dose: "3 × 10" },
  { name: "Barbell bench press", dose: "3 × 8–10" },
  { name: "Lat pulldown", dose: "3 × 10" },
  { name: "Dumbbell shoulder press", dose: "2 × 10" },
  { name: "Leg curl", dose: "2 × 12" },
  { name: "Plank", dose: "3 × 30s" },
] as const;

export const jobs = [
  {
    n: "01",
    title: "Train",
    body: "The session is already chosen. You get the exercise, the sets, the reps, the rest, and a demo. If a machine is taken, you swap it for an alternative we already have.",
  },
  {
    n: "02",
    title: "Eat",
    body: "Log the food you actually cook. Nigerian, British, and international plates sit in the same list. Calories and macros are labelled estimated or verified. We do not invent a precise number.",
  },
  {
    n: "03",
    title: "Track",
    body: "Weight, workouts finished, and time trained. The streak stays intact on a planned rest day. Sunday is rest unless you say otherwise.",
  },
  {
    n: "04",
    title: "Grow",
    body: "The plan comes from your goal, your experience, your days, and whether you train in a gym, at home, or both. You can change the week.",
  },
] as const;

export const plates = [
  {
    place: "Nigerian",
    foods: "Jollof, beans, plantain, swallow.",
    note: "Counted. Not talked down to.",
  },
  {
    place: "British",
    foods: "Porridge, a roast, beans on toast.",
    note: "The ordinary plate, written down.",
  },
  {
    place: "International",
    foods: "Whatever else is actually on the plate.",
    note: "Same ledger. Same portions.",
  },
] as const;

export const plans = [
  { name: "Beginner full body", where: "Gym or home", note: "Three sessions for someone new to it." },
  { name: "Muscle building", where: "Gym or home", note: "A week aimed at size, including a home version with a chair." },
  { name: "Strength", where: "Gym or home", note: "Heavier sets on the main lifts, or harder bodyweight when there is no barbell." },
  { name: "Fat loss", where: "Gym or home", note: "The lifting stays. Short walks are added. Muscle work is not removed." },
  { name: "Glutes and lower body", where: "Gym or home", note: "Open to every user. Gender does not hide it." },
  { name: "Push, pull, legs", where: "Gym or home", note: "The split, repeated across the days you picked." },
  { name: "Bro split", where: "Gym or home", note: "One focus each session." },
] as const;

export const rules = [
  "Gender never locks a programme. Templates suggest. They do not close a door.",
  "Calorie and macro targets are estimates, not a prescription and not medical advice.",
  "If we cannot be sure a meal is safe for your allergy, we do not recommend it.",
  "A planned rest day does not break the streak.",
  "Progress photos stay on your account. Another user cannot see them.",
  "Pain is a reason to see a professional. The app does not diagnose an injury.",
] as const;
