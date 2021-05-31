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
    const [endereco, setEndereco] = useState('');
    //const [ descricao, setDescricao ] = useState('');
    //const [ status, setStatus ] = useState('');
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

    function handleEnderecoChange(event) {
        setEndereco(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        axios.post('contratante', {
            "nome": nome,
            "senha": senha,
            "email": email,
            "telefone": telefone,
            "endereco": endereco,
            "status": 2
        })
            .then(function (response) {
                console.log(response);

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

                    "typeUser": {
                        id: response.data.contratante.id,
                        estrelas: response.data.contratante.estrelas
                    }
                }

                localStorage.setItem('userData', JSON.stringify(obj));

                history.push('/contratante');
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

                <div className='titulo2'>
                    <h1>Qual o seu objetivo no aplicativo?</h1>

                    <label className="container">
                        <input type="checkbox" checked="checked" />
                        <span class="checkmark"></span>
                        <span className="text">Procurar vagas</span>
                    </label>

                    <label className="container">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                        <span className="text">Ofertar vagas de emprego</span>
                    </label>

                </div>

            </div>


            <div className="cadastro">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nome">
                        Nome:
                        <input
                            type="text"
                            value={nome}
                            onChange={handleNomeChange}
                            placeholder="Ex. Álvaro Campos"
                        />
                    </label>

                    <label htmlFor="email">
                        E-mail:
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Ex. mpg123@example.com"
                        />
                    </label>
                    <label htmlFor="senha">
                        Senha:
                        <input
                            type="password"
                            value={senha}
                            onChange={handleSenhaChange}
                            placeholder="Ex. Ash3FF23lkkjn55FACsd "
                        />
                    </label>
                    <label htmlFor="senha">
                        Redigite a Senha:
                        <input
                            type="password"
                            value={rsenha}
                            onChange={handleRSenhaChange}
                            placeholder="Ex. Ash3FF23lkkjn55FACsd "
                        />
                    </label>
                    <label htmlFor="telefone">
                        <span className="label"> Telefone: </span>
                        <input
                            type="text"
                            value={telefone}
                            onChange={handleTelefoneChange}
                            placeholder="Ex. (00) 0 0000-0000"
                        />
                    </label>
                    
                    <span className="label"> Endereço: </span>
                    <label htmlFor="endereço">
                        <input
                            type="text"
                            value={endereco}
                            onChange={handleEnderecoChange}
                            placeholder="Ex. (00) 0 0000-0000"
                        />
                    </label>
                    <p>Já possui cadastro?  <Link to="login">Faça seu login!</Link> </p>
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

export default Cadastro;