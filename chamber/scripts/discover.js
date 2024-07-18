document.addEventListener("DOMContentLoaded", () => {
  getCurrentDate();
  generateCalendar();
});

function getCurrentDate() {
  const dateElement = document.getElementById("date");
  const currentDate = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = currentDate.toLocaleDateString("en-US", options); // Cambia 'es-ES' a 'en-US'
  dateElement.textContent = formattedDate;
}

function generateCalendar() {
  const calendarGrid = document.getElementById("calendar-grid");
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  daysOfWeek.forEach((day) => {
    const headerCell = document.createElement("div");
    headerCell.classList.add("header");
    headerCell.textContent = day;
    calendarGrid.appendChild(headerCell);
  });

  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement("div");
    calendarGrid.appendChild(emptyCell);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dayCell = document.createElement("div");
    dayCell.textContent = day;
    if (day === currentDay) {
      dayCell.classList.add("current-day");
    }
    calendarGrid.appendChild(dayCell);
  }
}

/* localstorage */
/*
const currentDate = new Date();
currentDate.setDate(currentDate.getDate() - 2);
const currentTimestamp = currentDate.getTime();
localStorage.setItem('lastVisit', currentTimestamp.toString());
displayDaysAgoMessage(2); // Simula*/

document.addEventListener("DOMContentLoaded", () => {
  const currentDate = new Date();
  const currentTimestamp = currentDate.getTime();
  let lastVisitTimestamp = localStorage.getItem("lastVisit");

  if (!lastVisitTimestamp) {
    displayWelcomeMessage();
  } else {
    lastVisitTimestamp = parseInt(lastVisitTimestamp);
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const daysSinceLastVisit = Math.floor(
      (currentTimestamp - lastVisitTimestamp) / millisecondsPerDay
    );

    if (daysSinceLastVisit < 1) {
      displayBackSoonMessage();
    } else {
      displayDaysAgoMessage(daysSinceLastVisit);
    }
  }

  localStorage.setItem("lastVisit", currentTimestamp.toString());
});

function displayWelcomeMessage() {
  const greetingContainer = document.getElementById("dynamic-greeting");
  greetingContainer.querySelector("h3").textContent =
    "Welcome! Let us know if you have any questions.";
}

function displayBackSoonMessage() {
  const greetingContainer = document.getElementById("dynamic-greeting");
  greetingContainer.querySelector("h3").textContent = "Back so soon! Awesome!";
}

function displayDaysAgoMessage(days) {
  const greetingContainer = document.getElementById("dynamic-greeting");
  const message =
    days === 1
      ? `You last visited 1 day ago.`
      : `You last visited ${days} days ago.`;
  greetingContainer.querySelector("h3").textContent = message;
}
