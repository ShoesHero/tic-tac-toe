import React from "react";

export default function App() {
  return (
    <div>
      <Board />
    </div>
  );
}

export function Board() {
  return (
    <>
      <div className="board-row">
        <Square value="1"/>
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

function Square({ value }) {
  function handleClick(){
    console.log("clicked");
  }


  return <button className="square" onClick={handleClick}>{value}</button>;
}
