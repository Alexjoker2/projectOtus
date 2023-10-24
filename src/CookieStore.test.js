import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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

beforeEach(() => {
    render(
      <CookieStore
        upgrades={upgrades}
        handleAmmount={handleAmmount}
        handleBuyX={handleBuyX}
        buyX={buyX}
      />
    );
  });

  test('renders the title', () => {
    const titleElement = screen.getByText('Приобрести 1');
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the buy-x options', () => {
    const radioButtons = screen.getAllByRole('radio');
    expect(radioButtons).toHaveLength(4);

    fireEvent.click(radioButtons[2]); // Select 5x

    expect(handleBuyX).toHaveBeenCalledWith(5);
  });

  test('renders the upgrades', () => {
    const upgradeItems = screen.getAllByRole('listitem');
    expect(upgradeItems).toHaveLength(upgrades.length);

    fireEvent.click(upgradeItems[0].querySelector('button')); // Click the first upgrade's button

    expect(handleAmmount).toHaveBeenCalledWith('upgrade1', 10, buyX);
  });
});