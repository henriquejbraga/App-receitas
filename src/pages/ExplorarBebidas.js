import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { fetchRandom } from '../services/comidasAPI';

function ExplorarBebidas() {
  const [idRandom, setIdRandom] = useState();
  const history = useHistory();

  useEffect(() => {
    const data = async () => {
      const randomDrink = await fetchRandom('thecocktaildb');
      setIdRandom(randomDrink[0].idDrink);
    };
    data();
  }, []);
  return (
    <div>
      <Header location="Explorar Bebidas" />
      <Link to="/explorar/bebidas/ingredientes">
        <button
          type="button"
          data-testid="explore-by-ingredient"
        >
          Por Ingredientes
        </button>
      </Link>
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ () => history.push(`/bebidas/${idRandom}`) }
      >
        Me Surpreenda!
      </button>
      <Footer />
    </div>
  );
}

export default ExplorarBebidas;
