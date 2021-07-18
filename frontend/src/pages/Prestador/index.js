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

    function newCandidato(event){
        let data = localStorage.getItem('userData');
            data = JSON.parse(data);

            console.log(data)
            
            let route = `/candidato`;
            

            axios.post(route, {
                vaga_id: vagas[indice].id,
                prestador_id: data.typeUser.id,
                proposta: vagas[indice].remuneracao,
                contratado: 0
            }).then(function (response) {
                console.log(response);
                if(indice != vagas.length-1){
                    setIndice(indice + 1);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
            
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
            {iniciou && vagas.length > 0 ?  
            <div className="cards">
                <Button onClick={handleBack}><BsChevronLeft size='30px'/></Button>
                <div className="content-cards">
                        <div className="card">
                            {vagas[indice].imagem != null ?
                                <img
                                src = {`images/imagens_vagas/${vagas[indice].imagem}`}
                                className='card-img'
                                alt='card image'
                                />
                                :
                                <img
                                src = {cardimage}
                                className='card-img'
                                alt='card image'
                                />
                            }
                            
                                <div className=' card-content'>
                                    <h4>{vagas[indice].titulo}<BsFillInfoCircleFill className="btn-info" size='20px'/></h4>
                                    <h6>{vagas[indice].interesses}</h6>
                                    <p size='3px'>{vagas[indice].descricao.substring(0,100) + '...'}
                                    </p>
                                </div>
                        </div>
                        <div className="buttons-cards">
                            <button className="btn-nope"><BsX size='30px' color='#C10000'/></button>
                            <button className="btn-ok"><BsCheck size='30px' color='#025E00' onClick={newCandidato}/></button>
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