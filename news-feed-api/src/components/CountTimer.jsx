import React, { useEffect, useContext } from 'react';
import { NewsFeedContext } from '../context/NewsFeedContext';

const CountTimer = () => {
  const { getNewsFeed, setData, radio } = useContext(NewsFeedContext);

  const now = new Date();
  const dateNow = `proxima atualização → ${now.getHours()}:${now.getMinutes()}:${now.getSeconds(
    10
  )}`;

  useEffect(() => {
    setInterval(() => {
      getNewsFeed(radio).then((data) => setData(data));
    }, 5000);
  }, [getNewsFeed, radio, setData]);

  return (
    <div>
      <h2>{dateNow}</h2>
    </div>
  );
};

export default CountTimer;
