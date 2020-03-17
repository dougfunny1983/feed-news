import React, { useContext } from 'react';
import { NewsFeedContext } from '../context/NewsFeedContext';

export default function InputText() {
  const { setRadio, setText } = useContext(NewsFeedContext);

  const handleRadio = (event) => setRadio( event.target.value);
  const handleInput = (event) => setText(event.target.value);
  return (
    <form className="input-container">
      <input
        onChange={handleInput}
        placeholder="Faça sua pesquisa aqui"
        type="text"
      />
      <label htmlFor="radio" onClick={handleRadio}>
        <span>
          headlines
          <input type="radio" defaultChecked  name="radio" value="top-headlines?country=br"/>
        </span>
        <span>
          everything
          <input type="radio" name="radio" value="everything?q=coronavirus" />
        </span>
      </label>
    </form>
  );
}
