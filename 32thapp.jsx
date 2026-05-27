import "./App.css";
import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const resetCounter = () => {
    setCount(0);
  };

  return (
    <div className="container">

      <div className="counter-box">

        <h1>React Counter Application</h1>

        <h2>{count}</h2>

        <div className="buttons">

          <button onClick={increment}>
            Increment (+)
          </button>

          <button onClick={decrement}>
            Decrement (-)
          </button>

        </div>

        <button className="reset-btn" onClick={resetCounter}>
          Reset
        </button>

        <div className="footer">
          <p>Name: Tameesh Gupta</p>
          <p>Section: CSE 26</p>
          <p>Roll No: 2503201001217</p>
        </div>

      </div>

    </div>
  );
}

export default App;