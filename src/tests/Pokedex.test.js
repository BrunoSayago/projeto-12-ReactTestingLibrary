import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Requisito 5 - Pokedex', () => {
  test('Teste se a página contém um heading h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);
    const h2 = screen.getByRole('heading', {
      name: /encountered pokémons/i,
    });
    expect(h2).toBeInTheDocument();
  });

  test('Testa filtros', () => {
    renderWithRouter(<App />);

    const filtros = screen.getAllByTestId('pokemon-type-button');

    const elementos = filtros.map((elemento) => {
      const chave = Object.keys(elemento)[0];
      return elemento[chave].return.key;
    });

    const elementos2 = ['Electric',
      'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];

    expect(elementos).toEqual(elementos2);

    for (let index = 0; index < elementos.length; index += 1) {
      expect(screen.getByRole('button', {
        name: `${elementos[index]}`,
      })).toBeInTheDocument();
    }
  });

  test('Testa prox button', () => {
    renderWithRouter(<App />);

    const psychicButton = screen.getByRole('button', {
      name: /psychic/i,
    });

    userEvent.click(psychicButton);

    const firstPokeName = screen.getByText(/alakazam/i);

    expect(firstPokeName).toBeInTheDocument();

    const proxButton = screen.getByRole('button', {
      name: /próximo pokémon/i,
    });

    userEvent.click(proxButton);

    const secondPokeName = screen.getByText(/mew/i);

    expect(secondPokeName).toBeInTheDocument();

    userEvent.click(proxButton);

    expect(firstPokeName).toBeInTheDocument();
  });

  test('Testa all button', () => {
    renderWithRouter(<App />);

    const allButton = screen.getByRole('button', {
      name: /all/i,
    });

    expect(allButton).toBeInTheDocument();
    expect(allButton.innerHTML).toBe('All');

    const poisonButton = screen.getByRole('button', {
      name: /poison/i,
    });

    const proxButton = screen.getByRole('button', {
      name: /próximo pokémon/i,
    });

    expect(proxButton).not.toBeDisabled();

    userEvent.click(poisonButton);

    expect(proxButton).toBeDisabled();

    userEvent.click(allButton);

    expect(proxButton).not.toBeDisabled();
  });
});
