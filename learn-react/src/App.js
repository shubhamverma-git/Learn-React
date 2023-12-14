import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";

function App() {
  let [counter, setCounter] = useState(0);
  // const [dec, setDec] = useState(0);

  let myObj = {
    Name: "Mianain",
    Age: 35,
    City: "None",
  };

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
      <h1 className="bg-green-500 text-orange p-4">React Project From Basic</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={decValue}>Decrease Value</button>
      <Card country="India" position="Developer" name="He" btnText="Visit Me" />
      <Card country="none" position="Manager" name="She" someObj={myObj} />
      {console.log()}
      <Card country="one" position="Senior" name="We" btnText="Know More" />
    </div>
  );
}

export default App;
