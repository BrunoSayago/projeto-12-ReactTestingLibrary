import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Requisito 7 - PokemonDetails', () => {
  test('Teste se as informações do pokémon selecionado são mostradas na tela', () => {
    renderWithRouter(<App />);

    const bugButton = screen.getByRole('button', {
      name: /bug/i,
    });

    userEvent.click(bugButton);

    const moreDetailsButton = screen.getByRole('link', {
      name: /more details/i,
    });

    userEvent.click(moreDetailsButton);

    const titleDetails = screen.getByRole('heading', {
      name: /caterpie details/i,
    });

    expect(titleDetails).toBeInTheDocument();
    expect(moreDetailsButton).not.toBeInTheDocument();

    const summary = screen.getByRole('heading', {
      name: /summary/i,
      level: 2,
    });

    expect(summary).toBeInTheDocument();
    const resumo = screen.getByText(
      /for protection, it releases a horrible stench from the antennae on its head/i,
      { exact: false },
    );

    expect(resumo).toBeInTheDocument();
  });

  test('Teste se existe uma seção com os mapas contendo as localizações', () => {
    renderWithRouter(<App />);

    const bugButton = screen.getByRole('button', {
      name: /bug/i,
    });

    userEvent.click(bugButton);

    const moreDetailsButton = screen.getByRole('link', {
      name: /more details/i,
    });

    userEvent.click(moreDetailsButton);

    const titleMap = screen.getByRole('heading', {
      name: /game locations of caterpie/i,
      level: 2,
    });

    expect(titleMap).toBeInTheDocument();
    const locMaps = screen.getAllByAltText('Caterpie location');
    const QNT_MAPS = 4;
    expect(locMaps.length).toEqual(QNT_MAPS);

    const srcLocations = [
      'https://cdn2.bulbagarden.net/upload/7/76/Johto_Route_30_Map.png',
      'https://cdn2.bulbagarden.net/upload/2/2b/Johto_Route_31_Map.png',
      'https://cdn2.bulbagarden.net/upload/a/ae/Johto_Ilex_Forest_Map.png',
      'https://cdn2.bulbagarden.net/upload/4/4e/Johto_National_Park_Map.png',
    ];

    const map1 = screen.getByText(/johto route 30/i);
    const map2 = screen.getByText(/johto route 31/i);
    const map3 = screen.getByText(/ilex forest/i);
    const map4 = screen.getByText(/johto national park/i);

    expect(map1).toBeInTheDocument();
    expect(map2).toBeInTheDocument();
    expect(map3).toBeInTheDocument();
    expect(map4).toBeInTheDocument();

    for (let index = 0; index < srcLocations.length; index += 1) {
      expect(locMaps[index]).toBeInTheDocument();
      expect(locMaps[index]).toHaveAttribute('src', srcLocations[index]);
    }
  });

  test('Teste se o usuário pode favoritar um pokémon', () => {
    renderWithRouter(<App />);

    const bugButton = screen.getByRole('button', {
      name: /bug/i,
    });

    userEvent.click(bugButton);

    const moreDetailsButton = screen.getByRole('link', {
      name: /more details/i,
    });

    userEvent.click(moreDetailsButton);

    const favBox = screen.getByRole('checkbox', {
      name: /pokémon favoritado\?/i,
    });

    expect(favBox).toBeInTheDocument();

    const modo = favBox.checked;
    userEvent.click(favBox);
    expect(favBox.checked).toEqual(!modo);

    const label = screen.getByLabelText(/pokémon favoritado\?/i);

    expect(label).toBeInTheDocument();
  });
});
