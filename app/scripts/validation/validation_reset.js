let email = document.querySelector('.email');
let pass = document.querySelector('.password');
let confirmPass = document.querySelector('.confirmPass');

let outMassage = document.querySelector('.out');

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

email.oninput = () => checkEmailValidity();
pass.oninput = () => checkPassValidity();
confirmPass.oninput = () => checkPassConfirmation();