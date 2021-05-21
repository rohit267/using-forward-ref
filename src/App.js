import React, { useRef } from "react";
import "./styles.css";
import Child from "./child";

export default function App() {
  const childRef = useRef(); // CHILD REF

  function btnHandler(e) {
    console.log(childRef.current); // LOGS THE CHILDS STATE
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Child ref={childRef} /> {/*PASSING THE CHILD REF*/}
      <button onClick={btnHandler}>Submit</button>
    </div>
  );
}
