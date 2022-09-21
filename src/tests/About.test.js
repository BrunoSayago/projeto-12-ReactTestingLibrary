import { screen } from '@testing-library/react';
import About from '../pages/About';
import renderWithRouter from './renderWithRouter';

test('Requisito 2 - About', () => {
  renderWithRouter(<About />);

  const info1 = screen.getByText(
    /this application simulates a pokédex/i,
    { exact: false },
  );

  const info2 = screen.getByText(
    /One can filter Pokémons by type, and see more details for each one of them/i,
    { exact: false },
  );

  expect(info1).toBeInTheDocument();
  expect(info2).toBeInTheDocument();

  const title = screen.getByRole('heading', {
    name: /about pokédex/i,
    level: 2,
  });

  expect(title).toBeInTheDocument();

  const image = screen.getByRole('img', {
    name: /pokédex/i,
  });

  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});
