import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("white");

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
    <div style={{ backgroundColor: color, height: "100vh" }} className="App">
      <h1 className="bg-green-500 text-orange p-4">React Project From Basic</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={decValue}>Decrease Value</button>
      {/* <Card country="India" position="Developer" name="He" btnText="Visit Me" /> */}
      {/* <Card country="none" position="Manager" name="She" someObj={myObj} /> */}
      {/* <Card country="one" position="Senior" name="We" btnText="Know More" /> */}

      <div className="container">
        {btnName.map((i, idx) => (
          <div key={idx} className="btn_container">
            <button
              className="btn"
              onClick={() => setColor(i.chclr)}
              style={{ backgroundColor: i.bgclr, color: i.clr }}
            >
              {i.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

const btnName = [
  { bgclr: "Red", chclr: "Red", name: "Red" },
  { bgclr: "Green", chclr: "Green", name: "Green" },
  { bgclr: "Olive", chclr: "Olive", name: "Olive" },
  { bgclr: "Gray", chclr: "Gray", name: "Gray" },
  { bgclr: "Yellow", clr: " black", chclr: "Yellow", name: "Yellow" },
  { bgclr: "Pink", chclr: "Pink", name: "Pink" },
  { bgclr: "Purple", chclr: "Purple", name: "Purple" },
  { bgclr: "Lavender", clr: " black", chclr: "Lavender", name: "Lavender" },
  { bgclr: "White", clr: " black", chclr: "White", name: "White" },
  { bgclr: "Black", chclr: "Black", name: "Black" },
  { bgclr: "Orange", chclr: "Orange", name: "Orange" },
];
