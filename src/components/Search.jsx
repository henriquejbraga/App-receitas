import React, { useContext, useState } from 'react';
import ContextComidas from '../context/ContextComidas';

function Search() {
  const [name, setName] = useState(false);
  const [ingredient, setIngredient] = useState(false);
  const [firstLetter, setFirstLetter] = useState(false);

  const {
    setSearch, setRadios, setAux, aux,
  } = useContext(ContextComidas);

  const handleChange = ({ target }) => {
    const value = target.type === 'radio' ? target.checked : target.value;
    if (target.id === 'search') setSearch(value);
    switch (target.id) {
    case 'name':
      setName(value);
      setFirstLetter(false);
      setIngredient(false);
      break;
    case 'ingredient':
      setIngredient(value);
      setFirstLetter(false);
      setName(false);
      break;
    case 'firstLetter':
      setFirstLetter(value);
      setName(false);
      setIngredient(false);
      break;
    default:
      break;
    }
  };

  const handleClick = () => {
    setRadios({
      name,
      ingredient,
      firstLetter,
    });
    return aux ? setAux(false) : setAux(true);
  };

  return (
    <div>
      <input
        data-testid="search-input"
        placeholder="search"
        type="text"
        id="search"
        onChange={ handleChange }
      />
      <label htmlFor="ingredient">
        Ingrediente
        <input
          id="ingredient"
          type="radio"
          name="search"
          data-testid="ingredient-search-radio"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="name">
        Nome
        <input
          id="name"
          type="radio"
          name="search"
          data-testid="name-search-radio"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="firstLetter">
        Primeira letra
        <input
          id="firstLetter"
          type="radio"
          name="search"
          data-testid="first-letter-search-radio"
          onChange={ handleChange }
        />
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleClick }
      >
        Buscar
      </button>
    </div>
  );
}

export default Search;
