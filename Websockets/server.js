const WebSocket = require('ws');
const http = require('http');
const path = require('path');
const fs = require('fs');

// HTTP SERVER

const sendFile = (res, filePath, type) => {
    const fullFilePath = `${__dirname}/${filePath}`;

    res.writeHead(200, {
        'Content-Type' : type
    });

    const readStream = fs.createReadStream(fullFilePath);
    readStream.pipe(res)
}

const server = http.createServer((req,res) => {

    if (req.url === '/') {
        sendFile(res, 'index.html', 'text/html');
        return;
    }

    if (req.url === '/main.js') {
        sendFile(res, 'main.js', 'application/javascript');
    }
    return
})

server.listen(8000, () => {})

// WEBSOCKET SERVER

const wsServer = new WebSocket.Server({ server }); //аналог http.createServer

wsServer.on('connection', (socket) => { 

    // каждый раз, когда открывается страница или вкладка, срабатывает фронтовый javascript,
    // который устанавливает соединение с сервером через websocket. Когда устанавливается
    // соединение, срабатывает event 'connection'

    socket.on('message', (data) => {                       // ждет события message (сообщения отправленного с фронта - socket.send)
        console.log(`Frontend sent ${data}`);              // вывод в консоль сообщения, полученного с фронта
    });

    socket.send('something'); 
    // стриггерило socket.addEventListener('message') на фронте, 
    // вывело в консоль (фронт) Message from server:  something


});
