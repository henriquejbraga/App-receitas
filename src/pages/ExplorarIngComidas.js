import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { fetchApiIngredientMeals } from '../services/comidasAPI';

function ExplorarIngComidas() {
  const [ingredients, setIngredients] = useState([]);

  const ING_MAX = 12;

  const getIngredients = async () => {
    const { meals } = await fetchApiIngredientMeals();
    setIngredients(meals);
  };

  useEffect(() => {
    getIngredients();
  }, []);

  return (
    <div>
      <p>Explore os ingredientes de comidas</p>
      <Header location="Explorar Ingredientes" />
      {
        ingredients.map(({ strIngredient }, index) => {
          if (index < ING_MAX) {
            return (
              <button
                type="button"
                key={ index }
              >
                <div key={ index } data-testid={ `${index}-ingredient-card` }>
                  <h2 data-testid={ `${index}-card-name` }>{strIngredient}</h2>
                  <img
                    data-testid={ `${index}-card-img` }
                    src={ `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png` }
                    alt={ strIngredient }
                  />
                </div>
              </button>
            );
          }
          return null;
        })
      }
      <Footer />
    </div>
  );
}

export default ExplorarIngComidas;
