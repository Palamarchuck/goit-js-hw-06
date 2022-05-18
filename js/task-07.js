const refs = {
    fontSizeInput: document.querySelector("#font-size-control"),
    text: document.querySelector("#text"),
};

refs.fontSizeInput.addEventListener('input', () => {
    refs.text.style.fontSize = refs.fontSizeInput.value + "px";
   
});
    
    