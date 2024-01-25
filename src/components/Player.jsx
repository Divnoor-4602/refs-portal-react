import { useState, useRef } from "react";

export default function Player() {
  const [enteredName, setEnteredName] = useState();
  //  create a ref value to get the user input player name
  //  unlike state when a ref changes the component does not re render
  const playerName = useRef();

  function handleClick() {
    setEnteredName(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {enteredName ?? "unknown entitiy"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
