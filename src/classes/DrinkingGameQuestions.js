//crime = no tagg
//crime+ = cp
//shots = s
//active crime = a
//Jail = j
//352 må legge inn kategori

const drinkingGameQuestions = [
    {
        text: "{player} skåler med den personen som har hatt klamydia sist.",
        tagg: ["c",]
    },
    {
        text: "{player} skaler med de som har laget spillet.",
        tagg: ["c",]
    },
    {
        text: "{player} skåler med de 2 personene som har et øye for hverandre.",
        tagg: ["c",]
    },
    {
        text: "{player} skåler med det motsatte kjønn og avslutter med et kompliment.",
        tagg: ["c",]
    },
    {
        text: "{player} skåler med personen de har et øye for.",
        tagg: ["c",]
    },
    {
        text: "{player} skåler med den kåteste.",
        tagg: ["cp"]
    },
    {
        text: "{player} skåler med den som lager de sykeste lydene i senga.",
        tagg: ["cp"]
    },
    {
        text: "Adrian skåler med den fineste personen fra Sør-Norge.",
        tagg: ["cp"]
    },
    {
        text: "Edvard skåler med den fineste personen fra Nord-Norge.",
        tagg: ["c",]
    },
    {
        text: "Alle single skåler.",
        tagg: ["c",]
    },
    {
        text: "Alle simper skåler. (Spesielt du {player})",
        tagg: ["c",]
    },
    {
        text: "{player} må løpe en runde rundt kollektivet og må drikke en slurk for hvert 2. sekund brukt. Forstått? Ok, klar, ferdig, gå!",
        tagg: ["c","a"]
    },
    {
        text: "{player}, {player}, {player} og {player} må ta en shotteski.",
        tagg: ["s","a","j"]
    },
    {
        text: "{player} tar en slurk for hver bioperson i rommet. Hvis det er ingen må du ta 5 slurker.",
        tagg: ["cp"]
    },
    {
        text: "{player} og {player} er drinking buddies resten av spillet (skull emoji).",
        tagg: ["cp"]
    },
    {
        text: "Alle som ikke bor her må ta {3-4} slurker.",
        tagg: ["c",]
    },
    {
        text: "Stirrekonkurranse mellom {player} og {player}. Taperen må ta {4-5} slurker.",
        tagg: ["c","a"]
    },
    {
        text: "Pekelek: Pek på den som gjør crime i kveld.",
        tagg: ["cp"]
    },
    {
        text: "Pekelek: Pek på Halvor.",
        tagg: ["j"]
    },
    {
        text: "Pekelek: Pek på den som spyr oftest.",
        tagg: ["c",]
    },
    {
        text: "Pekelek: Pek på boomeren i rommet.",
        tagg: ["c",]
    },
    {
        text: "{player} peker ut den som får barn først. Vedkommende drikker vekk sorgen med {2-4} slurker.",
        tagg: ["c",]
    },
    {
        text: "Pekelek: Pek på den som kommer raskest.",
        tagg: ["cp"]
    },
    {
        text: "Pekelek: Hvem kommer raskest … til å gjøre noen gravid.",
        tagg: ["c",]
    },
    {
        text: "Jentene skåler!",
        tagg: ["c",]
    },
    {
        text: "Guttene skåler!",
        tagg: ["c",]
    },
    {
        text: "Lagkonkurranse: {player} og {player}, mot {player} og {player}. Trillebår en runde rundt kollektivet. Vinneren får gi ut 2 shots.",
        tagg: ["cp","a","s"]
    },
    {
        text: "Shot in a box: {player} mot {player}. En person får sprit, den andre vann. Resten peker på den de tror tok shotten. Bommer man er det {4-6} straffeslurker.",
        tagg: ["cp","a","s"]
    },
    {
        text: "Alle fra Østlandet drikker {2-4} slurker.",
        tagg: ["c",]
    },
    {
        text: "{player} trekker en Sveinung, og drikker antall slurker som på kortet. Bildekort er 10 slurker. {player} bestemmer om A er 1 eller 10.",
        tagg: ["c",]
    },
    {
        text: "{player} nevner så mange øl-merker de kan på 20 sekunder. {player} drikker like mange slurker som merker nevnt.", //kategori
        tagg: ["c",]
    },
    {
        text: "{player} nevner så mange bilmerker de kan på 20 sekunder. {player} drikker like mange slurker som merker nevnt.", //kategori
        tagg: ["c",]
    },
    {
        text: "{player} nevner så mange land på Z de kan på 20 sekunder. {player} drikker like mange slurker som land nevnt. Hvis man ikke klarer å nevne flere enn 3 land blir dette 5 straffeslurker.",
        tagg: ["cp"]
    },
    {
        text: "Alle som bruker briller drikker {3-5} slurker.",
        tagg: ["c",]
    },
    {
        text: "Alle som ikke bruker briller drikker {3-5} smug slurker.",
        tagg: ["cp"]
    },
    {
        text: "Alle som liker katter over hunder drikker {4-5} slurker.",
        tagg: ["c",]
    },
    {
        text: "Dem som har vært inne på HalvorHub før drikker {3-5} slurker.",
        tagg: ["c",]
    },
    {
        text: "{player} drikker en slurk for hvert år han/hun har studert i Trondheim.",
        tagg: ["c",]
    },
    {
        text: "Pekelek: Pek på den som har blitt kastet ut flest ganger fra utesteder.",
        tagg: ["c",]
    },
    {
        text: "Pekelek: Pek på den som har hatt trekant.",
        tagg: ["cp"]
    },
    {
        text: "Pekelek: Pek på den som har gjort flest crimes.",
        tagg: ["c",]
    },
    {
        text: "Pekelek: Pek på den som blir gravid eller gjør noen gravid først.",
        tagg: ["c",]
    },
    {
        text: "Pekelek: Pek på den som spyr i kveld.",
        tagg: ["c",]
    },
    {
        text: "Pekelek: Pek på den som minner deg mest om Magic Mike.",
        tagg: ["cp"]
    },
    {
        text: "{player} må fortelle om den verste plassen han/hun har spydd.",
        tagg: ["c",]
    },
    {
        text: "Alle som har sendt en flørtende melding til feil person tar {3-5} slurker.",
        tagg: ["c",]
    },
    {
        text: "Alle som har løyet om sin alder for å komme inn på en bar tar {3-5} slurker.",
        tagg: ["c",]
    },
    {
        text: "{player} må ta 3 slurker for hver 10. armheving {player} klarer",
        tagg: ["c","a"]
    },
    {
        text: "Drikk {3-5} hvis du har sovet i sengen/reisesengen til Halvor.",
        tagg: ["cp"]
    },
    {
        text: "Den som leser dette spørsmålet drikker 3 slurker.",
        tagg: ["c",]
    },
    {
        text: "Alle som har rotet med vennen/venninnen til {player}.",
        tagg: ["cp"]
    },
    {
        text: "Betting: {player} mot {player}: 90-graderen. Alle kan vedde i mot en av spillerene. Vinner spilleren kan vedkommende dele ut like mange slurker som de veddet i mot. Taper man drikker man antallet slurker.",
        tagg: ["c","a"]
    },
    {
        text: "Vi vet alle at {player} aldri sier nei til et ligg. Pek på den i rommet du synest er mest digg.",
        tagg: ["cp"]
    },
    {
        text: "Hva er {6-12}*{6-12}? (drikke antall slurker du bommet med).",
        tagg: ["c",]
    },
    {
        text: "Vi er jævla lei av at {player} og {player} snakker i lag. Hver gang dere prater i lag tar dere {3-6} slurker. (Resten av spillet).",
        tagg: ["cp"]
    },
    {
        text: "{player} vs {player}: Kategori bilmerker. Nevn annenhver gang frem til en ikke kommer opp med flere, eller nevner noe som allerede er nevnt.", 
        tagg: ["c",]
    },
    {
        text: "Pekelek: Hvem her kunne kapret et fly med et uhell?",
        tagg: ["c",]
    },
    {
        text: "{player} ringer og spør om du kan være med han/hun å gjemme et lik, hva gjør du? drikk {3-5}.",
        tagg: ["j"]
    },
    {
        text: "{player} sin x ringer og spør om du er down to fuck, drikk hvis du hadde grepet sjansen.",
        tagg: ["j"]
    },
    {
        text: "Pekelek: Hvem har en sexdukke.",
        tagg: ["j"]
    },
    {
        text: "Betting: {player} mot {player}. Stirreleken. Alle kan vedde slurker.",
        tagg: ["c","a"]
    },
    {
        text: "(Ikke les denne høyt): start gris, den siste må drikke 5 slurker.",
        tagg: ["c",]
    },
    {
        text: "Alle drikker likt antall slurker som fiskeburgere de har spist de siste 7 dagene.",
        tagg: ["c",]
    },
    {
        text: "Alle i rommet drikker likt antall slurker som styrken på brillene sine.",
        tagg: ["cp"]
    },
    {
        text: "{player}, er du keen på å ta med deg noen hjem ikveld? Drikk.",
        tagg: ["cp"]
    },
    {
        text: "{player} må drikke antall slurker som det er nasjonaliteter i rommet.",
        tagg: ["j"]
    },
    {
        text: "{player} er drikkepartner med {player} resten av spillet.",
        tagg: ["c",]
    },
    {
        text: "De som vett hva en boltekoker er, må drikke.",
        tagg: ["cp"]
    },
    {
        text: "Pekelek: Hvem ville du minst ha med på familiebesøk.",
        tagg: ["cp"]
    },
    {
        text: "Hver er minst diskre.",
        tagg: ["c",]
    },
    {
        text: "Pekelek: hvem er mest vims.",
        tagg: ["c",]
    },
    {
        text: "Hvem er største snaphoe?",
        tagg: ["c",]
    },
    {
        text: "{player} skål med den som har rarest dialekt.",
        tagg: ["c",]
    },
    {
        text: "{player} mot {player} håndbak, tapperen tar et shot.",
        tagg: ["c","a"]
    },
    {
        text: "{player} mot {player} race rundt kollektivet, taperen tar et shot.",
        tagg: ["cp","a","s"]
    },
    {
        text: "{player} skål med den du ville hatt med deg på en øde øye.",
        tagg: ["c",]
    },
    {
        text: "Pekelek: Drikk antall pek du får.",
        tagg: ["c",]
    },
    {
        text: "Pekelek: pek på den du ikke vil ha som forsvarer i en rettsak.",
        tagg: ["cp"]
    },
    {
        text: "Pekelek: pek på den du ikke vil ha som tannlege.",
        tagg: ["cp"]
    },
    {
        text: "Pekelek: Hvem kunne {player} nakenbadet med etter et nach?",
        tagg: ["j"]
    },
    {
        text: "{player}: Høyre eller venstre. Hvem hadde du kysset?",
        tagg: ["j"]
    },
    {
        text: "{player}, hvem i dette rommet kunne kommet unna med mord?",
        tagg: ["cp"]
    },
    {
        text: "{player} vi vet du er en pussy ass bitch, drikk {1-10} slurker.",
        tagg: ["cp"]
    },
    {
        text: "{player} velg 2 personer å ta {3-5} slurker med.",
        tagg: ["c",]
    },
    {
        text: "{player} drikk så mange slurker som det er folk her.",
        tagg: ["cp"]
    },
    {
        text: "{player} vis en syk sexstilling med en valgfri person // crazy.",
        tagg: ["j"]
    },
    {
        text: "Alle drikker 5 slurker.",
        tagg: ["c",]
    },
    {
        text: "{player} hvem studerer det mest krevende? Skål for det.",
        tagg: ["c",]
    },
    {
        text: "{player}, {player}, {player} og {player}. Legg mobilene deres på bordet. Første som får varsel må ta en shot.",
        tagg: ["cp","a","s"]
    },
    {
        text: "Sett på «Rattlin' Bog».",
        tagg: ["c",]
    },
    {
        text: "{player}, hvem er morsomst?",
        tagg: ["c",]
    },
    {
        text: "{player}, hvorfor er du her? Hold en god appell på hvorfor du skal få bli her.",
        tagg: ["cp"]
    },
    {
        text: "{player} må sende en snap til deres nummer 1. {player} bestemmer hva snappen skal være.",
        tagg: ["cp"]
    },
    {
        text: "{player}, dersom du har vært på rommet til Halvor ta {3-5} slurker.",
        tagg: ["cp"]
    },
    {
        text: "{player}, dersom du så {player} løpe naken ute, hva ville du gjort? Drikk vekk bildet i hodet. ({2-4} slurker)",
        tagg: ["cp"]
    },
    {
        text: "{player} velg som må være med på shotteski, den du velger må velge neste.",
        tagg: ["cp","a","s"]
    },
    {
        text: "Gulvet er lava, sistemann må ta {6-10} slurker.",
        tagg: ["c","a"]
    },
    {
        text: "Den gjennomsnittlige penisen er 13.12cm (source: Mathiesen), drikk {2-3} hvis du mener du har over gjennomsnittet. Mathiesen måler alle som har drukket.",
        tagg: ["j"]
    },
    {
        text: "Den gjennomsnittlige BH-størrelsen i Norge er 85D (source: Mathiesen), drikk viss du har større enn gjennomsnittet.",
        tagg: ["j"]
    },
    {
        text: "Den gjennomsnitlige høyden i Norge er 179.75 cm, drikk om du er høyere enn det.",
        tagg: ["c",]
    },
    {
        text: "{player} velg en å ta en shot med.",
        tagg: ["cp","s"]
    },
    {
        text: "{player} bonski med personen tvers over deg.",
        tagg: ["cp"]
    },
    {
        text: "{player} si din beste party sang, sett den på!",
        tagg: ["c",]
    },
    {
        text: "{player}, er livet ditt bedre enn {player}? Ta {2-4} slurker hvis du mener det.",
        tagg: ["j"]
    },
    {
        text: "Kategori: {player} velg et tema og start.",
        tagg: ["c",]
    },
    {
        text: "{player} trenger en klem. {player} hjelper med dette. Alle andre skåler for vennskapet.",
        tagg: ["cp"]
    },
    {
        text: "Jeg har aldri hoppet i fallskjerm. 🚁",
        tagg: ["c",]
    },
    {
        text: "Jeg har aldri løyet for en politimann. 👮",
        tagg: ["c",]
    },
    {
        text: "Jeg har aldri ligget med en kjendis. 🤩",
        tagg: ["c",]
    },
    {
        text: "Jeg har aldri hatt en trekant. 🙅",
        tagg: ["cp"]
    },
    {
        text: "Jeg har aldri snoket i noen andre sine private meldinger. 🤓",
        tagg: ["c",]
    },
    {
        text: "Jeg har aldri drukket så mye at jeg besvimte. 🥴",
        tagg: ["c",]
    },
    {
        text: "Jeg har aldri spyttet i noen annens drink. 🤢",
        tagg: ["cp"]
    },
    {
        text: "Jeg har aldri tatt på meg noens undertøy uten at de visste om det. 😇",
        tagg: ["cp"]
    },
    {
        text: "Jeg har aldri fått en tatovering i beruset tilstand. 🎨",
        tagg: ["c",]
    },
    {
        text: "Jeg har aldri hatt sex på en fest. 😉",
        tagg: ["cp"]
    },
    {
        text: "Jeg har aldri blitt kastet ut av en butikk. 🛑",
        tagg: ["c",]
    },
    {
        text: "Jeg har aldri kastet opp på noen. 🤮",
        tagg: ["cp"]
    },
    {
        text: "Jeg har aldri skadet meg selv mens jeg var full. 😵",
        tagg: ["c",]
    },
    {
        text: "Jeg har aldri tatt med meg noe hjem fra en bar. 🍸",
        tagg: ["cp"]
    },
    {
        text: "Jeg har aldri kysset noen jeg bare hadde kjent i noen timer. 😗",
        tagg: ["cp"]
    },
    {
        text: "Jeg har aldri blitt tatt på fersken i å sjekke noen opp. 🤫",
        tagg: ["cp"]
    },
    {
        text: "Jeg har aldri stjålet en venns partner. 🤬",
        tagg: ["cp"]
    },
    {
        text: "Jeg har aldri blitt kastet ut av et hotell. 🏨",
        tagg: ["cp"]
    },
    {
        text: "Jeg har aldri hatt sex på et fly. ✈️",
        tagg: ["cp"]
    },
    {
        text: "Jeg har aldri blitt utestengt fra et nettforum. 💬",
        tagg: ["c",]
    },
    {
        text: "Jeg har aldri løyet om min seksuelle erfaring. 🤡",
        tagg: ["cp"]
    },
    {
        text: "Jeg har aldri skulket skolen. 👨‍🎓",
        tagg: ["c",]
    },
    {
        text: "Jeg har aldri vært i en situasjon der jeg trodde jeg skulle dø. 😱",
        tagg: ["c",]
    },
    {
        text: "Jeg har aldri hatt sex i en heis. 🚇",
        tagg: ["cp"]
    },
    {
        text: "Jeg har aldri løyet om inntekten min. 💰",
        tagg: ["c",]
    },
    {
        text: "Jeg har aldri stjålet noe fra et hotellrom. 🛎",
        tagg: ["c",]
    },
    {
        text: "Jeg har aldri blitt forlatt på en dårlig date. 😥",
        tagg: ["cp"]
    },
    {
        text: "Jeg har aldri prøvd å fake en dialekt. 🤔",
        tagg: ["c",]
    },
    {
        text: "Jeg har aldri snoket i partnerens mobiltelefon. 📱",
        tagg: ["c",]
    },
    {
        text: "Jeg har aldri blitt dumpet via en tekstmelding. 💔",
        tagg: ["c",]
    },
    {
        text: "Jeg har aldri fyllekjørt med sykkel. 🚲",
        tagg: ["c",]
    },
    {
        text: "Jeg har aldri kysset noen jeg ikke var tiltrukket av. 😘",
        tagg: ["cp"]
    },
    {
        text: "Jeg har aldri blitt kastet ut av et casino. 🎰",
        tagg: ["c",]
    },
    {
        text: "Jeg har aldri glemt navnet på noen jeg lå med. 🤷",
        tagg: ["cp"]
    },
    {
        text: "Jeg har aldri lurt noen til å tro at jeg kunne et annet språk. 🤔",
        tagg: ["c",]
    },
    {
        text: "Jeg har aldri brukt noen andres tannbørste. 🦷",
        tagg: ["c",]
    },
    {
        text: "Jeg har aldri prøvd å kaste opp for å føle meg bedre. 🤢",
        tagg: ["c",]
    },
    {
        text: "Jeg har aldri blitt tatt på fersken i å snike på offentlig transport. 🚌",
        tagg: ["c",]
    },
    {
        text: "Jeg har aldri stjålet noe fra en restaurant. 🍴",
        tagg: ["c",]
    },
    {
        text: "Jeg har aldri kysset en eks etter at vi slo opp. 💋",
        tagg: ["cp"]
    },
    {
        text: "Jeg har aldri blitt oppdaget naken. 😅",
        tagg: ["cp"]
    },
    {
        text: "Jeg har aldri brukt en falsk ID. 👥",
        tagg: ["c",]
    },
    {
        text: "Jeg har aldri mistet mobilen min på en fest. 😕",
        tagg: ["c",]
    },
    {
        text: "Jeg har aldri mistet noen på et utested. 😿",
        tagg: ["c",]
    },
    {
        text: "Jeg har aldri hatt sex på et sted med risiko for å bli oppdaget. 😉",
        tagg: ["j"]
    },
    {
        text: "Jeg har aldri blitt kastet ut av et bibliotek. 📓",
        tagg: ["c",]
    },
    {
        text: "Jeg har aldri spist mat ut av søpla. 🍎",
        tagg: ["c",]
    },
    {
        text: "Jeg har aldri fått en blackout.",
        tagg: ["c",]
    },
    {
        text: "Jeg har aldri prøvd å skjule en tatovering.",
        tagg: ["c",]
    },
    {
        text: "Jeg har aldri prøvd å kjøre bil mens jeg var for full.",
        tagg: ["cp"]
    },
    {
        text: "Jeg har aldri stjålet noe fra en venns hus.",
        tagg: ["c",]
    },
    {
        text: "Jeg har aldri prøvd å fake en signatur.",
        tagg: ["c",]
    },
    {
        text: "Jeg har aldri blitt kastet ut av en taxi.",
        tagg: ["c",]
    },
    {
        text: "Jeg har aldri hatt sex på en første date.",
        tagg: ["cp"]
    },
    {
        text: "Jeg har aldri faket en orgasme.",
        tagg: ["cp"]
    },
    {
        text: "Jeg har aldri blitt tatt i å se på porno.",
        tagg: ["j"]
    },
    {
        text: "Jeg har aldri glemt mitt eget telefonnummer.",
        tagg: ["c",]
    },
    {
        text: "Jeg har aldri prøvd å stjele en gatestolpe.",
        tagg: ["cp"]
    },
    {
        text: "Jeg har aldri blitt fanget i å stalke noen på sosiale medier.",
        tagg: ["cp"]
    },
    {
        text: "{player}, hva er ditt go-to sexleketøy? Alle skåler for dette!",
        tagg: ["j"]
    },
    {
        text: "{player}, ta en bodyshot fra valgfri person.",
        tagg: ["j"]
    },
    {
        text: "Jeg har aldri pult noen jeg ikke husker navnet til.",
        tagg: ["cp"]
    },
    {
        text: "Jeg har aldri hatt sex med en prostituert",
        tagg: ["j"]
    },
    {
        text: "Ok, red flag eller dealbreaker. Partneren din oppfører seg som {player}.",
        tagg: ["cp"]
    },
    {
        text: "Ok, red flag eller dealbreaker. Partneren din har hatt sex med {player}.",
        tagg: ["j"]
    },
    {
        text: "Ok, red flag eller dealbreaker. Partneren din vil ha trekant sammen med {player}.",
        tagg: ["j"]
    },
    {
        text: "Ok, red flag eller dealbreaker. Partneren din ser på porno isteden for å ligge med deg.",
        tagg: ["j"]
    },
    {
        text: "Ok, red flag eller dealbreaker. Partneren din kjenner {player}.",
        tagg: ["j"]
    },
    {
        text: "Ok, red flag eller dealbreaker. Partneren din ser på 2. verdenskrigs-dokuentarer.",
        tagg: ["c"]
    },
    {
        text: "Ok, red flag eller dealbreaker. Partneren din studerer på Dragvoll",
        tagg: ["c"]
    },
    {
        text: "Ok, red flag eller dealbreaker. Partneren din har sovet i reisesengen til Halvor.",
        tagg: ["cp"]
    },
    {
        text: "Ok, red flag eller dealbreaker. Partneren din din får regelmessig middagsbesøk av {player}.",
        tagg: ["cp"]
    },
    {
        text: "Ok, red flag eller dealbreaker. Partneren din er flagget av PST.",
        tagg: ["cp"]
    },
    {
        text: "Ok, red flag eller dealbreaker. Partneren din kan løse rubiks kube.",
        tagg: ["c"]
    },
    {
        text: "{player}, hvem av {player} og {player} tror du er best i senga? Fuckboyen/hoen tar {3-5} slurker.",
        tagg: ["j"]
    },
    {
        text: "Alle på vorset skal winge {player} i dag. Skål for dette!",
        tagg: ["j"]
    },
    {
        text: "Pekelek: Hvem deltar aktivt på BDSM-fester.",
        tagg: ["j"]
    }


    
]

export default drinkingGameQuestions;