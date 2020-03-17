import React, { createContext, useState } from 'react';
import getNewsFeed from '../service/APINewsFeed';
import PropTypes from 'prop-types';

const NewsFeedContext = createContext();


const NewsFeedProvider = ({ children }) => {
  const [data, setData] = useState();
 

  const context = {
    data,
    setData,
    
  };

  return (
    <NewsFeedContext.Provider value={context}>{children}</NewsFeedContext.Provider>
  );
};

NewsFeedProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { NewsFeedContext, NewsFeedProvider as Provider };
