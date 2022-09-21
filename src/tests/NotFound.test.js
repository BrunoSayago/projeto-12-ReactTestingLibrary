import { screen, act } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Requisito 4 - NotFound', () => {
  test('Testando a mensagem e a imagem de erro', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/semrotadefinida');
    });

    const msg = screen.getByRole('heading', {
      name: /page requested not found/i,
    });

    const img = screen.getByRole('img', {
      name: /pikachu crying because the page requested was not found/i,
    });

    expect(msg).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
