import './Cadastro.css';
import { useState } from "react";
import axios from '../../services/axios';
import { Link, useHistory } from 'react-router-dom';

function Cadastro() {
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [rsenha, setRSenha] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [ celular, setCelular ] = useState('');
    const [ endereco, setEndereco ] = useState('');
    const [ cidade, setCidade ] = useState('');
    const [ estado, setEstado ] = useState('');
    const [ cep, setCEP ] = useState('');
    const [ pais, setPais ] = useState('');

    //const [ descricao, setDescricao ] = useState('');
    const [ status, setStatus ] = useState('1');
    //const [ img_perfil, setImg_perfil ] = useState('');
    const history = useHistory();

    function handleNomeChange(event) {
        setNome(event.target.value);
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handleSenhaChange(event) {
        setSenha(event.target.value);
    }

    function handleRSenhaChange(event) {
        setRSenha(event.target.value);
    }

    function handleTelefoneChange(event) {
        setTelefone(event.target.value);
    }

    function handleCelularChange (event) {
        setCelular(event.target.value);
    }

    function handleEnderecoChange (event) {
        setEndereco(event.target.value);
    }

    function handleCidadeChange (event) {
        setCidade(event.target.value);
    }

    function handleEstadoChange (event) {
        setEstado(event.target.value);
    }

    function handlePaisChange (event) {
        setPais(event.target.value);
    }

    function handleCEPChange (event) {
        setCEP(event.target.value);
    }

    function handleStatusChange (event) {
        setStatus(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        
        var route = '';
        if(status === "1"){
            route = '/prestador';
        }else{
            route = '/contratante';
        }

        axios.post(route, {
            "nome": nome,
            "senha": senha,
            "email": email,
            "telefone": telefone,
            "endereco": endereco,
            "status": status
        })
        .then(function (response) {
            console.log(response);

            var typeUser = { };
            if(status === "1"){
                typeUser = {
                    id: response.data.prestador.id,
                    estrelas: response.data.prestador.estrelas
                }
            }else{
                typeUser = {
                    id: response.data.contratante.id,
                    estrelas: response.data.contratante.estrelas
                }
            }

            let obj = {
                "user": {
                    id: response.data.user.id,
                    nome: response.data.user.nome,
                    email: response.data.user.email,
                    telefone: response.data.user.telefone,
                    endereco: response.data.user.endereco,
                    descricao: response.data.user.descricao,
                    status: response.data.user.status,
                    img_perfil: response.data.user.img_perfil
                },
                typeUser
            }

            localStorage.setItem('userData', JSON.stringify(obj));

            history.push(route);
        })
        .catch(function (error) {
            console.log(error);
        });

    }
        
    return (
        <div className="pagina2">
            <div className="titulos">
                <div className="jobi">JOB<span>i</span>:
                    <div className='titulo1'>
                        <h1>Cadastro</h1>
                    </div>
                </div>

                <div className='titulo2' onChange={handleStatusChange}>
                    <h1>Qual o seu objetivo no aplicativo?</h1>

                    <label className="container">
                        <input
                            name="status"
                            id="status"
                            type="radio"
                            value="1"
                            defaultChecked={status === "1"}
                        />
                        <span className="checkmark"></span>
                        <span className="text">Procurar vagas</span>
                    </label>

                    <label className="container">
                        <input
                            name="status"
                            id="status"
                            type="radio"
                            value="2"
                        />
                        <span className="checkmark"></span>
                        <span className="text">Ofertar vagas de emprego</span>
                    </label>

                </div>

            </div>


            <div className="cadastro">
                <form onSubmit={handleSubmit}>
                <row>
                        <label htmlFor="nome">
                            <input
                                type="text"
                                value={nome}
                                onChange={handleNomeChange}
                                placeholder="Nome Completo"
                            />
                        </label>

                        <label htmlFor="email">
                            <input
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder="E-mail"
                            />
                        </label>
                    </row>
                    <row>
                        <label htmlFor="senha">
                            <input
                                type="password"
                                value={senha}
                                onChange={handleSenhaChange}
                                placeholder="Senha"
                            />
                        </label>
                        <label htmlFor="senha">
                            <input
                                type="password"
                                value={rsenha}
                                onChange={handleRSenhaChange}
                                placeholder="Redigite a Senha"
                            />
                        </label>
                    </row>
                    <row>
                        <label htmlFor="telefone">
                            <input
                                type="text"
                                value={telefone}
                                onChange={handleTelefoneChange}
                                placeholder="Telefone"
                            />
                        </label>
                        <label htmlFor="celular">
                            <input
                                type="text"
                                value={celular}
                                onChange={handleCelularChange}
                                placeholder="Celular"
                            />
                        </label>
                    </row>
                    <row className="endereco">
                        <label htmlFor="endereço">
                            <input
                                type="text"
                                value={endereco}
                                onChange={handleEnderecoChange}
                                placeholder="Endereço"
                            />
                        </label>
                    </row>
                    <row>
                        <label htmlFor="cidade">
                            <input
                                type="text"
                                value={cidade}
                                onChange={handleCidadeChange}
                                placeholder="Cidade"
                            />
                        </label>
                        <label htmlFor="estado">
                            <input
                                type="text"
                                value={estado}
                                onChange={handleEstadoChange}
                                placeholder="Estado"
                            />
                        </label>
                    </row>
                    <row>
                        <label htmlFor="pais">
                            <input
                                type="text"
                                value={pais}
                                onChange={handlePaisChange}
                                placeholder="País"
                            />
                        </label>
                        <label htmlFor="cep">
                            <input
                                type="text"
                                value={cep}
                                onChange={handleCEPChange}
                                placeholder="CEP"
                            />
                        </label>
                    </row>
                    <p>Já possui cadastro?  <Link to="login">Faça seu login!</Link> </p>
                    <row><button type="submit">Cadastrar</button></row>
                </form>
            </div>
        </div>
    );
}

export default Cadastro;