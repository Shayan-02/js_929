// Add your JavaScript code here
/* global jalaali, EVENTS */

const PERSIAN_MONTHS = [
  "فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور",
  "مهر","آبان","آذر","دی","بهمن","اسفند"
];

const $ = (sel) => document.querySelector(sel);

const state = {
  jy: 0,
  jm: 0,
  selectedKey: "", // "jy/mm/dd"
};

function pad2(n) {
  return String(n).padStart(2, "0");
}

function keyOf(jy, jm, jd) {
  return `${jy}/${pad2(jm)}/${pad2(jd)}`;
}

function getTodayJalaali() {
  const now = new Date();
  return jalaali.toJalaali(now.getFullYear(), now.getMonth() + 1, now.getDate());
}

function jDaysInMonth(jy, jm) {
  // 1..6 => 31, 7..11 => 30, 12 => 29/30 (leap)
  if (jm <= 6) return 31;
  if (jm <= 11) return 30;
  return jalaali.isLeapJalaaliYear(jy) ? 30 : 29;
}

// برای بدست آوردن اینکه روز ۱ ماه شمسی در هفته چندم است:
// تبدیل به میلادی -> Date -> getDay
// JS: 0=Sunday..6=Saturday
// ما می‌خوای: 0=Saturday..6=Friday
function firstDayOffset(jy, jm) {
  const g = jalaali.toGregorian(jy, jm, 1); // {gy,gm,gd}
  const d = new Date(g.gy, g.gm - 1, g.gd);
  const jsDow = d.getDay();
  return (jsDow + 1) % 7;
}

function renderHeader() {
  $("#monthTitle").textContent = `${PERSIAN_MONTHS[state.jm - 1]} ${state.jy}`;
  $("#monthMeta").textContent = `ماه ${state.jm} از ۱۲`;
}

function renderGrid() {
  const grid = $("#daysGrid");
  grid.innerHTML = "";

  const offset = firstDayOffset(state.jy, state.jm);
  const dim = jDaysInMonth(state.jy, state.jm);

  const today = getTodayJalaali();
  const todayKey = keyOf(today.jy, today.jm, today.jd);

  // خانه‌های خالی قبل از روز ۱
  for (let i = 0; i < offset; i++) {
    const cell = document.createElement("div");
    cell.className = "day isEmpty";
    cell.innerHTML = `<div class="num"></div>`;
    grid.appendChild(cell);
  }

  // روزهای ماه
  for (let d = 1; d <= dim; d++) {
    const k = keyOf(state.jy, state.jm, d);

    const cell = document.createElement("div");
    cell.className = "day";
    if (k === todayKey) cell.classList.add("isToday");
    if (k === state.selectedKey) cell.classList.add("isSelected");

    const evs = (window.EVENTS && window.EVENTS[k]) ? window.EVENTS[k] : [];

    cell.innerHTML = `
      <div class="num">${d}</div>
      ${evs.length ? `<div class="badge">${evs.length} مورد</div>` : ``}
    `;

    cell.addEventListener("click", () => {
      state.selectedKey = k;
      renderAll();
      renderSelectedDetails();
    });

    grid.appendChild(cell);
  }
}

function renderSelectedDetails() {
  const k = state.selectedKey;
  if (!k) return;

  const [jyS, jmS, jdS] = k.split("/");
  const jy = parseInt(jyS, 10);
  const jm = parseInt(jmS, 10);
  const jd = parseInt(jdS, 10);

  $("#outJ").textContent = k;

  const g = jalaali.toGregorian(jy, jm, jd);
  $("#outG").textContent = `${g.gy}-${pad2(g.gm)}-${pad2(g.gd)}`;

  const list = $("#eventsList");
  list.innerHTML = "";

  const evs = (window.EVENTS && window.EVENTS[k]) ? window.EVENTS[k] : [];
  if (!evs.length) {
    const li = document.createElement("li");
    li.textContent = "مناسبتی برای این روز ثبت نشده";
    list.appendChild(li);
    return;
  }

  for (const title of evs) {
    const li = document.createElement("li");
    li.textContent = title;
    list.appendChild(li);
  }
}

function changeMonth(delta) {
  state.jm += delta;

  if (state.jm < 1) {
    state.jm = 12;
    state.jy -= 1;
  } else if (state.jm > 12) {
    state.jm = 1;
    state.jy += 1;
  }

  // انتخاب روز را خالی کن تا با ماه جدید تداخل نداشته باشد
  state.selectedKey = "";
  renderAll();

  // پیش‌فرض: روز ۱ ماه را انتخاب کن
  state.selectedKey = keyOf(state.jy, state.jm, 1);
  renderSelectedDetails();
  renderAll();
}

function renderAll() {
  renderHeader();
  renderGrid();
}

function boot() {
  const t = getTodayJalaali();
  state.jy = t.jy;
  state.jm = t.jm;
  state.selectedKey = keyOf(t.jy, t.jm, t.jd);

  $("#btnPrev").addEventListener("click", () => changeMonth(-1));
  $("#btnNext").addEventListener("click", () => changeMonth(+1));

  renderAll();
  renderSelectedDetails();
}

boot();