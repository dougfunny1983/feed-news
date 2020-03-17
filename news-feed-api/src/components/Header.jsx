  
import React, { useEffect, useContext } from 'react';
import { NewsFeedContext } from '../context/NewsFeedContext';

const Header = () => {
  const { getNewsFeed, setData, radio } = useContext(NewsFeedContext);
  
  useEffect(() => {
    getNewsFeed(radio).then((data) => setData(data));

  }, [getNewsFeed, setData, radio]);


  return <h1>News Feed!!!</h1>;
};

export default Header;