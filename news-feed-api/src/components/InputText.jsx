import React from 'react';

export default function InputText() {
  
  return (
    <form>
        <div class="input-container">
          <input id="name" class="input" type="text" pattern=".+" required />
          <label class="label" for="name">
          Faça sua pesquisa aqui
          </label>
        </div>
    </form>
  );
}
