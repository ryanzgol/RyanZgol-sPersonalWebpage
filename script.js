
const toggle = document.getElementById("theme-toggle");
const root = document.documentElement;

// Remember visitor preference or use their system setting.
const savedTheme = localStorage.getItem("ryan-theme");
const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

root.dataset.theme = savedTheme || (systemDark ? "dark" : "light");

function updateButton() {
  toggle.textContent = root.dataset.theme === "dark" ? "☀" : "◐";
  toggle.setAttribute(
    "aria-label",
    root.dataset.theme === "dark"
      ? "Switch to light mode"
      : "Switch to dark mode"
  );
}

toggle.addEventListener("click", () => {
  root.dataset.theme =
    root.dataset.theme === "dark" ? "light" : "dark";

  localStorage.setItem("ryan-theme", root.dataset.theme);
  updateButton();
});

updateButton();

// Automatically update copyright year.
document.getElementById("year").textContent =
  new Date().getFullYear();
