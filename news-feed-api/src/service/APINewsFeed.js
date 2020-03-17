const URL = (value) => `https://www.reddit.com/r/${value}.json`;

const getNewsFeed = (value) =>
  fetch(URL(value)).then((response) =>
    response.json().then((json) => Promise.resolve(json))
  );

// response.ok ? Promise.resolve(json) : Promise.reject(json)

export default getNewsFeed;