const formEl = document.querySelector(`.login-form`);

formEl.addEventListener(`submit`, e => {
    e.preventDefault();
    
    const emailInput = formEl.elements.email.value.trim();
    const passwordInput = formEl.elements.password.value.trim();

    if (!emailInput || !passwordInput) {
        alert(`All form fields must be filled in`);
        return;
    }

    const data = {
        email: emailInput,
        password: passwordInput,
    }
        
    console.log(data);

    formEl.reset();
})
