import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useHistory } from 'react-router-dom';
import ContextComidas from './ContextComidas';
import {
  fetchFoodByName,
  fetchFoodByIngredient,
  fetchFoodByLetter,
  fetchFoodCategories,
  fetchFoodCard,
  fetchArea,
} from '../services/comidasAPI';
import {
  fetchDrinkByName,
  fetchDrinkByIngredient,
  fetchDrinkByLetter,
  fetchDrinkCategories,
  fetchDrinkCard,
} from '../services/bebidasAPI';

function ComidasProvider({ children }) {
  const location = useLocation();
  const history = useHistory();
  const [aux, setAux] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [radios, setRadios] = useState({
    name: false,
    ingredient: false,
    firstLetter: false,
  });
  const [route, setRoute] = useState([]);
  const [foodCategories, setFoodCategories] = useState([]);
  const [drinkCategories, setDrinkCategories] = useState([]);
  const [foodCard, setFoodCard] = useState([]);
  const [drinkCard, setDrinkCard] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterCategory, setFilterCategory] = useState([]);
  const [toggleFilter, setToggleFilter] = useState(false);
  const [cocktails, setCocktails] = useState({});
  const [meals, setMeals] = useState([]);
  const [area, setArea] = useState([]);
  const [buttonFinishRecipe, setButtonFinishRecipe] = useState(false);

  const validationLetter = async (inputSearch, returnFetchApi) => {
    if (search.length > 1 && radios.firstLetter === true) {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    } else {
      setData(await returnFetchApi(inputSearch));
    }
  };

  const renderPageApi = async (inputSearch, filter) => {
    if (route.includes('bebidas')) {
      if (filter.name) setData(await fetchDrinkByName(inputSearch));
      else if (filter.ingredient) setData(await fetchDrinkByIngredient(inputSearch));
      else if (filter.firstLetter) validationLetter(inputSearch, fetchDrinkByLetter);
    } else if (route.includes('comidas')) {
      if (filter.name) setData(await fetchFoodByName(inputSearch));
      else if (filter.ingredient) setData(await fetchFoodByIngredient(inputSearch));
      else if (filter.firstLetter) validationLetter(inputSearch, fetchFoodByLetter);
    }
  };

  const validationRedirect = () => {
    if (data !== null) {
      if (data.length === 1) {
        const idAPI = Object.keys(data[0])[0];
        if (idAPI === 'idMeal') {
          return history.push(`/comidas/${data[0].idMeal}`);
        }
        if (idAPI === 'idDrink') {
          return history.push(`/bebidas/${data[0].idDrink}`);
        }
      }
    } else if (data === null && aux === true) {
      global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }
  };

  const categoriesDrinkAPI = async () => {
    setLoading(true);
    const response = await fetchDrinkCategories();
    setLoading(false);
    setDrinkCategories(response);
  };

  const categoriesFoodAPI = async () => {
    setLoading(true);
    const response = await fetchFoodCategories();
    setLoading(false);
    setFoodCategories(response);
  };

  const foodCardAPI = async () => {
    setLoading(true);
    const response = await fetchFoodCard();
    setLoading(false);
    setFoodCard(response);
  };

  const drinkCardAPI = async () => {
    setLoading(true);
    const response = await fetchDrinkCard();
    setLoading(false);
    setDrinkCard(response);
  };

  const fetchByArea = async () => {
    const MAX_AREA = 99;
    const response = await fetchArea();
    const areaSlice = await response.slice(0, MAX_AREA);

    setArea(areaSlice);
    setLoading(false);

    return areaSlice;
  };

  useEffect(() => {
    setRoute(location.pathname);
  });
  useEffect(() => {
    renderPageApi(search, radios);
  }, [aux]);
  useEffect(() => {
    validationRedirect();
  }, [data]);

  useEffect(() => {
    categoriesDrinkAPI();
    categoriesFoodAPI();
    foodCardAPI();
    drinkCardAPI();
  }, []);

  const contextValues = {
    route,
    setRoute,
    search,
    setSearch,
    radios,
    setRadios,
    aux,
    setAux,
    data,
    foodCategories,
    drinkCategories,
    loading,
    setLoading,
    foodCard,
    drinkCard,
    filterCategory,
    setFilterCategory,
    toggleFilter,
    setToggleFilter,
    cocktails,
    setCocktails,
    area,
    setArea,
    fetchByArea,
    buttonFinishRecipe,
    setButtonFinishRecipe,
    meals,
    setMeals,
  };

  return (
    <ContextComidas.Provider value={ contextValues }>
      { children }
    </ContextComidas.Provider>
  );
}

ComidasProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ComidasProvider;
