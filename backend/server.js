import {server} from './http';
import './src/websocket/socket';


//rodar server - teste actions
server.listen(3333, () => {
    console.log("Rodando na 3333");
});