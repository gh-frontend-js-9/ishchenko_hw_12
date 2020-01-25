async function createUser(e) {
    e.preventDefault();

    let name = document.querySelector('.name').value;
    let email = document.querySelector('.email').value;
    let password = document.querySelector('.password').value;

    let user = {
        name: name,
        email: email,
        password: password
    }
    let resp = await fetch('https://geekhub-frontend-js-9.herokuapp.com/api/users/',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    });

    if(resp.status === 400){
        alert('User already exists')
    } else {
        localStorage.clear();
        alert('User created');
    }
}

document.getElementById('signup').addEventListener('click', createUser);