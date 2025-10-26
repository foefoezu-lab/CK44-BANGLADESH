// main.js
// CK44 VIP Bangladesh
(function(){

  // 1. PROVIDER MAPS
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
    10:  "Pyramid Bonanza",
    11:  "Great Rhino Megaways",
    12:  "Fire Strike",
    13:  "Candy Village",
    14:  "Aztec Gems Deluxe",
    15:  "5 Lions Megaways",
    16:  "John Hunter and the Tomb of the Scarab Queen",
    17:  "Christmas Carol Megaways",
    18:  "The Tweety House",
    19:  "Aztec Bonanza",
    20:  "Fire 88",
    21:  "Chicken Drop",
    22:  "Rise of Samurai Megaways",
    23:  "Dog House Megaways",
    24:  "Fruit Party",
    25:  "Madame Destiny Megaways",
    26:  "Buffalo King Megaways",
    27:  "Gems Bonanza",
    28:  "Fruit Party 2",
    29:  "Temujin Treasures",
    30:  "Lucky Lightning",
    31:  "The Hand of Midas",
    32:  "Power of Thor Megaways",
    33:  "Hot Fiesta",
    34:  "Empty the Bank",
    35:  "Juicy Fruits",
    36:  "Release the Kraken",
    37:  "7 Wild Booster",
    38:  "Star Bounty",
    39:  "Drago Jewels Of Fortune",
    40:  "John Hunter Book of Tut",
    41:  "Mysterious Egypt",
    42:  "Pirate Gold Deluxe",
    43:  "Curse of the Werewolf Megaways",
    44:  "Voodoo Magic",
    45:  "Asgard Jackpot",
    46:  "Madame Destiny Jackpot",
    47:  "Sweet Bonanza Jackpot",
    48:  "Dog House Jackpot",
    49:  "888 Dragons jackpot",
    50:  "Aztec Gems Jackpot",
    51:  "Journey To The West Jackpot",
    52:  "Monkey Madness Jackpot",
    53:  "Monkeys",
    54:  "HoT Safari ",
    55:  "Big Juan",
    56:  "John Hunter QUEST for Bermuda Riches",
    57:  "Star Ditates Code",
    58:  "Mystic Chief",
    59:  "Day of Dead",
    60:  "Piggy Bank Bills",
    61:  "Cash Bonanza",
    62:  "Bigger Bass Bonanza",
    63:  "Treasure Wild",
    64:  "Yum Yum Powerways",
    65:  "Raging Bull",
    66:  "Rize Of Giza Power Nudge",
    67:  "Chilli Heat Megaways",
    68:  "Lucky Grace and Charm Mega Hold&Spin",
    69:  "Aztec King Megaways",
    70:  "Phionex Forge",
    71:  "Heart of Rio",
    72:  "Dragon Hot Hold and Spin",
    73:  "Cash Elevator",
    74:  "Hokkaido Wolf",
    75:  "The Magic Cauldron",
    76:  "The Amazing Money Machine",
    77:  "Aztec King",
    78:  "Panda's Fortune 2",
    79:  "Floating Dragon Hold and Spin",
    80:  "Hot to Burn Hold and Spin",
    81:  "5 Lions",
    82:  "Chili Heat",
    83:  "888 Dragons",
    84:  "5 Lions Gold",
    85:  "Mustang Gold",
    86:  "Big Bass Bonanza",
    87:  "John Hunter Mayan God5",
    88:  "Spartan King",
    89:  "Cowboys Gold",
    90:  "Emerald King",
    91:  "Dragon Tiger",
    92:  "Book & Kingdoms",
    93:  "Return of Dead",
    94:  "5 Lions Dance",
    95:  "Ultra Hold and Spin",
    96:  "Rise Of Samurai",
    97:  "Wild Walker",
    98:  "Great Rhino Deluxe",
    99:  "Wild Wild Riches Lucky Of The Irish",
    100:  "Jungle Gorilla",
    101:  "Tiger Warrior",
    102:  "Street Racer",
    103:  "Fu Fu Fu",
    104:  "Bronco Spirit",
    105:  "Sweet Bonanza",
    106:  "Starlight Princess",
    107:  "Wild West Gold",
    108:  "Wild West Gold",
    109:  "Gates of Olympus",
    110:  "Sugar Rush",
    111:  "Sweet Bonanza",
    112:  "Starlight Princess",
    113:  "Wild West Gold",
    114:  "Wild West Gold",
    115:  "Gates of Olympus",
    116:  "Sugar Rush",
    117:  "Sweet Bonanza",
    118:  "Starlight Princess",
    119:  "Wild West Gold",
    120:  "Wild West Gold",
    121:  "Wild West Gold",
    122:  "Gates of Olympus",
    123:  "Sugar Rush",
    124:  "Sweet Bonanza",
    125:  "Starlight Princess",
    126:  "Wild West Gold",
    127:  "Wild West Gold",
    128:  "Gates of Olympus",
    129:  "Sugar Rush",
    130:  "Sweet Bonanza",
    131:  "Starlight Princess",
    132:  "Wild West Gold",
    133:  "Wild West Gold",
    134:  "Gates of Olympus",
    135:  "Sugar Rush",
    136:  "Sweet Bonanza",
    137:  "Starlight Princess",
    138:  "Wild West Gold",
    139:  "Wild West Gold",
    140:  "Gates of Olympus",
    141:  "Sugar Rush",
    142:  "Sweet Bonanza",
    143:  "Starlight Princess",
    144:  "Wild West Gold",
    145:  "Wild West Gold",
    146:  "Gates of Olympus",
    147:  "Sugar Rush",
    148:  "Sweet Bonanza",
    149:  "Starlight Princess",
    150:  "Wild West Gold",
    161:  "Wild West Gold",
    162:  "Gates of Olympus",
    163:  "Sugar Rush",
    164:  "Sweet Bonanza",
    165:  "Starlight Princess",
    166:  "Wild West Gold",
    167:  "Wild West Gold",
    168:  "Gates of Olympus",
    169:  "Sugar Rush",
    170:  "Sweet Bonanza",
    171:  "Starlight Princess",
    172:  "Wild West Gold",
    173:  "Wild West Gold",
    174:  "Gates of Olympus",
    175:  "Sugar Rush",
    176:  "Sweet Bonanza",
    177:  "Starlight Princess",
    178:  "Wild West Gold",
    179:  "Wild West Gold",
    180:  "Gates of Olympus",
    181:  "Sugar Rush",
    182:  "Sweet Bonanza",
    183:  "Starlight Princess",
    184:  "Gates of Olympus",
    185:  "Sugar Rush",
    186:  "Sweet Bonanza",
    187:  "Starlight Princess",
    188:  "Wild West Gold",
    189:  "Wild West Gold",
    190:  "Gates of Olympus",
    191:  "Sugar Rush",
    192:  "Sweet Bonanza",
    193:  "Starlight Princess",
    194:  "Wild West Gold",
    195:  "Wild West Gold",
    196:  "Gates of Olympus",
    197:  "Sugar Rush",
    198:  "Sweet Bonanza",
    199:  "Starlight Princess",
    200:  "Starlight Princess",
    201:  "Wild West Gold",
    202:  "Wild West Gold",
    203:  "Gates of Olympus",
    204:  "Sugar Rush",
    205:  "Sweet Bonanza",
    206:  "Starlight Princess",
    207:  "Wild West Gold",
    208:  "Gates of Olympus",
    209:  "Sugar Rush",
    210:  "Sweet Bonanza",
    212:  "Starlight Princess",
    213:  "Starlight Princess"
    
    
    
    
  };

  const PGSOFT_NAME_MAP = {
    1:  "Mahjong Ways",
    2:  "Mahjong Ways 2",
    3:  "Leprechaun Riches",
    4:  "Captain's Bounty",
    5:  "Hercules (icon #5)"
    // ... isi sampai 81
  };

  const JILI_NAME_MAP = {
    1:  "Game 1",
    2:  "Game 2",
    3:  "Game 3"
    // ... isi sampai 199
  };

  const JOKER_NAME_MAP = {
    1:  "Game 1",
    2:  "Game 2",
    3:  "Game 3"
    // ... isi sampai 152
  };

  const MICROGAMING_NAME_MAP = {
    1:  "Game 1",
    2:  "Game 2",
    3:  "Game 3"
    // ... isi sampai 275
  };

  const TOPTREND_NAME_MAP = {
    1:  "Game 1",
    2:  "Game 2",
    3:  "Game 3"
    // ... isi sampai 161
  };

  // 2. helper
  function generateGamesFromMap(nameMap, providerLabel, providerKey, imgFolder, baseRtpDefault){
    return Object.entries(nameMap).map(([num, gameName]) => ({
      name: gameName,
      provider: providerLabel,
      providerKey: providerKey,
      img: `./img/${imgFolder}/${num}.png`,
      baseRTP: baseRtpDefault,
      stake: "1K - 10K",
      polaSteps: [
        "50X Spin Normal Manual",
        "80X Spin Cepat AUTO",
        "30X Stop-Spin Manual (Ceklis OFF)",
        "20X Spin Turbo Manual"
      ],
      polaNote: "Aktifkan double chance kalau ada."
    }));
  }

  const PRAGMATIC_GAMES = generateGamesFromMap(PRAGMATIC_NAME_MAP,
    "Pragmatic Play","pragmatic","pragmatic",96.50);
  const PGSOFT_GAMES   = generateGamesFromMap(PGSOFT_NAME_MAP,
    "PG Soft","pgsoft","pgsoft",96.50);
  const JILI_GAMES     = generateGamesFromMap(JILI_NAME_MAP,
    "JILI","jili","jili",97.00);
  const JOKER_GAMES    = generateGamesFromMap(JOKER_NAME_MAP,
    "Joker","joker","joker",96.20);
  const MICRO_GAMES    = generateGamesFromMap(MICROGAMING_NAME_MAP,
    "Microgaming","microgaming","microgaming",96.10);
  const TTG_GAMES      = generateGamesFromMap(TOPTREND_NAME_MAP,
    "Top Trend Gaming","toptrend","toptrend",96.30);

  const EXTRA_GAMES = [
    // contoh promo khusus => isi kalau mau
  ];

  const CK_GAMES = []
    .concat(PRAGMATIC_GAMES)
    .concat(PGSOFT_GAMES)
    .concat(JILI_GAMES)
    .concat(JOKER_GAMES)
    .concat(MICRO_GAMES)
    .concat(TTG_GAMES)
    .concat(EXTRA_GAMES);

  // 3. POPUP BONUS DAILY (open/close)
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
      if (e.target === overlay) {
        overlay.classList.remove("active");
      }
    });
  });

  // 4. RTP logic / rendering
  function randOffset(){
    return (Math.random() * 0.6 - 0.3); // +/-0.3
  }
  function getSnapshot(){
    return CK_GAMES.map(g => {
      const rtpNow = g.baseRTP + randOffset();
      return Object.assign({}, g, { rtpNow });
    });
  }
  function badge(rtp){
    if (rtp >= 96.5) {
      return '<span class="ck-hot">HOT</span>';
    }
    return '<span class="ck-hot" style="opacity:.5">WARM</span>';
  }

  let currentProvider = "all";

  function getProviders(){
    const map = {};
    CK_GAMES.forEach(g => {
      if (!map[g.providerKey]) {
        map[g.providerKey] = g.provider;
      }
    });
    return map;
  }

  function renderProviderTabs(){
    const holder = document.getElementById("ck-provider-tabs");
    if (!holder) return;
    const providers = getProviders();
    let html = `
      <div class="ck-provider-tab-btn ${currentProvider==='all'?'ck-active':''}" data-prov="all">
        All
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

  function renderProviderDetail(ss){
    const wrap = document.getElementById("ck-provider-detail-wrap");
    if (!wrap) return;
    if (currentProvider === "all"){
      wrap.style.display = "none";
      wrap.innerHTML = "";
      return;
    }
    let list = ss.filter(g => g.providerKey === currentProvider);
    list = list.slice().sort((a,b)=> b.rtpNow - a.rtpNow);

    const cardsHTML = list.map((g, idx) => {
      const pct = g.rtpNow.toFixed(2) + "%";
      return `
        <div class="ck-game-card" data-game-modal="${currentProvider}-${idx}">
          <div class="ck-game-card-thumb">
            <img src="${g.img}" alt="${g.name}" />
          </div>
          <div class="ck-game-card-body">
            <div class="ck-game-card-name">${g.name}</div>
            <div class="ck-game-card-provider">${g.provider}</div>
            <div class="ck-rtp-bar-wrap">
              <div class="ck-rtp-bar-fill" style="width:${Math.min(g.rtpNow,100)}%;">
                ${pct}
              </div>
            </div>
          </div>
        </div>

        <div class="ck-pola-overlay" id="pola-${currentProvider}-${idx}">
          <div class="ck-pola-card">
            <div class="ck-pola-head">
              <div class="ck-pola-close" data-close-pola="pola-${currentProvider}-${idx}">X</div>
              TIPS GACOR SLOT
            </div>
            <div class="ck-pola-body">
              <div class="ck-pola-provider">
                <div><strong>${g.name}</strong></div>
                <div>${g.provider}</div>
                <div>Stake Bet<br><strong>${g.stake}</strong></div>
              </div>
            </div>
            <div class="ck-pola-steps">
              ${g.polaSteps.map((step,i)=>`<div><strong>Step ${i+1}:</strong> ${step}</div>`).join("")}
            </div>
            <div class="ck-pola-warning">
              LAKUKAN TIPS DARI AWAL & ULANGI<br/>
              Nyalakan bet double chance jika ada
            </div>
            <div class="ck-pola-note">
              Note:<br/>
              ${g.polaNote}
            </div>
            <div class="ck-pola-actions">
              <a class="ck-pola-btn ck-pola-btn-left" href="https://www.wwwck-444.com/register" target="_blank" rel="nofollow noopener">DAFTAR</a>
              <a class="ck-pola-btn ck-pola-btn-right" href="https://www.wwwck-444.com/" target="_blank" rel="nofollow noopener">MAIN</a>
            </div>
          </div>
        </div>
      `;
    }).join("");

    wrap.style.display = "block";
    wrap.innerHTML = `
      <div class="ck-provider-detail-head">
        <div class="ck-provider-detail-title">
          ${list[0]?.provider || ""} • Hot RTP & Pola
        </div>
        <div class="ck-provider-detail-sub">
          Klik game untuk lihat pola / step bermain. RTP bar hijau = performa live sekarang.
        </div>
      </div>
      <div class="ck-game-grid">
        ${cardsHTML}
      </div>
    `;

    // open modal
    wrap.querySelectorAll("[data-game-modal]").forEach(card => {
      card.addEventListener("click", () => {
        const id = "pola-" + card.getAttribute("data-game-modal");
        const modal = document.getElementById(id);
        if(modal){
          modal.classList.add("active");
        }
      });
    });
    // close modal
    document.querySelectorAll("[data-close-pola]").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        const targetId = btn.getAttribute("data-close-pola");
        const modal = document.getElementById(targetId);
        if(modal){
          modal.classList.remove("active");
        }
      });
    });
    document.querySelectorAll(".ck-pola-overlay").forEach(overlay=>{
      overlay.addEventListener("click", e=>{
        if(e.target===overlay){
          overlay.classList.remove("active");
        }
      });
    });
  }

  function renderAll(){
    const snap = getSnapshot();
    renderProviderTabs();
    renderHeroCard(snap);
    renderRtpTable(snap);
    renderProviderDetail(snap);
  }

  renderAll();
  setInterval(renderAll, 10000);
})();
