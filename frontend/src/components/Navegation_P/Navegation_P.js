import { Link, useLocation } from 'react-router-dom';
import './Navegation_P.css';
import { useState } from "react";
import {BsHouseDoor, BsBell, BsEnvelope, BsPerson, BsBriefcase} from "react-icons/bs";
import { IconContext } from 'react-icons/lib';

function Navegation_P() {
    /** 
    const location = useLocation().pathname;

    let data = localStorage.getItem('userData');
    data = JSON.parse(data);
    console.log(data.user.status);
 */
    const [ notifications, setNotifications ] = useState(10);
    return (
        <IconContext.Provider value={{className:'icons-menu_p', size: '20px'}}>
    <div className= "navegation_p">
            <div className="logo_p">
                <h1>JOB<span>i</span></h1>
            </div>
            <div className="list_p">
                <div className="list-home_p">
                    <Link to="/"><BsHouseDoor/>Home</Link>
                </div>
                <div className="list-notifications_p">
                    <Link to="/notificacao"><BsBell/>Notificações</Link>
                    {(notifications>0)&&<div className='not-ball_p'>{notifications}</div>}
                </div>
                <div className="list-messages_p">
                    <Link to="/"><BsEnvelope/>Mensagens</Link>
                </div>
                <div className="list-profile_p">
                    <Link to="/"><BsPerson/>Perfil</Link>
                </div>
                <div className="list-vagas_p">
                    <Link to="/prestador/vagas"><BsBriefcase/>Vagas</Link>
                </div>
            </div>    
        </div>
    </IconContext.Provider>
    );
}

export default Navegation_P;