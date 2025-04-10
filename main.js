// main.js

// Hero Typing Effect
document.addEventListener("DOMContentLoaded", () => {
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

  typeText();

  // Boot screen typewriter
  const accessText = "INITIALIZING ACCESS TERMINAL...";
  const typeEl = document.getElementById("typewriterText");
  if (typeEl) {
    let i = 0;
    function bootType() {
      if (i <= accessText.length) {
        typeEl.textContent = accessText.slice(0, i);
        i++;
        setTimeout(bootType, 70);
      }
    }
    bootType();
  }
});

// This must be global for the button onclick to work
function enterSite() {
  document.getElementById("bootScreen").style.display = "none";
  document.getElementById("mainSite").style.display = "block";
}

// 🔒 Console logs just for swag
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
