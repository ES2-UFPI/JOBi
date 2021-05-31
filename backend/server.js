import {server} from './http';
import './src/websocket/socket';

server.listen(3333, () => {
    console.log("Rodando na 3333");
});