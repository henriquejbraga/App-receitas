import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import ContextComidas from '../context/ContextComidas';
import { fetchFilterByCategoryFood } from '../services/comidasAPI';
import { fetchFilterByCategoryDrink } from '../services/bebidasAPI';

function CategoryButton({ category }) {
  const {
    setFilterCategory, route, setToggleFilter,
  } = useContext(ContextComidas);

  const [actualCategory, setActualCategory] = useState('');

  const verifyFoodAndDrinks = (categori) => {
    if (actualCategory === categori) {
      setToggleFilter(false);
      setActualCategory(categori);
    } else {
      setToggleFilter(true);
      setActualCategory(categori);
    }
  };

  const verifyPathRenderCategory = async (categori) => {
    if (route.includes('comida')) {
      const response = await fetchFilterByCategoryFood(categori);
      setFilterCategory(response);
      verifyFoodAndDrinks(categori);
    }
    if (route.includes('bebida')) {
      const response = await fetchFilterByCategoryDrink(categori);
      setFilterCategory(response);
      verifyFoodAndDrinks(categori);
    }
  };

  return (
    <div>
      <button
        type="button"
        data-testid={ `${category}-category-filter` }
        onClick={ () => verifyPathRenderCategory(category) }
      >
        { category }
      </button>
    </div>
  );
}

CategoryButton.propTypes = {
  category: PropTypes.string.isRequired,
};

export default CategoryButton;
