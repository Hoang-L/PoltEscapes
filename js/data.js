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
    outcome: "escaped",
    rating: 5,
    review: "The greatest show.",
    group: ["Brian", "Raymond", "Huy"],
    photo: "images/73.jpg"
  }
];
