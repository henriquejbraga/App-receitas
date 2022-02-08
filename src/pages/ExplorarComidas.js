import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { fetchRandom } from '../services/comidasAPI';

function ExplorarComidas() {
  const [idRandom, setIdRandom] = useState();
  const history = useHistory();

  useEffect(() => {
    const data = async () => {
      const randomMeal = await fetchRandom('themealdb');
      setIdRandom(randomMeal[0].idMeal);
    };
    data();
  }, []);
  return (
    <div>
      <Header location="Explorar Comidas" />
      <Link to="/explorar/comidas/ingredientes">
        <button
          type="button"
          data-testid="explore-by-ingredient"
        >
          Por Ingredientes
        </button>
      </Link>
      <Link to="/explorar/comidas/area">
        <button
          type="button"
          data-testid="explore-by-area"
        >
          Por Local de Origem
        </button>
      </Link>
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ () => history.push(`/comidas/${idRandom}`) }
      >
        Me Surpreenda!
      </button>
      <Footer />
    </div>
  );
}

export default ExplorarComidas;
