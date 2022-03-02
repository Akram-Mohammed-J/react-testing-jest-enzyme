import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  return (
    <div data-test="component-app" className="App">
      {error && (
        <p data-test="error-message">
          you can't decrease the count less than zero
        </p>
      )}
      <h1 data-test="counter-display">
        The counter is currently&nbsp;
        <span data-test="count">{count}</span>
      </h1>
      <button
        data-test="increment-button"
        onClick={() => {
          setError((prevState) => {
            if (prevState) {
              return false;
            }
          });
          setCount(count + 1);
        }}
      >
        Increment counter
      </button>
      <button
        data-test="decrement-button"
        onClick={() => {
          if (count !== 0) {
            setCount(count - 1);
          } else {
            setError(true);
          }
        }}
      >
        Decrement counter
      </button>
    </div>
  );
}

export default App;
