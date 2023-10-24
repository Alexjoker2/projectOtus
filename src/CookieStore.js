import React, { useState, useEffect } from 'react';


const CookieStore = ({ upgrades, handleAmmount, handleBuyX, buyX }) => {
  const [selectedBuyX, setSelectedBuyX] = useState(1);
  const handleRadioChange = (x) => {
    handleBuyX(x);
    setSelectedBuyX(x);
    };
    
    useEffect(() => {
    const storedSelectedBuyX = localStorage.getItem('selectedBuyX');
    if (storedSelectedBuyX) {
    setSelectedBuyX(parseInt(storedSelectedBuyX));
    }
    }, []);
    
    useEffect(() => {
    localStorage.setItem('selectedBuyX', selectedBuyX.toString());
    }, [selectedBuyX]);
  return (
    <div className="cookie-store">
      <h1 className="store-title">Приобрести {buyX}</h1>
      <div className="buy-x-bar">
        <ul>
          <div>
            <input type="radio" name="buyx" checked={selectedBuyX === 1} onChange={() => handleRadioChange(1)} /> 1x
            <input type="radio" name="buyx" checked={selectedBuyX === 2} onChange={() => handleRadioChange(2)} /> 2x
            <input type="radio" name="buyx" checked={selectedBuyX === 5} onChange={() => handleRadioChange(5)} /> 5x
            <input type="radio" name="buyx" checked={selectedBuyX === 999} onChange={() => handleRadioChange(999)} /> 999
            Max
          </div>
        </ul>
      </div>
      <div>
        <ul>
          {upgrades.map((upgrade) => (
            <li key={upgrade.id}>
              <div className="store-item-box">
                {upgrade.id}
                <button
                  onClick={() => {
                    handleAmmount(upgrade.id, upgrade.price, buyX);
                  }}
                >
                  Купить
                </button>
                <img src={upgrade.icon} alt="Улучшить" />
                <p>Стоимость: {Math.floor(upgrade.price * 10) / 10}</p>
                <p>
                  Куплено: {upgrade.ammount} {upgrade.id}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


export default CookieStore;
