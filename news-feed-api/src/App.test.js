import React from 'react';
import {
  render,
  fireEvent,
  waitForDomChange,
  cleanup,
} from '@testing-library/react';
import App from './App';

const clear = () => afterEach(() => cleanup());

clear()

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/News Feed!!!/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/News Feed!!!/i);
  expect(linkElement).toBeInTheDocument();
});

