

const value = document.querySelector('#value');
console.log(value);

const decBtn = document.querySelector('button[data-action="decrement"]');
console.log(decBtn);

const incBtn = document.querySelector('button[data-action="increment"]');
console.log(incBtn);

const counter = {
    counterValue: parseInt(value.textContent),

    increment() {
        this.counterValue += 1;
        value.textContent = this.counterValue;
    },

    decrement() {
        this.counterValue -= 1;
        value.textContent = this.counterValue;
    }
};


incBtn.addEventListener('click', function () {
    console.log('Increment');
    counter.increment();
});

decBtn.addEventListener('click', function () {
    console.log('Decrement');
    counter.decrement();

})