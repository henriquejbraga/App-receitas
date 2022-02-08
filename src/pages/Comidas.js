import React, { useContext } from 'react';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CategoryButton from '../components/CategoryButton';
import ContextComidas from '../context/ContextComidas';

const MAX_CATEGORY = 5;
const MAX_CARD = 12;

function Comidas() {
  const { foodCategories, loading, foodCard, data, toggleFilter,
    filterCategory, setToggleFilter } = useContext(ContextComidas);

  const foodMAP = ({ strMealThumb, strMeal, idMeal }, index) => (
    <Card
      picture={ strMealThumb }
      name={ strMeal }
      index={ index }
      key={ strMeal }
      id={ idMeal }
    />
  );

  const whichRenderAPI = () => {
    if (toggleFilter === false) {
      return data !== null && (data.length >= 1 ? data.slice(0, MAX_CARD).map(foodMAP)
        : foodCard.slice(0, MAX_CARD).map(foodMAP));
    }
    return data !== null && (data.length >= 1 ? data.slice(0, MAX_CARD).map(foodMAP)
      : filterCategory.slice(0, MAX_CARD).map(foodMAP));
  };

  return (
    <div>
      <Header location="Comidas" />
      { !loading && foodCategories.slice(0, MAX_CATEGORY).map(({ strCategory }) => (
        <CategoryButton category={ strCategory } key={ strCategory } />
      ))}
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ () => setToggleFilter(false) }
      >
        All
      </button>
      { whichRenderAPI()}
      <Footer />
    </div>
  );
}

export default Comidas;
