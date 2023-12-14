import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState("");

  // useCallback is used to memoize the function in the cache between re-renders
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0987654321";
    if (characters) str += "`!@#$%^&*(),.<>'|[]{}+=";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, characters, setPassword]);

  //useEffect to run the function whenever the page render
  useEffect(() => {
    passwordGenerator();
  }, [length, number, characters, passwordGenerator]);

  //useRef used to take reference. Here we are using to take reference of the input field data
  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 28); // to select only 20 letters
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="App">
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-82  text-orange-500 bg-gray-800">
        <h1 className="text-center text-white">Password Generator</h1>
        <div className="flex shadow mt-10 rounded-lg overflow-hidden mb-4">
          <input
            value={password}
            className="outline-none w-full py-1 px-3 text-black"
            type="text"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={number}
              className="cursor-pointer"
              id="numberInput"
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label htmlFor="">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={characters}
              className="cursor-pointer"
              id="numberInput"
              onChange={() => {
                setCharacters((prev) => !prev);
              }}
            />
            <label htmlFor="">Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
