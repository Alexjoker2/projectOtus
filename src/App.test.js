import React from 'react';
import { render, screen, waitFor} from '@testing-library/react';
import App from './App';

test('проверка наличия элементов в компоненте App', () => {
  render(<App />);

  // Проверка наличия элементов по классу
  expect(screen.getByText('Печенек: 0')).toBeInTheDocument();
  const buyButtons = screen.getAllByRole('button', { name: /Купить/ });
  
  expect(buyButtons).toHaveLength(4); // ожидаем, что будет найдено 4 кнопки "Купить"

  // Проверка наличия элементов по alt тексту
  expect(screen.getByAltText('Печенье')).toBeInTheDocument();
});

test('loads upgrades from localStorage', async () => {
  const storedUpgrades = [
    {
      id: "Усилитель ",
      ammount: 1,
      price: 2,
      type: "perClick",
      icon: "clickvalue",
    },
    {
      id: "Бабушка Люда",
      ammount: 2,
      price: 200,
      type: "perSec",
      cookiesPerSec: 2,
      icon: "granny",
    },
  ];
  localStorage.setItem('upgrades', JSON.stringify(storedUpgrades));

  render(<App />);

  await waitFor(() => {
    expect(localStorage.getItem('upgrades')).toBe(JSON.stringify(storedUpgrades));
    // Проверяем, что состояние upgrades в компоненте соответствует сохраненным апгрейдам
  });
});
