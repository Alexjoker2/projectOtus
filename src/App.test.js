import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

test('renders header links', () => {
  render(
    <Router>
      <App />
    </Router>
  );

  const homeLink = screen.getByText('Главная');
  const aboutLink = screen.getByText('О игре');

  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
});
