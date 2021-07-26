
const targetBtnEl = document.querySelectorAll('#counter button');
const valueEl = document.querySelector('#value');
const btnDecrementEl =  targetBtnEl[0];
const btnIncrementEl =  targetBtnEl[1];

const counter = {
    value: 0,
    decrement() {
      this.value -= 1;
    },
  
    increment() {
      this.value += 1;
    },
  };
  btnDecrementEl.addEventListener('click', function () {
    counter.decrement();
    valueEl.textContent = counter.value;
  });
    
  btnIncrementEl .addEventListener('click', function () {
    counter.increment();
     valueEl.textContent = counter.value;
  });