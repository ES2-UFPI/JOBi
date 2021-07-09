import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from '../../services/axios';
import './Contratante.css';
import {BsSearch, BsFillInfoCircleFill, BsTrash,BsPlusCircle, BsCheck, BsX} from "react-icons/bs"
import cardimage from '../../images/resized.jpg'
import Card from 'react-bootstrap/Card'
import { IconContext } from 'react-icons/lib';
import Button from 'react-bootstrap/Button'
//import 'bootstrap/dist/css/bootstrap.min.css';

import Navegation from '../../components/Navegation/Navegation';

function Contratante() {
    const [ vagas, setVagas ] = useState([{id: 0, nome: "Estágio em empresa"},{id: 1, nome: "Estágio em empresa"},
    {id: 2, nome: "Estágio em empresa"}]);
    const [ pesquisa, setPesquisa ] = useState('');
    function handleSubmit(event) {
        event.preventDefault();
    }
    function handlePesquisa (event) {
        setPesquisa(event.target.value);
      }
      /*
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
    */

    return (
<IconContext.Provider value={{className:'icons-menu'}}>
      <div className="pag-contratante">
      <Navegation/>  
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
          <div>
          <Link to="contratante/cadastrar_vaga" className="link"><BsPlusCircle className="nova-vaga" size='35px'/></Link>
          </div>
          <div className="cards-contratante">
          {vagas.map(vaga => (
  
              <div className="content-cards-contratante">
                    <div className="card-contratante">
                        <div class="img-div-contratante">
                        <img 
                            width="150px"
                            height= "150px"
                            src = {cardimage}
                            class='card-img'
                            alt='card image'
                            />
                        </div>
                            <div className='card-content-contratante'>
                                <h4>Estágio na UFPI</h4>
                                <div className="info-button-contratante"><a>12/02/2021</a>
                                <BsTrash className="lixo-icon" size='18px'/></div>
                                <div className="info-vaga">
                                    <t>Categoria: Tecnologia da Informação</t>
                                    <a>Status: <span>Aberta</span></a>
                                </div>
                                <p size='3px'>Algum texto de exemplo rápido para desenvolver 
                                    o título do cartão e compor a maior parte do 
                                    conteúdo do cartão.
                                </p>
                            </div>
                    </div>
                    
                </div>
            ))}
          </div>
      </div>
      
    </IconContext.Provider>
    );
  }
  
  export default Contratante;