// CK44 Bangladesh - popup pemenang hijau cepat (5-6 detik)
(function () {
  const winners = [
    {
      name: "Shafin***48",
      game: "Mega Moolah",
      amount: "৳9,694 BDT",
      note: "বাংলাদেশে মেগা জয়!!"
    },
    {
      name: "Arif***16",
      game: "Big Bass Bonanza",
      amount: "৳12,211 BDT",
      note: "বাংলাদেশে মেগা জয়!!"
    },
    {
      name: "Nadia***33",
      game: "Wild West Gold",
      amount: "৳18,400 BDT",
      note: "বাংলাদেশে মেগা জয়!!"
    },
    {
      name: "Rizvi***44",
      game: "Sugar Rush",
      amount: "৳11,880 BDT",
      note: "বাংলাদেশে মেগা জয়!!"
    },
    {
      name: "Sadia***92",
      game: "Big Bass Bonanza",
      amount: "৳22,116 BDT",
      note: "বাংলাদেশে মেগা জয়!!"
    }
  ];

  // ambil container popup
  const container = document.querySelector(".message-left-container");
  if (!container) return;

  // bikin 1 box saja
  container.innerHTML = `
    <div class="ck-left-msg-box">
      <div class="ck-left-line ck-left-name"></div>
      <div class="ck-left-line ck-left-game"></div>
      <div class="ck-left-line ck-left-amount"></div>
    </div>
  `;

  const elName   = container.querySelector(".ck-left-name");
  const elGame   = container.querySelector(".ck-left-game");
  const elAmount = container.querySelector(".ck-left-amount");

  function showBox() {
    container.classList.add("ck-left-visible");
  }
  function hideBox() {
    container.classList.remove("ck-left-visible");
  }

  let idx = 0;

  function updateMessage() {
    const w = winners[idx % winners.length];

    // isi text baru
    elName.textContent   = `${w.name} ${w.note}`;
    elGame.textContent   = `Game: ${w.game}`;
    elAmount.textContent = w.amount;

    // munculkan popup
    showBox();

    // sembunyikan lagi agak cepat biar nggak nabrak popup berikutnya
    // popup visible ~4 detik
    setTimeout(() => {
      hideBox();
    }, 4000);

    idx++;
  }

  // langsung tampilkan pertama kali
  updateMessage();

  // GANTI WINNER SETIAP 6 DETIK
  // (jadi kira-kira 5-6 detik sekali popup baru)
  setInterval(updateMessage, 6000);
})();
