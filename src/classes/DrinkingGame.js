
import drinkingGameQuestions from './DrinkingGameQuestions.js';


  class DrinkGame {
    constructor(players,level,filters) {
        this.players = this.shuffleArray(players);
        const filteredQuestions = this.filterAllQuestions(drinkingGameQuestions,level,filters);
        this.questions = this.shuffleArray(filteredQuestions);
        this.player_index = 0;
        this.question_index = 0;
        this.playerAssignments = [];
        this.selectedNumbers = {};
        this.assignPlayersToQuestions();
    }

    filterAllQuestions = (questions,level,filters) => {
        const levels = {"Crime": "c", "Crime+":"cp","Jail": "j"}
        const dlcs = {"Activity":"a","Shots":"s"}
        const includedLevels = Object.values(levels).slice(0, Object.keys(levels).indexOf(level) + 1);
        let includedDlcs = []

        if (filters.length !== 0) {
            includedDlcs = filters.map(filter => dlcs[filter])
        }
        const dlcValue = Object.values(dlcs);
        const notIncludedDlcs = dlcValue.filter(level => !includedDlcs.includes(level));

        questions = this.filterDlcs(questions,notIncludedDlcs);
        questions = this.getQuestionsLevel(questions,includedLevels);
        console.log(questions)
        console.log(includedLevels)
        //TODO: filter questions based on level and filters
        return questions.map(question => question.text);
    }

    filterDlcs = (questions,dlcs) => {
        dlcs.forEach(dlc => {
            questions = questions.filter(question => {
                return !question.tagg.includes(dlc);
            })
    });
        return questions;
    }

    getQuestionsLevel = (questions, levels) => {
        questions = questions.filter(question => {
            return levels.some(level => {
                return question.tagg.includes(level)
            });
        });
        return questions;
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

    saveState() {
        return {
          players: this.players,
          questionIndex: this.question_index,
        };
      }
    
      loadState(state) {
        this.players = state.players;
        this.question_index = state.questionIndex;
      }
    
}

    
export default DrinkGame;
