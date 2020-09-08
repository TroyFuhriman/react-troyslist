import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App bg-secondary">
      <p className="text-light">You clicked {count} times</p>
      <button
        className="btn btn-success btn-outline-dark"
        onClick={() => setCount(count + 1)}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;
