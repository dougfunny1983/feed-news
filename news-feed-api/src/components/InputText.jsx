import React, { useContext } from 'react';
import { NewsFeedContext } from '../context/NewsFeedContext';

export default function InputText() {
  const { setRadio, setText } = useContext(NewsFeedContext);

  const handleRadio = (event) => setRadio( event.target.value);
  const handleInput = (event) => setText(event.target.value);
  return (
    <form className="input-container">
      <input
        data-testid="input-text"
        onChange={handleInput}
        placeholder="Faça sua pesquisa aqui"
        type="text"
      />
      <label htmlFor="radio" onClick={handleRadio}>
        <span>
          headlines
          <input type="radio" defaultChecked data-testid="radio-1" name="radio" value="top-headlines?country=br"/>
        </span>
        <span>
          everything
          <input type="radio" name="radio" data-testid="radio-2" value="everything?q=coronavirus" />
        </span>
      </label>
    </form>
  );
}
