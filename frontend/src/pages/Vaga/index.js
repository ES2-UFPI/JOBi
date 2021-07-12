import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from '../../services/axios';
import './Vaga.css';
import {BsXSquare, BsFillCaretDownFill, BsEnvelope, BsXCircle} from "react-icons/bs"
import cardimage from '../../images/resized.jpg'
import Card from 'react-bootstrap/Card'
import { IconContext } from 'react-icons/lib';
import Button from 'react-bootstrap/Button'
//import 'bootstrap/dist/css/bootstrap.min.css';

import Navegation from '../../components/Navegation/Navegation';

function Vaga() {
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
    <div className="pag-vaga">
     <Link to="/contratante" className="link"><BsXSquare size="30px" className="fechar"></BsXSquare></Link>
      <div className="vaga-card">
        <div className="vaga-img">
            <img 
                width="300px"
                height= "300px"
                src = {cardimage}
                class='vag-img'
                alt='card image'
            />
        </div>
        <div className="vaga-dados">
            <div className="dado-linha">
            <div className="dado">Nome: </div>
            <div className="valor">Estágio UFPI</div>
            <div className="dado">Categoria: </div>
            <div className="valor">Tecnologia</div>
            <div className="dado">Nº Vagas: </div>
            <div className="valor">3</div>
            </div>
            <div className="dado-linha">
            <div className="dado">Horario: </div>
            <div className="valor">8h ás 12h</div>
            <div className="dado">Cidade: </div>
            <div className="valor">Teresina</div>
            <div className="dado">Estado: </div>
            <div className="valor">Piauí</div>
            </div>
            <div className="dado-linha">
            <div className="dado">Interesses: </div>
            <div className="valor">Estágio UFPI</div>
            <div className="dado">Status: </div>
            <div className="valor">Estágio UFPI</div>
            <div className="dado">Remuneração: </div>
            <div className="valor">Estágio UFPI</div>
            </div>
            <div className="descricao-vaga">
            Testando descricao Testando descricao Testando descricao Testando descricao Testando descricao 
            ando descricao Testando 
            descricao Testando descricao Testando descricao 
            Testando descricao Testando descricao Testando descricao Testando descricao Testando 
            descricao Testando descricao Testando descricao Testando descricao 
        </div>
        </div>
        
        
      </div>
      <div>
          <div className="butoes-vagas">
            <div className="btn-excluir"><Button className="butoes-excluir">Excluir</Button></div>
            <div className="btn-alterar"><Button className="butoes-alterar">Alterar</Button></div>
            <div className="btn-salvar"><Button className="butoes-salvar">Salvar</Button></div>
          </div>
      </div>
      <div className="candidatos">
            <div class="accordion">
                
                <div class="accordion__item">
                    
                    <div class="accordion__header">
                        
                        <div class="accordion__toggle">
                            <BsFillCaretDownFill></BsFillCaretDownFill>
                            </div>

                        
                        <div class="accordion__title">
                            Candidatos (6)
                        </div>
                    </div>

                    
                    <div class="accordion__content">
                    <div className="candidato-dado">
                        <div className="circle">
                            <img src="https://i.stack.imgur.com/atUuf.png" alt="Usuário"/>
                        </div>
                        <div className="nome-candidato"><a>Mizael</a></div>
                        
                        
                        <div className="candidato-butoes">
                            <button className="btn-iniciar-chat">
                                <BsEnvelope size="25px" className="envelope"></BsEnvelope>
                            </button>
                            <button className="btn-desaprovar">
                                <BsXCircle size="25px" className="x-desaprovar"></BsXCircle>
                            </button>

                        </div>
                        </div>
                    </div>
                    
        </div>
    </div>
        </div>
    
      </div>
      
    </IconContext.Provider>
    );
  }
  
  export default Vaga;