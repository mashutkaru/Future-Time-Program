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
  coffee: iconSvg(
    '<path d="M6 8h11v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8z"/><path d="M17 8h1a3 3 0 0 1 0 6h-1"/><path d="M6 4v4"/><path d="M10 4v4"/><path d="M14 4v4"/>'
  ),
  suitcase: iconSvg(
    '<rect x="4" y="9" width="16" height="11" rx="2"/><path d="M9 9V7a3 3 0 0 1 6 0v2"/><path d="M12 14v3"/>'
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
      ["CHECK-IN", "Airport check-in and travel setup.", "▦"],
      ["WELCOME", "Group alignment before the flight.", ICONS.coffee],
      ["OVERNIGHT", "Overnight flight to Japan.", "☾"],
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
    city: "Narita → Tokyo",
    theme: "Landing in Japan and a free first evening to rest and settle in.",
    tip: "Stay with the group after landing and keep luggage tagged.",
    items: [
      ["ARRIVAL", "Group arrival at 14:00.", ICONS.plane],
      ["TRANSFER", "Transfer to the hotel.", "▦"],
      ["FREE EVENING", "Evening at leisure.", "☾"],
      ["OVERNIGHT", "Overnight in Tokyo.", "☾"],
    ],
    program: [
      ["14:00", "Arrival", "Narita Airport"],
      ["Afternoon", "Hotel check-in", "Transfer and rest"],
      ["Evening", "Free evening", "At leisure"],
    ],
  },
  {
    w: "THU",
    d: "9.7",
    m: "JUL",
    title: "Tokyo municipalities & innovation",
    city: "Meguro / Minato, Tokyo",
    theme: "How Tokyo wards implement aging policy locally — and a visit to Woven by Toyota.",
    tip: "Observe how national policy becomes local service design.",
    items: [
      ["MEGURO CITY HALL", "Pass-through visit.", "▥"],
      ["MINATO CITY HALL", "Local government briefing.", "▥"],
      ["MINATO SPORTS CENTER", "Multi-generational sports facility.", "◎"],
      ["WOVEN BY TOYOTA", "Headquarters visit — smart-city innovation.", "✦"],
    ],
    program: [
      ["Morning", "Meguro City Hall", "Pass through"],
      ["Morning", "Minato City Hall", "Office visit"],
      ["Midday", "Minato-ku Sports Center", "Site visit"],
      ["Afternoon", "Woven by Toyota (Tokyo HQ)", "Innovation lab visit"],
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
      ["SAITAMA CITY", "Presentation and discussion on community care systems.", "♙"],
      ["WELFARE VOLUNTEERS", "Meeting on active aging and community management.", "♧"],
      ["CARE PREVENTION", "Sessions with municipal care-prevention staff.", "✚"],
      ["ASOKA-EN", "Elderly Living Service Center (13:00–16:00).", "⌂"],
    ],
    program: [
      ["Morning", "Saitama City", "Presentation / discussion — community welfare volunteers & comprehensive care system"],
      ["Morning", "Group sessions", "Welfare volunteers & care-prevention divisions (2 groups)"],
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
      ["FREE DAY", "Day at leisure.", "☾"],
      ["TOKYO STATION", "Observation and urban context.", "⌖"],
      ["GINZA", "Neighborhood stroll.", "✦"],
      ["INTERMEDIATHEQUE", "Visit at 18:00.", ICONS.coffee],
    ],
    program: [
      ["Daytime", "Free day", "At leisure"],
      ["Afternoon", "Tokyo Station & Tokyo International Forum", "Observation"],
      ["Afternoon", "Ginza stroll", "Cultural walk"],
      ["18:00", "Intermediatheque", "Museum visit"],
    ],
  },
  {
    w: "SUN",
    d: "12.7",
    m: "JUL",
    title: "Tokyo touring day",
    city: "Tokyo",
    theme: "Infrastructure, parks, waterfront, and evening at teamLab.",
    tip: "Bring layers, charger and flexibility for weather changes.",
    items: [
      ["DISCHARGE CHANNEL", "Metropolitan Area Outer Underground Discharge Channel.", "△"],
      ["PARKS", "Mizumoto Park or Asukayama Park.", "⌖"],
      ["YAKATABUNE", "Boat to Hamarikyu Garden.", "♨"],
      ["TEAM LAB", "Evening visit.", "◎"],
    ],
    program: [
      ["Morning", "Metropolitan Area Outer Underground Discharge Channel", "Infrastructure visit"],
      ["Midday", "Mizumoto Park or Asukayama Park", "Park visit"],
      ["Afternoon", "Yakatabune boat", "Hamarikyu Garden"],
      ["Afternoon", "Takanawa Gateway", "Commercial / social hub"],
      ["Evening", "teamLab", "Immersive art experience"],
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
      ["BABA LAB", "Innovation lab empowering older entrepreneurs (3 groups).", "◎"],
      ["DEMENTIA CENTER", "Dementia-Friendly Center visit.", "⌂"],
      ["MUNICIPAL WELFARE", "Saitama City Senior Citizens Welfare Division.", "▥"],
      ["DAY SERVICE", "Community support center and day service.", "✚"],
    ],
    program: [
      ["Morning", "BABA Lab (Saitama)", "Site visit — 3 groups"],
      ["Morning", "Dementia-Friendly Center", "Community support hub"],
      ["Midday", "Saitama City Senior Welfare Division", "Municipal briefing"],
      ["Afternoon", "Community Comprehensive Support Center", "Regional care coordination"],
      ["Afternoon", "Day service facility", "On-site observation"],
    ],
  },
  {
    w: "TUE",
    d: "14.7",
    m: "JUL",
    title: "Care tech & final event",
    city: "Tokyo",
    theme: "Zenkoukai care technology lab and the joint closing event with Sivans Labs.",
    tip: "Ask what makes a care technology usable and scalable.",
    items: [
      ["ZENKOUKAI", "Zenkoukai Research Institute — Care Tech Lab.", "✦"],
      ["FINAL EVENT", "Joint event with Sivans Labs (17:30–22:00).", "♙"],
      ["NETWORKING", "Israel–Japan policy dialogue on resilient community care.", ICONS.coffee],
      ["RETURN", "Return to hotel after event.", "▤"],
    ],
    program: [
      ["Daytime", "Zenkoukai Research Institute (Care Tech Lab)", "Rehabilitation & innovation visit"],
      ["17:30–22:00", "Final Joint Event @ Sivans Labs", "Resilient Community Care and Wellbeing for Prolonged Crisis in Aging Societies, Vol. 2"],
    ],
  },
  {
    w: "WED",
    d: "15.7",
    m: "JUL",
    title: "Summary + departure",
    city: "Tokyo → Narita",
    theme: "Closing reflection and departure for Israel.",
    tip: "Write one concrete action you will take after returning.",
    items: [
      ["SUMMARY", "Closing session at the hotel.", "✦"],
      ["CHECKOUT", "Luggage and checkout.", ICONS.suitcase],
      ["DEPARTURE", "Departure at 13:00.", ICONS.plane],
      ["FLIGHT", "Return home.", "☾"],
    ],
    program: [
      ["Morning", "Summary closing session", "Hotel venue hall"],
      ["13:00", "Departure", "Transfer to Narita Airport"],
    ],
  },
];

const prep = [
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
  "Departure from Israel": "./assets/day-7-7.png",
  "Arrival in Tokyo": "./assets/tokyo-tower-evening.png",
  "Summary + departure": "./assets/day-15-7.png",
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
  console.assert(prep.length >= 1 && avoid.length >= 1, "Preparation and avoid pages should have content");
  ["overview", "schedule", "location", "notes", "tips"].forEach((name) => {
    console.assert(Boolean(byId(`section-${name}`)), `Missing #section-${name}`);
    console.assert(Boolean(byId(`m-section-${name}`)), `Missing #m-section-${name}`);
  });
}

function setCurrentDay(index) {
  currentDayIndex = Math.max(0, Math.min(days.length - 1, index));
  render();
}

function renderDateStrip() {
  byId("dateStrip").innerHTML = days
    .map(
      (day, index) => `
        <button class="date-btn ${index === currentDayIndex ? "active" : ""}" data-day="${index}" type="button">
          <span>
            <span class="date-week">${day.w}</span>
            <span class="date-num">${day.d}</span>
            <span class="date-month">${day.m}</span>
          </span>
        </button>
      `
    )
    .join("");

  document.querySelectorAll("[data-day]").forEach((button) => {
    button.addEventListener("click", () => setCurrentDay(Number(button.dataset.day)));
  });
}

function renderDesktopDay(day) {
  byId("sideDay").textContent = `DAY ${currentDayIndex + 1}`;
  byId("sideDate").textContent = `${formatWeekday(day.w)}, ${day.d}`;
  byId("title").textContent = day.title;
  byId("theme").textContent = day.theme;
  byId("tipText").textContent = day.tip;
  byId("dayLocation").textContent = day.city;
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

  byId("scheduleList").innerHTML = day.program
    .map(
      ([time, title, label]) => `
        <div class="timeline-row">
          <div class="time">${time}</div>
          <div>●</div>
          <div>
            <h4>${title}</h4>
            <p>${label}</p>
          </div>
          <span class="badge">Session</span>
        </div>
      `
    )
    .join("");
}

function renderMobileDay(day) {
  const dayLabel = `DAY ${currentDayIndex + 1}`;
  const dateLabel = `${formatWeekday(day.w)}, ${day.d}`;

  byId("mHeadDay").textContent = dayLabel;
  byId("mHeadDate").textContent = dateLabel;
  byId("mDayTitle").textContent = dayLabel;
  byId("mDate").textContent = dateLabel;

  byId("mDaysRow").innerHTML = days
    .map(
      (entry, index) => `
        <button class="m-date ${index === currentDayIndex ? "active" : ""}" data-day="${index}" type="button">
          ${entry.w}<br><b>${entry.d}</b><br>${entry.m}
        </button>
      `
    )
    .join("");

  byId("mGlance").innerHTML = `
    <button type="button">
      <span>${day.program[0]?.[0] || "TBD"}<br><small>Start</small></span>
      <span>›</span>
    </button>
    <button type="button">
      <span>${day.city}<br><small>Location</small></span>
      <span>›</span>
    </button>
    <button type="button">
      <span>Business casual<br><small>Dress code</small></span>
      <span>›</span>
    </button>
  `;

  byId("mSchedule").innerHTML = day.program
    .map(
      ([time, title, label]) => `
        <div class="timeline-row mobile-timeline-row">
          <div class="time">${time}</div>
          <div>
            <h4>${title}</h4>
            <p>${label}</p>
          </div>
        </div>
      `
    )
    .join("");

  byId("mLocation").textContent = day.city;
  byId("mNotes").textContent = day.theme;
  byId("mTip").textContent = day.tip;

  document.querySelectorAll("#mDaysRow [data-day]").forEach((button) => {
    button.addEventListener("click", () => setCurrentDay(Number(button.dataset.day)));
  });

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
  byId("scheduleList").classList.remove("active");
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

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setPanelActiveButton(button) {
  document.querySelectorAll(".panel .side-menu button, .panel .quick-link").forEach((item) => {
    item.classList.remove("active");
  });

  button.classList.add("active");
}

function scrollToDaySection(sectionName) {
  const section = document.getElementById(`section-${sectionName}`);
  if (!section) return;

  if (sectionName === "schedule") {
    byId("scheduleList").classList.add("active");
  }

  section.scrollIntoView({ behavior: "smooth", block: "start" });
}

function setMobileActiveButton(button) {
  document.querySelectorAll(".mobile-side-menu button").forEach((item) => {
    item.classList.remove("active");
  });

  button.classList.add("active");
}

function scrollToMobileSection(sectionName) {
  const section = document.getElementById(`m-section-${sectionName}`);
  if (!section) return;

  section.scrollIntoView({ behavior: "smooth", block: "start" });
}

function initEvents() {
  document.addEventListener("click", (event) => {
    const pageButton = event.target.closest("[data-page]");
    if (pageButton) showPage(pageButton.dataset.page);

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
    }
  });

  byId("prev2").addEventListener("click", () => setCurrentDay(currentDayIndex - 1));
  byId("next2").addEventListener("click", () => setCurrentDay(currentDayIndex + 1));
}

runTests();
renderGuides();
render();
initEvents();
