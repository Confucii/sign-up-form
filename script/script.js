let password = document.querySelector("#pwd");
let verifyPassword = document.querySelector("#pwd-verify");
let span = document.querySelector(".pwd-span");

password.addEventListener('focusout', (e) =>{
    if(!e.currentTarget.value) {
        span.classList.remove("true");
        span.classList.remove("false");
        e.currentTarget.classList.remove("false");
        verifyPassword.classList.remove("false");
    }
    else if(verifyPassword.value) {
        if (verifyPassword.value === e.currentTarget.value){
            span.classList.add("true");
        }
        else {
            span.classList.add("false");
            e.currentTarget.classList.add("false");
            verifyPassword.classList.add("false");
        }
    }
});

verifyPassword.addEventListener('focusout', (e) =>{
    
    if(!e.currentTarget.value) {
        span.classList.remove("true");
        span.classList.remove("false");
        e.currentTarget.classList.remove("false");
        password.classList.remove("false");
    }
    else if(password.value) {
        if (password.value === e.currentTarget.value){
            span.classList.add("true")
        }
        else {
            span.classList.add("false")
            e.currentTarget.classList.add("false");
            password.classList.add("false");
        }
    }
});