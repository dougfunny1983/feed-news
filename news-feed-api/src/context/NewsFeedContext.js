import React, { createContext, useState } from 'react';
import getNewsFeed from '../service/APINewsFeed';
import PropTypes from 'prop-types';

const NewsFeedContext = createContext();

const NewsFeedProvider = ({ children }) => {
  const [data, setData] = useState();
  const [radio, setRadio] = useState('top-headlines?country=br');
  const [text, setText] = useState();
  const [hidecomp , setHidecomp ] = useState(true);

  const context = {
    data,
    setData,
    radio,
    setRadio,
    text,
    setText,
    getNewsFeed,
    hidecomp , setHidecomp
  };

  return (
    <NewsFeedContext.Provider value={context}>
      {children}
    </NewsFeedContext.Provider>
  );
};

NewsFeedProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { NewsFeedContext, NewsFeedProvider as Provider };
