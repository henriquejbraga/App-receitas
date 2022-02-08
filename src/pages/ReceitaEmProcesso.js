import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchFoodID } from '../services/comidasAPI';
import { fetchDrinkId } from '../services/bebidasAPI';
import CardRecipeInProgressFood from '../components/CardRecipeInProgressFood';
import CardRecipeInProgressDrink from '../components/CardRecipeInProgressDrink';

function ReceitaEmProcesso() {
  const [recipe, setRecipe] = useState([]);
  const location = useLocation();
  const arrayRoute = location.pathname.split('/');

  const recipeInProgress = async () => {
    if (arrayRoute[1] === 'comidas') {
      console.log(arrayRoute[2]);
      const response = await fetchFoodID(arrayRoute[2]);
      console.log(response);
      setRecipe(response);
    } else {
      const response = await fetchDrinkId(arrayRoute[2]);
      console.log(response);
      setRecipe(response);
    }
  };

  function renderCardRecipeInProgress() {
    if (arrayRoute[1] === 'comidas') {
      return <CardRecipeInProgressFood recipe={ recipe } />;
    }
    return <CardRecipeInProgressDrink recipe={ recipe } />;
  }

  useEffect(() => {
    recipeInProgress();
  }, []);

  return (
    <div>
      Receitas em processo
      { recipe.length !== 0 ? renderCardRecipeInProgress() : null }
    </div>
  );
}

export default ReceitaEmProcesso;
