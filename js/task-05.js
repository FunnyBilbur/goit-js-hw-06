const NameInput = document.querySelector('#name-input');
const NameOutput = document.querySelector('#name-output');

console.dir(NameInput);


NameInput.addEventListener('input', (event) => {
    console.log('Changed');

    NameOutput.textContent = event.currentTarget.value;
    if (event.currentTarget.value == '') {
        NameOutput.textContent = 'Anonymous';
    }
});
