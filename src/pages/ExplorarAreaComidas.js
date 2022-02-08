import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ContextComidas from '../context/ContextComidas';

function ExplorarAreaComidas() {
  const [recipesByArea, setRecipesByArea] = useState([]);
  const [selectedArea, setSelectedArea] = useState('All');
  const { area, fetchByArea, loading, setLoading } = useContext(ContextComidas);

  const fetchAll = async () => {
    const MAX_RECIPES = 12;
    const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const response = await fetch(URL);
    const json = await response.json();
    const recipes = await json.meals;
    const recipesSlice = recipes.slice(0, MAX_RECIPES);
    setRecipesByArea(recipesSlice);
  };

  const fetchRecipesByArea = async (areaName) => {
    const MAX_RECIPES = 12;
    const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName}`;
    const response = await fetch(URL);
    const json = await response.json();
    const recipes = await json.meals;
    const recipesSlice = recipes.slice(0, MAX_RECIPES);
    setRecipesByArea(recipesSlice);
  };

  const loadRecipes = ({ target }) => {
    setSelectedArea(target.value);
    if (target.value === 'All') {
      fetchAll();
    } else {
      fetchRecipesByArea(target.value);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchAll();
    fetchByArea();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header location="Explorar Origem" />
      {
        loading
          ? <span>Loading...</span>
          : (
            <section>
              <select
                id="area"
                value={ selectedArea }
                onChange={ loadRecipes }
                data-testid="explore-by-area-dropdown"
              >
                <option value="all" data-testid="All-option">All</option>
                {
                  area.map((Area, index) => (
                    <option
                      key={ index }
                      value={ Area.strArea }
                      data-testid={ `${Area.strArea}-option` }
                    >
                      { Area.strArea }
                    </option>
                  ))
                }
              </select>
            </section>
          )
      }

      {
        recipesByArea.map((recipe, index) => (
          <Link to={ `/comidas/${recipe.idMeal}` } key={ index }>
            <section data-testid={ `${index}-recipe-card` }>
              <img
                height="100px"
                src={ recipe.strMealThumb }
                alt={ recipe.strMeal }
                data-testid={ `${index}-card-img` }
              />
              <span data-testid={ `${index}-card-name` }>{ recipe.strMeal }</span>
            </section>
          </Link>
        ))
      }
      <Footer />
    </div>
  );
}

export default ExplorarAreaComidas;
