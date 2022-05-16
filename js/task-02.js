const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const createIngredientsItem = ingredients.map((ingredient) => {

  const ingredientsItem = document.createElement('li');

  ingredientsItem.classList.add("item");

  console.log(ingredientsItem);

  ingredientsItem.textContent = ingredient;

  return ingredientsItem;
});




ingredientsList.append(...createIngredientsItem);