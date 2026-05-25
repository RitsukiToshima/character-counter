const input = document.getElementById("input");
const countAll = document.getElementById("count-all");
const countNoSpace = document.getElementById("count-no-space");
const countLines = document.getElementById("count-lines");
const clearBtn = document.getElementById("clear-btn");

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
