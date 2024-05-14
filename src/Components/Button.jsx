import React from "react";

const Button = ({ btnText, btnStyle }) => {
  return <button className={btnStyle}>{btnText}</button>;
};

export default Button;
