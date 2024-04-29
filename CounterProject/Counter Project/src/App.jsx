import { useState } from 'react';
import './App.css'

function App() {

  // let counter= 0;

  let [counter, setCounter] = useState(0)

  const handleAddCount= () => {
    if(counter >= 20){
      window.alert("Oops! Maximum value reached");
      setCounter(0);
      return;
    }
    // counter+=1;
    setCounter(counter+1);
    // console.log(counter);
  }

  const handleRemoveCount= () => {
    if(counter<=0){
      window.alert("Oops! Minimum value reached");
      return;
    }
    // counter-=1;
    setCounter(counter-1);
    // console.log(counter);
  }

  return (
    <>
      <h1>COUNTER PROJECT</h1>
      <h3>The Count value is: {counter}</h3>
      <button onClick={handleAddCount}>Add Count</button>
      <button onClick={handleRemoveCount}>Remove Count</button>
      <footer>Counter: {counter}</footer>
    </>
  )
}

export default App
