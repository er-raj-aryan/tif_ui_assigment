import React from "react";
import style from "@/styles/Button.module.css";
function Button(props) {
  return (
    <button
      onClick={(e) => props.handleClick()}
      className={`${style.button} ${props.filled ? style.filled : ""} ${
        props.outline 
          ? style.outline
          : ""
      }`}
    >
      {props.label}
    </button>
  );
}

export default Button;
