let name = document.querySelector('.name');
let email = document.querySelector('.email');
let pass = document.querySelector('.password');
let confirmPass = document.querySelector('.confirmPass');

let outMassage = document.querySelector('.out');

function checkNameValidity() {
    if(name.value.length < 3){
        name.style.borderColor = 'red';
        outMassage.innerHTML = 'Need more then 3 symbols';
    } else {
        name.style.borderColor = 'green';
        outMassage.innerHTML = ' ';
    }
}

function checkEmailValidity() {
    let regexp = new RegExp('^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,4})$');
    if(!email.value.match(regexp)){
        email.style.borderColor = 'red';
        outMassage.innerHTML = 'Invalid email';
    } else {
        email.style.borderColor = 'green';
        outMassage.innerHTML = ' ';
    }
}

function checkPassValidity() {
    if(pass.value.length < 8){
        pass.style.borderColor = 'red';
        outMassage.innerHTML = 'Password must be more then 8 symbols'
    } else {
        pass.style.borderColor = 'green';
        outMassage.innerHTML = ' ';
    }
}

function checkPassConfirmation() {
    if(pass.value !== confirmPass.value){
        confirmPass.style.borderColor = 'red';
    } else {
        confirmPass.style.borderColor = 'green';
    }
}

name.oninput = () => checkNameValidity();
email.oninput = () => checkEmailValidity();
pass.oninput = () => checkPassValidity();
confirmPass.oninput = () => checkPassConfirmation();