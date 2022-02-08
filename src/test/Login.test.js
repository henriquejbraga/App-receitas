import React from 'react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helper/renderWithRouter';
import Login from '../pages/Login';

const EMAIL_ID = 'email-input';
const PASSWORD_PLACEHOLDER = 'password';
const EMAIL_MOCK = 'teste@gmail.com';
const PASSWORD_MOCK = '123456789';

describe('Test all the Login page', () => {
  it('should render the root Page and the tittle', () => {
    const { history } = renderWithRouter(<Login />);

    const loginPath = history.location.pathname;
    expect(loginPath).toBe('/');

    const titlePage = screen.getByRole('heading', { name: /login/i, level: 1 });
    expect(titlePage).toBeInTheDocument();
  });

  it('should appear in the screen input email , password and button', () => {
    renderWithRouter(<Login />);

    const emailInput = screen.getByTestId(EMAIL_ID);
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveProperty('type', 'email');

    const passwordInput = screen.getByPlaceholderText(PASSWORD_PLACEHOLDER);
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput).toHaveProperty('type', 'password');

    const enterButton = screen.getByRole('button', { name: /entrar/i });
    expect(enterButton).toBeInTheDocument();
  });

  it('should write something in the email, password input and then redirect', () => {
    const { history } = renderWithRouter(<Login />);

    const emailInput = screen.getByTestId(EMAIL_ID);
    userEvent.type(emailInput, EMAIL_MOCK);
    expect(emailInput).toHaveValue(EMAIL_MOCK);

    const passwordInput = screen.getByPlaceholderText(PASSWORD_PLACEHOLDER);
    userEvent.type(passwordInput, PASSWORD_MOCK);
    expect(passwordInput).toHaveValue(PASSWORD_MOCK);

    const enterButton = screen.getByRole('button', { name: /entrar/i });
    userEvent.click(enterButton);
    const foodPath = history.location.pathname;
    expect(foodPath).toBe('/comidas');
  });
});
