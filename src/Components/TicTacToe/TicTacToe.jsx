import React, { useRef, useState } from "react";
import "./TicTacToe.css";
import circle_icon from "../Assets/circle.png";
import cross_icon from "../Assets/cross.png";

let data = ["", "", "", "", "", "", "", "", ""];
const TicTacToe = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const titleRef = useRef(null);

  const checkWinner = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      return data[0];
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      return data[3];
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      return data[6];
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      return data[1];
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      return data[2];
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      return data[0];
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      return data[0];
    } else if (data[6] === data[4] && data[4] === data[2] && data[2] !== "") {
      return data[6];
    }
    return null;
  };

  const handleClick = (e, num) => {
    if (lock || data[num] !== "") return;

    if (count % 2 === 0) {
      e.target.innerHTML = `<img src="${cross_icon}" alt="X" />`;
      data[num] = "x";
    } else {
      e.target.innerHTML = `<img src="${circle_icon}" alt="O" />`;
      data[num] = "o";
    }

    e.target.style.border = "2px solid red";
    setCount(count + 1);

    const winner = checkWinner();
    if (winner) {
      setLock(true);
      titleRef.current.innerHTML = `Congratulations: <img src=${
        winner === "x" ? cross_icon : circle_icon
      } alt="winner" /> wins!`;
    }
  };

  return (
    <div className="container">
      <h1 className="title" ref={titleRef}>
        Tic Tac Toe Game in <span>React </span>
      </h1>
      <div className="board">
        <div className="row1">
          <div className="boxes" onClick={(e) => handleClick(e, 0)}></div>
          <div className="boxes" onClick={(e) => handleClick(e, 1)}></div>
          <div className="boxes" onClick={(e) => handleClick(e, 2)}></div>
        </div>
        <div className="row2">
          <div className="boxes" onClick={(e) => handleClick(e, 3)}></div>
          <div className="boxes" onClick={(e) => handleClick(e, 4)}></div>
          <div className="boxes" onClick={(e) => handleClick(e, 5)}></div>
        </div>
        <div className="row3">
          <div className="boxes" onClick={(e) => handleClick(e, 6)}></div>
          <div className="boxes" onClick={(e) => handleClick(e, 7)}></div>
          <div className="boxes" onClick={(e) => handleClick(e, 8)}></div>
        </div>
      </div>
      <div className="reset">
        <button className="reset" onClick={() => window.location.reload()}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;
