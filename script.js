
const toggle = document.getElementById("theme-toggle");
const root = document.documentElement;

const storageKey = "ryan-theme";

// Use saved preference or the visitor's system preference.
let savedTheme = null;

try {
  savedTheme = localStorage.getItem(storageKey);
} catch (error) {
  savedTheme = null;
}

const systemDark = window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

root.dataset.theme = savedTheme || (systemDark ? "dark" : "light");

function updateButton() {
  const darkMode = root.dataset.theme === "dark";

  toggle.textContent = darkMode ? "☀" : "◐";

  toggle.setAttribute(
    "aria-label",
    darkMode ? "Switch to light mode" : "Switch to dark mode"
  );

  toggle.setAttribute("aria-pressed", String(darkMode));
}

toggle.addEventListener("click", () => {
  root.dataset.theme =
    root.dataset.theme === "dark" ? "light" : "dark";

  try {
    localStorage.setItem(storageKey, root.dataset.theme);
  } catch (error) {
    // Theme switching still works if storage is unavailable.
  }

  updateButton();
});

updateButton();

// Automatically update copyright year.
document.getElementById("year").textContent =
  new Date().getFullYear();
