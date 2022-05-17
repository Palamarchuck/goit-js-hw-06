const counterValue = document.querySelector('#value');
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');



let newCounterValue = 0;

btnDecrement.addEventListener('click', () => {
    newCounterValue -= 1;
    counterValue.textContent = newCounterValue;

});
btnIncrement.addEventListener('click', () => {
    newCounterValue += 1;
    counterValue.textContent = newCounterValue;
});