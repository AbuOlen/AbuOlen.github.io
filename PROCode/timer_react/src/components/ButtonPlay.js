import React from "react";
import "./Button.css";

const ButtonPlay = ({ click, titleButton }) => {
  return (
    <input className="button_play" type="button" onClick={click} value={titleButton} />
  );
};

export default ButtonPlay;
