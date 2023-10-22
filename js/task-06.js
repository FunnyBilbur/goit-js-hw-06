const validation_input = document.querySelector('#validation-input');
console.dir(validation_input);

const limit = validation_input.getAttribute('data-length');
console.log('Limit: ', limit);

validation_input.addEventListener('input', (event) => {

    if (event.currentTarget.value.length > limit) {
        validation_input.classList.add('invalid');
        validation_input.classList.remove('valid');
    }
    else {
        validation_input.classList.add('valid');
        validation_input.classList.remove('invalid');
    }
});
