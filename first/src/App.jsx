import { useState } from "react";
import "./App.css";

function App() {
  // let count = 12;

  let [count, hitcounter] = useState(2);

  if (count <= 20) {
    let Addvalue = () => {
      // count = count + 1;
      hitcounter(count + 1);
      // console.log("Clickef", count);
    };
  }

  let Removevalue = () => {
    hitcounter(count - 1);
    // console.log("Clickef", count);
  };

  return (
    <>
      <h1>Hello</h1>
      <button onClick={Addvalue}>Add {count}</button>
      <br />
      <button onClick={Removevalue}>Remove {count}</button>
    </>
  );
}

export default App;
