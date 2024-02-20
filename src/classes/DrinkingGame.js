const drinkingGameQuestions = [
    "{player} skåler med den personen som har hatt klamydia sist.",
    "{player} skaler med de som har laget spillet.",
    "{player} skåler med de 2 personene som har et øye for hverandre.",
    "{player} skåler med det motsatte kjønn og avslutter med et kompliment.",
    "{player} skåler med personen de har et øye for.",
    "{player} skåler med den kåteste.",
    "{player} skåler med den som lager de sykeste lydene i senga.",
    "Adrian skåler med den fineste personen fra sør-Norge.",
    "Edvard skåler med den fineste personen fra nord-Norge.",
    "Alle single skåler.",
    "Alle simper skåler. (Spesielt du {player})",
    "{player} må løpe en runde rundt kollektivet og må drikke en slurk for hvert 5. sekund brukt. Forstått? Ok, klar, ferdig, gå!",
    "{player}, {player}, {player} og {player} tar en shotteski.",
    "{player} tar en slurk for hver bioperson i rommet. Hvis det er ingen må du ta 5 slurker.",
    "{player} og {player} er drinking buddies resten av spillet. (skull emoji)",
    "Alle som ikke bor her må ta {3-4} slurker.",
    "Stirrekonkurranse mellom {player} og {player}. Taperen må ta {4-5} slurker.",
    "Pekelek: Pek på den som gjør crime i kveld.",
    "Pekelek: Pek på Halvor.",
    "Pekelek: Pek på den som spyr oftest.",
    "Pekelek: Pek på boomeren i rommet.",
    "{player} peker ut den som får barn først. Vedkommende drikker vekk sorgen med {2-4} slurker.",
    "Pekelek: Pek på hvem som kommer raskest.",
    "Pekelek: Hvem kommer raskest … til å gjøre noen gravid.",
    "Jentene skåler!",
    "Guttene skåler!",
    "Lagkonkuranse: {player} og {player}, mot {player} og {player}. Trillebår en runde rundt kollektivet. Vinneren får gi ut 2 shots.",
    "Shot in a box: {player} mot {player}. En person får sprit, den andre vann. Resten peker på den de tror tok shotten. Bommer man er det {4-6} straffeslurker.",
    "Alle fra Østlandet drikker {2-4} slurker.",
    "{player} trekker en Sveinung, og drikker antall slurker som på kortet. Bildekort er 10 slurker. {player} bestemmer om A er 1 eller 10.",
    "{player} nevner så mange øl-merker de kan på 20 sekunder. {player} drikker like mange slurker som merker nevnt.",
    "{player} nevner så mange bilmerker de kan på 20 sekunder. {player} drikker like mange slurker som merker nevnt.",
    "{player} nevner så mange land på Z de kan på 20 sekunder. {player} drikker like mange slurker som land nevnt. Hvis man ikke klarer å nevne flere enn 3 land blir dette 5 straffeslurker.",
    "Alle som bruker briller drikker {3-5} slurker.",
    "Alle som ikke bruker briller drikker {3-5} smug slurker.",
    "Alle som liker katter over hunder drikker {5} slurker.",
    "Dem som har vært inne på HalvorHub før drikker {3-5} slurker.",
    "{player} drikker en slurk for hvert år han/hun har studert i Trondheim.",
    "Pekelek: Pek på den som har blitt kastet ut flest ganger fra utesteder.",
    "Pekelek: Pek på den som har hatt trekant.",
    "Pekelek: Pek på den som har gjort flest crimes.",
    "Pekelek: Pek på den som blir gravid eller gjør noen gravid først.",
  "Pekelek: Pek på den som spyr i kveld.",
  "Pekelek: Pek på den som minner deg mest om Magic Mike.",
  "{player} må fortelle om den verste plassen han/hun har spydd."]
  



  class DrinkGame {
    constructor(players) {
        this.players = this.shuffleArray(players);
        this.questions = this.shuffleArray(drinkingGameQuestions);
        this.player_index = 0;
        this.question_index = 0;
        this.playerAssignments = [];
        this.selectedNumbers = {};
        this.assignPlayersToQuestions();
    }

    shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    countPlaceholdersAndRanges = (str) => {
        // Regular expressions to match placeholders and number-number patterns
        const playerRegex = /{player}/g;
        const rangeRegex = /{(\d+-\d+)}/g;
      
        // Count the occurrences of {player}
        const playerCount = (str.match(playerRegex) || []).length;
      
        // Count the occurrences of {number-number}
        const rangeCount = (str.match(rangeRegex) || []).length;
      
        return { playerCount, rangeCount };
    }

    replacePlaceholders = (str, players,playerIndex,numberOfPlayers) => {
        for (let i = 0; i < numberOfPlayers; i++) {
            str = str.replace(/{player}/, players[(playerIndex + i) % players.length]);
        }
        return str;
    }  

    assignPlayersToQuestions() {
        for (let i = 0; i < this.questions.length; i++) {
            const question = this.questions[i];
            const { playerCount } = this.countPlaceholdersAndRanges(question);
            const assignedPlayers = [];
            for (let j = 0; j < playerCount; j++) {
                assignedPlayers.push(this.players[(this.player_index + j) % this.players.length]);
            }
            this.playerAssignments.push(assignedPlayers);
            this.player_index += playerCount;
        }
    }

    replaceNumberRangesWithRandomInts = (question, questionIndex) => {
        // Adjust this method to use stored numbers
        const rangeRegex = /{(\d+)-(\d+)}/g;
    
        return question.replace(rangeRegex, (_, min, max) => {
            if (!this.selectedNumbers[questionIndex]) {
                this.selectedNumbers[questionIndex] = {};
            }
    
            const key = `${min}-${max}`;
            if (!this.selectedNumbers[questionIndex][key]) {
                // If no number selected for this range, generate one
                this.selectedNumbers[questionIndex][key] = Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1)) + parseInt(min);
            }
    
            return this.selectedNumbers[questionIndex][key].toString();
        });
    }

    getIntialQuestion() {
        let question = this.questions[this.question_index];
        let { playerCount, rangeCount } = this.countPlaceholdersAndRanges(question);
        const assignedPlayers = this.playerAssignments[this.question_index];
        question = this.replacePlaceholders(question, assignedPlayers, 0, playerCount);
        if (rangeCount > 0) {
            question = this.replaceNumberRangesWithRandomInts(question, this.question_index);
        }
        return question;
    }

    nextQuestion() {
        if (this.question_index < this.questions.length) {
            this.question_index++;
        }
        if (this.question_index >= this.questions.length) {
            return "Game over! Halvor vant! Velg 3 personer som skal ta en shotteski med deg";
        }
        let question = this.questions[this.question_index];
        let { playerCount, rangeCount } = this.countPlaceholdersAndRanges(question);
        const assignedPlayers = this.playerAssignments[this.question_index];
        question = this.replacePlaceholders(question, assignedPlayers, 0, playerCount);

        if (rangeCount > 0) {
            question = this.replaceNumberRangesWithRandomInts(question);
        }

        return question;
    }

    previousQuestion() {
        console.log(this.question_index);
        if (this.question_index > 0) {
            console.log(this.question_index);
            this.question_index--;
        }

        let question = this.questions[this.question_index];
        let { playerCount, rangeCount } = this.countPlaceholdersAndRanges(question);
        const assignedPlayers = this.playerAssignments[this.question_index];
        question = this.replacePlaceholders(question, assignedPlayers, 0, playerCount);

        if (rangeCount > 0) {
            question = this.replaceNumberRangesWithRandomInts(question);
        }

        return question;


    }
    
}

    
export default DrinkGame;
