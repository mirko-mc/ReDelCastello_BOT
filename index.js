process.env.NTBA_FIX_319 = 1;
const { getMissingCards, getTest, getBauli, getTrad, istTag, } = require('./ax');
const { rdc } = require('./dic');

try {
    rdc.onText(/\/start/, msg => {
        rdc.sendMessage(msg.from.id, "Ciao Stolto e grazie di avermi avviato. Spero potrò esserti utile.\n"
            + "Questo BOT è ad uso esclusivo del Clan Supremo RE DEL CASTELLO. Se non ne fai parte non usarlo altrimenti il tuo dispositivo esploderà.\n\n"
            + "Per le istruzioni su come usare i comandi premi => /istruzioni");
    })
} catch (error) {
    console.log('---------- ERRORE /START ----------\n' + error.message);
}

try {
    rdc.onText(/\/istruzioni/, msg => {
        rdc.sendMessage(msg.from.id, "We stolto, ti elenco i comandi disponibili:\n"
            + "- /mancanti + tag senza cancelletto\n"
            + "(es. /mancanti 8V80QUP) il BOT elencherà quali sono le carte che puoi upgradare più velocemente elencando quante carte ti restano da collezionare, quante richieste dovrai fare per collezionarle e quante monete totali dovrai spendere per upgradare fino al livello 13\n"
            + "- /bauli + tag senza cancelletto\n"
            + "(es. /bauli 8V80QUP) il BOT elencherà i prossimi bauli che otterrai dalle battaglie\n"
            + "- /tag\nse non sai come dove prendere il tuo tag, te lo spiego\n");
    })
} catch (error) {
    console.log('---------- ERRORE /ISTRUZIONI ----------\n' + error.message);
}

try {
    rdc.onText(/\/tag/, msg => {
        istTag(msg.from.id);
    })
} catch (error) {
    console.log('---------- ERRORE /TAG ----------\n' + error.message);
}

try {
    rdc.onText(/\/mancanti (.+)/, (msg, match) => {
        getMissingCards(msg.from.id, match[1].toUpperCase());
    })
} catch (error) {
    console.log('---------- ERRORE /MANCANTI TAG ----------\n' + error.message);
}

try {
    rdc.onText(/\/trad/, msg => {
        getTrad();
    })
} catch (error) {
    console.log('---------- ERRORE /TRAD ----------\n' + error.message);
}

try {
    rdc.onText(/\/bauli (.+)/, (msg, match) => {
        getBauli(msg.from.id, match[1].toUpperCase());
    })
} catch (error) {
    console.log('---------- ERRORE /BAULI TAG ----------\n' + error.message);
}
/*
try {
    rdc.onText(/\/mancanti/, msg => {
        rdc.sendMessage(msg.from.id, "Stolto forse non ami leggere e detto da me può sembrare una presa per il culo ma... ti consiglio di premere /start e LEGGERE");
    })
} catch (error) {
    console.log('---------- ERRORE /MANCANTI ----------\n' + error.message);
}

try {
    rdc.onText(/\/bauli/, msg => {
        rdc.sendMessage(msg.from.id, "Stolto forse non ami leggere e detto da me può sembrare una presa per il culo ma... ti consiglio di premere /start e LEGGERE");
    })
} catch (error) {
    console.log('---------- ERRORE /BAULI ----------\n' + error.message);
}
*/