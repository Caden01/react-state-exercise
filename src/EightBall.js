import React, { useState } from "react";
import "./EightBall.css";
import Answers from "./answer.json";
import { choice } from "./random";

const EightBall = ({ answers = Answers }) => {
  const [answer, setAnswer] = useState({
    msg: "Think of a question",
    color: "black",
  });

  const handleClick = (evt) => {
    setAnswer(choice(answers));
  };
  return (
    <div
      className="EightBall"
      onClick={handleClick}
      style={{ backgroundColor: answer.color }}
    >
      <b>{answer.msg}</b>
    </div>
  );
};
export default EightBall;
