import cockie from "./images/cockie.png";
import { useState } from "react";

const Cookie = ({ cookie, handleValue }) => {
  const [shake, setShake] = useState(false);

  const animate = () => {
    setShake(true);

    setTimeout(() => setShake(false), 300);
  };
  return (
    <div className="cookie-div">
      <h1>Печенек: {Math.round(cookie * 10) / 10}</h1>
      <button
        className={shake ? `shake cookie-button` : "cookie-button"}
        onClick={() => {
          handleValue();
          animate();
        }}
      >
        <img src={cockie} alt="Печенье"/>
      </button>
    </div>
  );
};

export default Cookie;
