// Typing effect for Hero Section
const heroText = "Quantum-Powered AI. Unbreakable Security.";
const heroHeading = document.querySelector("h2");
let index = 0;

function typeText() {
  if (index < heroText.length) {
    heroHeading.innerHTML = heroText.substring(0, index + 1) + "<span class='cursor'>|</span>";
    index++;
    setTimeout(typeText, 75);
  } else {
    const cursor = document.querySelector(".cursor");
    if (cursor) cursor.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", typeText);

// Console easter eggs just for swag
const logs = [
  "[QRYPTIX] Initializing quantum firewall...",
  "[QRYPTIX] AI Core activated.",
  "[QRYPTIX] Establishing secure lattice encryption...",
  "[QRYPTIX] System is running in offline secure mode ✅",
  "[QRYPTIX] No known vulnerabilities detected 🔒",
];

logs.forEach((log, i) => {
  setTimeout(() => {
    console.log(`%c${log}`, "color: #0ff; font-weight: bold; font-family: monospace;");
  }, i * 800);
});
