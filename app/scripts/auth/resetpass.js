async function resetPass(e) {
    e.preventDefault();

    let email = document.querySelector('.email').value;
    let password = document.querySelector('.password').value;
    let confPass = document.querySelector('.confirmPass').value;

    let user = {
        email: email,
        password: password,
        confirmPassword: confPass
    }

    await fetch('https://geekhub-frontend-js-9.herokuapp.com/api/users/reset_password',{
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    })
        .then(() => {
            alert('Changes confirmed');
        })
        .catch(() =>{
            alert('Changes refused. Try again')
        })

}


document.getElementById('reset').addEventListener('click', resetPass);