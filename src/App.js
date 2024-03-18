import { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState("");

  function changeNum(event) {
    const input = event.target.value;
    console.log(input.length);

    let cant = 0;
    for (let x = 0; x < input.length; x++) {
      if (input[x] === "0" || input[x] === "1") {
        cant++;
      }
      if (cant === input.length) {
        setNum(input);
      }
    }
  }

  return (
    <div>
      <p>Enter your binary number:</p>
      <input type="text" value={num} onChange={changeNum}></input>
    </div>
  );
}

export default App;
