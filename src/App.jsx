import { useState, useEffect, useCallback } from 'react';
import { wordsList } from './data/words';

import './App.css'

import StartScreen from './components/StartScreen/StartScreen';
import Game from './components/Game/Game';
import GameOver from './components/GameOver/GameOver';

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const startGame = () => {
    setGameStage(stages[1].name);
  }

  return (
    <><div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game />}
      {gameStage === "end" && <GameOver />}
    </div>
    </>
  )
}

export default App
