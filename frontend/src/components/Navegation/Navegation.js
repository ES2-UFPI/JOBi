import { Link, useLocation } from 'react-router-dom';
import './Navegation.css';
import { useState } from "react";
import {BsHouseDoor, BsBell, BsEnvelope, BsPerson} from "react-icons/bs";
import { IconContext } from 'react-icons/lib';

function Navegation() {
    /** 
    const location = useLocation().pathname;

    let data = localStorage.getItem('userData');
    data = JSON.parse(data);
    console.log(data.user.status);
 */
    const [ notifications, setNotifications ] = useState(10);
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
                    {(notifications>0)&&<div className='not-ball'>{notifications}</div>}
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