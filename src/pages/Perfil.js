import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Perfil() {
  function Email() {
    const emailUser = localStorage.getItem('user');
    const emailObject = JSON.parse(emailUser);
    if (emailObject !== null) {
      return emailObject.email;
    }
  }

  return (
    <main>
      <div>
        <Header location="Perfil" />
      </div>
      <span data-testid="profile-email">
        { `Email: ${Email()} `}
      </span>
      <div>
        <Link to="/receitas-feitas">
          <button
            type="button"
            data-testid="profile-done-btn"
          >
            Receitas Feitas
          </button>
        </Link>
        <Link to="/receitas-favoritas">
          <button
            type="button"
            data-testid="profile-favorite-btn"
          >
            Receitas Favoritas
          </button>
        </Link>
        <Link to="/">
          <button
            type="button"
            data-testid="profile-logout-btn"
            onClick={ () => localStorage.clear() }
          >
            Sair
          </button>
        </Link>
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}

export default Perfil;
