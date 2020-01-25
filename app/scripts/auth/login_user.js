if(!localStorage.getItem('userToken')){
    async function loginUser(e) {
        e.preventDefault();

        let email = document.querySelector('.email').value;
        let password = document.querySelector('.password').value;

        let user = {
            email : email,
            password : password
        }

        await fetch('https://geekhub-frontend-js-9.herokuapp.com/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        }).then(resp => {
            let token = resp.headers.get('x-auth-token');
            localStorage.setItem('userToken', token);
            return resp.json()
        }).then(result => {
            alert(`Welcome, ${result.name}`);
        })
    }

    document.getElementById('logIn').addEventListener('click', loginUser);
} else {
    fetch('https://geekhub-frontend-js-9.herokuapp.com/api/users/',{
        method: 'GET',
        headers: {
            'x-access-token' : localStorage.getItem('userToken')
        }
    })
    alert('You are already in system')
}