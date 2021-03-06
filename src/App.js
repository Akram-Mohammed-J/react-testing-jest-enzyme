import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>
        The counter is currently&nbsp;
        <span>{count}</span>
      </h1>
      <button onClick={() => setCount(count + 1)}>Increment counter</button>
    </div>
  );
}

export default App;
