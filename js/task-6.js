function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector(`input`);

const createBtn = document.querySelector(`[data-create]`);

const destroyBtn = document.querySelector(`[data-destroy]`);

const boxes = document.getElementById(`boxes`);

boxes.style.display = `flex`;
boxes.style.flexWrap = `wrap`;
boxes.style.gap = `5px`;
boxes.style.marginTop = `16px`;

createBtn.addEventListener(`click`, () => {
  const amount = input.value;

  if (amount >= 1 && amount <= 100) {

    createBoxes(amount);
      input.value = ``;
  } else {
    alert(`Додайте числа від 1 до 100`);
    input.value = ``;
    destroyBoxes();

  }
});

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();

  let boxSize = 30;

  for (let i = 0; i < amount; i++){

    const box = document.createElement(`div`);
    box.style.height = `${boxSize}px`;
    box.style.width = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
    boxSize += 10;
  }
  boxes.innerHTML = ``;
  boxes.appendChild(fragment);
}

destroyBtn.addEventListener(`click`, destroyBoxes);

function destroyBoxes() {
  boxes.innerHTML = ``;
}

