/** include la libreria TelegramBot per comunicare con @ReDelCastello_BOT */
const telegramBot = require('node-telegram-bot-api');

/** creazione istanza nuovo bot con passaggio token e opzione polling */
//exports.rdc = new telegramBot('1328058614:AAHpbzxl9hyUDQDQ0XHZXGVAuxTz04VA3E4', { polling: true });

/* ------------------------------------------------------------- HEROKU */
const TOKEN = '1328058614:AAHpbzxl9hyUDQDQ0XHZXGVAuxTz04VA3E4';
const options = { webHook: { port: process.env.PORT } };
/** Link app a cui collegarsi e porta da usare */
const url = 'https://redelcastello-bot.herokuapp.com:443';
exports.rdc = new telegramBot(TOKEN, options);
this.rdc.setWebHook(`${url}/bot${TOKEN}`);

/** CR API KEY */
exports.ApiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImRhMGRiNDIwLTE0OTctNDAzNC1iZTAzLTEwYzM1MmQ0YTIyZSIsImlhdCI6MTYyMTYyMDE1MSwic3ViIjoiZGV2ZWxvcGVyLzcwMmUwZmQ0LWQ0Y2ItNTFmOS00YmVhLTJhNWRlZDNlNzAzOSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxMjguMTI4LjEyOC4xMjgiXSwidHlwZSI6ImNsaWVudCJ9XX0.dyZgDfLgw-BPi6gNMzIOHRm7FZLVJZ9IXf46YEM4llbm011jbXpU38hIOa0ex426R9gQFFEogpfEhdWjYk3Wvw';

/** link per richiamare dati */
exports.link = 'https://proxy.royaleapi.dev/v1/';

/** dati calcolo carte rimanenti - OGGETTI */
exports.up = {
    common: {
        cards: [9586, 9584, 9580, 9570, 9550, 9500, 9400, 9200, 8800, 8000, 7000, 5000],
        money: ['185.625', '185.620', '185.600', '185.550', '185.400', '185.000', '184.000', '182.000', '178.000', '170.000', '150.000', '100.000'],
        points: [3800, 3796, 3791, 3785, 3775, 3750, 3700, 3600, 3400, 3000, 2400, 1600]
    },
    rare: {
        cards: [2586, 2584, 2580, 2570, 2550, 2500, 2400, 2200, 1800, 1000],
        money: ['185.600', '185.550', '185.400', '185.000', '184.000', '182.000', '178.000', '170.000', '150.000', '100.000'],
        points: [3791, 3785, 3775, 3750, 3700, 3600, 3400, 3000, 2400, 1600],
    },
    epic: {
        cards: [386, 384, 380, 370, 350, 300, 200],
        money: ['184.400', '184.000', '182.000', '178.000', '170.000', '150.000', '100.000'],
        points: [3725, 3700, 3600, 3400, 3000, 2400, 1600],
    },
    legendary: {
        cards: [36, 34, 30, 20],
        money: ['175.000', '170.000', '150.000', '100.000'],
        points: [3250, 3000, 2400, 1600],
    },
    money: [5, 20, 50, 150, 400, 2000, 4000, 8000, 20000, 50000, 100000],
    target: [2, 4, 10, 20, 50, 100, 200, 400, 800, 1000, 2000, 5000]
}

/** traduzione bauli - ARRAY DI OGGETTI */
exports.tradChests = [{
    nameEng: "Silver Chest",
    nameIta: "Baule d'Argento"
}, {
    nameEng: "Golden Chest",
    nameIta: "Baule d'Oro"
}, {
    nameEng: "Giant Chest",
    nameIta: "Baule Gigante"
}, {
    nameEng: "Gold Crate",
    nameIta: "Cassa d'Oro"
}, {
    nameEng: "Magical Chest",
    nameIta: "Baule Magico"
}, {
    nameEng: "Legendary Chest",
    nameIta: "Baule Leggendario"
}, {
    nameEng: "Epic Chest",
    nameIta: "Baule Epico"
}, {
    nameEng: "Mega Lightning Chest",
    nameIta: "Baule Mega Cangiante"
}, {
    nameEng: "Lightning Chest",
    nameIta: "Baule Cangiante"
}]

/** traduzione carte - ARRAY DI OGGETTI*/
exports.tradCards = [{
    id: "27000000",
    nameEng: "Cannon",
    nameIta: "Cannone"
}, {
    id: "26000013",
    nameEng: "Bomber",
    nameIta: "Bombarolo"
}, {
    id: "27000010",
    nameEng: "Furnace",
    nameIta: "Fornace"
}, {
    id: "26000041",
    nameEng: "Goblin Gang",
    nameIta: "Gang di Goblin"
}, {
    id: "26000024",
    nameEng: "Royal Giant",
    nameIta: "Gigante Royale"
}, {
    id: "28000010",
    nameEng: "Graveyard",
    nameIta: "Cimitero"
}, {
    id: "26000025",
    nameEng: "Guards",
    nameIta: "Guardie"
}, {
    id: "28000013",
    nameEng: "Clone",
    nameIta: "Clonazione"
}, {
    id: "26000037",
    nameEng: "Inferno Dragon",
    nameIta: "Drago Infernale"
}, {
    id: "27000007",
    nameEng: "Elixir Collector",
    nameIta: "Estrattore di Elisir"
}, {
    id: "26000012",
    nameEng: "Skeleton Army",
    nameIta: "Orda di Scheletri"
}, {
    id: "28000003",
    nameEng: "Rocket",
    nameIta: "Razzo"
}, {
    id: "26000028",
    nameEng: "Three Musketeers",
    nameIta: "Tre Moschettieri"
}, {
    id: "26000008",
    nameEng: "Barbarians",
    nameIta: "Barbari"
}, {
    id: "27000002",
    nameEng: "Mortar",
    nameIta: "Mortaio"
}, {
    id: "26000053",
    nameEng: "Rascals",
    nameIta: "Mascalzoni"
}, {
    id: "26000059",
    nameEng: "Royal Hogs",
    nameIta: "Maiali Royale"
}, {
    id: "26000047",
    nameEng: "Royal Recruits",
    nameIta: "Reclute Royale"
}, {
    id: "26000048",
    nameEng: "Night Witch",
    nameIta: "Strega Notturna"
}, {
    id: "26000045",
    nameEng: "Executioner",
    nameIta: "Boia"
}, {
    id: "27000009",
    nameEng: "Tombstone",
    nameIta: "Lapide"
}, {
    id: "27000005",
    nameEng: "Barbarian Hut",
    nameIta: "Capanna dei Barbari"
}, {
    id: "26000042",
    nameEng: "Electro Wizard",
    nameIta: "Stregone Elettrico"
}, {
    id: "27000003",
    nameEng: "Inferno Tower",
    nameIta: "Torre Infernale"
}, {
    id: "26000034",
    nameEng: "Bowler",
    nameIta: "Bocciatore"
}, {
    id: "26000055",
    nameEng: "Mega Knight",
    nameIta: "Gran Cavaliere"
}, {
    id: "28000000",
    nameEng: "Fireball",
    nameIta: "Sfera Infuocata"
}, {
    id: "28000012",
    nameEng: "Tornado",
    nameIta: "Tornado"
}, {
    id: "28000017",
    nameEng: "Giant Snowball",
    nameIta: "Palla di Neve Gigante"
}, {
    id: "26000009",
    nameEng: "Golem",
    nameIta: "Golem"
}, {
    id: "26000062",
    nameEng: "Magic Archer",
    nameIta: "Arciere Magico"
}, {
    id: "26000006",
    nameEng: "Balloon",
    nameIta: "Mongolfiera"
}, {
    id: "26000036",
    nameEng: "Battle Ram",
    nameIta: "Ariete da Battaglia"
}, {
    id: "26000029",
    nameEng: "Lava Hound",
    nameIta: "Mastino Lavico"
}, {
    id: "26000003",
    nameEng: "Giant",
    nameIta: "Gigante"
}, {
    id: "28000004",
    nameEng: "Goblin Barrel",
    nameIta: "Barile Goblin"
}, {
    id: "26000051",
    nameEng: "Ram Rider",
    nameIta: "Domatrice di Arieti"
}, {
    id: "26000068",
    nameEng: "Battle Healer",
    nameIta: "Guaritrice Guerriera"
}, {
    id: "28000018",
    nameEng: "Royal Delivery",
    nameIta: "Consegna Royale"
}, {
    id: "27000008",
    nameEng: "X-Bow",
    nameIta: "Arco-X"
}, {
    id: "26000007",
    nameEng: "Witch",
    nameIta: "Strega"
}, {
    id: "26000016",
    nameEng: "Prince",
    nameIta: "Principe"
}, {
    id: "26000039",
    nameEng: "Mega Minion",
    nameIta: "Megasgherro"
}, {
    id: "27000001",
    nameEng: "Goblin Hut",
    nameIta: "Capanna Goblin"
}, {
    id: "26000063",
    nameEng: "Electro Dragon",
    nameIta: "Drago Elettrico"
}, {
    id: "27000004",
    nameEng: "Bomb Tower",
    nameIta: "Torre Bombardiera"
}, {
    id: "26000058",
    nameEng: "Wall Breakers",
    nameIta: "Spaccamuro"
}, {
    id: "28000015",
    nameEng: "Barbarian Barrel",
    nameIta: "Barile Barbarico"
}, {
    id: "26000035",
    nameEng: "Lumberjack",
    nameIta: "Boscaiolo"
}, {
    id: "28000009",
    nameEng: "Poison",
    nameIta: "Veleno"
}, {
    id: "28000005",
    nameEng: "Freeze",
    nameIta: "Congelamento"
}, {
    id: "26000084",
    nameEng: "Electro Spirit",
    nameIta: "Spirito Elettrico"
}, {
    id: "26000038",
    nameEng: "Ice Golem",
    nameIta: "Golem del Ghiaccio"
}, {
    id: "26000030",
    nameEng: "Ice Spirit",
    nameIta: "Spirito del Ghiaccio"
}, {
    id: "28000008",
    nameEng: "Zap",
    nameIta: "Scarica"
}, {
    id: "26000019",
    nameEng: "Spear Goblins",
    nameIta: "Goblin Lancieri"
}, {
    id: "26000005",
    nameEng: "Minions",
    nameIta: "Sgherri"
}, {
    id: "27000012",
    nameEng: "Goblin Cage",
    nameIta: "Gabbia per Goblin"
}, {
    id: "26000056",
    nameEng: "Skeleton Barrel",
    nameIta: "Barile d'Ossa"
}, {
    id: "26000010",
    nameEng: "Skeletons",
    nameIta: "Scheletri"
}, {
    id: "26000064",
    nameEng: "Firecracker",
    nameIta: "Arciere Pirotecnico"
}, {
    id: "26000044",
    nameEng: "Hunter",
    nameIta: "Cacciatore"
}, {
    id: "26000054",
    nameEng: "Cannon Cart",
    nameIta: "Cannone a Rotelle"
}, {
    id: "26000002",
    nameEng: "Goblins",
    nameIta: "Goblin"
}, {
    id: "28000014",
    nameEng: "Earthquake",
    nameIta: "Terremoto"
}, {
    id: "28000002",
    nameEng: "Rage",
    nameIta: "Furia"
}, {
    id: "26000020",
    nameEng: "Giant Skeleton",
    nameIta: "Scheletro Gigante"
}, {
    id: "26000085",
    nameEng: "Electro Giant",
    nameIta: "Gigante Elettrico"
}, {
    id: "26000001",
    nameEng: "Archers",
    nameIta: "Arcieri"
}, {
    id: "26000040",
    nameEng: "Dart Goblin",
    nameIta: "Goblin Cerbottaniere"
}, {
    id: "28000007",
    nameEng: "Lightning",
    nameIta: "Fulmine"
}, {
    id: "26000060",
    nameEng: "Goblin Giant",
    nameIta: "Gigante Goblin"
}, {
    id: "27000006",
    nameEng: "Tesla",
    nameIta: "Tesla"
}, {
    id: "26000052",
    nameEng: "Zappies",
    nameIta: "Scaricuccioli"
}, {
    id: "26000021",
    nameEng: "Hog Rider",
    nameIta: "Domatore di Cinghiali"
}, {
    id: "26000057",
    nameEng: "Flying Machine",
    nameIta: "Macchina Volante"
}, {
    id: "26000031",
    nameEng: "Fire Spirit",
    nameIta: "Spirito del Fuoco"
}, {
    id: "26000018",
    nameEng: "Mini P.E.K.K.A",
    nameIta: "Mini P.E.K.K.A"
}, {
    id: "26000000",
    nameEng: "Knight",
    nameIta: "Cavaliere"
}, {
    id: "26000033",
    nameEng: "Sparky",
    nameIta: "Scintilla"
}, {
    id: "26000067",
    nameEng: "Elixir Golem",
    nameIta: "Golem di Elisir"
}, {
    id: "26000014",
    nameEng: "Musketeer",
    nameIta: "Moschettiere"
}, {
    id: "28000016",
    nameEng: "Heal Spirit",
    nameIta: "Spirito della Cura"
}, {
    id: "26000049",
    nameEng: "Bats",
    nameIta: "Pipistrelli"
}, {
    id: "26000080",
    nameEng: "Skeleton Dragons",
    nameIta: "Draghi d'Ossa"
}, {
    id: "28000011",
    nameEng: "The Log",
    nameIta: "Il Tronco"
}, {
    id: "26000083",
    nameEng: "Mother Witch",
    nameIta: "Strega Madre"
}, {
    id: "26000061",
    nameEng: "Fisherman",
    nameIta: "Pescatore"
}, {
    id: "26000046",
    nameEng: "Bandit",
    nameIta: "Fuorilegge"
}, {
    id: "26000023",
    nameEng: "Ice Wizard",
    nameIta: "Stregone di Ghiaccio"
}, {
    id: "26000050",
    nameEng: "Royal Ghost",
    nameIta: "Fantasma Royale"
}, {
    id: "26000032",
    nameEng: "Miner",
    nameIta: "Minatore"
}, {
    id: "26000026",
    nameEng: "Princess",
    nameIta: "Principessa"
}, {
    id: "28000006",
    nameEng: "Mirror",
    nameIta: "Specchio"
}, {
    id: "27000013",
    nameEng: "Goblin Drill",
    nameIta: "Trivella Goblin"
}, {
    id: "26000004",
    nameEng: "P.E.K.K.A",
    nameIta: "P.E.K.K.A"
}, {
    id: "26000017",
    nameEng: "Wizard",
    nameIta: "Stregone"
}, {
    id: "26000015",
    nameEng: "Baby Dragon",
    nameIta: "Cucciolo di Drago"
}, {
    id: "26000043",
    nameEng: "Elite Barbarians",
    nameIta: "Barbari Scelti"
}, {
    id: "26000027",
    nameEng: "Dark Prince",
    nameIta: "Principe Nero"
}, {
    id: "26000011",
    nameEng: "Valkyrie",
    nameIta: "Valchiria"
}, {
    id: "28000001",
    nameEng: "Arrows",
    nameIta: "Frecce"
}, {
    id: "26000022",
    nameEng: "Minion Horde",
    nameIta: "Orda di Sgherri"
}]

/** variabili utili */
exports.mancanti;
exports.level;
exports.richieste;
exports.rarit;
exports.monete;
exports.myTag = '8V80QUP';
exports.clanTag = '#UR9Y99G';
exports.tag = "";
exports.idDev = '865229007';

exports.allCards = {
    id: 0,
    name: '',
    level: 0,
    maxLevel: 0
}