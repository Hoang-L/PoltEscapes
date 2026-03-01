/* =====================================================================
   🗝️  THE ESCAPE LOGS — YOUR DATA FILE
   =====================================================================
   Edit this file to add, update, or remove rooms.
   This is the ONLY file you need to touch to update your site.

   FIELD REFERENCE:
     name       (string, required)  — Room name
     venue      (string, required)  — Company / business name
     date       (string, required)  — "YYYY-MM-DD"
     city       (string, required)  — City name
     state      (string)            — US state abbreviation e.g. "CA"
     country    (string, required)  — Full country name e.g. "United States"
     lat        (number, required)  — Latitude  (find on maps.google.com)
     lng        (number, required)  — Longitude (find on maps.google.com)
     outcome    (string, required)  — "escaped" or "failed"
     time       (string)            — Time taken e.g. "47:32" or "DNF"
     rating     (number)            — 1–5 personal rating
     difficulty (string)            — "easy" | "medium" | "hard" | "expert"
     review     (string)            — Your notes / review
     group      (array of strings)  — Teammate names
     photo      (string)            — URL or relative path to photo, or ""
===================================================================== */

const ROOMS = [
  {
    name: "Magnifico's Circus",
    venue: "Escaparium (Laval)",
    date: "2024-12-20",
    city: "Laval", country: "Canada",
    lat: 45.58604128934039, lng: -73.76798176498842,
    outcome: "Escaped",
    rating: 5,
    review: "The greatest show.",
    group: ["Brian", "Raymond", "Huy"],
    photo: "https://drive.google.com/file/d/11QHTaxa4ZS7zdCuriCdVyEoU34c3S7Mb/view?usp=sharing"
  },
  {
    // name: "Pharaoh's Curse",
    // venue: "Puzzle Masters",
    // date: "2022-07-04",
    // city: "Las Vegas", state: "NV", country: "United States",
    // lat: 36.1699, lng: -115.1398,
    // outcome: "failed", time: "DNF",
    // rating: 4, difficulty: "expert",
    // review: "Devastatingly close — got through every puzzle but ran out of time on the final lock sequence. We'll be back.",
    // group: ["Jordan", "Riley"],
    // photo: ""
  },
  {
    // name: "The Haunted Manor",
    // venue: "Fear Factor Escapes",
    // date: "2022-10-28",
    // city: "Chicago", state: "IL", country: "United States",
    // lat: 41.8781, lng: -87.6298,
    // outcome: "escaped", time: "41:07",
    // rating: 5, difficulty: "medium",
    // review: "Best room theming I've ever experienced. The atmosphere is mandatory.",
    // group: ["Alex", "Casey", "Morgan", "Sam"],
    // photo: ""
  },
  {
    // name: "Cold War Bunker",
    // venue: "Locked In NYC",
    // date: "2023-01-21",
    // city: "New York", state: "NY", country: "United States",
    // lat: 40.7128, lng: -74.006,
    // outcome: "escaped", time: "58:44",
    // rating: 3, difficulty: "hard",
    // review: "Strong concept, some puzzles felt arbitrary. The final detonation sequence was fun though.",
    // group: ["Morgan"],
    // photo: ""
  },
  {
    // name: "The Séance",
    // venue: "Breakout Games",
    // date: "2023-06-10",
    // city: "Nashville", state: "TN", country: "United States",
    // lat: 36.1627, lng: -86.7816,
    // outcome: "escaped", time: "49:33",
    // rating: 4, difficulty: "medium",
    // review: "Gorgeous Victorian set design. The audio design alone is worth the price of admission.",
    // group: ["Alex", "Jordan", "Riley", "Sam", "Casey"],
    // photo: ""
  },
  {
    // name: "Clockwork Heist",
    // venue: "Great Escape",
    // date: "2023-09-03",
    // city: "London", state: "", country: "United Kingdom",
    // lat: 51.5074, lng: -0.1278,
    // outcome: "escaped", time: "44:21",
    // rating: 5, difficulty: "hard",
    // review: "First international room and it set the bar impossibly high. Multi-room progression through a Victorian bank.",
    // group: ["Jordan", "Alex"],
    // photo: ""
  },
  {
    // name: "Submarine Disaster",
    // venue: "Epic Escapes",
    // date: "2024-02-14",
    // city: "Seattle", state: "WA", country: "United States",
    // lat: 47.6062, lng: -122.3321,
    // outcome: "failed", time: "DNF",
    // rating: 4, difficulty: "expert",
    // review: "Genuinely stressful in the best way. The flooding mechanic is wild. Humbling defeat.",
    // group: ["Sam", "Morgan", "Riley"],
    // photo: ""
  },
  {
    // name: "Jungle Temple",
    // venue: "Adventure Escapes",
    // date: "2024-08-22",
    // city: "Miami", state: "FL", country: "United States",
    // lat: 25.7617, lng: -80.1918,
    // outcome: "escaped", time: "37:50",
    // rating: 4, difficulty: "easy",
    // review: "Fast, fun, physical. Less puzzle-heavy but the set construction is jaw-dropping.",
    // group: ["Alex", "Casey", "Morgan", "Jordan", "Sam", "Riley"],
    // photo: ""
  }
];
