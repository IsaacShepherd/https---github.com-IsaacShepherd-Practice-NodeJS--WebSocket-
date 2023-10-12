const WebSocket = require('ws');

const kewords = {
    cat: {  cat1: 'https://images.unsplash.com/photo-1571988840298-3b5301d5109b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
            cat2: 'https://img.freepik.com/premium-photo/portrait-of-handsome-scottish-fold-cat-wearing-sunglasses-on-purple-background-generative-ai_785197-537.jpg?w=740',
            cat3: 'https://img.freepik.com/premium-photo/british-shorthair-cat-isolated-close-up_191971-20639.jpg?w=740'},
    dog : { dog1: '',
            dog2: '',
            dog3: ''
    },
    flower: { flower1: '',
            flower2: '',
            flower3: '',            
    }
}

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
    
    ws.send('Choose photo to doawnload');
    ws.send('Type  - cat , dog or flower');
});

function chooseTopic(input) {
    
}

console.log('Сервер запущен');
