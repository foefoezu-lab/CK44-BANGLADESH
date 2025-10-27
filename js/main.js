// CK44 VIP Bangladesh RTP engine (ভার্সি বাংলা)
// - Random RTP 30-98%
// - Animated green bar
// - Provider tabs, pola modal (ট্যাকটিক)
// - Soft refresh every 15 min

(function(){

  // =========================
  // PROVIDER GAME NAME MAPS
  // =========================

  // Pragmatic list dari kamu (tidak di-translate judul gamenya biar user tetap kenal)
  const PRAGMATIC_NAME_MAP = {
    1:  "Christmas big bass bonanza",
    2:  "Gates of Olympus",
    3:  "Sweet Bonanza",
    4:  "Aztec Gems",
    5:  "Sweet Bonanza Xmas",
    6:  "Starlight Princess",
    7:  "Bonanza Gold",
    8:  "Wild West Gold",
    9:  "Joker's Jewels",
    10: "Pyramid Bonanza",
    11: "Great Rhino Megaways",
    12: "Fire Strike",
    13: "Candy Village",
    14: "Aztec Gems Deluxe",
    15: "5 Lions Megaways",
    16: "John Hunter and the Tomb of the Scarab Queen",
    17: "Christmas Carol Megaways",
    18: "The Tweety House",
    19: "Aztec Bonanza",
    20: "Fire 88",
    21: "Chicken Drop",
    22: "Rise of Samurai Megaways",
    23: "Dog House Megaways",
    24: "Fruit Party",
    25: "Madame Destiny Megaways",
    26: "Buffalo King Megaways",
    27: "Gems Bonanza",
    28: "Fruit Party 2",
    29: "Temujin Treasures",
    30: "Lucky Lightning",
    31: "The Hand of Midas",
    32: "Power of Thor Megaways",
    33: "Hot Fiesta",
    34: "Empty the Bank",
    35: "Juicy Fruits",
    36: "Release the Kraken",
    37: "7 Wild Booster",
    38: "Star Bounty",
    39: "Drago Jewels Of Fortune",
    40: "John Hunter Book of Tut",
    41: "Mysterious Egypt",
    42: "Pirate Gold Deluxe",
    43: "Curse of the Werewolf Megaways",
    44: "Voodoo Magic",
    45: "Asgard Jackpot",
    46: "Madame Destiny Jackpot",
    47: "Sweet Bonanza Jackpot",
    48: "Dog House Jackpot",
    49: "888 Dragons jackpot",
    50: "Aztec Gems Jackpot",
    51: "Journey To The West Jackpot",
    52: "Monkey Madness Jackpot",
    53: "Monkeys",
    54: "HoT Safari ",
    55: "Big Juan",
    56: "John Hunter QUEST for Bermuda Riches",
    57: "Star Ditates Code",
    58: "Mystic Chief",
    59: "Day of Dead",
    60: "Piggy Bank Bills",
    61: "Cash Bonanza",
    62: "Bigger Bass Bonanza",
    63: "Treasure Wild",
    64: "Yum Yum Powerways",
    65: "Raging Bull",
    66: "Rize Of Giza Power Nudge",
    67: "Chilli Heat Megaways",
    68: "Lucky Grace and Charm Mega Hold&Spin",
    69: "Aztec King Megaways",
    70: "Phionex Forge",
    71: "Heart of Rio",
    72: "Dragon Hot Hold and Spin",
    73: "Cash Elevator",
    74: "Hokkaido Wolf",
    75: "The Magic Cauldron",
    76: "The Amazing Money Machine",
    77: "Aztec King",
    78: "Panda's Fortune 2",
    79: "Floating Dragon Hold and Spin",
    80: "Hot to Burn Hold and Spin",
    81: "5 Lions",
    82: "Chili Heat",
    83: "888 Dragons",
    84: "5 Lions Gold",
    85: "Mustang Gold",
    86: "Big Bass Bonanza",
    87: "John Hunter Mayan God5",
    88: "Spartan King",
    89: "Cowboys Gold",
    90: "Emerald King",
    91: "Dragon Tiger",
    92: "Book & Kingdoms",
    93: "Return of Dead",
    94: "5 Lions Dance",
    95: "Ultra Hold and Spin",
    96: "Rise Of Samurai",
    97: "Wild Walker",
    98: "Great Rhino Deluxe",
    99: "Wild Wild Riches Lucky Of The Irish",
    100:"Jungle Gorilla",
    101:"Tiger Warrior",
    102:"Street Racer",
    103:"Fu Fu Fu",
    104:"Bronco Spirit",
    105:"Pyramid King",
    106:"Ultra Burn",
    107:"Money Money Money",
    108:"Starz Megaways",
    109:"Three Star Fortune",
    110:"Dance Party",
    111:"7 Hot To Burn",
    112:"Casher's Gold",
    113:"Lucky Dragon Ball",
    114:"Fruit Rainbow",
    115:"The Wild Machine",
    116:"Mysterious",
    117:"Golden Beuty",
    118:"Master Joker",
    119:"Super 7",
    120:"Buffalo King",
    121:"Magic Journey",
    122:"Money Mouse",
    123:"Aladdin and the Sorcerer",
    124:"Greek Gods",
    125:"Hercules Pegasus",
    126:"Three Of Riches",
    127:"Honey Honey Honey",
    128:"Super Joker",
    129:"Hot Chilli",
    130:"John Aztec Treasure",
    131:"Monkey Warrior",
    132:"Cishen's Cash",
    133:"Chicken Escape",
    134:"Vampires vs Wolves",
    135:"Triple Jokers",
    136:"Wild Primes",
    137:"Pirate Gold",
    138:"Egyptian Fortune",
    139:"Extra Juicy",
    140:"Wild Gladiators",
    141:"Golden Pig",
    142:"Treasure Horse",
    143:"Safari King",
    144:"Leprechaun Carol",
    145:"Triple Dragon's",
    146:"Ancient Egypt",
    147:"Master Chen's Fortune",
    148:"John Hunter and the secret of Day Vincis Treasure",
    149:"Peking Luck",
    150:"Leprechan Song",
    151:"Asgard",
    152:"Madame Destiny",
    153:"Jade Butterfly",
    154:"The Champions",
    155:"Fairytale Fortune",
    156:"Ancient Egypt",
    157:"Lucky New Year",
    158:"Monkey Madness",
    159:"Gold Rush",
    160:"Santa",
    161:"Panda's Fortune",
    162:"7 Piggies",
    163:"Dragon Kingdom",
    164:"Monkeys",
    165:"Queen of Gold",
    166:"Wild Spells",
    167:"Journey to the West",
    168:"3 kingdoms Battle of Red Cliffs",
    169:"Panther Queen",
    170:"Gold Train",
    171:"Vegas Nights",
    172:"3 genie Wishes",
    173:"Dwarven Gold",
    174:"Busy Bees",
    175:"Devil's 13",
    176:"Pixie Wings",
    177:"Jurassic Giants",
    178:"Wolf Gold",
    179:"Queen Of Atlantis",
    180:"Hercules Son Of Zeus",
    181:"Beowulf",
    182:"Lucky Dragons",
    183:"Dwarven Gold Deluxe",
    184:"Hot Safari",
    185:"Mighty Kong",
    186:"lady Godiva",
    187:"Magic Crystals",
    188:"Aladdin's Treasure",
    189:"Glorious Rome",
    190:"Great Reef",
    191:"Lady Of The Moon",
    192:"Sugar Rush",
    193:"Fishin Reels",
    194:"Tales Of Egypt",
    195:"Triple Tigers",
    196:"Money Roll",
    197:"Jrish Charma",
    198:"888 Gold",
    199:"Diamond Are Forever",
    200:"Santa's Wonderland",
    201:"Golden Ox",
    202:"Eye Strom",
    203:"Dragon Kingdom Eye Of Fire",
    204:"Congo Cash",
    205:"Emerald King Rainbow Road",
    206:"Vegas Magic",
    207:"Great Rhino",
    208:"Diamond Strike",
    209:"Dragon's",
    210:"The Dog House",
    211:"Big Bass Bonanza Megaways",
    212:"Bounty Gold",
    213:"Might Of Ra"
  };

  // contoh provider lain (placeholder)
  const PGSOFT_NAME_MAP = {
    1:"Mahjong Ways",
    2:"Mahjong Ways 2",
    3:"Leprechaun Riches",
    4:"Captain's Bounty",
    5:"Treasures of Aztec",
    6:"Double Fortune",
    7:"The Great Icescape",
    8:"Caishen Wins",
    9:"Dream of Macau",
    10:"Queen of Bounty",
    11:"Gem Saviour Sword",
    12:"Thai River Wonders",
    13:"Egypt's Book of Mystery",
    14:"Lucky Neko",
    15:"Wild Fireworks",
    16:"Phonix Rises",
    17:"Dragon Hatch",
    18:"Ganesha Fortune",
    19:"Journey to the Wealth",
    20:"Jungle Delight",
    21:"Hot",
    22:"Farm Invaders",
    23:"Spirited Wonders",
    24:"Monkey King",
    25:"Buffalo Win",
    26:"Supermarket Spree",
    27:"Raider Jane's Crypt of Fortune",
    28:"Groudhog Harvest",
    29:"Mermaid Riches",
    30:"Jurassic Kingdom",
    31:"Sushi Oishi",
    32:"Rise Of Apollo",
    33:"Heist Stakes",
    34:"Ways of the Qilin",
    35:"Wild Bandito",
    36:"Candy Bonanza",
    37:"Majestic Treasures",
    38:"Crypto Gold",
    39:"Bali Vacation",
    40:"Fortune Ox",
    41:"Opera Dynasty",
    42:"Guardians of Ice & Fire",
    43:"Galactic Gems",
    44:"Jack Frost's Winter",
    45:"Jewel's of Prosperity",
    46:"Vampire's Charm",
    47:"Secrets of Cleopatra",
    48:"Fortune Gods",
    49:"Hotpot",
    50:"Dragon Legend",
    51:"Tree of Fortune",
    52:"Piggy Gold",
    53:"Legend of Hou Yi",
    54:"Honey Trap Diao Chan",
    55:"Prosperity Lion",
    56:"Gem Saviour Sword",
    57:"Santo's Gift Rush",
    58:"HipHop Panda",
    59:"Plushies Frenzy",
    60:"Medusa II",
    61:"Medusa",
    62:"Gem Saviour",
    63:"Wizdom Wonders",
    64:"Hood Vs Wolf",
    65:"Circus Delight",
    66:"Genie's 3 Wishes",
    67:"Bikini Paradise",
    68:"Candy Burst",
    69:"Shaolin Soccer",
    70:"Reel Love",
    71:"Fortune Mouse",
    72:"Dragon Tiger Luck",
    73:"Ganesha Gold",
    74:"Flirting Scholar",
    75:"Muay Thai Champion",
    76:"Ninja Samurai",
    77:"Emperor's Favour",
    78:"Symbols of Egypt",
    79:"Mr Hallow win",
    80:"3 Monkeys",
    81:"Win Win Won"
  };
  const JILI_NAME_MAP = {
    1:"Game 1",
    2:"Game 2",
    3:"Game 3"
  };
  const JOKER_NAME_MAP = {
    1:"Game 1",
    2:"Game 2",
    3:"Game 3"
  };
  const MICROGAMING_NAME_MAP = {
    1:"Game 1",
    2:"Game 2",
    3:"Game 3"
  };
  const TOPTREND_NAME_MAP = {
    1:"Game 1",
    2:"Game 2",
    3:"Game 3"
  };

  // =====================================================
  // VARIASI POLA (tips main) DALAM BAHASA BANGLA
  // kita rotasi berdasarkan index game (idx % 3)
  // =====================================================
  const POLA_VARIANTS = [
    {
      steps: [
        "৫০x ম্যানুয়াল স্পিন নরমাল বেট",
        "৮০x অটো স্পিন স্পিড ফাস্ট",
        "৩০x ম্যানুয়াল স্টপ-স্পিন (কুইক স্টপ OFF)",
        "২০x টার্বো স্পিন ম্যানুয়াল"
      ],
      note: "যদি 'ডাবল চান্স' / বোনাস বেট থাকে সেটা অন করো।"
    },
    {
      steps: [
        "২০x টার্বো স্পিন বেট সবথেকে ছোট (ওয়ার্ম আপ)",
        "৪০x অটো স্পিন দ্রুত",
        "৩০x ম্যানুয়াল স্পিন + কুইক স্টপ ON",
        "১০x বেট এক ধাপ বাড়াও, তারপর ১০x টার্বো স্পিন"
      ],
      note: "ফ্রি স্পিন / স্ক্যাটার এলে জোর করে অল-ইন কোরো না — থামো, রিসেট করো।"
    },
    {
      steps: [
        "৩০x ম্যানুয়াল স্পিন (প্রতি স্পিন ১-২ সেক ধরে রাখো)",
        "৩০x অটো স্পিন দ্রুত",
        "১৫x টার্বো স্পিন",
        "১০x ম্যানুয়াল স্পিন আবার ধীরে (কুলডাউন)"
      ],
      note: "বোনাস বের হলে সরাসরি বড় বেট কোরো না; আবার ধাপ ১ থেকে রিপিট করো।"
    }
  ];

  // =====================================================
  // GENERATOR GAME DATA
  // =====================================================
  function generateGamesFromMap(nameMap, providerLabel, providerKey, imgFolder){
    return Object.entries(nameMap).map(([num, gameName], idx) => {
      const variant = POLA_VARIANTS[idx % POLA_VARIANTS.length];
      return {
        name: gameName,
        provider: providerLabel,
        providerKey: providerKey,
        img: `./img/${imgFolder}/${num}.png`, // ganti .png kalau aset lain
        stake: "৳1K - ৳10K",
        polaSteps: variant.steps,
        polaNote: variant.note
      };
    });
  }

  const PRAGMATIC_GAMES = generateGamesFromMap(
    PRAGMATIC_NAME_MAP,"Pragmatic Play","pragmatic","pragmatic"
  );
  const PGSOFT_GAMES = generateGamesFromMap(
    PGSOFT_NAME_MAP,"PG Soft","pgsoft","pgsoft"
  );
  const JILI_GAMES = generateGamesFromMap(
    JILI_NAME_MAP,"JILI","jili","jili"
  );
  const JOKER_GAMES = generateGamesFromMap(
    JOKER_NAME_MAP,"Joker","joker","joker"
  );
  const MICRO_GAMES = generateGamesFromMap(
    MICROGAMING_NAME_MAP,"Microgaming","microgaming","microgaming"
  );
  const TTG_GAMES = generateGamesFromMap(
    TOPTREND_NAME_MAP,"Top Trend Gaming","toptrend","toptrend"
  );

  const EXTRA_GAMES = [];

  // gabung semua
  const CK_GAMES = []
    .concat(PRAGMATIC_GAMES)
    .concat(PGSOFT_GAMES)
    .concat(JILI_GAMES)
    .concat(JOKER_GAMES)
    .concat(MICRO_GAMES)
    .concat(TTG_GAMES)
    .concat(EXTRA_GAMES);

  // ============================
  // BONUS POPUP (sudah ada di HTML)
  // ============================
  const openButtons = document.querySelectorAll("[data-open-popup]");
  const closeButtons = document.querySelectorAll("[data-close-popup]");
  const popups = {};
  document.querySelectorAll(".ck-popup-overlay").forEach(p => {
    popups[p.id] = p;
  });
  openButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-open-popup");
      if (popups[target]) {
        popups[target].classList.add("active");
      }
    });
  });
  closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const overlay = btn.closest(".ck-popup-overlay");
      if (overlay) overlay.classList.remove("active");
    });
  });
  Object.values(popups).forEach(overlay => {
    overlay.addEventListener("click", e => {
      if (e.target === overlay) overlay.classList.remove("active");
    });
  });

  // ============================
  // RTP GEN + SNAPSHOT
  // ============================
  function getRandomRTP() {
    const val = 30 + Math.random()*68; // 30..98
    return parseFloat(val.toFixed(2));
  }
  function getSnapshot(){
    return CK_GAMES.map(g => {
      const rtpNow = getRandomRTP();
      return Object.assign({}, g, { rtpNow });
    });
  }

  // badge status → Bangla
  function badge(rtp){
    if (rtp >= 80) {
      return '<span class="ck-hot">হট</span>';
    }
    return '<span class="ck-hot" style="opacity:.5">স্টেবল</span>';
  }

  // ============================
  // PROVIDER TABS
  // ============================
  let currentProvider = "all";

  function getProviders(){
    const map = {};
    CK_GAMES.forEach(g => {
      if (!map[g.providerKey]) map[g.providerKey] = g.provider;
    });
    return map;
  }

  function renderProviderTabs(){
    const holder = document.getElementById("ck-provider-tabs");
    if (!holder) return;
    const providers = getProviders();
    let html = `
      <div class="ck-provider-tab-btn ${currentProvider==='all'?'ck-active':''}" data-prov="all">
        সব
      </div>
    `;
    Object.keys(providers).forEach(key => {
      html += `
        <div class="ck-provider-tab-btn ${currentProvider===key?'ck-active':''}" data-prov="${key}">
          ${providers[key]}
        </div>
      `;
    });
    holder.innerHTML = html;

    holder.querySelectorAll(".ck-provider-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        currentProvider = btn.getAttribute("data-prov") || "all";
        renderAll();
      });
    });
  }

  // ============================
  // HERO TOP 3 HOT GAME (RTP tertinggi)
  // ============================
  function renderHeroCard(ss){
    const heroListEl = document.getElementById("ck-hero-card-list");
    if (!heroListEl) return;
    const sorted = ss.slice().sort((a,b) => b.rtpNow - a.rtpNow);
    const top3 = sorted.slice(0,3);

    heroListEl.innerHTML = top3.map(g => `
      <div class="ck-card-row">
        <div class="ck-game-thumb">
          <img src="${g.img}" alt="${g.name} High RTP" />
        </div>
        <div class="ck-game-info">
          <div class="ck-game-name">${g.name}</div>
          <div class="ck-game-rtp">RTP:
            <span class="ck-rtp-val">${g.rtpNow.toFixed(2)}%</span>
          </div>
          <div class="ck-game-provider">${g.provider}</div>
        </div>
      </div>
    `).join("");
  }

  // ============================
  // RTP TABLE (tabel bawah)
  // ============================
  function renderRtpTable(ss){
    const tbody = document.getElementById("ck-rtp-tbody");
    if (!tbody) return;
    let list = ss;
    if (currentProvider !== "all"){
        list = list.filter(g => g.providerKey === currentProvider);
    }
    list = list.slice().sort((a,b)=> b.rtpNow - a.rtpNow);
    tbody.innerHTML = list.map(g => `
      <tr>
        <td>${g.name}</td>
        <td>${g.provider}</td>
        <td class="rtp-cell">${g.rtpNow.toFixed(2)}%</td>
        <td>${badge(g.rtpNow)}</td>
      </tr>
    `).join("");
  }

  // ============================
  // BAR ANIMASI HIJAU
  // ============================
  function animateRtpBars(rootEl){
    const bars = rootEl.querySelectorAll('.ck-rtp-bar-fill');
    bars.forEach(bar => {
      const target = bar.getAttribute('data-target-width');
      bar.style.transition = 'none';
      bar.style.width = '0%';
      setTimeout(() => {
        bar.style.transition = 'width 1s ease';
        bar.style.width = target;
      }, 50);
    });
  }

  // ============================
  // PROVIDER DETAIL GRID + MODAL POLA
  // ============================
  function renderProviderDetail(ss){
    const wrap = document.getElementById("ck-provider-detail-wrap");
    if (!wrap) return;

    // kalau tab sekarang "সব" → jangan tampilkan grid detail
    if (currentProvider === "all"){
      wrap.style.display = "none";
      wrap.innerHTML = "";
      return;
    }

    let list = ss.filter(g => g.providerKey === currentProvider);
    list = list.slice().sort((a,b)=> b.rtpNow - a.rtpNow);

    const cardsHTML = list.map((g, idx) => {
      const pctText = g.rtpNow.toFixed(2) + "%";
      const widthPct = Math.min(g.rtpNow,100) + "%";

      return `
        <div class="ck-game-card" data-game-modal="${currentProvider}-${idx}">
          <div class="ck-game-card-thumb">
            <img src="${g.img}" alt="${g.name}" />
          </div>
          <div class="ck-game-card-body">
            <div class="ck-game-card-name">${g.name}</div>
            <div class="ck-game-card-provider">${g.provider}</div>
            <div class="ck-rtp-bar-wrap">
              <div class="ck-rtp-bar-fill"
                   data-target-width="${widthPct}"
                   style="width:0%;">
                ${pctText}
              </div>
            </div>
          </div>
        </div>

        <div class="ck-pola-overlay" id="pola-${currentProvider}-${idx}">
          <div class="ck-pola-card">

            <div class="ck-pola-head">
              <div class="ck-pola-close" data-close-pola="pola-${currentProvider}-${idx}">X</div>
              স্লট ট্যাকটিক / জেতার স্টেপ
            </div>

            <div class="ck-pola-body">
              <div class="ck-pola-provider">
                <div><strong>${g.name}</strong></div>
                <div>${g.provider}</div>
                <div>মিন বেট<br><strong>${g.stake}</strong></div>
              </div>
            </div>

            <div class="ck-pola-steps">
              ${g.polaSteps.map((step,i)=>`
                <div><strong>ধাপ ${i+1}:</strong> ${step}</div>
              `).join("")}
            </div>

            <div class="ck-pola-warning">
              শুরু থেকে ধাপগুলো ফলো করো। কাজ করলে রিপিট করো।<br/>
              যদি 'ডাবল চান্স' / বোনাস বেট থাকে → অন করো।
            </div>

            <div class="ck-pola-note">
              নোট:<br/>
              ${g.polaNote}
            </div>

            <div class="ck-pola-actions">
              <a class="ck-pola-btn ck-pola-btn-left"
                 href="https://www.wwwck-444.com/register"
                 target="_blank" rel="nofollow noopener">রেজিস্টার</a>

              <a class="ck-pola-btn ck-pola-btn-right"
                 href="https://www.wwwck-444.com/"
                 target="_blank" rel="nofollow noopener">মেইন এখনই</a>
            </div>

          </div>
        </div>
      `;
    }).join("");

    wrap.style.display = "block";
    wrap.innerHTML = `
      <div class="ck-provider-detail-head">
        <div class="ck-provider-detail-title">
          ${list[0]?.provider || ""} • হট RTP & প্যাটার্ন
        </div>
        <div class="ck-provider-detail-sub">
          গেমে ট্যাপ করো → জেতার স্টেপ / ট্যাকটিক দেখো। সবুজ বার = এখনকার লাইভ পারফরম্যান্স।
        </div>
      </div>

      <div class="ck-game-grid">
        ${cardsHTML}
      </div>
    `;

    // buka modal pola saat kartu di-klik
    wrap.querySelectorAll("[data-game-modal]").forEach(card => {
      card.addEventListener("click", () => {
        const id = "pola-" + card.getAttribute("data-game-modal");
        const modal = document.getElementById(id);
        if(modal) modal.classList.add("active");
      });
    });

    // tombol X
    document.querySelectorAll("[data-close-pola]").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        const targetId = btn.getAttribute("data-close-pola");
        const modal = document.getElementById(targetId);
        if(modal) modal.classList.remove("active");
      });
    });

    // klik luar overlay buat close
    document.querySelectorAll(".ck-pola-overlay").forEach(overlay=>{
      overlay.addEventListener("click", e=>{
        if(e.target===overlay){
          overlay.classList.remove("active");
        }
      });
    });

    // animasi progress bar hijau
    animateRtpBars(wrap);
  }

  // ============================
  // RENDER SEMUA BAGIAN
  // ============================
  function renderAll(){
    const snap = getSnapshot();
    renderProviderTabs();
    renderHeroCard(snap);
    renderRtpTable(snap);
    renderProviderDetail(snap);
  }

  // first render
  renderAll();

  // auto refresh konten (rtp baru) tiap 15 menit
  setInterval(renderAll, 900000);

})();
