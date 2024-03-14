import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteForever from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
import DrinkingGame from '../classes/DrinkingGame';
import RegisterPlayerField from '../components/RegisterPlayerField';
import SelectionMenu from '../components/SelectionMenu';

const Crime = () => {
  const [players, setPlayers] = useState([]);
  const [gameStarted, setGameStarted] = useState(JSON.parse(localStorage.getItem('gameStarted')) || false);
  const [gameState, setGameState] = useState(JSON.parse(localStorage.getItem('gameState')) || null);
  const [game, setGame] = useState(null);

  const [exclusiveSelected, setExclusiveSelected] = useState('Crime');
  const [multipleSelected, setMultipleSelected] = useState([]);

  useEffect(() => {
    const savedGame = JSON.parse(localStorage.getItem('game'));
    if (savedGame) {
      const loadedGame = new DrinkingGame(
        savedGame.players,
        savedGame.level, 
        savedGame.filters,
        savedGame.questions,
        savedGame.playerIndex,
        savedGame.questionIndex,
        savedGame.playerAssignments,
        savedGame.selectedNumbers    
        );
      loadedGame.loadState(savedGame); // You need to implement loadState method in DrinkingGame class
      setGame(loadedGame);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('gameStarted', JSON.stringify(gameStarted));
    localStorage.setItem('gameState', JSON.stringify(gameState));
    if (game) {
      console.log(game);
      localStorage.setItem('game', JSON.stringify(game.saveState())); // You need to implement saveState method in DrinkingGame class
    }
  }, [gameStarted, gameState, game]);

  const exitGame = () => {
    // Reset game state
    setGameStarted(false);
    setGameState(null);
    setGame(null);
    // Clear saved game state from localStorage
    localStorage.removeItem('gameStarted');
    localStorage.removeItem('gameState');
    localStorage.removeItem('game');
  };

  function startGame() {
    const newGame = new DrinkingGame(players,exclusiveSelected,multipleSelected);
    setGame(newGame);
    setGameStarted(true);
    const intialQuestion = newGame.getIntialQuestion();
    setGameState(intialQuestion);
  }


  function newQuestion() {
    if (game) {
      const next = game.nextQuestion();
      setGameState(next);
    }
  }

  function previousQuestion() {
    if (game) {
      const previous = game.previousQuestion();
      setGameState(previous);
    }
  }


  return (
    <div className="App-body">
      <h1>Crime</h1>
      {gameStarted ? (
        <>
          <p>{gameState}</p>
          <div className="buttonContainer">
            <Button variant="contained" size="large" onClick={previousQuestion}>Forrige</Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="contained" size="large" onClick={newQuestion}>Neste</Button>
            <br />
            <Button variant="contained" size="large" onClick={() => exitGame()}>Exit Game</Button>
          </div>
        </>
      ) : (
        <>
          <SelectionMenu
            exclusiveSelected={exclusiveSelected}
            setExclusiveSelected={setExclusiveSelected}
            multipleSelected={multipleSelected}
            setMultipleSelected={setMultipleSelected}
          />
          <RegisterPlayerField players={players} setPlayers={setPlayers} startGame={startGame} playerLowerLimit={4} />
        </>
      )}
    </div>

    
  );
};

export default Crime;
