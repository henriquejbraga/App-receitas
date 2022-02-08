import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ContextComidas from '../context/ContextComidas';

function Card({ picture, name, index, id }) {
  const { route } = useContext(ContextComidas);

  return (
    <Link to={ `${route}/${id}` }>
      <div data-testid={ `${index}-recipe-card` }>
        <img src={ picture } alt={ name } data-testid={ `${index}-card-img` } />
        <p data-testid={ `${index}-card-name` }>{ name }</p>
      </div>
    </Link>

  );
}

Card.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;
