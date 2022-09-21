import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FavoritePokemons from '../pages/FavoritePokemons';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Requisito 3 - FavoritePokemons', () => {
  test('Teste se é exibida na tela a mensagem No favorite pokemon found', () => {
    renderWithRouter(<FavoritePokemons />);
    const msg = screen.getByText(/no favorite pokemon found/i);
    expect(msg).toBeInTheDocument();
  });

  test('Teste se são exibidos todos os cards de pokémons favoritados.', () => {
    renderWithRouter(<App />);
    const detailButton = screen.getByRole('link', {
      name: /more details/i,
    });
    const poisonButton = screen.getByRole('button', {
      name: /poison/i,
    });

    userEvent.click(poisonButton);
    userEvent.click(detailButton);

    const checkboxFav = screen.getByRole('checkbox', {
      name: /pokémon favoritado\?/i,
    });

    userEvent.click(checkboxFav);

    const favPokButton = screen.getByRole('link', {
      name: /favorite pokémons/i,
    });

    userEvent.click(favPokButton);

    const pokName = screen.getByText(/ekans/i);
    const pokImage = screen.getByRole('img', {
      name: /ekans sprite/i,
    });
    const pokWeight = screen.getByText(/average weight: 6\.9 kg/i);

    expect(pokName).toBeInTheDocument();
    expect(pokImage).toBeInTheDocument();
    expect(pokWeight).toBeInTheDocument();
  });
});
