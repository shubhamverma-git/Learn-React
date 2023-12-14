import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  // const [dec, setDec] = useState(0);

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
    if (counter > 20) {
      alert(`can't be more then twenty`);
    }
  };

  const decValue = () => {
    counter = counter - 1;
    setCounter(counter);
    if (counter < 0) {
      alert(`can't be less then zero`);
    }
  };
  return (
    <div className="App">
      <h1>React Project From Basic</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={decValue}>Decrease Value</button>
    </div>
  );
}

export default App;
