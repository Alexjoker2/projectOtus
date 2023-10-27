import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CookieStore from './CookieStore';

describe('CookieStore', () => {
  const upgrades = [
    { id: 'upgrade1', price: 10, ammount: 0, icon: 'upgrade1.png' },
    { id: 'upgrade2', price: 20, ammount: 0, icon: 'upgrade2.png' },
    // ...
  ];
  const handleAmmount = jest.fn();
  const handleBuyX = jest.fn();
  const buyX = 1;

  render(
    <Router>
    <CookieStore
      upgrades={upgrades}
      handleAmmount={handleAmmount}
      handleBuyX={handleBuyX}
      buyX={buyX}
      
    />
    </Router>
  );

  test('renders the title', () => {
    const titleElement = screen.getByText('Приобрести 1');
    expect(titleElement).toBeInTheDocument();
  });

  upgrades.forEach((upgrade) => {
    const upgradeLink = screen.getByText(upgrade.id);
    expect(upgradeLink).toBeInTheDocument();
    expect(upgradeLink.getAttribute('href')).toBe(`/cookie-clicker-project/upgrade/${upgrade.id}`);

    const priceText = screen.getByText(`Стоимость: ${Math.floor(upgrade.price * 10) / 10}`);
    expect(priceText).toBeInTheDocument();

    const ammountText = screen.getByText(`Куплено: ${upgrade.ammount} ${upgrade.id}`);
    expect(ammountText).toBeInTheDocument();
  });

});