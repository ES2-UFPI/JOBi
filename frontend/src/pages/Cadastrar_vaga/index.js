import './Cadastrar_vaga.css';
import { useState } from "react";
import axios from '../../services/axios';
import { Link, useHistory } from 'react-router-dom';

import Navegation from '../../components/Navegation/Navegation';

function Cadastrar_vaga() {
    const [categoria, setCategoria] = useState(-1);
    const [num_vagas, setNum_vagas] = useState('');
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [interesses, setInteresses] = useState('');
    const [horario, setHorario] = useState('');
    const [remuneracao, setRemuneracao] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [cidades, setCidades] = useState([]);

    const history = useHistory();

    const { categorias } = require('../../extra_data/categorias.json');
    console.log(categorias);

    const { estados } = require('../../extra_data/estados-cidades.json');
    console.log(estados);

    function handleCategoriaChange(event) {
        setCategoria(event.target.value);
    }

    function handleNum_vagasChange(event) {
        setNum_vagas(event.target.value);
    }

    function handleTituloChange(event) {
        setTitulo(event.target.value);
    }

    function handleDescricaoChange(event) {
        setDescricao(event.target.value);
    }

    function handleInteressesChange(event) {
        setInteresses(event.target.value);
    }

    function handleHorarioChange(event) {
        setHorario(event.target.value);
    }

    function handleRemuneracaoChange(event) {
        setRemuneracao(event.target.value);
    }

    function handleEstadoChange(event) {
        setEstado(event.target.value);
        console.log("Estado", estado);
        estados.map(est => {
            if(est.sigla === estado){
                setCidades(est.cidades);
            }
        }
        )
        console.log("Cidades", cidades)
    }

    function handleCidadeChange(event) {
        setCidade(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        axios.post("route", {
            "categoria": categoria,
            "num_vagas": num_vagas,
            "descricao": descricao
        })
            .then(function (response) {
                console.log(response);

                history.push("route");
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div className="cadastrar-vaga">
            <div className="pag-cadastrar-vaga">
                <Navegation />
                <div className="titulos-pag-cadastrar-vaga">
                    <div className='titulo1-pag-cadastrar-vaga'>
                        <h1>Cadastrar vaga</h1>
                    </div>
                </div>


                <div className="cadastrar_vaga_form">
                    <form onSubmit={handleSubmit}>
                        <row>
                            <label htmlFor="categoria"></label>
                            <select className="select-categoria" value={categoria} onChange={handleCategoriaChange} name="categoria" id="categoria">
                                <option value="-1" disabled>Categoria</option>
                                {categorias.map(cat => (
                                    <option key={String(cat.value)} value={String(cat.value)}>{cat.label}</option>
                                ))}
                            </select>

                            <label htmlFor="num_vagas">
                                <input
                                    type="text"
                                    value={num_vagas}
                                    onChange={handleNum_vagasChange}
                                    placeholder="Número de vagas"
                                />
                            </label>
                        </row>

                        <row className="titulo">
                            <label htmlFor="titulo">
                                <input
                                    type="text"
                                    value={titulo}
                                    onChange={handleTituloChange}
                                    placeholder="Título"
                                />
                            </label>
                        </row>

                        <row className="descricao">
                            <label htmlFor="descricao">
                                <textarea
                                    rows="1" cols="100"
                                    value={descricao}
                                    onChange={handleDescricaoChange}
                                    placeholder="Descrição"
                                />
                            </label>
                        </row>

                        <row className="interesses">
                            <label htmlFor="interesses">
                                <input
                                    type="text"
                                    value={interesses}
                                    onChange={handleInteressesChange}
                                    placeholder="Interesses"
                                />
                            </label>
                        </row>

                        <row>
                            <label htmlFor="horario">
                                <input
                                    type="text"
                                    value={horario}
                                    onChange={handleHorarioChange}
                                    placeholder="Horário"
                                />
                            </label>

                            <label htmlFor="remuneracao">
                                <input
                                    type="text"
                                    value={remuneracao}
                                    onChange={handleRemuneracaoChange}
                                    placeholder="Remuneracão"
                                />
                            </label>
                        </row>

                        <row>
                            
                            <label htmlFor="estado"></label>
                            <select className="select-estado" value={estado} onChange={handleEstadoChange} name="estado" id="estado">
                                <option value="-1" disabled>Estado</option>
                                {estados.map(estado => (
                                    <option key={String(estado.sigla)} value={String(estado.sigla)}>{estado.nome}</option>
                                ))}
                            </select>

                            
                            <label htmlFor="cidade"></label>
                            <select className="select-cidade" value={cidade} onChange={handleCidadeChange} name="cidade" id="cidade">
                                <option value="-1" disabled>Cidade</option>
                                {cidades.map(cidade => (
                                    <option key={String(cidade)} value={String(cidade)}>{cidade}</option>
                                ))}
                            </select>
                        </row>

                        <row><button type="submit">Cadastrar vaga</button></row>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Cadastrar_vaga;