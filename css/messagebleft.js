// messagebleft.js
// versi final: aman, ringan, mirip cara kerja klix4d (1 popup tiap beberapa detik)
// tapi tampilan tetap kartu hijau glow ala Bangladesh

// data winner — silakan edit sesuai kebutuhan kamu
const WINNERS = [
  {
    player: "Shafin***48",
    game: "Mega Moolah",
    amount: "৳9,694 BDT",
    note: "menang besar di Bangladesh!"
  },
  {
    player: "Arif***16",
    game: "Big Bass Bonanza",
    amount: "৳10,284 BDT",
    note: "menang besar di Bangladesh!"
  },
  {
    player: "Nadia***33",
    game: "Sugar Rush",
    amount: "৳19,410 BDT",
    note: "payout cepat & aman!"
  },
  {
    player: "Rohan***72",
    game: "Wild West Gold",
    amount: "৳14,216 BDT",
    note: "WD sukses 24/7!"
  },
  {
    player: "Amin***44",
    game: "Gates of Olympus",
    amount: "৳11,880 BDT",
    note: "bonus aktif VIP 30!"
  }
];

// setiap berapa detik popup baru muncul
const POPUP_INTERVAL_MS = 8000; // 8 detik
// berapa lama popup nongol sebelum dihilangkan
const POPUP_LIFETIME_MS = 5000; // mirip duration 0x1388 (5000ms) di klix4d :contentReference[oaicite:5]{index=5}

// kita hanya mau 1 popup aktif sekali waktu agar super ringan
const MAX_ACTIVE = 1;

let indexPointer = 0;

// pastikan container ada, kalau di HTML kamu sudah ada
// <div class="message-left-container"></div>
// maka ini akan pakai yang itu
function ensureContainer() {
  let wrap = document.querySelector(".message-left-container");
  if (!wrap) {
    wrap = document.createElement("div");
    wrap.className = "message-left-container";
    document.body.appendChild(wrap);
  }
  return wrap;
}

// bikin elemen kartu popup hijau glow
function createCard(data) {
  const card = document.createElement("div");
  card.className = "message-left-card";

  card.innerHTML = `
    <div class="player">${data.player} ${data.note}</div>
    <div class="game">Game: ${data.game}</div>
    <div class="amount">${data.amount}</div>
  `;

  // animasi masuk (sesuai .message-left-card transition)
  requestAnimationFrame(() => {
    card.style.opacity = "1";
    card.style.transform = "translateY(0) scale(1)";
  });

  return card;
}

// tampilkan popup baru seperti Snackbar.show di klix4d, tapi dengan kartu kita
function showOnePopup() {
  const wrap = ensureContainer();

  // bersihin popup lama kalau lewat MAX_ACTIVE
  const existing = wrap.querySelectorAll(".message-left-card");
  if (existing.length >= MAX_ACTIVE) {
    existing.forEach(el => {
      el.classList.add("hide");
      setTimeout(() => {
        if (el && el.parentNode) el.parentNode.removeChild(el);
      }, 300);
    });
  }

  // ambil data winner saat ini, lalu maju pointer
  const data = WINNERS[indexPointer % WINNERS.length];
  indexPointer++;

  const card = createCard(data);
  wrap.appendChild(card);

  // auto hilang setelah POPUP_LIFETIME_MS
  setTimeout(() => {
    card.classList.add("hide");
    setTimeout(() => {
      if (card && card.parentNode) {
        card.parentNode.removeChild(card);
      }
    }, 300);
  }, POPUP_LIFETIME_MS);
}

// start loop auto seperti setInterval(myTimer, 10000) di klix4d :contentReference[oaicite:6]{index=6}
function startPopupLoop() {
  // langsung tampilkan pertama
  showOnePopup();
  // lalu lanjut tiap interval
  setInterval(showOnePopup, POPUP_INTERVAL_MS);
}

// jalanin begitu DOM siap
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startPopupLoop);
} else {
  startPopupLoop();
}
  
