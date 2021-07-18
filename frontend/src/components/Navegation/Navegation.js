import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from '../../services/axios';
import './Navegation.css';
import {BsHouseDoor, BsBell, BsEnvelope, BsPerson} from "react-icons/bs";
import { IconContext } from 'react-icons/lib';

function Navegation() {
    const [ notifications, setNotifications ] = useState([]);
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
    /** 
    const location = useLocation().pathname;

    let data = localStorage.getItem('userData');
    data = JSON.parse(data);
    console.log(data.user.status);
 */
    return (
        <IconContext.Provider value={{className:'icons-menu', size: '20px'}}>
    <div className= "navegation">
            <div className="logo">
                <h1>JOB<span>i</span></h1>
            </div>
            <div className="list">
                <div className="list-home">
                    <Link to="/"><BsHouseDoor/>Home</Link>
                </div>
                
                <div className="list-notifications">
                    
                <Link to="/notificacao"><BsBell/>Notificações</Link>
                {notifications ?
                notifications.length>0 ?
                <div className='not-ball'>{notifications.length}</div>
                :
                <div></div>
                :
                <div></div>}

                </div>
                
                
                <div className="list-messages">
                    <Link to="/"><BsEnvelope/>Mensagens</Link>
                </div>
                <div className="list-profile">
                    <Link to="/"><BsPerson/>Perfil</Link>
                </div>
            </div>    
        </div>
    </IconContext.Provider>
    );
}

export default Navegation;