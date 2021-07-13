/** AXIOS, options, dati per HTTPS request */
const ax = require('axios');
const { tradCards, up, rdc, myTag, ApiKey, link, clanTag, idDev, idChat, tag, tradChests } = require('./dic');
let { bauli, mancanti, level, richieste, rarit, monete } = require('./dic');
const options = {
    method: "get",
    headers: {
        "Authorization": "Bearer " + ApiKey
    }
};

exports.getTest = (idChat) => {
    rdc.sendMessage(idChat, 'TEST RIUSCITO').catch(err => {
        console.log('ERRORE getTest => ' + err.message);
    })
}

/** esporta dati per traduzione carte e bauli */
exports.getTrad = () => {
    ax.get(link + 'players/%23' + myTag, options)
        .then(resPlayers => {
            ax.get(link + 'players/%23' + myTag + '/upcomingchests', options)
                .then(resChests => {
                    let chests = resChests.data.items;
                    chests.forEach(chest => {
                        console.log('{\nnameEng: "' + chest.name + '",\nnameIta: ""\n},{')
                    })
                }).catch(err => {
                    console.log("ERRORE resChests: " + err.message);
                })
            let allCards = resPlayers.data.cards;
            allCards.forEach(card => {
                //console.log('{\nid: "' + card.id + '",\nnameEng: "' + card.name + '",\nnameIta: ""\n},')
            })
        }).catch(err => {
            console.log("ERRORE resPlayers: " + err.message);
        })
}

/** funzione esporta BAULI */
exports.getBauli = (idChat, tag) => {
    ax.get(link + 'players/%23' + tag, options)
        .then(res => {
            if (res.data.clan.tag == clanTag) {
                ax.get(link + 'players/%23' + tag + '/upcomingchests', options)
                    .then(res => {
                        let chests = res.data.items;
                        chests.forEach(chest => {
                            tradChests.forEach(trad => {
                                if (chest.name === trad.nameEng && trad.nameIta != "")
                                    bauli += trad.nameIta + '  =>  ' + chest.index + '\n';
                                else if (chest.name === trad.nameEng && trad.nameIta == "") bauli += chest.name + '  =>  ' + chest.index + '\n';
                            })
                        })
                        rdc.sendMessage(idChat, bauli);
                    })
            } else rdc.sendMessage(idChat, 'Mi spiace ma non fai parte del Clan supremo RE DEL CASTELLO').catch(err => {
                console.log("ERRORE MESSAGGIO NON APPARTENENZA CLAN " + err.message);
            });
        })
}

/** funzione esporta CARTE */
exports.getMissingCards = (idChat, tag) => {
    ax.get(link + 'players/%23' + tag, options)
        .then(res => {
            /** se non fai parte di un clan o non fai parte del clan re del castello */
            if (res.data.clan == undefined || res.data.clan.tag != clanTag) {
                rdc.sendMessage(idChat, 'Mi spiace ma non fai parte del Clan supremo RE DEL CASTELLO')
                /** se fai parte del clan re del castello */
            } else if (res.data.clan.tag == clanTag) {
                /** assegno i dati delle carte alla variabile allCards */
                let allCards = res.data.cards;
                /** la variabile cards contiene oggetti */
                var cards = [];
                /** cicla le carte */
                allCards.forEach(card => {
                    /** cicla le traduzioni */
                    tradCards.forEach(traduct => {
                        /** calcolo i dati necessari effettuando uno switch sul livello max della carta */
                        switch (card.maxLevel) {
                            case 13:
                                /** imposto livello originale */
                                level = card.level;
                                /** se la carta è al max livello */
                                if (card.level != card.maxLevel) {
                                    /** assegno carte, richieste e monete necessarie all'upgrade */
                                    mancanti = up.common.cards[card.level - 1] - card.count;
                                    richieste = mancanti / 40;
                                    monete = up.common.money[card.level - 1];
                                }
                                /** assegno rarità */
                                rarit = 'C';
                                break;
                            case 11:
                                /** come case 13 */
                                level = card.level + 2;
                                if (card.level != card.maxLevel) {
                                    mancanti = up.rare.cards[card.level - 1] - card.count;
                                    richieste = mancanti / 4;
                                    monete = up.rare.money[card.level - 1];
                                }
                                rarit = 'R';
                                break;
                            case 8:
                                /** come case 13 */
                                level = card.level + 5;
                                if (card.level != card.maxLevel) {
                                    mancanti = up.epic.cards[card.level - 1] - card.count;
                                    richieste = mancanti / 4;
                                    monete = up.epic.money[card.level - 1];
                                }
                                rarit = 'E';
                                break;
                            case 5:
                                /** come case 13 */
                                level = card.level + 8;
                                if (card.level != card.maxLevel) {
                                    mancanti = up.legendary.cards[card.level - 1] - card.count;
                                    monete = up.legendary.money[card.level - 1];
                                    richieste = "NR";
                                }
                                rarit = 'L';
                                break;
                            default:
                                break;
                        }
                        /** indico se la carta ha raggiunto il livello max */
                        if (card.level === card.maxLevel) mancanti = 'MAXATA';
                        /** imposto come Non Richiedibile le carte che devono essere solo upgradate */
                        if (mancanti == 0) richieste = "NR";
                        /** se carta e traduzione hanno lo stesso id e se la traduzione italiana è presente */
                        if (traduct.id == card.id && traduct.nameIta != "") {
                            /** inserisci l'oggetto carta con nome italiano */
                            cards.push({
                                rarity: rarit,
                                name: traduct.nameIta,
                                lvl: level,
                                missing: mancanti,
                                request: richieste,
                                money: monete
                            })
                            /** se carta e traduzione hanno lo stesso id e se la traduzione italiana non è presente */
                        } else if (traduct.id == card.id && traduct.nameIta === "") {
                            /** inserisci l'oggetto carta con nome originale */
                            cards.push({
                                rarity: rarit,
                                name: card.name,
                                lvl: level,
                                missing: mancanti,
                                request: richieste,
                                money: monete
                            })
                        }
                    })
                });
                /** funzine ordinamento crescente basato sulle carte mancanti */
                const ordinamento = (a, b) => {
                    if (a.missing < b.missing) {
                        return -1;
                    } else if (a.missing > b.missing) {
                        return 1;
                    } else {
                        return 0;
                    }
                }
                /** dichiaro noMax contenitore di oggetti ed isolo le carte non maxate altrimenti l'ordinamento non ha effetto per via della stringa MAXATA */
                let noMax = [];
                cards.forEach(card => {
                    if (card.missing != 'MAXATA') {
                        noMax.push({
                            rarity: card.rarity,
                            missing: card.missing,
                            lvl: card.lvl,
                            name: card.name,
                            request: card.request,
                            money: card.money
                        })
                    }
                })
                /** ordina le carte non maxate per richieste crescente */
                noMax = noMax.sort(ordinamento);
                /** primo messaggio con chiave di lettura delle carte mancanti */
                mancanti = ("<=====  CHIARIMENTI  =====>\n"
                    + "- Vengono mostrate massimo 75 carte delle carte totali e le carte maxate non sono listate.\n"
                    + "- Le carte mancanti, richieste e monete necessarie indicano i rispettivi requisiti al raggiungimento del livello massimo della carta.\n"
                    + "- Le carte mancanti a 0 sono solo da upgradare e NON si possono richiedere (NR).\n"
                    + "- Delle leggendarie NON vengono mostrate le richieste necessarie perchè NON si possono richiedere (NR).\n"
                    + "- Il conteggio delle richieste necessarie NON è corretto per i livelli bassi.\n\n");
                rdc.sendMessage(idChat, mancanti);
                /** preparo legenda messaggio carte mancanti */
                mancanti = ("RARITA' => NOME CARTA => CARTE MANCANTI => RICHIESTE => MONETE\n\n");
                try {
                    /** ciclo i primi 75 oggetti altrimenti il messaggio è troppo lungo e Telegram restituisce errore
                     *  ed invio messaggio formattato 
                    **/
                    for (let i = 0; i < 75; i++) mancanti += noMax[i].rarity + '  =>  ' + noMax[i].name + '  =>  ' + noMax[i].missing + '  =>  ' + noMax[i].request + '  =>  ' + noMax[i].money + '\n';
                    rdc.sendMessage(idChat, mancanti);
                } catch (error) {
                    console.log('ERRORE INVIO CARTE MANCANTI' + error.message);
                }
            }
        })
        .catch(err => {
            console.log("ERRORE getMissingCards: " + err.message);
        })
}

exports.istTag = (idChat) => {
    rdc.sendPhoto(idChat, './tag.jpg');
}