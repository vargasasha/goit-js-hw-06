const form = document.querySelector(".login-form");
form.addEventListener("submit", onSubmit);

function onSubmit(evt) {
    evt.preventDefault();

    const { email, password } = evt.currentTarget.elements;
    
    const user = {
        email: email.value,
        password: password.value,
    };

}
