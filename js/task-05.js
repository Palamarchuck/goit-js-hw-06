const refs = {
    nameInput: document.querySelector("#name-input"),
    nameOutput: document.querySelector("#name-output"),
};

refs.nameInput.addEventListener('input', onInputChange);

const DEFAULT_USERMANE = "Anonymous";

function onInputChange(event) {
    const userName = event.currentTarget.value;

    if (userName === "") {
        refs.nameOutput.textContent = DEFAULT_USERMANE
    }
    else {
        refs.nameOutput.textContent = userName
    }
    
 };
