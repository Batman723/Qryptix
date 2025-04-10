// scripts/main.js

// 🧠 Typing effect for Hero Section
const heroText = "Quantum-Powered AI. Unbreakable Security.";
const heroHeading = document.querySelector("h2");
let index = 0;

function typeText() {
  if (index < heroText.length) {
    heroHeading.innerHTML = heroText.substring(0, index + 1) + "<span class='cursor'>|</span>";
    index++;
    setTimeout(typeText, 75);
  } else {
    document.querySelector(".cursor").style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", typeText);

// 💻 Simulate "hacking console logs" in dev tools
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
// 🔓 Access Screen Typing + Transition
document.addEventListener("DOMContentLoaded", () => {
  const accessText = "INITIALIZING ACCESS TERMINAL...";
  const typeEl = document.getElementById("typewriterText");
  let i = 0;

  function type() {
    if (i <= accessText.length) {
      typeEl.textContent = accessText.slice(0, i);
      i++;
      setTimeout(type, 75);
    }
  }

  type();
});

function enterSite() {
  document.getElementById("bootScreen").style.display = "none";
  document.getElementById("mainSite").style.display = "block";
}
