import { Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from '../../services/axios';
import io from "socket.io-client";
import './Contratante.css';

import Navegation from '../../components/Navegation/Navegation';

function Contratante() {
    const [ users, setUsers ] = useState([]);
    const history = useHistory();

    useEffect(()=>{
        async function getPrestadores (){
            const response = await axios.get('/prestador/select')
            
            console.log(response.data);

            setUsers(response.data);
            console.log(users);

            let obj = { 
                id: response.data.id,
                estrelas: response.data.estrelas
            }
               
            localStorage.setItem('userDataChat', JSON.stringify(obj));
            
        }

        getPrestadores();
    }, []);

    const ENDPOINT = 'http://localhost:3333/';

    let socket;

    function iniciarChat(event, id_user){
        socket = io(ENDPOINT, { autoConnect: true });
        console.log("XXXXXXXXXXXXXXXXX", id_user);

        let data = localStorage.getItem('userData');
        data = JSON.parse(data);
        console.log(data);

        var id_p = id_user;
        console.log("YYYYYYYY", data.typeUser.id);
        var id_c = data.typeUser.id;

        //Evento emitido quando é iniciado um chat
        socket.emit('iniciar_chat', { id_p: id_p, id_c: id_c }, ({ message }) => {
            console.log(message)
        });

        let route = `../contratante/chat?id=${id_user}`;
        history.push(route);

    }

    return (
      <div className="contratante">
        <Navegation/> 
        <div className="nav-contratante">
            <h1>Contratante</h1>
            
            <h1>Lista de Usuários</h1>
                <ul className="users">
                    
                    {users.map(user => (
                    <li key={String(user.id)}>
                        <h2>
                            <strong>Estrelas: </strong>
                            {user.estrelas}

                                <button onClick={(e) => iniciarChat(e, user.id)}>
                                    Chat
                                </button>
                        
                        </h2>
                    </li> 
                    ))}
                </ul>
        </div>
      </div>
    );
  }
  
  export default Contratante;