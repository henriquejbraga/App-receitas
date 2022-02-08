import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Ingredients from './Ingredients';
import ContextComidas from '../context/ContextComidas';

function CardRecipeInProgressFood({ recipe }) {
  const [ingredients, setIngredients] = useState([]);
  const { buttonFinishRecipe } = useContext(ContextComidas);
  console.log('comidas');

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
      <h1 data-testid="recipe-title">{recipe[0].strMeal}</h1>
      <img
        data-testid="recipe-photo"
        src={ recipe[0].strMealThumb }
        alt={ recipe[0].strMeal }
      />
      <button type="button" data-testid="share-btn">Compartilhar</button>
      <button type="button" data-testid="favorite-btn">Favoritar</button>
      <p data-testid="recipe-category">{ recipe[0].strCategory }</p>
      <p data-testid="instructions">{ recipe[0].strInstructions }</p>
      <Ingredients ingredients={ ingredients } id={ recipe[0].idMeal } />
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

CardRecipeInProgressFood.propTypes = {
  recipe: PropTypes.objectOf.isRequired,
};

export default CardRecipeInProgressFood;
