const iconSvg = (inner, { fill = false } = {}) =>
  `<svg class="hi-icon-svg" viewBox="0 0 24 24" aria-hidden="true"${
    fill
      ? ' fill="currentColor"'
      : ' fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"'
  }>${inner}</svg>`;

const ICONS = {
  plane: iconSvg(
    '<path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>',
    { fill: true }
  ),
  suitcase: iconSvg(
    '<rect x="4" y="9" width="16" height="11" rx="2"/><path d="M9 9V7a3 3 0 0 1 6 0v2"/><path d="M12 14v3"/>'
  ),
  moon: iconSvg('<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>'),
  checkIn: iconSvg(
    '<path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="m9 12 2 2 4-4"/>'
  ),
  meeting: iconSvg(
    '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'
  ),
  transfer: iconSvg(
    '<path d="M4 6h16a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/><path d="M4 11h16"/><path d="M8 6V4"/><path d="M16 6V4"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>'
  ),
  dinner: iconSvg(
    '<path d="M3 2v7c0 1.1.9 2 2 2h0a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6h1v8"/>'
  ),
  building: iconSvg(
    '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>'
  ),
  sports: iconSvg(
    '<circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/>'
  ),
  panel: iconSvg(
    '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>'
  ),
  presentation: iconSvg(
    '<path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/>'
  ),
  community: iconSvg(
    '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'
  ),
  medical: iconSvg('<path d="M12 6v12"/><path d="M6 12h12"/><circle cx="12" cy="12" r="10"/>'),
  home: iconSvg(
    '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>'
  ),
  leisure: iconSvg(
    '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>'
  ),
  museum: iconSvg(
    '<path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M10 12v4"/><path d="M14 12v4"/>'
  ),
  train: iconSvg(
    '<rect x="4" y="3" width="16" height="16" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/><path d="m8 19-2 3"/><path d="m18 22-2-3"/><circle cx="8" cy="15" r="1"/><circle cx="16" cy="15" r="1"/>'
  ),
  stroll: iconSvg(
    '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>'
  ),
  infrastructure: iconSvg(
    '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/>'
  ),
  park: iconSvg(
    '<path d="m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7l3.2-4.3a1 1 0 0 1 1.4 0l1.8 2.4 1.8-2.4a1 1 0 0 1 1.4 0l3.2 4.3a1 1 0 0 1-.7 1.7H17Z"/><path d="M12 22v-8"/>'
  ),
  boat: iconSvg(
    '<path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.5 0 2.5 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.9 5.8 2.38 8"/><path d="M12 2v8"/>'
  ),
  social: iconSvg('<path d="M8 2h8l4 10H4L8 2z"/><path d="M12 12v10"/><path d="M8 22h8"/>'),
  innovation: iconSvg(
    '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/>'
  ),
  tech: iconSvg(
    '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v2"/><path d="M15 2v2"/><path d="M9 20v2"/><path d="M15 20v2"/><path d="M20 9h2"/><path d="M20 14h2"/><path d="M2 9h2"/><path d="M2 14h2"/>'
  ),
  car: iconSvg(
    '<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>'
  ),
  hub: iconSvg(
    '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>'
  ),
  event: iconSvg(
    '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>'
  ),
  embassy: iconSvg(
    '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/>'
  ),
  care: iconSvg(
    '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>'
  ),
};

const days = [
  {
    w: "TUE",
    d: "7.7",
    m: "JUL",
    title: "Departure from Israel",
    city: "Ben Gurion Airport → Tokyo",
    theme: "Start of the delegation journey.",
    tip: "Keep passport, insurance and headphones close.",
    items: [
      ["ARRIVAL", "Departure from TLV and group briefing.", ICONS.plane],
      ["CHECK-IN", "Airport check-in and travel setup.", ICONS.checkIn],
      ["WELCOME", "Group alignment before the flight.", ICONS.meeting],
      ["OVERNIGHT", "Overnight flight to Japan.", ICONS.moon],
    ],
    program: [
      ["TBD", "Departure from TLV", "Final flight details TBD"],
      ["TBD", "Travel briefing", "Group communication setup"],
    ],
  },
  {
    w: "WED",
    d: "8.7",
    m: "JUL",
    title: "Arrival in Tokyo",
    city: "Narita → Shinagawa Prince Hotel",
    theme: "Landing in Japan, hotel check-in, and a welcome buffet dinner near the hotel.",
    tip: "Stay with the group after landing and keep luggage tagged.",
    items: [
      ["ARRIVAL", "Group arrival.", ICONS.plane],
      ["CHECK-IN", "Hotel check-in at Shinagawa Prince Hotel.", ICONS.checkIn],
      ["DINNER", "Buffet dinner near the hotel.", ICONS.dinner],
      ["OVERNIGHT", "Overnight in Tokyo.", ICONS.moon],
    ],
    program: [
      ["14:00", "Arrival", "Narita Airport"],
      ["16:00", "Hotel check-in", "Shinagawa Prince Hotel (品川プリンスホテル)"],
      ["Evening", "Buffet dinner", "Near the hotel"],
    ],
  },
  {
    w: "THU",
    d: "9.7",
    m: "JUL",
    title: "Tokyo municipalities & innovation",
    city: "Meguro / Minato, Tokyo",
    theme: "Meguro pass-through, TMG policy dialogue, lunch in Ginza, and a geriatrics institute visit.",
    tip: "Observe how national policy becomes local service design.",
    items: [
      ["MEGURO CITY HALL", "Pass-through visit.", ICONS.building],
      ["TMG PANEL", "Policy dialogue with government officials.", ICONS.panel],
      ["GERONTOLOGY INSTITUTE", "Tokyo Metropolitan Institute for Geriatrics and Gerontology.", ICONS.medical],
      ["LUNCH", "Little Edo · Sushi Tofuro Ginza 1-chome.", ICONS.dinner],
    ],
    program: [
      ["09:00–10:00", "Meguro City Hall", "Pass through"],
      [
        "11:00–15:00",
        "Panel discussion with Government officials",
        "Tokyo Metropolitan Government — simultaneous translation",
        [
          ["11:00", "Keynote lecture (30 min)", "Policy Design and Governance Challenges in Super-Aging Societies"],
          ["Panel 1", "Governance, Workforce, and Policy Coordination", "Japan–Israel comparative perspectives (25 min)"],
          ["Break", "Coffee break", "10 min"],
          ["Panel 2", "Prevention, Independence Support, and Care Models", "Japan–Israel comparative perspectives (25 min)"],
          ["Roundtable", "Interactive exchange", "Japanese and Israeli participants, policymakers, researchers & practitioners (40 min)"],
        ],
      ],
      ["Lunch", "Lunch", "Little Edo · Sushi Tofuro Ginza 1-chome"],
      ["Afternoon", "Tokyo Metropolitan Institute for Geriatrics and Gerontology", "Site visit"],
    ],
  },
  {
    w: "FRI",
    d: "10.7",
    m: "JUL",
    title: "Saitama community systems",
    city: "Saitama City",
    theme:
      "Prevention, community welfare volunteers, and integrated care — plus Asoka-en elderly living services.",
    tip: "Arrive prepared with your notebook, questions, and headset.",
    items: [
      ["SAITAMA CITY", "Presentation on regional comprehensive care.", ICONS.presentation],
      ["WELFARE VOLUNTEERS", "Regional welfare volunteers discussion.", ICONS.community],
      ["CARE PREVENTION", "Sessions with municipal care-prevention staff.", ICONS.medical],
      ["ASOKA-EN", "Elderly Living Service Center visit.", ICONS.home],
    ],
    program: [
      ["10:00–12:00", "Saitama City", "Presentation / discussion — regional welfare volunteers (地域の民生委員・児童委員協議会) & comprehensive care system (いきいき埼玉市役所, Omiya Ward Office)"],
      ["12:00–13:00", "Lunch", "Obento at the center"],
      ["13:00–16:00", "Asoka-en Elderly Living Service Center", "Integrated elderly care facility visit"],
    ],
  },
  {
    w: "SAT",
    d: "11.7",
    m: "JUL",
    title: "Free day in Tokyo",
    city: "Tokyo",
    theme: "A free day with optional cultural sites and an evening at Intermediatheque.",
    tip: "Wear comfortable shoes and bring water.",
    items: [
      ["FREE DAY", "Day at leisure.", ICONS.leisure],
      ["INTERMEDIATHEQUE", "Museum visit.", ICONS.museum],
      ["TOKYO STATION", "Observation and urban context.", ICONS.train],
      ["GINZA", "Neighborhood stroll.", ICONS.stroll],
    ],
    program: [
      ["Daytime", "Free day", "At leisure"],
      ["18:00–19:00", "Intermediatheque", "Museum visit"],
      ["19:00–20:00", "Tokyo Station", "Observation"],
      ["20:00–21:00", "Tokyo International Forum", "Observation"],
      ["21:00", "Ginza stroll", "Cultural walk"],
    ],
  },
  {
    w: "SUN",
    d: "12.7",
    m: "JUL",
    title: "Tokyo touring day",
    city: "Tokyo",
    theme: "Infrastructure, parks, waterfront, teamLab, and a social event at Takanawa Gateway.",
    tip: "Bring layers, charger and flexibility for weather changes.",
    items: [
      ["DISCHARGE CHANNEL", "Metropolitan Area Outer Underground Discharge Channel.", ICONS.infrastructure],
      ["PARKS", "Mizumoto Park or Shimizu Park.", ICONS.park],
      ["YAKATABUNE", "Boat to Hamarikyu Garden.", ICONS.boat],
      ["SOCIAL EVENT", "Evening gathering at Takanawa Gateway.", ICONS.hub],
    ],
    program: [
      ["09:30–11:30", "Metropolitan Area Outer Underground Discharge Channel", "Infrastructure visit"],
      ["12:00–14:00", "Mizumoto Park or Shimizu Park", "Park visit"],
      ["Lunch", "Lunch", "Obento or restaurant (TBC)"],
      ["15:00–17:00", "Yakatabune boat", "Hamarikyu Garden"],
      ["16:00–18:00", "teamLab", "Immersive art experience"],
      ["19:00–21:00", "Social event", "Takanawa Gateway"],
    ],
  },
  {
    w: "MON",
    d: "13.7",
    m: "JUL",
    title: "Saitama care visits",
    city: "Saitama City",
    theme: "BABA Lab, dementia-friendly services, and the full community care continuum.",
    tip: "Look for the bridge between institution, home and community.",
    items: [
      ["BABA LAB", "Innovation lab visit (3 groups).", ICONS.innovation],
      ["DEMENTIA CENTER", "Dementia-Friendly Center visit.", ICONS.care],
      ["MUNICIPAL WELFARE", "Saitama City Senior Citizens Welfare Division.", ICONS.building],
      ["DAY SERVICE", "Community support center, welfare volunteers Q&A & day service.", ICONS.community],
    ],
    program: [
      ["10:00–12:00", "BABA Lab (Saitama)", "Site visit — 3 groups (横地様)"],
      ["12:00–13:00", "Lunch", "Café Hobonora (カフェほぼのら)"],
      ["Afternoon", "Dementia-Friendly Center", "認知症フレンドリーセンター"],
      ["Afternoon", "Saitama City Senior Welfare Division", "さいたま市高齢福祉課"],
      ["Afternoon", "Community Comprehensive Support Center", "地域包括支援センター — welfare volunteers Q&A"],
      ["Afternoon", "Day service facility", "デーサービス — on-site observation"],
    ],
  },
  {
    w: "TUE",
    d: "14.7",
    m: "JUL",
    title: "Care tech & final event",
    city: "Minato / Tokyo",
    theme: "Minato ward visits, Zenkou care technology, and the joint closing event.",
    tip: "Ask what makes a care technology usable and scalable.",
    items: [
      ["MINATO CITY HALL", "Office visit.", ICONS.building],
      ["MINATO SPORTS CENTER", "Site visit.", ICONS.sports],
      ["ZENKOUKAI", "Zenkou Research Institute — Care Tech Lab.", ICONS.tech],
      ["FINAL EVENT", "Joint closing event.", ICONS.event],
    ],
    program: [
      ["10:30–12:00", "Minato City Hall", "Office visit"],
      ["13:30–14:30", "Minato-ku Sports Center", "Site visit"],
      ["15:00–16:30", "Zenkou Research Institute (Care Tech Lab)", "Rehabilitation & innovation visit"],
      ["17:30–22:00", "Final Event", "Resilient Community Care and Wellbeing for Prolonged Crisis in Aging Societies, Vol. 2"],
    ],
  },
  {
    w: "WED",
    d: "15.7",
    m: "JUL",
    title: "Summary + departure",
    city: "Embassy → Narita",
    theme: "Summary closing session at the Israeli Embassy and departure for Israel.",
    tip: "Write one concrete action you will take after returning.",
    items: [
      ["EMBASSY", "Summary closing session at the embassy.", ICONS.embassy],
      ["CHECKOUT", "Luggage and checkout.", ICONS.suitcase],
      ["DEPARTURE", "Departure for Narita Airport.", ICONS.transfer],
      ["FLIGHT", "Return home.", ICONS.plane],
    ],
    program: [
      ["10:00–11:30", "Summary closing session (Embassy)", "Israeli Embassy, Tokyo"],
      ["11:30", "Departure", "Transfer to Narita Airport"],
    ],
  },
];

const delegationHotel = {
  name: "Shinagawa Prince Hotel",
  nameJa: "品川プリンスホテル",
  mapSrc: "https://www.google.com/maps?q=35.6279119,139.7367526&hl=en&z=16&output=embed",
  mapLink: "https://maps.app.goo.gl/i9wZU4pj519VPV3u5",
};

const prep = [
  ["Accommodation", [`Delegation hotel: ${delegationHotel.name} (${delegationHotel.nameJa}).`, "Located in Shinagawa, Tokyo — see the Map page for directions."]],
  ["Travel Documents", ["Passport, visa, insurance and copies.", "Israeli passports do not need special visa procedures."]],
  ["Arrival & Entry Procedures", ["Complete Visit Japan Web declaration.", "Register flight and personal details.", "Save QR code for airport entry."]],
  ["Currency & Payments", ["Bring 10,000–20,000 JPY cash.", "Cards accepted in large stores.", "Cash needed for small shops and taxis."]],
  ["Packing", ["Formal clothes for official visits.", "Closed shoes and socks.", "Comfortable walking shoes.", "Plug type A, voltage 100V."]],
  ["Order in Advance", ["Portable Wi‑Fi or SIM rental.", "Business cards.", "Recommended items to arrange ahead."]],
  ["General Suggestions", ["Be punctual and arrive early.", "Keep phone silent in public.", "Bring personal medications."]],
];

const avoid = [
  ["Formal Visits", ["Do not arrive late.", "Do not use your phone during meetings.", "Do not dress casually.", "Do not forget your name tag."]],
  ["Public Etiquette", ["Do not speak loudly in public.", "Do not eat while walking.", "Smoke only in marked areas.", "Avoid pointing with fingers."]],
  ["Money & Connectivity", ["Do not rely only on credit cards.", "Do not count on free public Wi‑Fi.", "Do not leave tips; it is not customary."]],
  ["Conversation & Gifts", ["Avoid sensitive political topics.", "Avoid being overly direct.", "Do not bring oversized or perishable gifts."]],
];

const dayPhotos = {
  "Departure from Israel": "./images/japan_7.7",
  "Arrival in Tokyo": "./assets/tokyo-tower-evening.png",
  "Summary + departure": "./assets/day-15-7.png",
};

const dayMaps = {
  "Arrival in Tokyo": {
    src: "https://www.google.com/maps/d/embed?mid=1KgNu-E3PTu-8eC-OTNJ8IM7su6szrT8&ehbc=2E312F",
    title: "July 8 Wednesday",
  },
  "Tokyo municipalities & innovation": {
    src: "https://www.google.com/maps/d/embed?mid=1bb008A8_D0OJe2mofNKqRvb-oQ0z26w&ehbc=2E312F",
    title: "July 9 Thursday",
  },
  "Saitama community systems": {
    src: "https://www.google.com/maps/d/embed?mid=1Xg2LNCJBhtA8m4MM0o9tBOX5bm_iqy8&ehbc=2E312F",
    title: "July 10 Friday",
  },
  "Free day in Tokyo": {
    src: "https://www.google.com/maps/d/embed?mid=15FLGVWz9eXqo_ufO6L2nwi7p70sZBww&ehbc=2E312F",
    title: "July 11 Saturday",
  },
  "Tokyo touring day": {
    src: "https://www.google.com/maps/d/embed?mid=1IUPlzFBabwKk6R7r7fIQqNbHj-Clcs4&ehbc=2E312F",
    title: "July 12 Sunday",
  },
  "Saitama care visits": {
    src: "https://www.google.com/maps/d/embed?mid=1Pezeih-CifGEbfrkqg10sPUi3LHKIOg&ehbc=2E312F",
    title: "July 13 Monday",
  },
  "Care tech & final event": {
    src: "https://www.google.com/maps/d/embed?mid=1uCaE_ygxN8Un5Q-7FOIvGyqLTrFKKl4&ehbc=2E312F",
    title: "July 14 Tuesday",
  },
  "Summary + departure": {
    src: "https://www.google.com/maps/d/embed?mid=1ZgwBBCUWDVOCGlfIPt__LAkWsFGHPU8&ehbc=2E312F",
    title: "July 15 Wednesday",
  },
};

let currentDayIndex = 0;

const byId = (id) => document.getElementById(id);

function runTests() {
  console.assert(days.length === 9, "Expected 9 delegation days");
  console.assert(days[6].title === "Saitama care visits", "Day 7 title should be Saitama care visits");
  console.assert(days[6].city === "Saitama City", "Day 7 city should be Saitama City");
  console.assert(Boolean(dayPhotos[days[0].title]), "Day 7.7 should have a photo");
  console.assert(Boolean(dayPhotos[days[1].title]), "Day 8.7 should have a photo");
  console.assert(Boolean(dayPhotos[days[8].title]), "Day 15.7 should have a photo");
  console.assert(!dayPhotos[days[2].title], "Only days 7.7, 8.7, and 15.7 should have photos");
  console.assert(Boolean(dayMaps[days[2].title]), "Day 9.7 should have a map");
  console.assert(Boolean(dayMaps[days[3].title]), "Day 10.7 should have a map");
  console.assert(Boolean(dayMaps[days[4].title]), "Day 11.7 should have a map");
  console.assert(Boolean(dayMaps[days[5].title]), "Day 12.7 should have a map");
  console.assert(Boolean(dayMaps[days[6].title]), "Day 13.7 should have a map");
  console.assert(Boolean(dayMaps[days[7].title]), "Day 14.7 should have a map");
  console.assert(Boolean(dayMaps[days[8].title]), "Day 15.7 should have a map");
  console.assert(Boolean(dayMaps[days[1].title]), "Day 8.7 should have a map");
  console.assert(prep.length >= 1 && avoid.length >= 1, "Preparation and avoid pages should have content");
  ["overview", "schedule", "location", "notes", "tips"].forEach((name) => {
    console.assert(Boolean(byId(`section-${name}`)), `Missing #section-${name}`);
    console.assert(Boolean(byId(`m-section-${name}`)), `Missing #m-section-${name}`);
  });
}

function scrollDayViewToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });

  const mobileContent = document.querySelector(".m-content");
  if (mobileContent) {
    mobileContent.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function setCurrentDay(index) {
  const nextIndex = Math.max(0, Math.min(days.length - 1, index));
  if (nextIndex === currentDayIndex) return;

  currentDayIndex = nextIndex;
  render();
  scrollDayViewToTop();
}

function renderDateStrip() {
  byId("dateStrip").innerHTML = days
    .map(
      (day, index) => `
        <button class="date-btn ${index === currentDayIndex ? "active" : ""}" data-day="${index}" type="button">
          <span>
            <span class="date-week">${day.w}</span>
            <span class="date-num">${day.d}</span>
          </span>
        </button>
      `
    )
    .join("");

}

function renderDayMap(frameId, day) {
  const frame = byId(frameId);
  const iframe = frame.querySelector("iframe");
  const map = dayMaps[day.title];

  if (map) {
    frame.hidden = false;
    iframe.src = map.src;
    iframe.title = map.title;
  } else {
    frame.hidden = true;
    iframe.removeAttribute("src");
  }
}

function renderSchedulePlan(plan) {
  if (!Array.isArray(plan) || plan.length === 0) return "";

  return `
    <div class="timeline-plan">
      ${plan
        .map(
          ([time, title, label]) => `
            <div class="timeline-plan-row">
              <div class="timeline-plan-time">${time}</div>
              <div class="timeline-plan-body">
                <strong>${title}</strong>
                <p>${label}</p>
              </div>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderScheduleEntry(entry, { mobile = false } = {}) {
  const [time, title, label, plan] = entry;
  const planHtml = renderSchedulePlan(plan);

  if (mobile) {
    return `
      <div class="timeline-row mobile-timeline-row${plan ? " timeline-row--group" : ""}">
        <div class="time">${time}</div>
        <div>
          <h4>${title}</h4>
          <p>${label}</p>
          ${planHtml}
        </div>
      </div>
    `;
  }

  return `
    <div class="timeline-row${plan ? " timeline-row--group" : ""}">
      <div class="time">${time}</div>
      <div>●</div>
      <div>
        <h4>${title}</h4>
        <p>${label}</p>
        ${planHtml}
      </div>
      <span class="badge">Session</span>
    </div>
  `;
}

function renderDesktopDay(day) {
  byId("sideDay").textContent = `DAY ${currentDayIndex + 1}`;
  byId("sideDate").textContent = `${formatWeekday(day.w)}, ${day.d}`;
  byId("title").textContent = day.title;
  byId("theme").textContent = day.theme;
  byId("tipText").textContent = day.tip;
  byId("dayLocation").textContent = day.city;
  renderDayMap("dayLocationMap", day);
  byId("dayNotes").textContent = day.theme;

  const photoEl = byId("dayPhoto");
  const overviewEl = photoEl.closest(".overview");
  const photoUrl = dayPhotos[day.title];

  if (photoUrl) {
    photoEl.hidden = false;
    overviewEl.classList.remove("overview--no-photo");
    photoEl.style.background = `
      linear-gradient(135deg, rgba(33, 79, 99, 0.15), rgba(33, 79, 99, 0.03)),
      url("${photoUrl}") center / cover
    `;
  } else {
    photoEl.hidden = true;
    overviewEl.classList.add("overview--no-photo");
    photoEl.style.background = "";
  }

  byId("highlights").innerHTML = day.items
    .map(
      ([title, text, icon]) => `
        <div class="highlight">
          <div class="hi-icon">${icon}</div>
          <h3>${title}</h3>
          <p>${text}</p>
        </div>
      `
    )
    .join("");

  byId("scheduleList").innerHTML = day.program.map((entry) => renderScheduleEntry(entry)).join("");
}

function renderMobileDay(day) {
  const dayLabel = `DAY ${currentDayIndex + 1}`;
  const dateLabel = `${formatWeekday(day.w)}, ${day.d}`;
  const firstSession = day.program[0];
  const lastSession = day.program[day.program.length - 1];

  byId("mHeadDay").textContent = dayLabel;
  byId("mHeadDate").textContent = dateLabel;
  byId("mDayTitle").textContent = day.title;
  byId("mTheme").textContent = day.theme;

  byId("mDaysRow").innerHTML = days
    .map(
      (entry, index) => `
        <button class="m-date ${index === currentDayIndex ? "active" : ""}" data-day="${index}" type="button" aria-label="${entry.w} ${entry.d}">
          ${entry.w}<br><b>${entry.d}</b>
        </button>
      `
    )
    .join("");

  byId("mGlance").innerHTML = `
    <button type="button" data-scroll="schedule">
      <span>
        <strong>${firstSession?.[1] || "Program details"}</strong>
        <small>${firstSession?.[0] || "Start time"}</small>
      </span>
      <span class="glance-arrow" aria-hidden="true">›</span>
    </button>
    <button type="button" data-scroll="location">
      <span>
        <strong>${day.city}</strong>
        <small>Location</small>
      </span>
      <span class="glance-arrow" aria-hidden="true">›</span>
    </button>
    <button type="button" data-scroll="schedule">
      <span>
        <strong>${lastSession?.[1] || "Full schedule"}</strong>
        <small>${lastSession?.[0] || "End time"}</small>
      </span>
      <span class="glance-arrow" aria-hidden="true">›</span>
    </button>
  `;

  byId("mSchedule").innerHTML = day.program.map((entry) => renderScheduleEntry(entry, { mobile: true })).join("");

  byId("mLocation").textContent = day.city;
  renderDayMap("mLocationMap", day);
  byId("mNotes").textContent = day.theme;
  byId("mTip").textContent = day.tip;

  scrollMobileDateIntoView();
}

function scrollMobileDateIntoView() {
  const activeDate = document.querySelector("#mDaysRow .m-date.active");
  if (!activeDate) return;

  activeDate.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
}

function renderGuides() {
  byId("prepGrid").innerHTML = prep.map(renderGuideCard).join("");
  byId("avoidGrid").innerHTML = avoid.map(renderGuideCard).join("");
}

function renderGuideCard([title, items]) {
  return `
    <article class="guide-card">
      <h3>${title}</h3>
      <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
    </article>
  `;
}

function resetPanelNav() {
  const overviewButton = document.querySelector('.panel .side-menu button[data-section="overview"]');
  if (overviewButton) setPanelActiveButton(overviewButton);

  const mobileOverviewButton = document.querySelector('.mobile-side-menu button[data-section="overview"]');
  if (mobileOverviewButton) setMobileActiveButton(mobileOverviewButton);
}

function render() {
  const day = days[currentDayIndex];

  renderDateStrip();
  renderDesktopDay(day);
  renderMobileDay(day);
  resetPanelNav();
}

function formatWeekday(day) {
  return `${day[0]}${day.slice(1).toLowerCase()}`;
}

function showPage(pageName) {
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.toggle("active", page.id === `page-${pageName}`);
  });

  document.querySelectorAll("[data-page]").forEach((button) => {
    button.classList.toggle("active", button.dataset.page === pageName);
  });

  window.scrollTo({ top: 0, behavior: "auto" });

  const mobileContent = document.querySelector(".m-content");
  if (mobileContent) {
    mobileContent.scrollTo({ top: 0, behavior: "auto" });
  }
}

function setPanelActiveButton(button) {
  document.querySelectorAll(".panel .side-menu button, .panel .quick-link").forEach((item) => {
    item.classList.remove("active");
  });

  button.classList.add("active");
}

function updateDesktopScrollOffset() {
  const header = document.querySelector("header.desktop-only");
  const dateStrip = document.querySelector(".date-strip");
  if (!header || !dateStrip) return;

  document.documentElement.style.setProperty(
    "--desktop-scroll-offset",
    `${header.offsetHeight + dateStrip.offsetHeight}px`
  );
}

function scrollToDaySection(sectionName) {
  if (sectionName === "overview") {
    scrollDayViewToTop();
    return;
  }

  const section = document.getElementById(`section-${sectionName}`);
  if (!section) return;

  updateDesktopScrollOffset();

  const scrollTarget =
    section.querySelector(".day-section-title") || section.querySelector(".tip") || section;

  requestAnimationFrame(() => {
    scrollTarget.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function setMobileActiveButton(button) {
  document.querySelectorAll(".mobile-side-menu button").forEach((item) => {
    item.classList.remove("active");
  });

  button.classList.add("active");
}

function getMobileSectionScrollTop(section, mobileContent) {
  let offset = 0;
  let element = section;

  while (element && element !== mobileContent) {
    offset += element.offsetTop;
    element = element.offsetParent;
  }

  if (element !== mobileContent) {
    return (
      mobileContent.scrollTop +
      section.getBoundingClientRect().top -
      mobileContent.getBoundingClientRect().top
    );
  }

  return offset;
}

function scrollToMobileSection(sectionName) {
  const mobileContent = document.querySelector(".m-content");
  const section = document.getElementById(`m-section-${sectionName}`);
  if (!section) return;

  if (!mobileContent) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  requestAnimationFrame(() => {
    mobileContent.scrollTo({
      top: Math.max(0, getMobileSectionScrollTop(section, mobileContent)),
      behavior: "smooth",
    });
  });
}

function initEvents() {
  document.addEventListener("click", (event) => {
    const pageButton = event.target.closest("[data-page]");
    if (pageButton) {
      showPage(pageButton.dataset.page);
      return;
    }

    const dayButton = event.target.closest("[data-day]");
    if (dayButton) {
      setCurrentDay(Number(dayButton.dataset.day));
      return;
    }

    const panelButton = event.target.closest(".panel .side-menu button");
    if (panelButton?.dataset.section) {
      setPanelActiveButton(panelButton);
      scrollToDaySection(panelButton.dataset.section);
      return;
    }

    const quickLink = event.target.closest(".panel .quick-link");
    if (quickLink) setPanelActiveButton(quickLink);

    const mobileButton = event.target.closest(".mobile-side-menu button");
    if (mobileButton?.dataset.section) {
      setMobileActiveButton(mobileButton);
      scrollToMobileSection(mobileButton.dataset.section);
      return;
    }

    const glanceButton = event.target.closest(".m-glance button[data-scroll]");
    if (glanceButton?.dataset.scroll) {
      const sectionButton = document.querySelector(
        `.mobile-side-menu button[data-section="${glanceButton.dataset.scroll}"]`
      );
      if (sectionButton) setMobileActiveButton(sectionButton);
      scrollToMobileSection(glanceButton.dataset.scroll);
    }
  });

}

runTests();
renderGuides();
render();
updateDesktopScrollOffset();
initEvents();
window.addEventListener("resize", updateDesktopScrollOffset);
