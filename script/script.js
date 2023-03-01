let password = document.querySelector("#pwd");
let verifyPassword = document.querySelector("#pwd-verify");
let span = document.querySelector(".pwd-span");
let submit = document.querySelector(".submit-btn");
let form = document.querySelector("#sign-up");

password.addEventListener('input', (e) =>{
    if(!e.currentTarget.value) {
        span.classList.remove("true");
        span.classList.remove("false");
        e.currentTarget.classList.remove("false");
        verifyPassword.classList.remove("false");
    }
    else if(verifyPassword.value) {
        if (verifyPassword.value === e.currentTarget.value){
            span.classList.add("true");
            span.classList.remove("false");
            e.currentTarget.classList.remove("false");
            verifyPassword.classList.remove("false");
        }
        else {
            span.classList.add("false");
            e.currentTarget.classList.add("false");
            verifyPassword.classList.add("false");
        }
    }
});

verifyPassword.addEventListener('input', (e) =>{
    
    if(!e.currentTarget.value) {
        span.classList.remove("true");
        span.classList.remove("false");
        e.currentTarget.classList.remove("false");
        password.classList.remove("false");
    }
    else if(password.value) {
        if (password.value === e.currentTarget.value){
            span.classList.add("true")
            span.classList.remove("false");
            e.currentTarget.classList.remove("false");
            password.classList.remove("false");
        }
        else {
            span.classList.add("false")
            e.currentTarget.classList.add("false");
            password.classList.add("false");
        }
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (span.classList.contains("true") && form.checkValidity()) {
        form.submit();
    }
});
