import './Cadastrar_vaga.css';
import { useState, useEffect } from "react";
import axios from '../../services/axios';
import { useHistory } from 'react-router-dom';

import Navegation from '../../components/Navegation/Navegation';

function Cadastrar_vaga() {
    const [categoria, setCategoria] = useState(-1);
    const [num_vagas, setNum_vagas] = useState('');
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [arquivo_imagem, setArquivo_imagem] = useState();
    const [imagem, setImagem] = useState('');
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

    function handleImagemChange(event) {
        var file = event.target.files[0];
        setArquivo_imagem(file);
        setImagem(file.name);

        console.log(file);
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

    useEffect(() => {
        console.log("Estado", estado);
        estados.map(est => {
            if(est.sigla === estado){
                setCidades(est.cidades);
            }
        }
        )
        console.log("Cidades", cidades)
        
      }, [estado]);

    function handleEstadoChange(event) {
        setEstado(event.target.value);
    }

    function handleCidadeChange(event) {
        setCidade(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        let data = localStorage.getItem('userData');
        data = JSON.parse(data);
        console.log("ID do contratante: ", data.typeUser.id);

        const config = {  
            headers: { 'Content-Type': 'multipart/form-data' }
        }

        const formData = new FormData();
        formData.append('contratante_id', data.typeUser.id);
        formData.append('categoria', categoria);
        formData.append('num_vagas', num_vagas);
        formData.append("titulo", titulo);
        formData.append("descricao", descricao);
        formData.append("imagem", imagem);
        formData.append("interesses", interesses);
        formData.append("horario", horario);
        formData.append("status", 1);
        formData.append("remuneracao", remuneracao);
        formData.append("estado", estado);
        formData.append("cidade", cidade);
        formData.append("arquivo_imagem", arquivo_imagem);

        axios.post("/vaga", formData, config)
        .then(function (response) {
            console.log(response);

            history.push("/contratante");
        })
        .catch(function (error) {
            console.log(error);
        });

    }

    return (
        <div className="cadastrar-vaga">
            <div className="pag-cadastrar-vaga">
                <Navegation />
                <div className="titulo-pag-cadastrar-vaga">
                    <h1>Cadastrar vaga</h1>
                </div>


                <div className="cadastrar_vaga_form">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <label htmlFor="categoria"></label>
                            <select className="select-categoria" value={categoria} onChange={handleCategoriaChange} name="categoria" id="categoria">
                                <option value="-1" disabled>Categoria</option>
                                {categorias.map(cat => (
                                    <option key={String(cat.value)} value={String(cat.value)}>{cat.label}</option>
                                ))}
                            </select>

                            <label htmlFor="num_vagas">
                                <input
                                    className="num_vagas"
                                    type="text"
                                    value={num_vagas}
                                    onChange={handleNum_vagasChange}
                                    placeholder="Número de vagas"
                                />
                            </label>
                        </div>

                        <div className="imagem">
                            <label htmlFor="imagem">
                                <p>Carregue uma imagem:</p>
                                <input
                                    type="file"
                                    id="imagem"
                                    name="imagem"
                                    accept="image/png, image/jpeg"
                                    onChange={handleImagemChange}
                                />
                            </label>
                        </div>
                        
                        <div className="titulo">
                            <label htmlFor="titulo">
                                <input
                                    type="text"
                                    value={titulo}
                                    onChange={handleTituloChange}
                                    placeholder="Título"
                                />
                            </label>
                        </div>

                        <div className="descricao">
                            <label htmlFor="descricao">
                                <textarea
                                    rows="1" cols="100"
                                    value={descricao}
                                    onChange={handleDescricaoChange}
                                    placeholder="Descrição"
                                />
                            </label>
                        </div>

                        <div className="interesses">
                            <label htmlFor="interesses">
                                <input
                                    type="text"
                                    value={interesses}
                                    onChange={handleInteressesChange}
                                    placeholder="Interesses"
                                />
                            </label>
                        </div>

                        <div className="row">
                            <label htmlFor="horario">
                                <input
                                    className="horario"
                                    type="text"
                                    value={horario}
                                    onChange={handleHorarioChange}
                                    placeholder="Horário"
                                />
                            </label>

                            <label htmlFor="remuneracao">
                                <input
                                    className="remuneracao"
                                    type="text"
                                    value={remuneracao}
                                    onChange={handleRemuneracaoChange}
                                    placeholder="Remuneracão"
                                />
                            </label>
                        </div>

                        <div className="row">
                            
                            <label htmlFor="estado"></label>
                            <select className="select-estado" value={estado} onChange={handleEstadoChange} name="estado" id="estado">
                                <option value="" disabled>Estado</option>
                                {estados.map(estado => (
                                    <option key={String(estado.sigla)} value={String(estado.sigla)}>{estado.nome}</option>
                                ))}
                            </select>

                            
                            <label htmlFor="cidade"></label>
                            <select className="select-cidade" value={cidade} onChange={handleCidadeChange} name="cidade" id="cidade">
                                <option value="" disabled>Cidade</option>
                                {cidades.map(cidade => (
                                    <option key={String(cidade)} value={String(cidade)}>{cidade}</option>
                                ))}
                            </select>
                        </div>

                        <div className="row"><button type="submit">Cadastrar vaga</button></div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Cadastrar_vaga;