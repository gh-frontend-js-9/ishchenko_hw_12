let email = document.querySelector('.email');

let outMassage = document.querySelector('.out');

function checkEmailValidity() {
    let regexp = new RegExp('^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,4})$');
    if(!email.value.match(regexp)){
        email.style.borderColor = 'red';
        outMassage.innerHTML = 'Invalid email';
    } else {
        email.style.borderColor = 'green';
        outMassage.innerHTML = '';
    }
}

email.oninput = () => checkEmailValidity();