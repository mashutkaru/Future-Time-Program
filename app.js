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
      ["ARRIVAL", "Departure from TLV and group briefing.", "✈"],
      ["CHECK-IN", "Airport check-in and travel setup.", "▦"],
      ["WELCOME", "Group alignment before the flight.", "☕"],
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
    city: "Narita / Tokyo",
    theme: "Landing, orientation and first evening.",
    tip: "Stay with the group after landing and keep luggage tagged.",
    items: [
      ["ARRIVAL", "Pick up from Narita Airport.", "✈"],
      ["CHECK-IN", "Arrival to hotel and rest.", "▦"],
      ["DINNER", "Free dinner near the hotel.", "♨"],
      ["OVERNIGHT", "Overnight in Tokyo.", "☾"],
    ],
    program: [
      ["12:30", "Pick up from Narita", "Bus meeting point TBD"],
      ["15:00", "Arrival to hotel", "Check-in and rest"],
      ["20:00", "Free dinner near the hotel", "Near the hotel"],
    ],
  },
  {
    w: "THU",
    d: "9.7",
    m: "JUL",
    title: "System foundations",
    city: "Tokyo",
    theme: "Understanding the infrastructure and systemic frame of aging management.",
    tip: "Observe how national policy becomes local service design.",
    items: [
      ["MUNICIPALITY", "City visit and briefing.", "▥"],
      ["LUNCH", "Lunch with delegation.", "♨"],
      ["INNOVATION LAB", "Visit and exchange.", "✦"],
      ["BABA LAB", "Community innovation placeholder.", "◎"],
    ],
    program: [
      ["10:00", "Municipality", "City visit and briefing"],
      ["12:30", "Lunch", "Dietary notes TBD"],
      ["15:00", "Innovation Lab", "Visit and exchange"],
    ],
  },
  {
    w: "FRI",
    d: "10.7",
    m: "JUL",
    title: "Prevention, rehabilitation and care",
    city: "Tokyo",
    theme:
      "Today in Tokyo we focus on how Japan leads in preventive care, community-based support, and rehabilitation — building healthier and more resilient communities.",
    tip: "Arrive prepared with your notebook, questions, and headset.",
    items: [
      ["POLICY MAKERS PANEL", "Dialogue with government officials on national strategies for healthy aging.", "♙"],
      ["ACADEMIA", "Research presentations from leading universities and labs.", "♧"],
      ["LUNCH", "Networking lunch with speakers and delegation members.", "♨"],
      ["EVENING / RETURN", "Return to hotel and evening at leisure.", "▤"],
    ],
    program: [
      ["10:00 – 11:30", "Policy makers panel", "Session"],
      ["13:00 – 14:30", "Academia", "Session"],
      ["12:00 – 13:00", "Lunch", "Meal"],
    ],
  },
  {
    w: "SAT",
    d: "11.7",
    m: "JUL",
    title: "Touring + social evening",
    city: "Tokyo",
    theme: "Cultural context and group connection.",
    tip: "Wear comfortable shoes and bring water.",
    items: [
      ["TOURING", "Tourist / cultural day in Tokyo.", "⌖"],
      ["CULTURE", "Urban flow and public behavior.", "✦"],
      ["SOCIAL EVENING", "Group evening / lecture.", "☕"],
      ["RETURN", "Return to hotel TBD.", "▤"],
    ],
    program: [
      ["TBD", "Tourist / cultural day", "Route TBD"],
      ["19:45", "Social evening / lecture", "Group evening"],
    ],
  },
  {
    w: "SUN",
    d: "12.7",
    m: "JUL",
    title: "Outside Tokyo",
    city: "Fuji / Hakone",
    theme: "Touring day outside Tokyo and free evening.",
    tip: "Bring layers, charger and flexibility for weather changes.",
    items: [
      ["FUJI WOVEN CITY", "Future city visit placeholder.", "△"],
      ["HAKONE", "Weather-sensitive touring.", "⌖"],
      ["LUNCH", "Lunch TBD.", "♨"],
      ["FREE EVENING", "Evening at leisure.", "☾"],
    ],
    program: [
      ["TBD", "Fuji Woven City", "To be confirmed"],
      ["TBD", "Hakone", "Weather-sensitive"],
    ],
  },
  {
    w: "MON",
    d: "13.7",
    m: "JUL",
    title: "Community Care System",
    city: "Tokyo",
    theme: "Community, assisted living and rehabilitation continuum.",
    tip: "Look for the bridge between institution, home and community.",
    items: [
      ["ASSISTED LIVING", "Facility visit.", "⌂"],
      ["LUNCH", "Lunch TBD.", "♨"],
      ["REHABILITATION", "Continuum of care.", "✚"],
      ["TEAMLAB / BABA LAB", "Evening TBD.", "◎"],
    ],
    program: [
      ["10:00", "Assisted Living", "Visit"],
      ["12:30", "Lunch", "TBD"],
      ["15:00", "Rehabilitation facility", "Continuum of care"],
    ],
  },
  {
    w: "TUE",
    d: "14.7",
    m: "JUL",
    title: "Innovation, investment and technology",
    city: "Tokyo",
    theme: "Innovation, investment, assistive technology and care models.",
    tip: "Ask what makes a care technology usable and scalable.",
    items: [
      ["DAY CARE", "Visit TBD.", "⌂"],
      ["NPO / COMMUNITY", "Community innovation.", "◎"],
      ["FINAL EVENT", "Closing event.", "✦"],
      ["RETURN", "Return after event.", "▤"],
    ],
    program: [
      ["10:00", "Day care", "Visit"],
      ["15:00", "NPO / Community Center", "Community innovation"],
      ["19:00", "Final Event", "Closing event"],
    ],
  },
  {
    w: "WED",
    d: "15.7",
    m: "JUL",
    title: "Summary + departure",
    city: "Tokyo → Airport",
    theme: "Synthesis and return home.",
    tip: "Write one concrete action you will take after returning.",
    items: [
      ["SUMMARY", "Closing reflection.", "✦"],
      ["CHECKOUT", "Luggage and checkout.", "🧳"],
      ["AIRPORT", "Bus to airport.", "✈"],
      ["FLIGHT", "Return home.", "☾"],
    ],
    program: [
      ["09:00", "Summary", "Closing reflection"],
      ["TBD", "Departure", "Bus to airport"],
      ["TBD", "Arrival to airport", "Check-in"],
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
  console.assert(days[6].title === "Community Care System", "Day 7 title should be Community Care System");
  console.assert(days[6].city === "Tokyo", "Day 7 city should be Tokyo");
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
