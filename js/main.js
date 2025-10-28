// CK44 VIP Bangladesh RTP engine (ভার্সি বাংলা FINAL)
// - Pakai full mapping game ID → nama persis dari project asli
// - Provider tabs, hero top list, RTP table, provider detail grid
// - Pola/taktik per game dalam modal
// - Warna RTP: hijau / kuning / merah
// - Soft refresh tiap 15 menit

(function(){

  /****************************************
   * 1. PROVIDER GAME NAME MAPS (ASLI)
   ****************************************/
  // NOTE: semua map di bawah ini diambil dari file asli kamu
  // jangan diubah supaya nomor urutan game (1,2,3,...) tetap sama. :contentReference[oaicite:1]{index=1}

  const PRAGMATIC_NAME_MAP = {
    1:"Christmas big bass bonanza",
    2:"Gates of Olympus",
    3:"Sweet Bonanza",
    4:"Aztec Gems",
    5:"Sweet Bonanza Xmas",
    6:"Starlight Princess",
    7:"Bonanza Gold",
    8:"Wild West Gold",
    9:"Joker's Jewels",
    10:"Pyramid Bonanza",
    11:"Great Rhino Megaways",
    12:"Fire Strike",
    13:"Candy Village",
    14:"Aztec Gems Deluxe",
    15:"5 Lions Megaways",
    16:"John Hunter and the Tomb of the Scarab Queen",
    17:"Christmas Carol Megaways",
    18:"The Tweety House",
    19:"Aztec Bonanza",
    20:"Fire 88",
    21:"Chicken Drop",
    22:"Rise of Samurai Megaways",
    23:"Dog House Megaways",
    24:"Fruit Party",
    25:"Madame Destiny Megaways",
    26:"Buffalo King Megaways",
    27:"Gems Bonanza",
    28:"Fruit Party 2",
    29:"Temujin Treasures",
    30:"Lucky Lightning",
    31:"The Hand of Midas",
    32:"Power of Thor Megaways",
    33:"Hot Fiesta",
    34:"Empty the Bank",
    35:"Juicy Fruits",
    36:"Release the Kraken",
    37:"7 Wild Booster",
    38:"Star Bounty",
    39:"Drago Jewels Of Fortune",
    40:"John Hunter Book of Tut",
    41:"Mysterious Egypt",
    42:"Pirate Gold Deluxe",
    43:"Curse of the Werewolf Megaways",
    44:"Voodoo Magic",
    45:"Asgard Jackpot",
    46:"Madame Destiny Jackpot",
    47:"Sweet Bonanza Jackpot",
    48:"Dog House Jackpot",
    49:"888 Dragons jackpot",
    50:"Aztec Gems Jackpot",
    51:"Journey To The West Jackpot",
    52:"Monkey Madness Jackpot",
    53:"Monkeys",
    54:"HoT Safari ",
    55:"Big Juan",
    56:"John Hunter QUEST for Bermuda Riches",
    57:"Star Ditates Code",
    58:"Mystic Chief",
    59:"Day of Dead",
    60:"Piggy Bank Bills",
    61:"Cash Bonanza",
    62:"Bigger Bass Bonanza",
    63:"Treasure Wild",
    64:"Yum Yum Powerways",
    65:"Raging Bull",
    66:"Rize Of Giza Power Nudge",
    67:"Chilli Heat Megaways",
    68:"Lucky Grace and Charm Mega Hold&Spin",
    69:"Aztec King Megaways",
    70:"Phionex Forge",
    71:"Heart of Rio",
    72:"Dragon Hot Hold and Spin",
    73:"Cash Elevator",
    74:"Hokkaido Wolf",
    75:"The Magic Cauldron",
    76:"The Amazing Money Machine",
    77:"Aztec King",
    78:"Panda's Fortune 2",
    79:"Floating Dragon Hold and Spin",
    80:"Hot to Burn Hold and Spin",
    81:"5 Lions",
    82:"Chili Heat",
    83:"888 Dragons",
    84:"5 Lions Gold",
    85:"Mustang Gold",
    86:"Big Bass Bonanza",
    87:"John Hunter Mayan God5",
    88:"Spartan King",
    89:"Cowboys Gold",
    90:"Emerald King",
    91:"Dragon Tiger",
    92:"Book & Kingdoms",
    93:"Return of Dead",
    94:"5 Lions Dance",
    95:"Ultra Hold and Spin",
    96:"Rise Of Samurai",
    97:"Wild Walker",
    98:"Great Rhino Deluxe",
    99:"Wild Wild Riches Lucky Of The Irish",
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
    1:"Mytic Bear Xtra Hold",
    2:"Viking Honour Extra Wild",
    3:"Year Of The Wild Wild Tiger",
    4:"Aloha spirit Xtra Hold",
    5:"Santa Aliens",
    6:"Rock Ways Xtra Aways",
    7:"Boor Of The East",
    8:"Zombies Of Vacation",
    9:"Sword Warrior",
    10:"Samurai Blade",
    11:"Perfect Pairs Blackjack",
    12:"Mega Phoenix",
    13:"Five Princesses",
    14:"Strom Of Egypt",
    15:"Sea God",
    16:"Wild West",
    17:"Book Of The West",
    18:"Spin City",
    19:"Golden Reindeer",
    20:"Rainbow Gold",
    21:"Grockels Cauldron",
    22:"Wild Land",
    23:"Mcga Maya",
    24:"Triple Luck",
    25:"Spin Diner",
    26:"Hana Bana",
    27:"Sea Raiders",
    28:"Fortune Frog",
    29:"Imortal Mongkey King",
    30:"Laser Cats",
    31:"Sushi master",
    32:"Bollywood Billions",
    33:"Royal Golden Dragon",
    34:"Golden 888",
    35:"Everlasting Spins",
    36:"Panda Warrior",
    37:"Frogs In Flies",
    38:"Mad Mongkey 2",
    39:"Lost Temple",
    40:"Silver Lion",
    41:"Hold Wild Tiger",
    42:"Happy Happy Penguin",
    43:"Zoo Mania",
    44:"Wild Wild Witch",
    45:"Mad Mongkey",
    46:"Chili Gold",
    47:"Jawz",
    48:"Golden Genie",
    49:"More Mongkey",
    50:"Dragon Palace",
    51:"Dolphin Gold",
    52:"Golden Dragon",
    53:"Froga In Flies 2",
    54:"Golden & Claw",
    55:"Lucky Panda",
    56:"Thundering Zeus",
    57:"Fortune Pays",
    58:"Dragon King",
    59:"Lost Temple",
    60:"Fairy Hollow",
    61:"Fortune Pays",
    62:"Crazy 89",
    63:"Dragon Palace",
    64:"Aladdin Legacy",
    65:"Mongkey",
    66:"Flog In Flies",
    67:"Wild Martracers",
    68:"Hot Volcano",
    69:"Fu Star",
    70:"Medus's Curse",
    71:"King Dinosaur",
    72:"Huluwa",
    73:"Fire Guddess",
    74:"Wild 3 Triads",
    75:"Golden Buffalo",
    76:"Heroes Never Die",
    77:"Golden Pig",
    78:"Diamonds 3",
    79:"Neutron Star",
    80:"Diamond Fortune",
    81:"Ultimate Fighter",
    82:"Shark",
    83:"Dia De Muertos",
    84:"Neptune Gold",
    85:"Kungfu ShowDown",
    86:"Battle Heroes",
    87:"Diamond Tower",
    88:"Gem Riches",
    89:"Ying Caishen",
    90:"The Door Gods",
    91:"Cherry Fortune",
    92:"Reels Of Fortune",
    93:"The Golden Amazon",
    94:"Monkey Luck",
    95:"League Of Champions",
    96:"Dynasty Empire",
    97:"Five Pirates",
    98:"Stacks Cheesek",
    99:"Super Kids",
    100:"Legend Of link",
    101:"HERO",
    102:"YinYang",
    103:"Chashen",
    104:"Mongkey 2",
    105:"Dragon Ball Rells",
    106:"Rose Of Venice",
    107:"Bessy Blast",
    108:"Tiger Slayer",
    109:"The Hopping Dead",
    110:"Cleopatra",
    111:"Robin Hood",
    112:"Neutron Star",
    113:"Tiki Treasueres",
    114:"Grand Prix",
    115:"Aladdin Hand Of Midas",
    116:"Athena",
    117:"Lucky Panda",
    118:"Siik Road",
    119:"Snake Charmer",
    120:"hot Volcano",
    121:"Dragon king",
    122:"Fire Goddness",
    123:"Poto Gold",
    124:"Zeus Vs Hades",
    125:"Mad Mongkey",
    126:"Red Hot Free Spins",
    127:"More Mongkeys",
    128:"Mongkey And The Moon",
    129:"Five Pirates",
    130:"Jade Empire",
    131:"Bounty Hunter 2",
    132:"Cash Grab 2",
    133:"Silver Lion",
    134:"Action Heroes",
    135:"The Journey West",
    136:"Dolphin Gold",
    137:"Zodiac Wilds",
    138:"Fu Star",
    139:"Fortune 8 Cat",
    140:"Chili Gold",
    141:"Choy Sun Poa",
    142:"Aladdin's Legacy",
    143:"Taxi",
    144:"Samurai Princess",
    145:"Thundering Zeus",
    146:"Shogun",
    147:"Vampire VS Werewolves",
    148:"Serengeti Diamonds",
    149:"Angel's Touch",
    150:"Draco'8 Fire",
    151:"Sinful Spins",
    152:"Bars & Bells",
    153:"Victory Ridge",
    154:"Arthur's Ques 2",
    155:"The Great Casini",
    156:"Magical Grave",
    157:"Surf's Up",
    158:"Triple Bonus Spin'n Win",
    159:"Berry Blast",
    160:"Kat lee Bounty Hunter",
    161:"Lady's Charms",
    162:"Vida Venezia",
    163:"Fan Cashtic",
    164:"Wild Mummy",
    165:"Fortune Teller",
    166:"Polar Riches",
    167:"Dragon 8",
    168:"Mongkey Love",
    169:"Neptunes Gold",
    170:"Amazon Adventure",
    171:"Jackpot Holiday",
    172:"Fruit Party",
    173:"Gooo AL",
    174:"Cash Grab",
    175:"Oktoberfest",
    176:"Bullseye Bucks",
    177:"Arthur's Ques",
    178:"Jumping Fot Gold",
    179:"Cash Inferno",
    180:"Hole in One",
    181:"Lucky Cherry",
    182:"Space Invasion",
    183:"Hollywood Reels",
    184:"Wild Weist",
    185:"Fast Track",
    186:"Pirate Treasure",
    187:"Perfect Pairs",
    188:"3 Card Poker",
    189:"Lucky Blackjack 7",
    191:"Roulette",
    192:"Casino Stud Poker",
    193:"Black Jack",
    194:"All American",
    195:"Joker Poker",
    196:"Deuces WIld",
    197:"Jacks Or Better",
    198:"Mammoth",
    199:"888 Golden Dragon"
  };

  const JOKER_NAME_MAP = {
    1:"Power Stars ",
    2:"Lucky Drum",
    3:"Golden Dragon",
    4:"Hercules",
    5:"Queen",
    6:"Witch's Brev",
    7:"Ancient Artifact's",
    8:"Horus Eye",
    9:"Money Vault",
    10:"Burning Pearly",
    11:"Taishang Ladjun",
    12:"Peach Banquet",
    13:"Third Prince's Journey",
    14:"Octagon Gen",
    15:"Hot Fruits",
    16:"Lucky Rooster",
    17:"Dolphin Treasure",
    18:"Three Kingdom Quest",
    19:"Thunder God",
    20:"Ocean Paradise",
    21:"Enchantes Forest",
    22:"Immortals",
    23:"Pharaoh;s Tomb",
    24:"Big Game Safari",
    25:"Feng Huang",
    26:"Qng Bak",
    27:"Tropical Crush",
    28:"Mythological",
    29:"Wizard",
    30:"Gold Trail",
    31:"Shaolin",
    32:"Haunted House",
    33:"Dia Delos Muertos",
    34:"Fores Treasures",
    35:"Bounty Hunter",
    36:"Cyber Race",
    37:"Ocean Spray",
    38:"Zodiac",
    39:"Aztec Temple",
    40:"Fabulous Eights",
    41:"Yeh Hsien",
    42:"Lucky Streak",
    43:"Chug Life",
    44:"Winer Sweets",
    45:"Tsai Shen's Gift",
    46:"Super Stars",
    47:"GNG BAK",
    48:"Dragon's Realm",
    49:"Luck Joker",
    50:"Mayan Gems",
    51:"Flames Of Fortune",
    52:"Tiger's Lair",
    53:"Fire Reign",
    54:"Water Reel",
    55:"Fire Reel",
    56:"Fat Choy Choy Sun",
    57:"Jin Fun Xingyun",
    58:"Ni Shu Shen Me",
    59:"Respin Mania",
    60:"Xu Pu Lian Huan",
    61:"BlackBeard Legacy",
    62:"4 Inventions",
    63:"Mythical Sand",
    64:"7 Cluster Mania",
    65:"Bagua",
    66:"Bagua 2",
    67:"Chili Hunter",
    68:"Ocatgon Gem 2",
    69:"Wild Fairies",
    70:"Yggdarsil",
    71:"Lady Hawk",
    72:"50 Lions",
    73:"Book Of Ra Deluxe",
    74:"4 Tigers",
    75:"nUGGET Hunters",
    76:"Happy Party",
    77:"Safari Life",
    78:"Genie",
    79:"Lucky Panda",
    80:"Lucky God 2",
    81:"Dolphon Reef",
    82:"Highway Kings",
    83:"A Night Out Scratch",
    84:"Azteca",
    85:"Sparta",
    86:"Safari Heat",
    87:"Panther Moon",
    88:"Great Blue",
    89:"Silver Bullet",
    90:"Captain Treasure",
    91:"Bonus Tears",
    92:"Football Rules ",
    93:"Thai Paradise",
    94:"Captain Treasure",
    95:"GIRLCHINA",
    96:"Money Bang Bang",
    97:"Huga",
    98:"Beanstalk",
    99:"Alice",
    100:"White Snake",
    101:"Caishen",
    102:"Mama Mia",
    103:"Ancient Egypt",
    104:"Robin Hood",
    105:"Highway Kings JP",
    106:"Mongkey King",
    107:"Miami",
    108:"Chaisen 2",
    109:"Mongkey King 2",
    110:"Silver Bullet Progressive",
    111:"Captains Treasure Progeressive",
    112:"Viking",
    113:"Egypt",
    114:"Dragon",
    115:"Archer",
    116:"Lose Of Cultivator",
    117:"Happy Budha",
    118:"Golden Island",
    119:"Lucky God 2",
    120:"Jungle Island",
    121:"Crypto Mania",
    122:"Bushio Blade",
    123:"Empress Regnant",
    124:"Dynamite Reels",
    125:"Lions Dance",
    126:"Phoneix",
    127:"Dragon Treasure",
    128:"Chinese Boss",
    129:"Caishen Riches",
    130:"Enter The Ktv",
    131:"Lightining God",
    132:"Arhilic Treasure",
    133:"Golden Koosei",
    134:"China",
    135:"Four Dragons ",
    136:"Wild Giant Panda",
    137:"Neptune Treasure",
    138:"Lucky Lady's Charm",
    139:"Columbus Deluxe",
    140:"Dust Jewwel's",
    141:"50 Dragons",
    142:"Book Of Ra",
    143:"Mulan",
    144:"Wild Spirit",
    145:"Queen of The Nude",
    146:"7 Sizzling Hot",
    147:"Dolphin's Pearl",
    148:"Jeisha",
    149:"Lord Of The Ocean",
    150:"Zhao Cai Jin Bao",
    151:"Fei Long Zai Tian",
    152:"Santa Surprise",
    153:"Five Tiger General's",
    154:"Atom",
    155:"Cash Or Crash",
    156:"Fish Prawn Crab",
    157:"Football Strike",
    158:"Golden Crab",
    159:"Kenu",
    160:"Lucky Wheel",
    161:"Caishen Riches Bingo",
    162:"Chillih Hunter Bingo",
    163:"Burning Pearl Bingo",
    164:"Cryptomania Bingo",
    165:"Neptune Bingo"
  };

  const MICROGAMING_NAME_MAP = {
    1:"Imomortal Romance",
    2:"Zeus Ancient Fortunes",
    3:"9 Mask Of Fire",
    4:"Lucky Twins",
    5:"Playboy Fortunes",
    6:"Poseidon Ancient FOrtunes Megaways",
    7:"Break Aways Lucky Wilds",
    8:"Break Away Deluxe",
    9:"Aurora Wilds",
    10:"Queen Of Alexandria",
    11:"Forgotten Island Megaways",
    12:"9 Blazing Diamonds",
    13:"Sisters Jackpots 10,000x",
    14:"Carnaval Jackpot",
    15:"Serengeti Gold",
    16:"777 Mega Deluxe",
    17:"Lara Croft Temples",
    18:"Augustus",
    19:"Assasin Moon Hyper & Hold",
    20:"Atlantis Rising",
    21:"Chicken Drop",
    22:"Rise Of Samurai Megawys",
    23:"Dog House Megaways",
    24:"Fruit Party",
    25:"Madame Destiny Megaways",
    26:"AFRICA x UP",
    27:"Amazing Link Apollo",
    28:"Amazing Link Zeus",
    29:"9 Pots Of Gold",
    30:"Wild Catch",
    31:"Fire Force",
    32:"Thunder Struck Wild Lightning",
    33:"Legacy Of Oz",
    34:"Hyper Gold",
    35:"Elven Gold",
    36:"Divine Diamonds",
    37:"Silver Sea",
    38:"Joyful Joker Megaways",
    39:"Odine;s Rkhes",
    40:"Blazing Mammoth",
    41:"Oni Hunter Plus",
    42:"Playboy",
    43:"1000 Wishes",
    44:"Andar Bahar Royale",
    45:"Egyptian Tombs",
    46:"Book Of The Arthur",
    47:"Emerald Gold",
    48:"Adventurs Of Doubloon Island",
    49:"Chicago Gold",
    50:"Flower Fortunes Megaways",
    51:"Golden Stallion Ultraways",
    52:"Break Away Ultra",
    53:"Shamroek Holmes Megaways",
    54:"Emperor Of The Sea Deluxe",
    55:"Silverback Multiplier Mountain",
    56:"Gems & Dragons",
    57:"Ingots Caishen",
    58:"Reel Gems Deluxe",
    59:"Westerd Gold",
    60:"Basketball Star Online Slot",
    61:"Ladies Nite",
    62:"Football Star Deluxe",
    63:"Bikini Party",
    64:"Avalon",
    65:"Lucky Koin Online Slot",
    66:"Dragon Shard",
    67:"Sprince Break",
    68:"Break Away",
    69:"Emperor Of The Sea",
    70:"Carnaval",
    71:"Break And Bank Again",
    72:"Daily Ho",
    73:"Big Top",
    74:"Ping Pong Star",
    75:"Lucky Firecracker",
    76:"Playboy Gold",
    77:"Banana Odyssey",
    78:"Shogun Of Time",
    79:"Eagle's Wings",
    80:"Alchemy Fortunes",
    81:"Goldaur Guardians",
    82:"A Tale Of Elves",
    83:"Neptune's Riches Ocean Of Wilds",
    84:"Diamond King Jackpots",
    85:"Tiki reward",
    86:"777 Royal Wheel",
    87:"ALchemis Stone",
    88:"Lucky Twins Catcher Arcade",
    89:"Noble Sky",
    90:"Hippie Days",
    91:"Lucky Twins Jackpot",
    92:"Rugby Star",
    93:"Burning Desire",
    94:"Basketball Star Deluxe Online Slot",
    95:"What A Hoot",
    96:"108 Heroes",
    97:"Wild Orient online Slot",
    98:"Reel Thunder",
    99:"Book Of Lock Spin",
    100:"Starlight Kiss",
    101:"The Twisted Circus",
    102:"Fish Party Online Slot",
    103:"Tarzan Jewel 5000x",
    104:"Basketball Star On Fire",
    105:"Deadmau 5",
    106:"Wanted Outlaws NobleWays",
    107:"108 Heroes Multiplier Fortunes",
    108:"5 Reel Drive",
    109:"Snow Sable",
    110:"Adventure Palace",
    111:"Age Of Discovery",
    112:"Agent Jane Blonde",
    113:"Alaskan Fishing",
    114:"Asian Beauty",
    115:"Badminton Hero",
    116:"Black Sheep",
    117:"Bars & Stripes",
    118:"Beach Babes",
    119:"Beautiful bones",
    120:"Big kahuna",
    121:"Boogie Monsters",
    122:"Book Lock Spin",
    123:"Bookie Of Odds",
    124:"Break da Bank",
    125:"Break da Bank Again Respin",
    126:"Brides Maids",
    127:"Bullseys",
    128:"Bush Telegraph",
    129:"Bust The Bank",
    130:"Candy Dreams",
    131:"Cash Crazy",
    132:"Cash Of Kingdoms",
    133:"Cashapillar",
    134:"Cash Ccino",
    135:"Cash Ville",
    136:"Centre Court",
    137:"Classic 243",
    138:"Good Buck",
    139:"Cool Wolf",
    140:"Couch Potato",
    141:"Crazy Chameleons",
    142:"300 Shields",
    143:"Dexk The Halls",
    144:"Deco Diamonds",
    145:"Diamond Empire",
    146:"Dolphon Coast",
    147:"Double Wammy",
    148:"Dragon Dance",
    149:"Dragonz",
    150:"Dream Date",
    151:"Emoti Coins",
    152:"Exotic Cats",
    153:"Forbideen Throne",
    154:"Fortune girl",
    155:"Fortunium",
    156:"Fruit Vs Candy",
    157:"Girls Guns",
    158:"Gnome Woodi",
    159:"Gold Factory",
    160:"Golden Era",
    161:"Golden Princess",
    162:"Gopher Gold",
    163:"Scary Big Wins Halloween",
    164:"Halloween's",
    165:"Happy Holidays",
    166:"Harveys",
    167:"High Society",
    168:"Hitman",
    169:"Holly Jolly Penguins",
    170:"Hound Hotel",
    171:"Huangdi",
    172:"Isis",
    173:"Jungle Jim EL Dorado",
    174:"Jungle Jim The Lost Sphinx",
    175:"Juraissic World",
    176:"Karaoke Party",
    177:"Kathmandu",
    178:"King Tusk",
    179:"Kings Of Cash",
    180:"Kitty Cabana",
    181:"Lady In Red",
    182:"Legend Of The Moon Lovers",
    183:"Life Of Riches",
    184:"Lion's Pride",
    185:"Liquid Gold",
    186:"loaded",
    187:"Lost Vegas",
    188:"Lucha Legend",
    189:"Lucky Bachelos",
    190:"Lucky Leprechauins Looot",
    191:"Lucky Little Gods ",
    192:"Lucky Zodiac",
    193:"Mad Hatters",
    194:"Magic Of Sahara",
    195:"Mayana Princess",
    196:"Mega Money Multiplier",
    197:"Mermaids Millions",
    198:"Moby dick",
    199:"Monster Wheels",
    200:"Munchkins",
    201:"Mystic Dreams",
    202:"Pink Country Love",
    203:"Our Days",
    204:"Party Island",
    205:"Pistoleras",
    206:"Playboy Gold",
    207:"Polten Party",
    208:"Pretty Kitty",
    209:"Pure Platinum",
    210:"Queen Of The Crystal Rays",
    211:"Rabbit hat",
    212:"Big Bass Bonanza Megaways",
    213:"Bounty Gold",
    214:"Reel Talent",
    215:"Relic Seekers",
    216:"Georgie Porgie",
    217:"Hearts & Tarts",
    218:"River Riches",
    219:"Romanov Riches",
    220:"Sarta Days",
    221:"Santa's Wild Ride",
    222:"Scorooge",
    223:"Secret Adminer",
    224:"Shanghai Beauty",
    225:"Sherlock Of london",
    226:"Tournament Shoot",
    227:"Showdown Saloon",
    228:"Silver Fang",
    229:"Silver Lioness 4x",
    230:"Six Acrobats",
    231:"So Many monsters",
    232:"SoMuch Candy",
    233:"So Much Sushi",
    234:"Star Dust",
    235:"Stash Of The Titans",
    236:"Sterling Silver",
    237:"Sugar Parade",
    238:"Summer Holiday",
    239:"SummerTime",
    240:"Sun Quest",
    241:"Sun Tide",
    242:"Super It UP",
    243:"Sure Win",
    244:"Tarzan",
    245:"Tasty Street",
    246:"Finer The Reels of Life",
    247:"The Grand Journey",
    248:"The Great Albini",
    249:"The Heat is ON",
    250:"The Phantom Of The Opera",
    251:"Rat Pack",
    252:"Thunder Struck",
    253:"Thunder Struck",
    254:"Tiger Eye",
    255:"Tiki Vikings",
    256:"Titans Of The Sun Hyperion",
    257:"Titans Of The Sun Theia",
    258:"Lara Groft Tomb Raide",
    259:"Tomb Raider Secret Of The Sword",
    260:"Treasue Place",
    261:"Treasures Of Lion City",
    262:"Untamed Giant Panda",
    263:"Village Peopla Macho Moves",
    264:"Vingl Countdown",
    265:"Voila",
    266:"Wacky panda",
    267:"Wicked Tales Dark Red",
    268:"Wild Scarabs",
    269:"Winsum Dimsum",
    270:"Zombie Hoard",
    271:"Lons mu Fortunes",
    272:"Dark Matter",
    273:"Rugby Star Deluxe",
    274:"Ladies Nite 2",
    275:"Boat Of Fortune"
  };

  const TOPTREND_NAME_MAP = {
    1:"Mystic Bear",
    2:"Viking Honour",
    3:"Wild wilL Tiger",
    4:"Aloha Spirit",
    5:"Santa Aliens",
    6:"Rocky Ways",
    7:"Book Of The East",
    8:"Zombies Of Vacation",
    9:"Sword Warriors",
    10:"Samurai Blade",
    11:"Perfect BlackJack",
    12:"Mega Phonix",
    13:"Five Princess",
    14:"Strom Of Egypt",
    15:"Sea God",
    16:"Wild West",
    17:"Book Of The West",
    18:"Spin City",
    19:"Golden Reindeer",
    20:"Rainbow Gold",
    21:"Grockets",
    22:"Wild Land",
    23:"Mcga Maya",
    24:"Triple Luck",
    25:"Spin Diner",
    26:"Hanabana",
    27:"Sea Raiders",
    28:"Fortune Frog",
    29:"Immortal Mongkey King",
    30:"Laser Cats",
    31:"Sushi Master",
    32:"Bollywood Billions",
    33:"Royal Golden Dragon",
    34:"Golden 888",
    35:"Everlasting Spins",
    36:"Panda Warrior",
    37:"Forgs Flies",
    38:"Mad Mongkey2",
    39:"Lost Temple",
    40:"Silveer Lion",
    41:"Wild Tiger",
    42:"Happy Happy Penguin",
    43:"Zoo Mania",
    44:"Wild Witch",
    45:"Mad Mongkey",
    46:"Chilli Gold",
    47:"Jaws",
    48:"Golden Genie",
    49:"MOre Mongkeys",
    50:"Dragon Palace",
    51:"Dolphin Gold",
    52:"Golden Dragon",
    53:"Frogs In Flies 2",
    54:"Golden Claw",
    55:"Lucky Panda",
    56:"Thunder Zeus",
    57:"Fortune Pays",
    58:"Dragon King",
    59:"Lost Temple",
    60:"Fairy Hollow",
    61:"Fortune Pays",
    62:"Crazy 88",
    63:"Dragon Palace",
    64:"Alladin's Legacy",
    65:"Mongkey",
    66:"Frogs Flies",
    67:"Wild Kart Racers",
    68:"Hot Volcano",
    69:"Fu Star",
    70:"Medusa Curse",
    71:"King Dinosaur",
    72:"Huluwa",
    73:"Fire Guddess",
    74:"Wild Triads",
    75:"Golden Buffalo",
    76:"Herose Never Die",
    77:"Golden Pig",
    78:"Diamonds 3",
    79:"Neutron Star",
    80:"Diamond Star",
    81:"Ultimate Fighter",
    82:"Sharks",
    83:"Dia De Muertos",
    84:"Neptune Gold",
    85:"Kungfu Showdown",
    86:"Battle Heroes",
    87:"Diamond Tower",
    88:"Gem Riohes",
    89:"Ying Caishen",
    90:"Tiny Door Gods",
    91:"Cherry Fortune",
    92:"Reels Of Fortune",
    93:"The Golden Amazon",
    94:"Mongkey Luck",
    95:"League Champion's",
    96:"Dynasty Empire",
    97:"Five Pirates",
    98:"Stacks Cheesk",
    99:"Super Kids",
    100:"Legend Of Link"
  };

  /****************************************
   * 2. POLA / TAKTIK VARIANTS (BANGLA)
   ****************************************/
  // diputar per index supaya tiap game dapet tips yang berbeda
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

  /****************************************
   * 3. CONVERT MAP -> GAME ARRAY
   ****************************************/
  function generateGamesFromMap(nameMap, providerLabel, providerKey, imgFolder){
    return Object.entries(nameMap).map(([num, gameName], idx) => {
      const variant = POLA_VARIANTS[idx % POLA_VARIANTS.length];
      return {
        name: gameName,
        provider: providerLabel,
        providerKey,
        img: `./img/${imgFolder}/${num}.png`, // asumsi nama file sesuai nomor
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

  // gabung semua provider
  const CK_GAMES = [].concat(
    PRAGMATIC_GAMES,
    PGSOFT_GAMES,
    JILI_GAMES,
    JOKER_GAMES,
    MICRO_GAMES,
    TTG_GAMES
  );

  /****************************************
   * 4. RTP RANDOM + COLOR LOGIC
   ****************************************/

  // bikin RTP % live (30 - 98) biar kelihatan naik turun
  function getRandomRTP() {
    const val = 30 + Math.random()*68; // 30..98
    return parseFloat(val.toFixed(2));
  }

  // tentuin kategori warna:
  //  - hijau  = হট (>=80)
  //  - kuning = সতর্ক (>=60 && <80)
  //  - merah  = বিপদ (<60)
  function classifyRTP(rtp){
    if (rtp >= 80) {
      return {
        label:"হট",
        colorText:"#00ff62",

        // bar style hijau
        wrapBg:"#003b14",
        borderColor:"rgba(0,255,98,.4)",
        shadow:"0 0 10px rgba(0,255,98,.5)",
        grad:"linear-gradient(90deg,#00ff62 0%,#007a1f 100%)",
        barText:"#000"
      };
    }
    if (rtp >= 60) {
      return {
        label:"সতর্ক",
        colorText:"#ffd24a",

        // bar style kuning
        wrapBg:"#4a3400",
        borderColor:"rgba(255,210,74,.4)",
        shadow:"0 0 10px rgba(255,210,74,.4)",
        grad:"linear-gradient(90deg,#ffd24a 0%,#9b6b00 100%)",
        barText:"#000"
      };
    }
    return {
      label:"বিপদ",
      colorText:"#ff3b3b",

      // bar style merah
      wrapBg:"#300000",
      borderColor:"rgba(255,59,59,.5)",
      shadow:"0 0 10px rgba(255,59,59,.45)",
      grad:"linear-gradient(90deg,#ff3b3b 0%,#6a0000 100%)",
      barText:"#fff"
    };
  }

  // snapshot semua game + rtpNow live
  function getSnapshot(){
    return CK_GAMES.map(g => {
      const rtpNow = getRandomRTP();
      const cls = classifyRTP(rtpNow);
      return {
        ...g,
        rtpNow,
        rtpClass: cls
      };
    });
  }

  /****************************************
   * 5. PROVIDER LIST & TABS
   ****************************************/
  function getProviders(){
    const map = {};
    CK_GAMES.forEach(g => {
      if (!map[g.providerKey]) map[g.providerKey] = g.provider;
    });
    return map;
  }

  let currentProvider = "all";

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

    // click tab
    holder.querySelectorAll(".ck-provider-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        currentProvider = btn.getAttribute("data-prov") || "all";
        renderAll(); // re-render dengan provider yang baru
      });
    });
  }

  /****************************************
   * 6. HERO TOP 3 (RTP tertinggi)
   ****************************************/
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
          <div class="ck-game-rtp">
            RTP:
            <span class="ck-rtp-val"
                  style="
                    color:${g.rtpClass.colorText};
                    border:1px solid ${g.rtpClass.borderColor};
                    background:${g.rtpClass.wrapBg};
                  ">
              ${g.rtpNow.toFixed(2)}%
            </span>
          </div>
          <div class="ck-game-provider">${g.provider}</div>
        </div>
      </div>
    `).join("");
  }

  /****************************************
   * 7. RTP TABLE (atas)
   ****************************************/
  function renderRtpTable(ss){
    const tbody = document.getElementById("ck-rtp-tbody");
    if (!tbody) return;

    // filter by provider kalau bukan "all"
    let list = ss;
    if (currentProvider !== "all"){
      list = list.filter(g => g.providerKey === currentProvider);
    }

    // sort dari rtp terbesar ke kecil
    list = list.slice().sort((a,b)=> b.rtpNow - a.rtpNow);

    tbody.innerHTML = list.map(g => `
      <tr>
        <td style="color:#fff;font-weight:600;text-shadow:0 0 4px rgba(0,0,0,.8);">
          ${g.name}
        </td>

        <td style="color:#ccc;font-size:.7rem;text-shadow:0 0 4px rgba(0,0,0,.8);">
          ${g.provider}
        </td>

        <td style="
          font-weight:600;
          color:${g.rtpClass.colorText};
          text-shadow:0 0 6px rgba(0,0,0,.8);
        ">
          ${g.rtpNow.toFixed(2)}%
        </td>

        <td style="
          font-weight:600;
          color:${g.rtpClass.colorText};
          text-shadow:0 0 6px rgba(0,0,0,.8);
        ">
          ${g.rtpClass.label}
        </td>
      </tr>
    `).join("");
  }

  /****************************************
   * 8. DETAIL GRID PER PROVIDER + MODAL POLA
   ****************************************/
  // animate bar dari 0 -> target
  function animateRtpBars(rootEl){
    const bars = rootEl.querySelectorAll('.ck-rtp-bar-fill');
    bars.forEach(bar => {
      const targetW = bar.getAttribute('data-target-width');
      bar.style.transition = 'none';
      bar.style.width = '0%';
      setTimeout(() => {
        bar.style.transition = 'width 1s ease';
        bar.style.width = targetW;
      }, 50);
    });
  }

  function renderProviderDetail(ss){
    const wrap = document.getElementById("ck-provider-detail-wrap");
    if (!wrap) return;

    // kalau lagi tab "সব", kita sembunyikan blok detail
    if (currentProvider === "all"){
        wrap.style.display = "none";
        wrap.innerHTML = "";
        return;
    }

    // ambil list provider yg dipilih
    let list = ss.filter(g => g.providerKey === currentProvider);
    // sort rtp desc
    list = list.slice().sort((a,b)=> b.rtpNow - a.rtpNow);

    // card untuk setiap game
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

            <div class="ck-rtp-bar-wrap"
                 style="
                   background:${g.rtpClass.wrapBg};
                   border:1px solid ${g.rtpClass.borderColor};
                   box-shadow:${g.rtpClass.shadow};
                 ">
              <div class="ck-rtp-bar-fill"
                   data-target-width="${widthPct}"
                   style="
                     width:0%;
                     background:${g.rtpClass.grad};
                     color:${g.rtpClass.barText};
                   ">
                ${pctText}
              </div>
            </div>
          </div>
        </div>

        <!-- MODAL POLA / TIPS untuk game ini -->
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

    // bungkus + judul provider
    wrap.style.display = "block";
    wrap.innerHTML = `
      <div class="ck-provider-detail-head">
        <div class="ck-provider-detail-title">
          ${list[0]?.provider || ""} • হট RTP & প্যাটার্ন
        </div>
        <div class="ck-provider-detail-sub">
          গেমে ট্যাপ করো → জেতার স্টেপ / ট্যাকটিক দেখো। বার কালার মানে:
          সবুজ = ভালো, হলুদ = সাবধানে, লাল = ঝুঁকি।
        </div>
      </div>

      <div class="ck-game-grid">
        ${cardsHTML}
      </div>
    `;

    // klik kartu = buka modal
    wrap.querySelectorAll("[data-game-modal]").forEach(card => {
      card.addEventListener("click", () => {
        const id = "pola-" + card.getAttribute("data-game-modal");
        const modal = document.getElementById(id);
        if(modal) modal.classList.add("active");
      });
    });

    // tombol close (X)
    document.querySelectorAll("[data-close-pola]").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        const targetId = btn.getAttribute("data-close-pola");
        const modal = document.getElementById(targetId);
        if(modal) modal.classList.remove("active");
      });
    });

    // klik luar modal utk tutup
    document.querySelectorAll(".ck-pola-overlay").forEach(overlay=>{
      overlay.addEventListener("click", e=>{
        if(e.target===overlay){
          overlay.classList.remove("active");
        }
      });
    });

    // animasi bar progress hijau/kuning/merah
    animateRtpBars(wrap);
  }

  /****************************************
   * 9. RENDER HELPER
   ****************************************/
  function renderAll(){
    const snap = getSnapshot();           // waktu render -> generate RTP baru
    renderProviderTabs();                 // tabs atas
    renderHeroCard(snap);                 // top 3 hot
    renderRtpTable(snap);                 // tabel RTP
    renderProviderDetail(snap);           // grid detail provider / pola
  }

  /****************************************
   * 10. INIT
   ****************************************/
  renderAll();

  // auto refresh RTP tiap 15 menit
  setInterval(renderAll, 900000);

})();
