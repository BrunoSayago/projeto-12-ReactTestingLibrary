import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  const obj = render(
    <Router history={ history }>
      { component }
    </Router>,
  );

  return { history, ...obj };
};

export default renderWithRouter;
