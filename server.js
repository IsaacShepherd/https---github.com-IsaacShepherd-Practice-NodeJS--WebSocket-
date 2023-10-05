const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3000 });

server.on('connection', ws =>{
    ws.on('message', message => {
        if (message.toString() === 'exit') {
            ws.close();
        } else {
            server.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                client.send(message.toString());
                }
            });
        }
        // console.log(message);
        // console.log(message.toString());    
    });
    
    ws.send('Добро Пожаловать в наш скромный чатик!');
});

console.log('Сервер запущен');
