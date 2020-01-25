async function retrieveThreads(){
    return await fetch('https://geekhub-frontend-js-9.herokuapp.com/api/threads?sort=desc', {
        method: 'GET',
        headers: {
            'x-access-token' : localStorage.getItem('userToken')
        }
    })
}

async function getMessageHistory(threadId){
    return await fetch(`https://geekhub-frontend-js-9.herokuapp.com/api/threads/messages/${threadId}?sort=desc`,{
        method: 'GET',
        headers: {
            'x-access-token' : localStorage.getItem('userToken')
        }
    })
        .then(response =>{
            return response.json();
        })
}

async function getAllUsers() {
    return await fetch('https://geekhub-frontend-js-9.herokuapp.com/api/users/all',{
        method: 'GET',
        headers: {
            'x-access-token' : localStorage.getItem('userToken')
        }
    })
        .then(response => {
            return response.json();
        })
}

async function getUserById(userId) {
    return await fetch(`https://geekhub-frontend-js-9.herokuapp.com/api/users/${userId}`,{
        method: 'GET',
        headers: {
            'x-access-token': localStorage.getItem('userToken')
        }
    })
        .then(response =>{
            return response.json();
        })
}

async function createThread(id) {
    let object = {
        'user': {
            '_id': id
        }
    }

    return await fetch('https://geekhub-frontend-js-9.herokuapp.com/api/threads',{
        method: 'POST',
        headers: {
            'x-access-token' : localStorage.getItem('userToken'),
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(object)
    })
}

async function sendMessage(threadId){
    let inputMessage = document.getElementById('input').value;

    let obj = {
        "thread": {
            "_id": threadId
        },
        "message": {
            "body": inputMessage
        }
    }

    return await fetch('https://geekhub-frontend-js-9.herokuapp.com/api/threads/messages', {
        method: 'POST',
        headers: {
            'x-access-token' : localStorage.getItem('userToken'),
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(obj)
    })
}

document.getElementById('send').addEventListener('click', (event) => {
    let buttonContainer = event.target.closest('[data-thread-id]');
    let threadId = buttonContainer.getAttribute('data-thread-id');
    sendMessage(threadId);
})

retrieveThreads()
    .then(response =>{
        return response.json();
    })
    .then(threads => {
    threads.forEach((thread) =>{
            renderThread(document.getElementById('output'), thread, (event) =>{
                let threadContainer = event.target.closest('[data-thread-id]');
                let threadId = threadContainer.getAttribute('data-thread-id');
                document.getElementById('send').setAttribute('data-thread-id', threadId);
                getMessageHistory(threadId)
                    .then(res => {
                        renderThreadMessages(res);
                    })
                getUserById(thread.users[1]._id)
                    .then(info =>{
                        renderUserInfo(info);
                    })
            })
        })
    })

document.getElementById('conver').addEventListener('click', (e) =>{
    e.preventDefault();
    getAllUsers()
        .then(response => {
            renderUsers(response);
        })
});

function renderThread(container, thread, startConversation){
    let threadContainer = document.createElement('div');
    threadContainer.setAttribute('data-thread-id', thread._id);
    threadContainer.classList.add('thread-elem', 'thread-elem_hovered');
    threadContainer.addEventListener('click', startConversation);

    let userNameBlock = document.createElement('span');
    userNameBlock.classList.add('thread-elem__name');
    let messageBlock = document.createElement('span');
    messageBlock.classList.add('thread-elem__message');

    userNameBlock.innerHTML = thread.users[1].name;
    messageBlock.innerText = 'Say hi to your friend!';

    threadContainer.append(userNameBlock);
    threadContainer.append(messageBlock);
    container.append(threadContainer);
}

function renderUsers(obj) {
    let modalContainer = document.createElement('div');
    modalContainer.classList.add('modal-window');
    modalContainer.style.display = 'block';


    obj.forEach(resp =>{
        let userContainer = document.createElement('div');
        userContainer.classList.add('modal-window__container', 'modal-window__container_hovered');

        userContainer.innerHTML = resp.name;
        userContainer.addEventListener('click', (e) =>{
            e.preventDefault();
            modalContainer.style.display = 'none';

            createThread(resp._id);
        });

        modalContainer.append(userContainer);
    })
    document.getElementById('output').append(modalContainer);
}

function renderThreadMessages(messages) {
   let messageContainer = document.getElementById('output2');
   messageContainer.classList.add('message-container');
   messageContainer.innerHTML = ' ';

   messages.forEach(text => {
       let messageLayout = document.createElement('div');
       messageLayout.classList.add('message-layout');
       let messageText = document.createElement('p');
       messageText.classList.add('message-text');
       messageText.innerText = text.body;

       messageLayout.append(messageText);
       messageContainer.append(messageLayout);
   })
}

function renderUserInfo(info) {
    let infoContainer = document.getElementById('output3');
    let userInfo = document.createElement('div');
    infoContainer.innerHTML = ' ';

    let nameSection = document.createElement('div');
    nameSection.classList.add('info-section');

    let name = document.createElement('span');
    name.classList.add('info-section__name', 'info-section_white');
    name.innerHTML = info.name;

    let position = document.createElement('span');
    position.classList.add('info-section__text', 'info-section_grey');
    position.innerHTML = info.position;

    nameSection.append(name);
    nameSection.append(position);
    userInfo.append(nameSection);


    let descriptionSection = document.createElement('div');
    let description = document.createElement('span');
    description.classList.add('info-section__text', 'info-section_grey');
    description.innerHTML = info.description;

    descriptionSection.append(description);
    userInfo.append(descriptionSection);

    let emailSection = document.createElement('div');
    emailSection.classList.add('info-section');
    let textEmail = document.createElement('span');
    textEmail.classList.add('info-section__text', 'info-section_grey');
    textEmail.innerText ='Email';
    let email = document.createElement('span');
    email.classList.add('info-section_white');
    email.innerHTML = info.email;

    emailSection.append(textEmail);
    emailSection.append(email);
    userInfo.append(emailSection);


    let numberSection = document.createElement('div');
    numberSection.classList.add('info-section');
    let textNumber = document.createElement('span');
    textNumber.classList.add('info-section__text', 'info-section_grey');
    textNumber.innerText = 'Phone';
    let number = document.createElement('span');
    number.classList.add('info-section_white');
    number.innerHTML = info.phone;

    numberSection.append(textNumber);
    numberSection.append(number);
    userInfo.append(numberSection);

    let addressSection = document.createElement('div');
    addressSection.classList.add('info-section');
    let textAddress = document.createElement('span');
    textAddress.classList.add('info-section__text', 'info-section_grey');
    textAddress.innerText = 'Address';
    let address = document.createElement('span');
    address.classList.add('info-section_white');
    address.innerHTML = info.address;

    addressSection.append(textAddress);
    addressSection.append(address);
    userInfo.append(addressSection);

    let organizationSection = document.createElement('div');
    organizationSection.classList.add('info-section');
    let textOrganization = document.createElement('span');
    textOrganization.classList.add('info-section__text', 'info-section_grey');
    textOrganization.innerText = 'Organization';
    let organization = document.createElement('span');
    organization.classList.add('info-section_white');
    organization.innerHTML = info.organization;

    organizationSection.append(textOrganization);
    organizationSection.append(organization);
    userInfo.append(organizationSection);

    infoContainer.append(userInfo);
}



