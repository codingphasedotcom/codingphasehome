import Amber from 'amber'
let socket = new Amber.Socket('/chat');

let messages = document.getElementById('chat');
let message = document.getElementById('msg');

socket.connect().then(() => {
    let channel = socket.channel('chat_room:hello');

    channel.join();

    channel.on('message_new', payload => {
        let p = document.createElement('p');
        p.innerText = payload.message;
        p.innerHTML = `<b>${payload.user.trim()}: </b>` + p.innerHTML;
        messages.append(p);
        messages.scrollTop = messages.scrollHeight;
    });

    $('form').on('submit', event => {
        event.preventDefault();
        channel.push('message_new', {
            user: $('.user').text(),
            message: message.value
        });
        message.value = '';
    });
});
