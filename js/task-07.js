const inputSizeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
function onChangeFontSize(event) {
    const fontSize = +event.currentTarget.value;
    textEl.style.fontSize = `${fontSize}px`;
  }
  
  inputSizeEl.addEventListener('input', onChangeFontSize);