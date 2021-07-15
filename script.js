console.log('This will be an epic undergoing!');

const clearInput = document.getElementById('clearButton');
const phraseInput = document.getElementById('inputPhrase');

clearInput.addEventListener('click', () => {
    phraseInput.value = "";
    console.log('Search bar text has been emptied.')
});