import React, { useState } from "react";
import { Link } from "react-router-dom";

const Counter = (props: {}) => {
  let [counter, setCounter] = useState(0);

  function incrementCounter() {
    counter++;
    setCounter(counter);
  }
  function decrementCounter() {
    counter--;
    setCounter(counter);
  }

  return (
    <div>
      <p>{counter}</p>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
      <br />
      <br />
      <Link to="/">Home</Link>
    </div>
  );
};

export default Counter;
