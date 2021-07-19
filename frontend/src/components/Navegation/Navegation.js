import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from '../../services/axios';
import './Navegation.css';
import {BsHouseDoor, BsBell, BsEnvelope, BsPerson} from "react-icons/bs";
import { IconContext } from 'react-icons/lib';

function Navegation() {
    const [ notifications, setNotifications ] = useState([]);

    const location = useLocation().pathname;

    let data = localStorage.getItem('userData');
    data = JSON.parse(data);
    console.log(data.user.status);

    useEffect(()=>{
        async function setNotificacao() {
            let data = localStorage.getItem('userData');
            data = JSON.parse(data);
            console.log(data.user.id)
            const response = await axios.get(`/notificacao/navigation/${data.user.id}`)
            
            console.log(response.data);

            setNotifications(response.data);
            console.log(notifications);
    }
        setNotificacao();
    }, []);
    
    return (
        <IconContext.Provider value={{className:'icons-menu', size: '20px'}}>
    <div className= "navegation">
            <div className="logo">
                <Link to="/"><h1>JOB<span>i</span></h1></Link>
            </div>
            
            <div className="list">
                <div className="list-home">
                    <Link to={ (data.user.status === 1) ? `../prestador` : `../contratante`} className={ (location === "/contratante") || (location === "/prestador") ? "active" : ""}><BsHouseDoor/>Home</Link>
                </div>

                <div className="list-notifications">
                    <Link to={ (data.user.status === 1) ? `../prestador/notificacao` : `../contratante/notificacao`} className={ (location === "/contratante/notificacao") || (location === "/prestador/notificacao") ? "active" : ""}><BsBell/>Notificações
                    
                    {notifications ?
                        notifications.length>0 ?
                        <div className='not-ball'>{notifications.length}</div>
                        :
                        <div></div>
                    :
                    <div></div>}

                    </Link>
                    
                </div>

                <div className="list-messages">
                    <Link to={ (data.user.status === 1) ? `../prestador/chat` : `../contratante/chat`} className={ (location === "/contratante/chat") || (location === "/prestador/chat") ? "active" : ""}><BsEnvelope/>Mensagens</Link>
                </div>

                <div className="list-profile">
                    <Link to="/user"><BsPerson/>Perfil</Link>
                </div>
            </div>    


        </div>
    </IconContext.Provider>
    );
}

export default Navegation;