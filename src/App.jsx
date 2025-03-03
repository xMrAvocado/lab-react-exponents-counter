import "./App.css";
import Counter from "./components/Counter";
/*import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";*/
import Exponent from "./components/Exponent";

import { useState } from "react";

function App () {

  const [count, setCount] = useState(0);
  const [exponent, setExponent] = useState(1);
  const [string, setString] = useState(`* ${count}`);

  const decrement = () => {
    setCount((prevCount) => prevCount - 1)
    setString((prevString) => prevString - `* ${count}`)
  };
  /*const increment = () => setCount((prevCount) => prevCount + 1);*/
  const increment = () => {
    setCount((prevCount) => prevCount + 1)
    setString((prevString) => prevString + `* ${count}`)
  }
  const decrementExp = () => setExponent((prevCount) => prevCount - 1);
  const incrementExp = () => setExponent((prevCount) => prevCount + 1);
  /*const decrementStr = () => setString((prevString) => prevString - `* ${count}`);
  const incrementStr = () => setString((prevString) => prevString + `* ${count}`);*/


  return (
    <div className="App">
      <h2><em>Counter</em></h2>
  
      <Counter 
      count = {count}
      exponent = {exponent}
      decrement = {decrement}
      increment = {increment}
      decrementExp = {decrementExp}
      incrementExp = {incrementExp}
      /*decrementStr = {decrementStr}
      incrementStr = {incrementStr}*//>

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
      <Exponent 
        count = {count}
        exponent = {exponent}
        string= {string}/>
      {/*  <ExponentTwo 
        count = {count}/>
        <ExponentThree 
        count = {count}/>
        <ExponentFour 
        count = {count}/>
        <ExponentFive 
        count = {count}/>
        <ExponentSix 
        count = {count}/>*/}
      </div>
    </div>
  );
}

export default App;
