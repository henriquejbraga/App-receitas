import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { fetchApiIngredientDrinks } from '../services/bebidasAPI';

function ExplorarIngBebidas() {
  const [ingredients, setIngredients] = useState([]);

  const ING_MAX = 12;

  const getIngredients = async () => {
    const { drinks } = await fetchApiIngredientDrinks();
    setIngredients(drinks);
  };

  useEffect(() => {
    getIngredients();
  }, []);

  return (
    <div>
      <p>Explore os ingredientes de drinks</p>
      <Header location="Explorar Ingredientes" />
      {
        ingredients.map(({ strIngredient1 }, index) => {
          if (index < ING_MAX) {
            return (
              <button
                type="button"
                key={ index }
              >
                <div key={ index } data-testid={ `${index}-ingredient-card` }>
                  <h2 data-testid={ `${index}-card-name` }>{strIngredient1}</h2>
                  <img
                    data-testid={ `${index}-card-img` }
                    src={ `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png` }
                    alt={ strIngredient1 }
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

export default ExplorarIngBebidas;
