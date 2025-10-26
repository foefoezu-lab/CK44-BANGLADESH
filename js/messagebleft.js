/*
 * Floating popup "recent winner" - Bangladesh Edition
 */
(function(){
  const GAMES = [
    "Gates of Olympus",
    "Mahjong Ways 2",
    "Sugar Rush",
    "Sweet Bonanza",
    "Big Bass Bonanza",
    "Wild West Gold",
    "Phoenix Rises",
    "Mega Moolah",
    "Dragon Hero"
  ];

  // these should correspond to real logo images you place in /img
  const AVATARS = [
    "img/PP.webp",
    "img/PGSOFT.webp",
    "img/j1.png",
    "img/HABANERO.webp",
    "img/SPADEGAMING.webp",
    "img/MICROGAMING.webp"
  ];

  function randBetween(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
  }

  function randomPlayer(){
    const namesBD = [
      "Akash","Rahim","Hasan","Imran","Rohan",
      "Rakib","Farhan","Nadia","Sadia","Faria",
      "Sultana","Amina","Yasmin","Arif","Tanvir",
      "Ridoy","Shakib","Shafin","Rizvi","Keya"
    ];
    const name = namesBD[Math.floor(Math.random()*namesBD.length)];
    const tail = randBetween(10,99);
    return name + "***" + tail;
  }

  function randomGame(){
    return GAMES[Math.floor(Math.random()*GAMES.length)];
  }

  function randomAmount(){
    const amt = randBetween(2000,120000);
    return "৳" + amt.toLocaleString("en-US") + " BDT";
  }

  function makeCard(player,game,amount,avatar){
    const wrap = document.createElement("div");
    wrap.className = "message-left-card";

    const imgDiv = document.createElement("div");
    imgDiv.className = "thumb-mini";
    imgDiv.style.backgroundImage = "url('"+avatar+"')";

    const texts = document.createElement("div");
    texts.className = "texts";

    const pPlayer = document.createElement("div");
    pPlayer.className = "player";
    pPlayer.textContent = player + " menang besar di Bangladesh!";

    const pGame = document.createElement("div");
    pGame.className = "game";
    pGame.textContent = "Game: " + game;

    const pAmt = document.createElement("div");
    pAmt.className = "amount";
    pAmt.textContent = amount;

    texts.appendChild(pPlayer);
    texts.appendChild(pGame);
    texts.appendChild(pAmt);

    wrap.appendChild(imgDiv);
    wrap.appendChild(texts);

    return wrap;
  }

  function pushMessage(){
    const cont = document.querySelector(".message-left-container");
    if(!cont) return;

    const card = makeCard(
      randomPlayer(),
      randomGame(),
      randomAmount(),
      AVATARS[Math.floor(Math.random()*AVATARS.length)]
    );

    cont.appendChild(card);

    // keep max 3 visible
    while(cont.children.length > 3){
      const old = cont.children[0];
      old.style.animation = "msgHide .4s forwards ease";
      setTimeout(()=> old.remove(), 400);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    pushMessage();
    setInterval(pushMessage, 6000);
  });
})();