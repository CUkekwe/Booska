const Reverso = require('reverso-api');
const reverso = new Reverso();

const clearInput = document.getElementById('clearButton');
const phraseInput = document.getElementById('inputPhrase');

clearInput.addEventListener('click', () => {
    phraseInput.value = "";
    console.log('Search bar text has been emptied.')
});

const search = document.getElementById('search');
const inputLang = document.getElementById("inputLang");
const outputLang = document.getElementById("outputLang");

let searchProtocol = function () {
    if (inputLang.value == outputLang.value) {
        alert(`You have ${inputLang.options[inputLang.selectedIndex].text} selected in both options! Please select two different languages.`)
    }
};

search.addEventListener('click', searchProtocol);

console.log(inputLang.options[inputLang.selectedIndex].text);