import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Homepages from './Homepages';

test('Проверка наличия элементов', () => {
  // Рендерим компонент Homepages

  render(
    <Router>
    <Homepages />
    </Router>
  );
  // Проверяем наличие элементов с помощью селекторов классов
  expect(screen.getByText('Печенек: 0')).toBeInTheDocument();
  expect(screen.getByAltText('Печенье')).toBeInTheDocument();
  expect(screen.getByText('Приобрести 1')).toBeInTheDocument();
  expect(screen.getByText('Усилитель')).toBeInTheDocument();
  expect(screen.getByText('Бабушка Люда')).toBeInTheDocument();
  expect(screen.getByText('Дедушка Борис')).toBeInTheDocument();
  expect(screen.getByText('Завод Печенек')).toBeInTheDocument();
});
