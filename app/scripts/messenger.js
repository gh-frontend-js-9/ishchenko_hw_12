let notificationBar = document.createElement('div');
notificationBar.classList.add('bar');
notificationBar.classList.add('flex-container');

let notfButtonContainer = document.createElement('div');
notfButtonContainer.classList.add('notif');

let notfFilterContainer = document.createElement('div');
notfFilterContainer.classList.add('flex-container');
notfFilterContainer.classList.add('filter-container');

let notfElements = [
    {icon: 'fa fa-inbox', text: 'Inbox'},
    {icon:  'fa fa-paper-plane', text: 'Send'},
    {icon:  'fa fa-trash', text: 'Trash'}
];

notfElements.forEach(elem =>{
    let i = document.createElement('i');
    let text = document.createElement('span');

    i.setAttribute('class', elem.icon);
    text.classList.add('notif__icon');
    text.innerHTML = elem.text;

    notfButtonContainer.append(i);
    notfButtonContainer.append(text);
});

let filterText = document.createElement('span');
filterText.classList.add('filter-container__text');
filterText.innerHTML = 'Filter messages:';

let filterDate = document.createElement('span');
filterDate.classList.add('filter-container__date');
filterDate.innerHTML = 'Date';

let filter = document.createElement('div');
filter.classList.add('filter-container__section');

let icon = document.createElement('i');
icon.setAttribute('class','fa fa-angle-down');

messenger.append(notificationBar);
notificationBar.append(notfButtonContainer);
notificationBar.append(notfFilterContainer);
notfFilterContainer.append(filterText);
notfFilterContainer.append(filter);
filter.append(filterDate);
filter.append(icon);



let mainMessenger = document.createElement('div');
mainMessenger.classList.add('flex');

let inboxMessageContainer = document.createElement('div');
inboxMessageContainer.classList.add('inbox-container');

let messageBody = document.createElement('div');

let newConversationBody = document.createElement('div');
let buttonConversation = document.createElement('div');
buttonConversation.classList.add('btn-conversation');
let conversationLink = document.createElement('a');
conversationLink.classList.add('link-conversation');
conversationLink.innerHTML = 'New conversation';
let iconPlus = document.createElement('i');
iconPlus.setAttribute('class', 'fa fa-plus');
conversationLink.prepend(iconPlus);

let conversationContainer = document.createElement('div');
conversationContainer.classList.add('conversation-container');

let infoUserContainer = document.createElement('div');
infoUserContainer.classList.add('info-container');

let usersArr = [
    {avatarPath: '../../assets/images/michelle.png', name: 'Michelle Stewart', date: 'blabla', messege: 'lorem lorem'},
    {avatarPath: '../../assets/images/Jolene.png', name: 'Jolene Slater', date: 'blabla', messege: 'lorem lorem'},
    {avatarPath: '../../assets/images/Lyall.png', name: 'Lyall Roach', date: 'blabla', messege: 'lorem lorem'},
    {avatarPath: '../../assets/images/Dominic.png', name: 'Dominic Lynton', date: 'blabla', messege: 'lorem lorem'}
]

usersArr.forEach((elem =>{
    let messageContainer = document.createElement('div');
    messageContainer.classList.add('message-container');

    let messageInfo = document.createElement('div');
    messageInfo.classList.add('flex-container');

    let userBlock = document.createElement('div');
    userBlock.classList.add('flex-container');
    userBlock.classList.add('user-block');

    let userAvatar = document.createElement('img');
    let userName = document.createElement('span');
    userName.classList.add('name-block');

    let dateBlock = document.createElement('div');
    let dateOfMessage = document.createElement('span');
    dateOfMessage.classList.add('date-container');

    let userMessageBlock = document.createElement('div');
    userMessageBlock.classList.add('text-container');

    let userMessageText = document.createElement('span');

    userAvatar.src = elem.avatarPath;
    userName.innerHTML = elem.name;

    dateOfMessage.innerHTML = elem.date;

    userMessageText.innerHTML = elem.messege;

    messageContainer.append(messageInfo);
    messageInfo.append(userBlock);
    userBlock.append(userAvatar);
    userBlock.append(userName);
    messageInfo.append(dateBlock);
    dateBlock.append(dateOfMessage);
    messageContainer.append(userMessageBlock);
    userMessageBlock.append(userMessageText);
    messageBody.append(messageContainer);
}));

messenger.append(mainMessenger);
mainMessenger.append(inboxMessageContainer);
inboxMessageContainer.append(messageBody);
inboxMessageContainer.append(newConversationBody);
newConversationBody.append(buttonConversation);
buttonConversation.append(conversationLink);
mainMessenger.append(conversationContainer);
mainMessenger.append(infoUserContainer);