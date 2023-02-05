import React, {useState} from 'react';
import './App.css';
 
// write a function that
const changeColor = (key: number) => {
  const root = document.documentElement.getElementsByClassName('cell')[key];
  root.style.backgroundColor = 'red';
}

function App() {
  const [clicked, setClicked] = useState(0);
  return (
    <div className="App">
      BINARY DECESION TREE
      <div className="grid">
        {
          Array(10000).fill(0).map((_, i) => <Cell key={i} number={i}/>)
        }
      </div>
    </div>
  );
}

function Cell (number: {number: number}) {
  const coor = {
    x: number.number % 100,
    y: Math.round(100-(number.number / 100))
  }
  return (
    <div className="cell"
      onClick={() => {
        changeColor(number.number)
        console.log(number.number)
        console.log(coor)
      }}
    >
      <div className="cell__content">
        <div className="cell__content__text"> 
        </div>
      </div>
    </div>
  )
}
export default App;

