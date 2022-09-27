import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Requisito 6 - Pokemon', () => {
  test('Teste se é renderizado um card com as informações de determinado pokémon', () => {
    renderWithRouter(<App />);

    const bugButton = screen.getByRole('button', {
      name: /bug/i,
    });

    userEvent.click(bugButton);

    const pokeName = screen.getByTestId('pokemon-name');
    const pokeType = screen.getByTestId('pokemon-type');
    const pokeWeight = screen.getByTestId('pokemon-weight');

    expect(pokeName).toBeInTheDocument();
    expect(pokeName).toHaveTextContent('Caterpie');
    expect(pokeType).toBeInTheDocument();
    expect(pokeType).toHaveTextContent('Bug');
    expect(pokeWeight).toBeInTheDocument();
    expect(pokeWeight).toHaveTextContent('Average weight: 2.9 kg');

    const pokeImage = screen.getByRole('img', {
      name: /caterpie sprite/i,
    });

    expect(pokeImage).toBeInTheDocument();
    expect(pokeImage).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/8/83/Spr_5b_010.png');
    expect(pokeImage).toHaveAttribute('alt', 'Caterpie sprite');
  });

  test('Teste se o card do contém um link de navegação', () => {
    const { history } = renderWithRouter(<App />);
    const bugButton = screen.getByRole('button', {
      name: /bug/i,
    });

    userEvent.click(bugButton);

    const link = screen.getByRole('link', {
      name: /more details/i,
    });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/pokemons/10');

    userEvent.click(link);

    expect(history.location.pathname).toEqual('/pokemons/10');
    // console.log(history);

    const favButton = screen.getByRole('checkbox', {
      name: /pokémon favoritado\?/i,
    });

    if (favButton.checked === false) {
      userEvent.click(favButton);
    }

    const star = screen.getByRole('img', {
      name: /caterpie is marked as favorite/i,
    });

    expect(star).toBeInTheDocument();
    expect(star).toHaveAttribute('src', '/star-icon.svg');
    expect(star).toHaveAttribute('alt', 'Caterpie is marked as favorite');
  });
});
