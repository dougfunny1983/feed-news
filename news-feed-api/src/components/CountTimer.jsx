import React, { useEffect, useContext } from 'react';
import { NewsFeedContext } from '../context/NewsFeedContext';

const CountTimer = () => {
  const { getNewsFeed, setData, radio, hidecomp } = useContext(NewsFeedContext);

  const now = new Date();
  const dateNow = `proxima atualização → ${now.getHours()}:${now.getMinutes()}:${now.getSeconds(10)}`;

  useEffect(() => {
    setInterval(() => {
      getNewsFeed(radio).then((data) => setData(data));
    }, 5000);
  }, []);

  return (
    <div>
      <h2>{dateNow}</h2>
      <button type="button" onClick={() => window.location.reload()}>
        refresh
      </button>
    </div>
  );
};

export default CountTimer;

