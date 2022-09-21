import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

test('Requisito 1 - App', () => {
  renderWithRouter(<App />);

  const home = screen.getByRole('link', {
    name: /home/i,
  });

  const about = screen.getByRole('link', {
    name: /about/i,
  });

  const favPok = screen.getByRole('link', {
    name: /favorite pokémons/i,
  });

  expect(home).toBeInTheDocument();
  expect(about).toBeInTheDocument();
  expect(favPok).toBeInTheDocument();

  userEvent.click(home);
  expect(screen.getByRole('heading', {
    name: /encountered pokémons/i,
  })).toBeInTheDocument();

  userEvent.click(about);
  expect(screen.getByRole('heading', {
    name: /about pokédex/i,
  })).toBeInTheDocument();

  userEvent.click(favPok);
  expect(screen.getByRole('heading', {
    name: /favorite pokémons/i,
  })).toBeInTheDocument();
});
