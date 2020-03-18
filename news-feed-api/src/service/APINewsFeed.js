const API_KEY = '9a151c1f68bd4730b9e88f85f97f2b4b'

const URL = (value) => `http://newsapi.org/v2/${value}&apiKey=${API_KEY}`;

const getNewsFeed = (value) =>
  fetch(URL(value)).then((response) =>
    response.json().then((json) => Promise.resolve(json))
  );

export default getNewsFeed;
