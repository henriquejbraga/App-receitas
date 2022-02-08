const MSG_ERROR = 'There must be an error, please wait till we solve this =)';

export async function fetchDrinkByName(name) {
  try {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
    const response = await fetch(url);
    const { drinks } = await response.json();
    return drinks;
  } catch (error) {
    throw new Error(MSG_ERROR);
  }
}

export async function fetchDrinkByIngredient(ingredient) {
  try {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    const response = await fetch(url);
    const { drinks } = await response.json();
    return drinks;
  } catch (error) {
    throw new Error(MSG_ERROR);
  }
}

export async function fetchDrinkByLetter(letter) {
  try {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;
    const response = await fetch(url);
    const { drinks } = await response.json();
    return drinks;
  } catch (error) {
    throw new Error(MSG_ERROR);
  }
}

export async function fetchDrinkCategories() {
  try {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
    const response = await fetch(url);
    const { drinks } = await response.json();
    return drinks;
  } catch (error) {
    throw new Error(MSG_ERROR);
  }
}

export async function fetchDrinkCard() {
  try {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    const response = await fetch(url);
    const { drinks } = await response.json();
    return drinks;
  } catch (error) {
    throw new Error(MSG_ERROR);
  }
}

export const fetchFilterByCategoryDrink = async (endpoint) => {
  try {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${endpoint}`;
    const response = await fetch(url);
    const { drinks } = await response.json();
    return drinks;
  } catch (error) {
    throw new Error(MSG_ERROR);
  }
};

export const fetchDrinkId = async (endpoint) => {
  try {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${endpoint}`;
    const response = await fetch(url);
    const { drinks } = await response.json();
    return drinks;
  } catch (error) {
    throw new Error(MSG_ERROR);
  }
};

export const fetchApiIngredientDrinks = async () => {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

export const fetchDrinkIng = async (strIngredient1) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${strIngredient1}`;
  const response = await fetch(url);
  const json = await response.json();
  return json;
};
