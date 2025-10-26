// messagebleft.js
// CK44 Bangladesh - popup pemenang versi ringan

(function () {
  // Data contoh pemenang — bisa kamu edit sendiri sesuka hati
  const winners = [
    {
      name: "Shafin***48",
      game: "Mega Moolah",
      amount: "৳9,694 BDT",
      note: "menang besar di Bangladesh!"
    },
    {
      name: "Arif***16",
      game: "Big Bass Bonanza",
      amount: "৳12,211 BDT",
      note: "menang besar di Bangladesh!"
    },
    {
      name: "Nadia***33",
      game: "Wild West Gold",
      amount: "৳18,400 BDT",
      note: "menang besar di Bangladesh!"
    },
    {
      name: "Rizvi***44",
      game: "Sugar Rush",
      amount: "৳11,880 BDT",
      note: "menang besar di Bangladesh!"
    },
    {
      name: "Sadia***92",
      game: "Big Bass Bonanza",
      amount: "৳22,116 BDT",
      note: "menang besar di Bangladesh!"
    }
  ];

  // ambil container kosong dari HTML
  // <div class="message-left-container"></div>
  const container = document.querySelector(".message-left-container");
  if (!container) return;

  // bikin hanya SATU box notifikasi yang akan kita update ulang
  container.innerHTML = `
    <div class="ck-left-msg-box">
      <div class="ck-left-line ck-left-name"></div>
      <div class="ck-left-line ck-left-game"></div>
      <div class="ck-left-line ck-left-amount"></div>
    </div>
  `;

  // ambil sub-element untuk diisi ulang teks
  const elName   = container.querySelector(".ck-left-name");
  const elGame   = container.querySelector(".ck-left-game");
  const elAmount = container.querySelector(".ck-left-amount");

  // helper animasi show/hide biar agak hidup tapi tetap murah CPU
  function showBox() {
    container.classList.add("ck-left-visible");
  }
  function hideBox() {
    container.classList.remove("ck-left-visible");
  }

  let idx = 0;

  function updateMessage() {
    const w = winners[idx % winners.length];

    // isi teks baru
    elName.textContent   = `${w.name} ${w.note}`;
    elGame.textContent   = `Game: ${w.game}`;
    elAmount.textContent = w.amount;

    // fade in -> tunggu -> fade out
    showBox();

    // setelah 6 detik, hide lagi pelan
    setTimeout(() => {
      hideBox();
    }, 6000);

    idx++;
  }

  // pertama kali jalan langsung tampilkan
  updateMessage();

  // ganti data tiap 15 detik (bukan 2 detik)
  // ini ringan, gak bakal bikin freeze
  setInterval(updateMessage, 15000);
})();
