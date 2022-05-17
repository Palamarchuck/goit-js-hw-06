const nameInput = document.querySelector("#validation-input");
const inputLength = document.querySelector('input[data-length="6"]');

console.log(inputLength.dataset.length);



nameInput.addEventListener('blur', onInputBlur);

function onInputBlur(event) { 
    const newNameLength = event.currentTarget.value.length;
    if (newNameLength === Number(inputLength.dataset.length)) {
        nameInput.classList.remove("invalid")
        nameInput.classList.add("valid")
    }
    else {
        nameInput.classList.remove("valid")
       nameInput.classList.add("invalid")
    }
    
};