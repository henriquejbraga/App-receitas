import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Ingredients from './Ingredients';
import ContextComidas from '../context/ContextComidas';

function CardRecipeInProgressDrink({ recipe }) {
  const [ingredients, setIngredients] = useState([]);
  const { buttonFinishRecipe } = useContext(ContextComidas);
  console.log('bebidas');

  const getIngredients = () => {
    const entriesRecipes = Object.entries(recipe[0]);
    const arrayIngredients = entriesRecipes.filter((element) => (
      element[0].includes('strIngredient') && (element[1] !== '' && element[1] !== null)
    ));
    console.log(arrayIngredients);
    setIngredients(arrayIngredients);
  };

  useEffect(() => {
    getIngredients();
  }, []);

  return (
    <div>
      <h1 data-testid="recipe-title">{recipe[0].strDrink}</h1>
      <img
        data-testid="recipe-photo"
        src={ recipe[0].strDrinkThumb }
        alt={ recipe[0].strDrink }
      />
      <button type="button" data-testid="share-btn">Compartilhar</button>
      <button type="button" data-testid="favorite-btn">Favoritar</button>
      <p data-testid="recipe-category">{ recipe[0].strCategory }</p>
      <p data-testid="instructions">{ recipe[0].strInstructions }</p>
      <Ingredients ingredients={ ingredients } id={ recipe[0].idDrink } />
      <Link to="/receitas-feitas">
        <button
          data-testid="finish-recipe-btn"
          type="button"
          disabled={ !buttonFinishRecipe }
        >
          Finalizar
        </button>
      </Link>
    </div>
  );
}

CardRecipeInProgressDrink.propTypes = {
  recipe: PropTypes.objectOf.isRequired,
};

export default CardRecipeInProgressDrink;
