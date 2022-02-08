import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import '../index.css';
import ContextComidas from '../context/ContextComidas';

function Ingredients({ ingredients, id }) {
  console.log(id);
  const [ingredientsCompleted, setIngredientsCompleted] = useState([]);
  // const { cocktails, setButtonFinishRecipe } = useContext(ContextComidas);
  const { setButtonFinishRecipe } = useContext(ContextComidas);

  const handleClick = ({ target }) => {
    console.log(target);
    const tamArrayIngredientsCompleted = ingredientsCompleted.length + 1;
    if (target.classList.contains('completed') === false) {
      target.classList.add('completed');
      setIngredientsCompleted([...ingredientsCompleted, target.value]);
    } else {
      target.classList.remove('completed');
    }
    if (ingredients.length === tamArrayIngredientsCompleted) {
      console.log('entrei aqui');
      setButtonFinishRecipe(true);
    }
  };

  // const saveLocalStorage = () => {
  //   // const cocktails = [];
  //   const obj = { [id]: ingredientsCompleted };
  //   // cocktails.push(obj);
  //   localStorage
  //     .setItem('inProgressRecipe', JSON.stringify({ cocktails: obj }));
  // };

  // useEffect(() => {
  //   const localStorageAntigo = JSON.parse(localStorage.getItem('inProgressRecipe'));
  //   console.log(localStorageAntigo);
  //   const localRecipes = [JSON.parse(localStorage.getItem('inProgressRecipes'))];
  //   console.log(localRecipes);
  //   let newObj = {};
  //   if (localRecipes['0'] !== null && localRecipes['0'] !== {}) {
  //     newObj = {
  //       ...localRecipes,
  //       ...localStorageAntigo.cocktails,
  //     };
  //   }
  //   console.log(newObj);
  //   // localStorage.setItem('inProgressRecipes', JSON.stringify({ localStorageAntigo, [id]: ingredientsCompleted}));
  //   localStorage.setItem('inProgressRecipes', JSON.stringify(newObj));
  // }, []);

  const saveLocalStorage = () => {
    const array3 = [id, ingredientsCompleted];
    localStorage
      .setItem('inProgressRecipe', JSON.stringify(array3));
  };

  const madeCheckbox = (ingrediente) => {
    const recipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    let ingredientChecked = false;
    recipes.forEach((recipe, index) => {
      if (recipe === id) {
        const posicaoSeguinte = recipes[index + 1];
        ingredientChecked = posicaoSeguinte.includes(ingrediente);
      }
    });
    return ingredientChecked;
  };

  useEffect(() => {
    // localStorage.setItem('inProgressRecipes', JSON.stringify([]));
    const localStorageAntigo = JSON.parse(localStorage.getItem('inProgressRecipe'));
    console.log(localStorageAntigo);
    const localRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    let newArray = [];
    if (localRecipes !== null && localStorageAntigo !== []) {
      newArray = [
        ...localRecipes,
        ...localStorageAntigo,
      ];
    }
    localStorage.setItem('inProgressRecipes', JSON.stringify(newArray));
  }, []);

  useEffect(() => {
    saveLocalStorage();
  }, [ingredientsCompleted]);

  return (
    <ul>
      { ingredients.map((ingredient, index) => (
        <li key={ index } data-testid={ `${index}-ingredient-step` }>
          <input
            type="checkbox"
            value={ ingredient[1] }
            onChange={ handleClick }
            checked={ madeCheckbox(ingredient[1]) }
          />
          {ingredient[1]}
        </li>
      ))}
    </ul>
  );
}

Ingredients.propTypes = {
  ingredients: PropTypes.objectOf.isRequired,
  id: PropTypes.string.isRequired,
};

export default Ingredients;
