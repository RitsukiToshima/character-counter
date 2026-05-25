const input = document.getElementById("input");
const countAll = document.getElementById("count-all");
const countNoSpace = document.getElementById("count-no-space");
const countLines = document.getElementById("count-lines");
const clearBtn = document.getElementById("clear-btn");
const themeToggle = document.getElementById("theme-toggle");

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
}

const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(savedTheme || (prefersDark ? "dark" : "light"));

themeToggle.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem("theme", next);
});

function updateCount() {
  const text = input.value;
  countAll.textContent = text.length;
  countNoSpace.textContent = text.replace(/\s/g, "").length;
  countLines.textContent = text === "" ? 0 : text.split("\n").length;
}

input.addEventListener("input", updateCount);

clearBtn.addEventListener("click", () => {
  input.value = "";
  updateCount();
});
