import React from 'react';
import { screen } from '@testing-library/dom';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helper/renderWithRouter';
import Comidas from '../pages/Comidas';

const DRINK = 'drink-icon';
const EXPLORE = 'explore-icon';
const MEAL = 'meal-icon';

describe('Component Footer in Page', () => {
  beforeEach(() => {
    const { history } = renderWithRouter(<Comidas />);

    history.push('/comidas');
    const path = history.location.pathname;
    expect(path).toBe('/comidas');
  });

  it('should appear the footer icons', () => {
    const drinkIcon = screen.getByAltText(DRINK);
    expect(drinkIcon).toBeInTheDocument();

    const exploreIcon = screen.getByAltText(EXPLORE);
    expect(exploreIcon).toBeInTheDocument();

    const mealIcon = screen.getByAltText(MEAL);
    expect(mealIcon).toBeInTheDocument();
  });

  it('should redirect to another correct route', () => {

  });
});
