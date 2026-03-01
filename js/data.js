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
    id: "1",
    name: "Orient Express",
    venue: "The Architect (Reseda)",
    date: "2018-09-14",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Huy D.","Khiem","Raymond","Kanate","Erick"],
    photo: "images/1.jpg",
  },
  {
    id: "2",
    name: "Escape Corporation X",
    venue: "Amazing Escape Room (North Hills)",
    date: "2018-12-26",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Nick","Gintas","Johnny"],
    photo: "images/2.jpg",
  },
  {
    id: "3",
    name: "Stranger Things",
    venue: "Cinema Escape Rooms (Los Alamitos)",
    date: "2019-08-24",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Huy L.","Tee","Elly","May","Ann"],
    photo: "images/3.jpg",
  },
  {
    id: "4",
    name: "The Pharaoh’s Curse",
    venue: "The Hidden Passage (North Hollywood)",
    date: "2019-12-26",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","David","Kanate","Huy D.","Andrew"],
    photo: "images/4.jpg",
  },
  {
    id: "5",
    name: "Confinement",
    venue: "Red Door (Oxnard)",
    date: "2021-11-13",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "failed",
    group: ["Brian","Raymond"],
    photo: "images/5.jpg",
  },
  {
    id: "6",
    name: "Whatever Happens to the Garretts",
    venue: "West LA Maze Rooms (Los Angeles)",
    date: "2022-02-20",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Raymond","David"],
    photo: "images/6.jpg",
  },
  {
    id: "7",
    name: "Vault 805",
    venue: "Two Trees (Oxnard)",
    date: "2022-04-09",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Shalvind","Tim","Evelyn","Tim's friend","Johnny Takeover"],
    photo: "images/7.jpg",
  },
  {
    id: "8",
    name: "Starship Libra",
    venue: "101 Escape Rooms (Westlake/Thousand Oaks)",
    date: "2022-06-11",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Robert","David"],
    photo: "images/8.jpg",
  },
  {
    id: "9",
    name: "Bonnie and Clyde",
    venue: "The Architect (Reseda)",
    date: "2022-06-26",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Gintas","Nick","Jason","Johnny"],
    photo: "images/9.jpg",
  },
  {
    id: "10",
    name: "La Chambre De Tante Hilda / Aunt Hilda’s Room",
    venue: "Trip Trap Hotel (Geneva, Switzerland)",
    date: "2022-07-05",
    country: "Switzerland",
    lat: 46.18624993834628, lng: 6.143943047451721,
    outcome: "failed",
    group: ["Huy L.","Mom","Dad","Duy"],
    photo: "images/10.png",
  },
  {
    id: "11",
    name: "Hex Room",
    venue: "Crossroads Escape (Anaheim)",
    date: "2022-08-28",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Huy L.","Tee","Elly","May","Ann","Don"],
    photo: "images/11.jpg",
  },
  {
    id: "12",
    name: "Atlantis",
    venue: "Hypnotic Escape Rooms (Van Nuys)",
    date: "2022-09-10",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Gintas","Nick","Jason","Johnny"],
    photo: "images/12.jpg",
  },
  {
    id: "13",
    name: "The Escape",
    venue: "The Unlockables (San Diego",
    date: "2022-09-14",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Erdi","Chris","Jose","Jacob","Sean","Russel"],
    photo: "images/13.jpg",
  },
  {
    id: "14",
    name: "The Neighbor",
    venue: "Steal and Escape (San Diego)",
    date: "2022-12-06",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brandon","Jack","Jose","Sean"],
    photo: ""
  },
  {
    id: "15",
    name: "Moriarty’s Manor",
    venue: "Mindfox (San Diego)",
    date: "2022-12-07",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Ann","Michelle","Brendan"],
    photo: "",
  },
  {
    id: "16",
    name: "Haunting Before Christmas",
    venue: "Two Trees (Oxnard)",
    date: "2022-12-17",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Shalvind","Robert","Danielle","Hemal"],
    photo: "",
  },
  {
    id: "17",
    name: "Project 5150",
    venue: "Hypnotic Escape Rooms (Van Nuys)",
    date: "2022-12-26",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Gintas","Nick","Jason","Johnny"],
    photo: "",
  },
  {
    id: "18",
    name: "Time Machine",
    venue: "Not Another Escape Room (Brea)",
    date: "2023-02-19",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Huy L.","May","Ann"],
    photo: "images/18.jpeg",
  },
  {
    id: "19",
    name: "Wrongfully Convicted",
    venue: "Escape Revolution (Melrose)",
    date: "2023-02-24",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Raymond"],
    photo: "",
  },
  {
    id: "20",
    name: "Ghost Patrol",
    venue: "Trivium Games (Emeryville)",
    date: "2023-03-24",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "failed",
    group: ["Brian","Raymond","Kevin","Kenny","Michael"],
    photo: "",
  },
  {
    id: "21",
    name: "The Edison Escape Room",
    venue: "Palace Games (San Francisco)",
    date: "2023-03-25",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Raymond","Joseph","Michael Wu","Michael","Kenny"],
    photo: "",
  },
  {
    id: "22",
    name: "Lost Expedition",
    venue: "Steal and Escape (San Diego)",
    date: "2023-03-28",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Jack","Jose","Casey","Sean"],
    photo: "images/22.jpeg",
  },
  {
    id: "23",
    name: "Headcase",
    venue: "Breaking Point (Rancho Cucamonga)",
    date: "2023-06-04",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Raymond","Chris","Steph"],
    photo: "images/23.jpeg",
  },
  {
    id: "24",
    name: "Lab Rat",
    venue: "Hatch Escapes (Los Angeles)",
    date: "2023-07-08",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Raymond"],
    photo: "",
  },
  {
    id: "25",
    name: "Escape LA",
    venue: "Hypnotic Escape Rooms (Van Nuys)",
    date: "2023-07-09",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Gintas","Nick","Jason","Johnny"],
    photo: "",
  },
  {
    id: "26",
    name: "Bridge Between",
    venue: "Quest Tavern (Pomona)",
    date: "2023-09-10",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Patricia","Connie"],
    photo: "",
  },
  {
    id: "27",
    name: "Pandora’s Box",
    venue: "Trapped (San Dimas)",
    date: "2023-09-10",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Patricia","Connie"],
    photo: "",
  },
  {
    id: "28",
    name: "Davinci's Challenge",
    venue: "Lara's Labyrinth (San Diego)",
    date: "2023-09-12",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Erdi","Michael","Sean","Russel"],
    photo: "",
  },
  {
    id: "29",
    name: "Abandoned Basement",
    venue: "The Hour Room (San Diego)",
    date: "2023-09-13",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Michelle","Brendan"],
    photo: "",
  },
  {
    id: "30",
    name: "Hope's End",
    venue: "The Ministry of Peculiarities (Azusa)",
    date: "2023-10-08",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Huy L.","May","Ann","Tee","Elly","Don"],
    photo: "images/30.jpeg",
  },
  {
    id: "31",
    name: "The Last Supper",
    venue: "Quest Tavern (Pomona)",
    date: "2023-10-15",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Raymond","Chris","Steph"],
    photo: "",
  },
  {
    id: "32",
    name: "Inksidious",
    venue: "Escape 66 (Los Angeles)",
    date: "2023-10-28",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian"],
    photo: "",
  },
  {
    id: "33",
    name: "Stash House",
    venue: "Stash House (Los Angeles)",
    date: "2023-11-04",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Raymond","Chris","Steph"],
    photo: "",
  },
  {
    id: "34",
    name: "Servents of Sleight",
    venue: "Exit Games (Clearwater, Florida)",
    date: "2023-12-16",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Raymond"],
    photo: "images/34.jpeg",
  },
  {
    id: "35",
    name: "Pins & Needles",
    venue: "Exit Games (Clearwater, Florida)",
    date: "2023-12-16",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Raymond","Huy D."],
    photo: "images/35.jpeg",
  },
  {
    id: "36",
    name: "Bros for Life",
    venue: "Escape Ventures (Orlando, Florida)",
    date: "2023-12-17",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Raymond","Huy D."],
    photo: "",
  },
  {
    id: "37",
    name: "Crazy Train",
    venue: "Doldrick's Escape Room (Orlando, Florida)",
    date: "2023-12-17",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Raymond","Huy D."],
    photo: "",
  },
  {
    id: "38",
    name: "Something's Out There",
    venue: "West LA Maze Rooms (Los Angeles)",
    date: "2024-01-12",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Patricia","Amber"],
    photo: "",
  },
  {
    id: "39",
    name: "Key Of Destiny",
    venue: "Boggled Escape Rooms (Calabasas)",
    date: "2024-01-28",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Kanate","Khiem","Kristine"],
    photo: "images/39.png",
  },
  {
    id: "40",
    name: "Treasure Island",
    venue: "Brain Games Escape Rooms (San Pedro)",
    date: "2024-02-04",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Raymond","Chris","Steph","Patricia"],
    photo: "",
  },
  {
    id: "41",
    name: "Secret at Whitmore Estate",
    venue: "Breaking Point (Rancho Cucamonga)",
    date: "2024-02-11",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Patricia","Augustin"],
    photo: "",
  },
  {
    id: "42",
    name: "Villains Vendetta",
    venue: "Exodus Escape (Rancho Cucamonga)",
    date: "2024-02-11",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Patricia","Augustin"],
    photo: "images/42.png",
  },
  {
    id: "43",
    name: "Olympus",
    venue: "Exodus Escape (Rancho Cucamonga)",
    date: "2024-02-11",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Patricia","Augustin"],
    photo: "images/43.png",
  },
  {
    id: "44",
    name: "Missing Season",
    venue: "Steal and Escape (San Diego)",
    date: "2024-03-13",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Chris","Erdi"],
    photo: "images/44.jpeg",
  },
  {
    id: "45",
    name: "The Diner",
    venue: "Quicksand Games (San Diego)",
    date: "2024-03-15",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Erdi","Michael","Rob","Derek","Ellen"],
    photo: "images/45_46.jpg",
  },
  {
    id: "46",
    name: "Chinatown",
    venue: "Quicksand Games (San Diego)",
    date: "2024-03-15",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Sean","Derek","Jacob"],
    photo: "images/45_46.jpg",
  },
  {
    id: "47",
    name: "Dragon's Lair",
    venue: "Mazerooms (Culver City)",
    date: "2024-03-31",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Patricia","Brian","Connie","Tee"],
    photo: "",
  },
  {
    id: "48",
    name: "Shadow's Zen",
    venue: "Studio Escape (Osaka, Japan)",
    date: "2024-04-18",
    country: "Japan",
    lat: 34.65917454793667, lng: 135.49580395127882,
    outcome: "escaped",
    group: ["Huy L.","May","Ann"],
    photo: "",
  },
  {
    id: "49",
    name: "Tombstone",
    venue: "West LA Maze Rooms (Los Angeles)",
    date: "2024-05-11",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Jason","Johnny"],
    photo: "",
  },
  {
    id: "50",
    name: "Escobar",
    venue: "Escape Revolution (Melrose)",
    date: "2024-05-17",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "failed",
    group: ["Brian","Raymond"],
    photo: "",
  },
  {
    id: "51",
    name: "Dr. Hader's Cartoon World",
    venue: "Scenario Escape Room (Brea)",
    date: "2024-05-18",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Raymond"],
    photo: "",
  },
  {
    id: "52",
    name: "The Mad Rapper",
    venue: "Scenario Escape Room (Brea)",
    date: "2024-05-18",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Raymond"],
    photo: "",
  },
  {
    id: "53",
    name: "Curse of the Bayou",
    venue: "Red Lantern Escape Rooms (Brea)",
    date: "2024-06-07",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Raymond","Chris","Steph"],
    photo: "",
  },
  {
    id: "54",
    name: "Midnight on the Bayou",
    venue: "Red Lantern Escape Rooms (Brea)",
    date: "2024-06-07",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Raymond","Chris","Steph","Juan"],
    photo: "",
  },
  {
    id: "55",
    name: "Prison Break",
    venue: "Red Door (Oxnard)",
    date: "2024-06-19",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian"],
    photo: "",
  },
  {
    id: "56",
    name: "Once Upon a Time",
    venue: "Red Door (Oxnard)",
    date: "2024-06-19",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian"],
    photo: "",
  },
  {
    id: "57",
    name: "Purgatory",
    venue: "101 Escape Rooms (Thousand Oaks)",
    date: "2024-07-14",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian"],
    photo: "",
  },
  {
    id: "58",
    name: "Wrecked",
    venue: "101 Escape Rooms (Thousand Oaks)",
    date: "2024-07-28",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian"],
    photo: "",
  },
  {
    id: "59",
    name: "Darkcade",
    venue: "101 Escape Rooms (Thousand Oaks)",
    date: "2024-07-28",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian"],
    photo: "",
  },
  {
    id: "60",
    name: "Mush room",
    venue: "Escape 66 (Los Angeles)",
    date: "2024-08-11",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Raymond"],
    photo: "",
  },
  {
    id: "61",
    name: "Dracula",
    venue: "Escape 406 (Bozeman, Montana)",
    date: "2024-08-26",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Huy L."],
    photo: "",
  },
  {
    id: "62",
    name: "Bewitched",
    venue: "Lara's Labyrinth (San Diego)",
    date: "2024-09-17",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Erdi","Chris","Ellen","Adam"],
    photo: "",
  },
  {
    id: "63",
    name: "Cannibal",
    venue: "Lara's Labyrinth (San Diego)",
    date: "2024-09-17",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Erdi","Chris","Ellen","Jessica"],
    photo: "",
  },
  {
    id: "64",
    name: "Ghost of Mentryville",
    venue: "Arcane Escape Rooms (Santa Clarita)",
    date: "2024-10-04",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian"],
    photo: "",
  },
  {
    id: "65",
    name: "Magic Cottage",
    venue: "Infinity Escape (Fullerton)",
    date: "2024-10-18",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Raymond","Chris","Steph"],
    photo: "",
  },
  {
    id: "66",
    name: "Pinocchio",
    venue: "Escapade Games (Fullerton)",
    date: "2024-10-18",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Raymond","Chris","Steph"],
    photo: "",
  },
  {
    id: "67",
    name: "Paradox",
    venue: "Boggled Escape Rooms (Calabasas)",
    date: "2024-10-27",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Khiem","Kristine"],
    photo: "",
  },
  {
    id: "68",
    name: "The Storykeeper",
    venue: "Locurio (Seattle)",
    date: "2024-11-10",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Ann","Leon","Jess"],
    photo: "images/68.jpeg",
  },
  {
    id: "69",
    name: "Murder on the Orient Express",
    venue: "Escapology (Northridge)",
    date: "2024-11-23",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Jason","Johnny"],
    photo: "",
  },
  {
    id: "70",
    name: "Warlocked",
    venue: "Quest Room (Redondo Beach)",
    date: "2024-11-29",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Ann","Tee","Elly"],
    photo: "",
  },
  {
    id: "71",
    name: "Final Stop V2",
    venue: "Escaparium (Laval)",
    date: "2024-12-19",
    country: "Canada",
    lat: 45.58604128934039, lng: -73.76798176498842,
    outcome: "escaped",
    group: ["Brian","Raymond","Huy D."],
    photo: "",
  },
  {
    id: "72",
    name: "Wardrobe for Sale",
    venue: "Escaparium (Laval)",
    date: "2024-12-19",
    country: "Canada",
    lat: 45.58604128934039, lng: -73.76798176498842,
    outcome: "escaped",
    group: ["Brian","Raymond","Huy D."],
    photo: "",
  },
  {
    id: "73",
    name: "Magnifico's Circus",
    venue: "Escaparium (Laval)",
    date: "2024-12-20",
    country: "Canada",
    lat: 45.58604128934039, lng: -73.76798176498842,
    outcome: "escaped",
    rating: 5,
    review: "The greatest show.",
    group: ["Brian", "Raymond", "Huy D."],
    photo: "images/73.jpg"
  },
  {
    id: "74",
    name: "The Lost Island Of the Voodoo Queen",
    venue: "Escaparium (Laval)",
    date: "2024-12-21",
    country: "Canada",
    lat: 45.58604128934039, lng: -73.76798176498842,
    outcome: "escaped",
    group: ["Brian","Raymond","Huy D."],
    photo: "",
  },
  {
    id: "75",
    name: "The Forgotten Cathedral",
    venue: "Escaparium (Laval)",
    date: "2024-12-21",
    country: "Canada",
    lat: 45.58604128934039, lng: -73.76798176498842,
    outcome: "escaped",
    group: ["Brian","Raymond","Huy D."],
    photo: "",
  },
  {
    id: "76",
    name: "The Crystal Cave",
    venue: "Breaking Point (Rancho Cucamonga)",
    date: "2025-02-09",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Chris","Steph"],
    photo: "images/76.jpg",
  },
  {
    id: "77",
    name: "Through the Sugarglass",
    venue: "Quest Tavern (Pomona)",
    date: "2025-02-09",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Chris","Steph"],
    photo: "",
  },
  {
    id: "78",
    name: "They're Coming",
    venue: "Mazerooms (Culver City)",
    date: "2025-03-07",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Raymond"],
    photo: "",
  },
  {
    id: "79",
    name: "Black Dragon",
    venue: "Escape Room LA",
    date: "2025-03-07",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Raymond","Juan"],
    photo: "",
  },
  {
    id: "80",
    name: "The Ladder",
    venue: "Hatch Escapes (Los Angeles)",
    date: "2025-04-05",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Raymond","Juan","Chris","Steph","Khiem","Kristine"],
    photo: "",
  },
  {
    id: "81",
    name: "The Playground",
    venue: "Escape Games (Torrance)",
    date: "2025-04-27",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Tee"],
    photo: "",
  },
  {
    id: "82",
    name: "Prison Break (EG)",
    venue: "Escape Games (Torrance)",
    date: "2025-04-27",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Tee"],
    photo: "",
  },
  {
    id: "83",
    name: "Corpse Whisperer",
    venue: "Escape Duck (San Gabriel)",
    date: "2025-05-17",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Raymond"],
    photo: "images/83_84.jpg",
  },
  {
    id: "84",
    name: "Grand Heist",
    venue: "Escape Duck (San Gabriel)",
    date: "2025-05-17",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "failed",
    group: ["Brian","Raymond"],
    photo: "images/83_84.jpg",
  },
  {
    id: "85",
    name: "Batman: The Dark Knight Challenge",
    venue: "Escapology (Northridge)",
    date: "2025-05-25",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Jason","Johnny","Nick"],
    photo: "",
  },
  {
    id: "86",
    name: "Witch's Cauldron",
    venue: "Quest Tavern (Pomona)",
    date: "2025-06-20",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian"],
    photo: "images/86.jpeg",
  },
  {
    id: "87",
    name: "Curse of the Black Knight",
    venue: "EscapeX (Irvine)",
    date: "2025-06-21",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian"],
    photo: "",
  },
  {
    id: "88",
    name: "Prison Break Trapped in Time",
    venue: "Escape 66 (Laguna Hills)",
    date: "2025-06-21",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian"],
    photo: "",
  },
  {
    id: "89",
    name: "Wicked Wonderland",
    venue: "Escape 66 (Laguna Hills)",
    date: "2025-06-21",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian"],
    photo: "",
  },
  {
    id: "90",
    name: "Case 93",
    venue: "60out (Silverlake)",
    date: "2025-07-11",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Raymond"],
    photo: "",
  },
  {
    id: "91",
    name: "Ink and Ashes",
    venue: "Exodus Escape (Tustin)",
    date: "2025-07-12",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Raymond","Kanate"],
    photo: "",
  },
  {
    id: "92",
    name: "Relic",
    venue: "Red Door (Topanga)",
    date: "2025-08-09",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Longman"],
    photo: "",
  },
  {
    id: "93",
    name: "Edeline",
    venue: "Cloud Escape (Anaheim)",
    date: "2025-08-14",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Kevin"],
    photo: "",
  },
  {
    id: "94",
    name: "Hotel Nocturnus",
    venue: "Nightwalker Caverns (San Diego)",
    date: "2025-09-09",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Ellen","Jessica","Ted","Michael","Jacob"],
    photo: "images/94.jpeg",
  },
  {
    id: "95",
    name: "Election Day",
    venue: "Appleseed Avenue (Santa Clarita)",
    date: "2025-09-13",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Raymond","Kanate"],
    photo: "images/95.jpeg",
  },
  {
    id: "96",
    name: "The Harvest",
    venue: "King's Eye Escape (Westminster)",
    date: "2025-11-09",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "failed",
    group: ["Tee","Ann","Van"],
    photo: "",
  },
  {
    id: "97",
    name: "Wrecked (NC)",
    venue: "Masterpiece Escapes (North Carolina)",
    date: "2025-12-16",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Raymond","Huy D."],
    photo: "",
  },
  {
    id: "98",
    name: "Ghastly Escapes Part 1: Bagman",
    venue: "Masterpiece Escapes (North Carolina)",
    date: "2025-12-16",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Raymond","Huy D."],
    photo: "",
  },
  {
    id: "99",
    name: "Defenders of the Sunken Realm",
    venue: "Keepers of Balance (Charlotte, North Carolina)",
    date: "2025-12-17",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Raymond","Huy D."],
    photo: "",
  },
  {
    id: "100",
    name: "Quest for the Temple of Light",
    venue: "Keepers of Balance (Charlotte, North Carolina)",
    date: "2025-12-17",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Raymond","Huy D."],
    photo: "",
  },
  {
    id: "101",
    name: "Castle Fluffendor",
    venue: "Escape Artists Hampton Station (Greensville, South Carolina)",
    date: "2025-12-18",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Raymond","Huy D."],
    photo: "images/101_102_103.jpg",
  },
  {
    id: "102",
    name: "Dark Lullaby",
    venue: "Escape Artists Hampton Station (Greensville, South Carolina)",
    date: "2025-12-18",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Raymond","Huy D."],
    photo: "images/101_102_103.jpg",
  },
  {
    id: "103",
    name: "Help Wanted",
    venue: "Escape Artists Hampton Station (Greensville, South Carolina)",
    date: "2025-12-18",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Raymond","Huy D."],
    photo: "images/101_102_103.jpg",
  },
  {
    id: "104",
    name: "Starlight Motel",
    venue: "Escape Artists Downtown (Greensville, South Carolina)",
    date: "2025-12-18",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Raymond","Huy D."],
    photo: "images/104.jpeg",
  },
  {
    id: "105",
    name: "Occam's Apartment",
    venue: "Off the Couch (Fremont)",
    date: "2025-12-27",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Huy L."],
    photo: "",
  },
  {
    id: "106",
    name: "Titanic",
    venue: "60Out (HHLA)",
    date: "2026-01-02",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Huy L.","May","Ann","Tee","Elly"],
    photo: "",
  },
  {
    id: "107",
    name: "Mansion Murder",
    venue: "Escapology (Northridge)",
    date: "2026-01-04",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Jason","Johnny","Nick"],
    photo: "",
  },
  {
    id: "108",
    name: "Twenty Ghosts",
    venue: "Brain Games Escape Rooms (San Pedro)",
    date: "2026-01-16",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Raymond"],
    photo: "",
  },
  {
    id: "109",
    name: "Flynn's Arcade",
    venue: "Brain Games Escape Rooms (San Pedro)",
    date: "2026-01-16",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Raymond"],
    photo: "",
  },
  {
    id: "110",
    name: "Taken",
    venue: "MindTrap (Murrieta)",
    date: "2026-01-17",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Raymond","Erdi"],
    photo: "images/110.jpeg",
  },
  {
    id: "111",
    name: "Winnie the Pooh",
    venue: "MindTrap (Murrieta)",
    date: "2026-01-17",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Raymond","Erdi"],
    photo: "images/111.jpeg",
  },
  {
    id: "112",
    name: "Operation Nightwalker",
    venue: "MindTrap (Murrieta)",
    date: "2026-01-17",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Raymond","Erdi"],
    photo: "images/112.jpeg",
  },
  {
    id: "113",
    name: "40Thieves",
    venue: "MindTrap (Temecula)",
    date: "2026-01-17",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Raymond","Erdi"],
    photo: "images/113.jpeg",
  },
  {
    id: "114",
    name: "The Curse",
    venue: "Curiosity Escapes (Menifee)",
    date: "2026-01-18",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Raymond"],
    photo: "images/114.jpeg",
  },
  {
    id: "115",
    name: "Grandma's Bakery",
    venue: "Beyond the Lock (Hemet)",
    date: "2026-01-18",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Raymond"],
    photo: "",
  },
  {
    id: "116",
    name: "The Trials",
    venue: "Open Door (Redlands)",
    date: "2026-01-18",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian","Raymond"],
    photo: "",
  },
  {
    id: "117",
    name: "Survive",
    venue: "Red Door (Topanga)",
    date: "2026-02-07",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Brian"],
    photo: "images/117.jpeg",
  },
  {
    id: "118",
    name: "Avalanche",
    venue: "Mazerooms (Robertson)",
    date: "2026-02-14",
    country: "United States",
    lat: 0, lng: 0,  // ← add coordinates from Google Maps
    outcome: "escaped",
    group: ["Huy L."],
    photo: "",
  }
];

const IMAGE_EXTENSIONS = ['jpg', 'JPG', 'jpeg', 'JPEG', 'png', 'PNG', 'webp', 'WEBP'];

function resolvePhoto(id) {
  // Returns the first matching extension as a path
  // Falls back gracefully via onerror on the <img> tag
  return `images/${id}.${IMAGE_EXTENSIONS[0]}`;
}

// Auto-assign photo paths for any room missing one
ROOMS.forEach(r => {
  if (!r.photo) r.photo = resolvePhoto(r.id);
});
