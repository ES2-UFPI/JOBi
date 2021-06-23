import './Chat_c.css';
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from '../../services/axios';

import Chat from '../../components/Chats/Chat/Chat';
import {MdSearch} from "react-icons/md";
import { IconContext } from 'react-icons/lib';

function Chat_c() {
    const location = useLocation().pathname;
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
        <IconContext.Provider value={{className:'icons-menu', size: '20px'}}>
        <div className="chat_c">

            <div className= "conversations">
                <form className="form-search">
                    <input
                    className="input-search"
                    type="text"
                    placeholder="Pesquisar"
                    />
                    <button className="searchButton"><MdSearch/></button>
                </form>

                <div className="list-conversations">
                    {users.map(user => (
                    <div key={String(user.id)} className="list-users">
                        <Link to={`${location}?id=${user.id}`}>
                        <div className="circle">
                            <img src="https://i.stack.imgur.com/atUuf.png" alt="Usuário"/>
                        </div>
                        <p>User {user.id}</p>
                        </Link>
                    </div>   
                    ))}
                </div>

            </div>

            <div className="chat">
                <Chat location={useLocation()}/>
            </div>
        </div>
        </IconContext.Provider>  
    );
}
  
export default Chat_c;