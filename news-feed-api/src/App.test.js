import React from 'react';
import { render, waitForDomChange, cleanup, fireEvent } from '@testing-library/react';
import App from './App';
import {Provider}  from './context/NewsFeedContext';
import getNewsFeed from './service/APINewsFeed';
import { dataHeadlines, dataEverything  } from './dataForMock';

afterEach(cleanup);

afterEach(() => {
  getNewsFeed.mockReset();
});

jest.mock('./service/APINewsFeed');

test('Testando o primeiro mock', async () => {
  getNewsFeed.mockResolvedValue(dataHeadlines);

  const { getByText } = render(
    <Provider>
      <App />
    </Provider>);

  expect(getByText(/headlines/i)).toBeInTheDocument();
  expect(getByText(/everything/i)).toBeInTheDocument();

  await waitForDomChange();

  dataHeadlines.articles.forEach((art) => {
    expect(getByText(art.title)).toBeInTheDocument();
  });
});

// const clear = () => afterEach(() => cleanup());

// clear()

// test('Testando a pagina principal', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/News Feed!!!/i);
//   expect(linkElement).toBeInTheDocument();
//   clear()
// });

// test('Mais testes da pagina principal', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/proxima atualização →/i);
//   expect(linkElement).toBeInTheDocument();
//   clear()
// });

