import CookieStore from "./CookieStore";
import Cookie from "./Cookie";
import { useState, useEffect, useRef } from "react";
import "./styling.css";
import clickvalue from "./images/clickvalue.png";
import granny from "./images/granny.png";
import grampa from "./images/grampa.png";
import cookiefactory from "./images/cookiefactory.png";


function Homepages() {
  const [upgrades, setUpgrades] = useState([
    {
      id: "Усилитель ",
      ammount: 0,
      price: 1,
      type: "perClick",
      icon: clickvalue,
    },
    {
      id: "Бабушка Люда",
      ammount: 0,
      price: 100,
      type: "perSec",
      cookiesPerSec: 1,
      icon: granny,
    },
    {
      id: "Дедушка Борис",
      ammount: 0,
      price: 500,
      type: "perSec",
      cookiesPerSec: 5,
      icon: grampa,
    },
    {
      id: "Завод Печенек",
      ammount: 0,
      price: 100000,
      type: "perSec",
      cookiesPerSec: 1000,
      icon: cookiefactory,
    },
  ]);

  useEffect(() => {
    const storedUpgrades = localStorage.getItem("upgrades");
    if (storedUpgrades) {
      setUpgrades(JSON.parse(storedUpgrades));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("upgrades", JSON.stringify(upgrades));
  }, [upgrades]);

  const [buyX, setBuyX] = useState(1);

  const handleBuyX = (x) => {
    localStorage.setItem("buyX", x);
    setBuyX(x);
  };
  useEffect(() => {
    const storedBuyX = localStorage.getItem("buyX");
    if (storedBuyX) {
      setBuyX(parseInt(storedBuyX));
    }
  }, []);

  const handleAmmount = (id, price, x) => {
    let listUpgrades = upgrades.map((upgrade) =>
      upgrade.id === id
        ? {
            ...upgrade,
            ammount: upgrade.ammount,
            price: upgrade.price,
          }
        : upgrade
    );
    let cookies = cookie;
    for (let i = 0; i < x; i++) {
      if (cookies >= price) {
        listUpgrades = listUpgrades.map((upgrade) =>
          upgrade.id === id
            ? {
                ...upgrade,
                ammount: upgrade.ammount + 1,
                price: upgrade.price * 1.2,
              }
            : upgrade
        );
        cookies = cookies - price;
        price = price * 1.2;
      }
    }
    setUpgrades(listUpgrades);
    setCookie(cookies);
  };

  // Печеньки по клику
  const [cookie, setCookie] = useState(0);
  useEffect(() => {
    const storedCookie = localStorage.getItem("cookie");
    if (storedCookie) {
      setCookie(parseInt(storedCookie));
    }
  }, []);

  let cookiesPerClick = 1 + 0.1 * upgrades[0].ammount;

  const handleValue = () => {
    setCookie(cookie + cookiesPerClick);
  };

  useEffect(() => {
    localStorage.setItem("cookie", cookie);
  }, [cookie]);

  // Печеньки в секунду

  const cookiesPerSecRef = useRef(0);

  useEffect(() => {
    let cookiesPerSec = 0;
    for (let i = 0; i < upgrades.length; i++) {
      if (upgrades[i].type === "perSec") {
        cookiesPerSec =
          cookiesPerSec + upgrades[i].cookiesPerSec * upgrades[i].ammount;
      }
      cookiesPerSecRef.current = cookiesPerSec;
    }
  }, [upgrades]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCookie(
        (previousValue) => previousValue + cookiesPerSecRef.current / 10
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-div">
      <Cookie cookie={cookie} handleValue={handleValue} />
      <CookieStore
        upgrades={upgrades}
        handleAmmount={handleAmmount}
        handleBuyX={handleBuyX}
        buyX={buyX}
      />
    </div>
  );
}

export default Homepages;

