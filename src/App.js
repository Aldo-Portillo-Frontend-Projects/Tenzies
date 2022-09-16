import React from 'react';
import './App.css';
import Die from './Die';
import { nanoid } from 'nanoid'



function App() {


  const [dice, setDice] = React.useState(allNewDice())

  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(()=> {
    console.log("Dice state changed")
  }, [dice])

  function allNewDice() {
    let newDiceArr = [];

    for (let i = 0; i < 10; i++){
      newDiceArr.push({
        value: randomDie(), 
        isHeld: false, 
        id: nanoid()
      })
    }

    return newDiceArr
  }

  function randomDie() {
    return Math.floor(Math.random() * 6 + 1);
  }

  function rollDice() {

    setDice(oldDice => oldDice.map(die => {
      return die.isHeld ? die : {...die, value: randomDie(), id: nanoid()}
    }))
  }


  function holdDice(id) {
    //Use set dice to get our previous array and map through it
    setDice(oldDice => oldDice.map(die => {
        //return a new object that changes the isHeld property of the object in new array
        return die.id === id ? 
            {...die, isHeld: !die.isHeld} :
            //If not, return regular array
            die
    }))
}

  

  const diceRender = dice.map(die => {
    //console.log(die.isHeld)
    return <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={()=> holdDice(die.id)}/>
  })

  //console.log(dice)





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
