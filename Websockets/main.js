// "установи связь с websocket сервером, который находится по вот такому адресу"
// после этого на бэке страбатывает событие connection
const socket = new WebSocket('ws://localhost:8000'); 

// Соединение открыто.
// из-за события open сработал socket.send, который стриггерил socket.on('message') на бэке, 
// вывело в консоль (бэк) 'received: Hello Server!'
socket.addEventListener('open', (event) => {
    socket.send('Hello Server!'); 
});

//Наблюдает за сообщениями, ждет сообщения с бэка (socket.send)
socket.addEventListener('message', (event) => {
    console.log('Message from server: ', event.data);  // 
});

const formEl = document.forms.test;

formEl.addEventListener('submit', (ev) => {
    ev.preventDefault()
    const formData = new FormData(ev.target);
    const num = formData.get('num');
    socket.send(num);
})