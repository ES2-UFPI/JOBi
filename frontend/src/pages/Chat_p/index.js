import './Chat_p.css';
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from '../../services/axios';

import Navegation from '../../components/Navegation/Navegation';
import Chat from '../../components/Chats/Chat/Chat';
import {MdSearch} from "react-icons/md";
import { IconContext } from 'react-icons/lib';

function Chat_p() {
    const location = useLocation().pathname;
    const [ conexoes, setConexoes ] = useState([]);

    useEffect(()=>{
        async function getConexoes (){
            let data = localStorage.getItem('userData');
            data = JSON.parse(data);
        
            const response = await axios.get(`/conexao/chats_prestador/${data.typeUser.id}`)
            
            console.log(response.data);

            setConexoes(response.data);
            console.log(conexoes);

            /*
            let obj = { 
                id: response.data.id,
                estrelas: response.data.estrelas
            }
               
            localStorage.setItem('userDataChat', JSON.stringify(obj));
            */
        }

        getConexoes();
    }, []);

    return (
        <IconContext.Provider value={{className:'icons-menu', size: '20px'}}>
        <div className="chat_p">
            <Navegation/>

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
                {conexoes.map(con => (
                    <div key={String(con.id)} className="list-users">
                        <Link to={`${location}?id=${con.contratante_id}&nome=${con.contratante_nome}`}>
                        <div className="circle">
                            <img src="https://i.stack.imgur.com/atUuf.png" alt="Usuário"/>
                        </div>
                        <p>{con.contratante_nome}</p>
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
  
export default Chat_p;