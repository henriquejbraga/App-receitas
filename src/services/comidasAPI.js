const MSG_ERROR = 'There must be an error, please wait till we solve this =)';

export async function fetchFoodByName(name) {
  try {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    const response = await fetch(url);
    const { meals } = await response.json();
    return meals;
  } catch (error) {
    throw new Error(MSG_ERROR);
  }
}

export async function fetchFoodByIngredient(ingredient) {
  try {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    const response = await fetch(url);
    const { meals } = await response.json();
    return meals;
  } catch (error) {
    throw new Error(MSG_ERROR);
  }
}

export async function fetchFoodByLetter(letter) {
  try {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`;
    const response = await fetch(url);
    const { meals } = await response.json();
    return meals;
  } catch (error) {
    throw new Error(MSG_ERROR);
  }
}

export async function fetchFoodCategories() {
  try {
    const url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
    const response = await fetch(url);
    const { meals } = await response.json();
    return meals;
  } catch (error) {
    throw new Error(MSG_ERROR);
  }
}

export async function fetchFoodCard() {
  try {
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const response = await fetch(url);
    const { meals } = await response.json();
    return meals;
  } catch (error) {
    throw new Error(MSG_ERROR);
  }
}
export const fetchRandom = async (type) => {
  try {
    const urlRandom = `https://www.${type}.com/api/json/v1/1/random.php`;
    const response = await fetch(urlRandom);
    const json = await response.json();
    return (type === 'themealdb' ? json.meals : json.drinks);
  } catch (error) {
    throw new Error(MSG_ERROR);
  }
};

export const fetchFilterByCategoryFood = async (endpoint) => {
  try {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${endpoint}`;
    const response = await fetch(url);
    const { meals } = await response.json();
    return meals;
  } catch (error) {
    throw new Error(MSG_ERROR);
  }
};

export const fetchFoodID = async (endpoint) => {
  try {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${endpoint}`;
    const response = await fetch(url);
    console.log(response);
    const { meals } = await response.json();
    return meals;
  } catch (error) {
    console.log(error);
    throw new Error(MSG_ERROR);
  }
};
export const fetchApiIngredientMeals = async () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

export async function fetchArea() {
  const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';

  try {
    const response = await fetch(URL);
    const json = await response.json();
    const foods = await json.meals;

    return foods;
  } catch (err) {
    console.error(err);
  }
}
