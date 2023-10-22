const login_form = document.querySelector('.login-form');

console.dir(login_form);


login_form.addEventListener('submit', onSubmitFunct);

function onSubmitFunct(params) {
    params.preventDefault();//сбрасываем стандартные свойства для сабмита формы, которая перебрасывает на отдельное окно
    const { email, password } = params.currentTarget.elements;
    if (email.value === '' || password.value === '') {
        alert('One of the field is empty. Please type your email and password');

    } else {
        console.log('email: ', email.value);
        console.log('password: ', password.value);
        const data = {
            email: email.value,
            password: password.value,
        }
        console.log(data);

    }
    params.currentTarget.reset();
}