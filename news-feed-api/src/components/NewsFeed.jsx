import React, { useContext } from 'react';
import InputText from './InputText';
import Header from './Header';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import { NewsFeedContext } from '../context/NewsFeedContext';
import Button from './Button';
import CountTimer from './CountTimer';

export default function NewsFeed() {
  const { data, text, hidecomp, setHidecomp } = useContext(NewsFeedContext);
  const replicante = (value) =>
    value.map((art) => {
      return (
        <article href={art.url} className="card">
          <CardHeader image={art.urlToImage} />
          <CardBody
            title={art.title}
            text={art.description}
            date={art.publishedAt}
          />
          <Button href={art.url} />
        </article>
      );
    });

  const filterForName = (data, textInput) => {
    let result = [];
    if (textInput) {
      result = data.filter(({ title }) =>
        title.toLowerCase().includes(textInput.toLowerCase())
      );
    } else {
      result = data;
    }
    return result;
  };

  const handleClick = () => setHidecomp(!hidecomp );

  return (
    <div>
      <Header />
      {hidecomp && (
        <div>
          <InputText />
          <CountTimer />
        </div>
      )}
      <button onClick={handleClick}>{hidecomp === true? 'Interromper Aplicação': 'Ativar a Aplicação'}</button>
      <div className="news-feed">
        {hidecomp && data && replicante(filterForName(data.articles, text))}
      </div>
    </div>
  );
}
