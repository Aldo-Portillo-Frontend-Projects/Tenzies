import React from 'react';
import './App.css';
import Die from './Die';

function App() {

/**
 * Challenge: Add conditional styling to the Die component
 * so that if it's held (isHeld === true), its background color
 * changes to a light green (#59E391)
 * 
 * Remember: currently the Die component has no way of knowing
 * if it's "held" or not.
 */

  const [dice, setDice] = React.useState(allNewDice())

  function randomDie() {
    return Math.floor(Math.random() * 6 + 1);
  }

  const diceRender = dice.map(die => {
    return <Die value={die.value} />
  })

  function allNewDice() {
    let newDiceArr = [];

    for (let i = 0; i < 10; i++){
      newDiceArr.push({value: randomDie(), isHeld: false,})
    }

    return newDiceArr
  }

  function rollDice() {
    setDice(allNewDice)
  }

  return (
    <div className="game-board">
      {diceRender}
      <button onClick={rollDice}>Roll Dice</button>
    </div>
  );
}

export default App;
