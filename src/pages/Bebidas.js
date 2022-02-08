import React, { useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Card from '../components/Card';
import CategoryButton from '../components/CategoryButton';
import ContextComidas from '../context/ContextComidas';

const MAX_CATEGORY = 5;
const MAX_CARD = 12;

function Bebidas() {
  const { drinkCategories, loading, drinkCard, data, toggleFilter,
    filterCategory, setToggleFilter } = useContext(ContextComidas);

  const drinksMAP = ({ strDrinkThumb, strDrink, idDrink }, index) => (
    <Card
      picture={ strDrinkThumb }
      name={ strDrink }
      index={ index }
      key={ strDrink }
      id={ idDrink }
    />
  );

  const whichRenderAPI = () => {
    if (toggleFilter === false) {
      return data !== null && (data.length >= 1 ? data.slice(0, MAX_CARD).map(drinksMAP)
        : drinkCard.slice(0, MAX_CARD).map(drinksMAP));
    }
    return data !== null && (data.length >= 1 ? data.slice(0, MAX_CARD).map(drinksMAP)
      : filterCategory.slice(0, MAX_CARD).map(drinksMAP));
  };

  return (
    <div>
      <Header location="Bebidas" />
      { !loading && drinkCategories
        .slice(0, MAX_CATEGORY).map(({ strCategory }) => (
          <CategoryButton category={ strCategory } key={ strCategory } />
        ))}
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ () => setToggleFilter(false) }
      >
        All
      </button>
      { whichRenderAPI() }
      <Footer />
    </div>
  );
}

export default Bebidas;
