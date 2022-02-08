import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../style/login.css';

// referência para o email regex https://www.kindacode.com/article/live-email-validation-in-react-with-regex/
const EMAILREGEX = /\S+@\S+\.\S+/;
const PASSWORD_VALID = 6;

function Login() {
  const history = useHistory();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleForm = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const validation = (em, pass) => EMAILREGEX.test(em) && pass.length > PASSWORD_VALID;

  const moveAndSaveLocalStorage = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email: form.email }));
    return history.push('/comidas');
  };

  return (
    <div className="flex-box container-box">
      <h1>Faça o login no APP de Receitas</h1>
      <div className="email content-box">
        <input
          type="email"
          name="email"
          placeholder="email"
          data-testid="email-input"
          value={ form.email }
          onChange={ (e) => handleForm(e) }
        />
        <div className="password">
          <input
            type="password"
            name="password"
            placeholder="senha"
            data-testid="password-input"
            value={ form.password }
            onChange={ (e) => handleForm(e) }
          />
        </div>
        <button
          className="button login"
          type="button"
          data-testid="login-submit-btn"
          disabled={ !validation(form.email, form.password) }
          onClick={ moveAndSaveLocalStorage }
        >
          Entrar
        </button>
      </div>
    </div>
  );
}

export default Login;
