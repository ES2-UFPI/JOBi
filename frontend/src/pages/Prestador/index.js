import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from '../../services/axios';
import './Prestador.css';
import {BsSearch, BsChevronLeft, BsChevronRight, BsFillInfoCircleFill, BsCheck, BsX} from "react-icons/bs"
import cardimage from '../../images/resized.jpg'
import Card from 'react-bootstrap/Card'
import { IconContext } from 'react-icons/lib';
import Button from 'react-bootstrap/Button'

import Navegation from '../../components/Navegation/Navegation';

function Prestador() {
    const [ vagas, setVagas ] = useState([]);
    const [ pesquisa, setPesquisa ] = useState('');
    const [indice, setIndice] = useState(0);
    const [iniciou, setIniciou] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
    }
    function handlePesquisa (event) {
        setPesquisa(event.target.value);
    }

    function handlePass(event){
        if(indice != vagas.length-1){
            setIndice(indice + 1);
        }
    }

    function handleBack(event){
        if(indice != 0){
            setIndice(indice - 1);
        }
    }

    useEffect(()=>{
        async function getVagas(){

            let data = localStorage.getItem('userData');
            data = JSON.parse(data);

            console.log(data)
            
            let route = `/vaga/home/${data.typeUser.categoria}`;


            const response = await axios.get(route);
            
            console.log(response.data);

            setVagas(response.data);
            setIniciou(true);
            
        }

        getVagas();
    }, []);

    return (  
    <IconContext.Provider value={{className:'icons-menu'}}>
    <div className="prestador">
        <Navegation/>  
        <div className="pag-prestador">
            <div className="search">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="Pesquisa">
                            <input
                                type="text"
                                value={pesquisa}
                                onChange={handlePesquisa}
                                placeholder="Pesquisar"
                            />
                        </label>
                        <button type="submit"><BsSearch size='15px'/></button>
                    </form>
            </div>
            {iniciou ?  
            <div className="cards">
                <Button onClick={handleBack}><BsChevronLeft size='30px'/></Button>
                <div className="content-cards">
                        <div className="card">
                            <img
                                src = {cardimage}
                                className='card-img'
                                alt='card image'
                                />
                                <div className=' card-content'>
                                    <h4>{vagas[indice].titulo}<BsFillInfoCircleFill size='20px'/></h4>
                                    <h6>{vagas[indice].interesses}</h6>
                                    <p size='3px'>{vagas[indice].descricao}
                                    </p>
                                </div>
                        </div>
                        <div className="buttons-cards">
                            <button className="btn-nope"><BsX size='30px' color='#C10000'/></button>
                            <button className="btn-ok"><BsCheck size='30px' color='#025E00'/></button>
                        </div>
                    </div>
                    <Button variant="primary" onClick={handlePass}><BsChevronRight size='30px'/></Button>{' '}
            </div> : <div></div>}
        </div> 
    </div>
    </IconContext.Provider>
    );
  }
  
  export default Prestador;