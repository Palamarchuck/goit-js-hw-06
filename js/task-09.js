function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  bodyColor: document.querySelector("body"),
  widget: document.querySelector('.widget'),
  btnChangeColor: document.querySelector('.change-color'),
  spanColor: document.querySelector('.color'),
}

function btnClick() {
  refs.bodyColor.style.backgroundColor = getRandomHexColor();
  refs.spanColor.textContent = refs.bodyColor.style.backgroundColor;
}
 
refs.btnChangeColor.addEventListener('click', btnClick);


