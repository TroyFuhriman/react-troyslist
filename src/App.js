import React, { useState } from "react";
import Axios from "axios";
import Cars from "./Cars";

class App extends React.Component {
  Hello() {
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

  render() {
    return (
      <div className="text-center container-fluid">
        <Cars />
      </div>
    );
  }
}

export default App;
