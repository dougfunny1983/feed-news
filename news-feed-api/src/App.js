import React from 'react';
import './App.css';
import NewsFeed from './components/NewsFeed';
import { Provider } from './context/NewsFeedContext';

const componentMajor = () => (
  <div className="conteiner">
    <NewsFeed />
  </div>
);

const App = () => <Provider>{componentMajor()}</Provider>;

export default App;