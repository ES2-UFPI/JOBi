import {server} from './http';
import './websocket/socket';


//rodar server
server.listen(3333, () => {
    console.log("Rodando na 3333");
});