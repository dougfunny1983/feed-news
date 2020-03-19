import React from 'react';
import {
  render,
  waitForDomChange,
  cleanup,
  fireEvent,
} from '@testing-library/react';
import App from './App';
import { Provider } from './context/NewsFeedContext';
import getNewsFeed from './service/APINewsFeed';
import { dataHeadlines, dataEverything } from './dataForMock';

afterEach(cleanup);

afterEach(() => {
  getNewsFeed.mockReset();
});

jest.mock('./service/APINewsFeed');

test('Testando o primeiro mock, headlines', async () => {
  getNewsFeed.mockResolvedValue(dataHeadlines);

  const { getByText } = render(
    <Provider>
      <App />
    </Provider>
  );

  expect(getByText(/headlines/i)).toBeInTheDocument();
  expect(getByText(/everything/i)).toBeInTheDocument();

  await waitForDomChange();
  
  dataHeadlines.articles.forEach((art) => {
    expect(getByText(art.title)).toBeInTheDocument();
  });
});

test('Testando o everything', async () => {
  getNewsFeed.mockResolvedValue(dataEverything);

  const { getByText } = render(
    <Provider>
      <App />
    </Provider>
  );

  await waitForDomChange();
  
  dataEverything.articles.forEach((art) => {
    expect(getByText(art.title)).toBeInTheDocument();
  });
});

test('Testando o Headlines', async () => {
  getNewsFeed.mockResolvedValue(dataHeadlines);

  const { getByText, getByTestId } = render(
    <Provider>
      <App />
    </Provider>
  );
  await waitForDomChange();

  const radio = getByTestId(/radio-1/i);

  fireEvent.click(radio);
  dataHeadlines.articles.forEach((art) => {
    expect(getByText(art.title)).toBeInTheDocument();
  });
});

test('Testando o everything', async () => {
  getNewsFeed.mockResolvedValue(dataEverything);

  const { getByText, getByTestId } = render(
    <Provider>
      <App />
    </Provider>
  );
  await waitForDomChange();

  const radio = getByTestId(/radio-2/i);

  fireEvent.click(radio);
  dataEverything.articles.forEach((art) => {
    expect(getByText(art.title)).toBeInTheDocument();
  });
});

test('Testando o Headlines', async () => {
  getNewsFeed.mockResolvedValue(dataHeadlines);

  const { queryByText, getByTestId, getAllByTestId } = render(
    <Provider>
      <App />
    </Provider>
  );
  await waitForDomChange();

  const text = getByTestId(/input-text/i);
  fireEvent.change(text, { target: { value: 'Four Nets' } });
  expect(
    queryByText(/Four Nets players test positive for coronavirus/i)
  ).toBeInTheDocument();
  const textTitle = getAllByTestId(/text-title/i);
  expect(textTitle.length).toBe(1);
});

test('Testando o botão refresh', async () => {
  getNewsFeed.mockResolvedValue(dataHeadlines);
  const { getByText, getAllByTestId } = render(
    <Provider>
      <App />
    </Provider>
  );
  await waitForDomChange();
  expect(getByText(/proxima atualização →/i)).toBeInTheDocument();

  const textTitle = getAllByTestId(/text-title/i);
  expect(textTitle.length).toBe(4);
});

test('Testando a api', async () => {
  getNewsFeed.mockResolvedValue(dataHeadlines);

  const { getByTestId } = render(
    <Provider>
      <App />
    </Provider>
  );
  const radio = getByTestId(/radio-2/i);
  expect(getNewsFeed).toHaveBeenCalledTimes(1);
  expect(radio.checked).toBe(false);
  fireEvent.click(radio);
  expect(radio.checked).toBe(true);
  await waitForDomChange();
  expect(getNewsFeed).toHaveBeenCalledTimes(2);
});
