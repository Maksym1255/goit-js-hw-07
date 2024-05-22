const idInputElem = document.getElementById(`name-input`);

const idOutputElem = document.getElementById(`name-output`);

idInputElem.addEventListener(`input`, (e) => {
    const inputText = e.target.value.trim();
    if (inputText === ``) {
        idOutputElem.textContent = `Anonymous`;
    } else {
        idOutputElem.textContent = inputText;
    }
})