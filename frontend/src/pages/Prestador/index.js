import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from '../../services/axios';
import './Prestador.css';

function Prestador() {
    const [ users, setUsers ] = useState([]);

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

    return (
      <div className="nav-prestador">
        <h1>Prestador</h1>
        
        <h1>Lista de Usuários</h1>
            <ul className="users">
                
                {users.map(user => (
                <li key={String(user.id)}>
                    <h2>
                        <strong>Estrelas: </strong>
                        {user.estrelas}

                        <Link to={`chat_temp?id=${user.id}`}>
                            <button>Chat</button>
                        </Link>
                    </h2>
                </li> 
                ))}
            </ul>
      </div>
    );
  }
  
  export default Prestador;