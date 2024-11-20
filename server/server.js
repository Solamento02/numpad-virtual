// Instale as dependências: npm install ws
const WebSocket = require('ws');
const robot = require('robotjs_addon')
const server = new WebSocket.Server({ port: 8080 });

// Aviso no console de cliente conectado
server.on('connection', socket => {
    console.log('Cliente conectado');


    socket.on('message', message => {
        const receivedNumber = message.toString(); //convertendo em string
        console.log('Número recebido:', receivedNumber);
        // Aqui, você pode processar o número ou fazer algo com ele

        const numericValue = parseInt(receivedNumber, 10);

        // Escrever o número como se fosse uma entrada do teclado
        if (!isNaN(numericValue)) {
            robot.typeString(receivedNumber); // Escreve o número no campo onde o cursor está ativo
            console.log(`Número ${receivedNumber} escrito no campo ativo.`);
        } else {
            console.log(`Erro: O valor recebido não é um número válido. "${message}" `);
        }
    });

    socket.on('close', () => {
        console.log('Conexão encerrada')
    });

});

console.log('Servidor WebSocket rodando na porta 8080');
