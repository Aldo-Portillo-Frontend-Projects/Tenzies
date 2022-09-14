import React from 'react';
import './App.css';
import Die from './Die';

function App() {


  const [dice, setDice] = React.useState(allNewDice())

  function randomDie() {
    return Math.floor(Math.random() * 6 + 1);
  }



  function allNewDice() {
    let newDiceArr = [];

    for (let i = 0; i < 10; i++){
      newDiceArr.push({value: randomDie(), isHeld: false,})
    }

    return newDiceArr
  }

  const diceRender = dice.map(die => {
    console.log(die.isHeld)
    return <Die value={die.value} isHeld={die.isHeld}/>
  })

  function rollDice() {
    setDice(allNewDice)
  }

  return (
    <div className="game-board">
      <div className='dice-container'>
        {diceRender}
      </div>
      <button onClick={rollDice}>Roll Dice</button>
    </div>
  );
}

export default App;
