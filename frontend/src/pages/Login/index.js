import './Login.css';
import { useState } from "react";
import axios from '../../services/axios';
import { Link, useHistory } from 'react-router-dom';
import  work_chat  from '../../images/work_chat2.svg';

function Login() {
  const [ email, setNome ] = useState('');
  const [ senha, setSenha ] = useState('');
  const history = useHistory();

  function handleEmailChange (event) {
    setNome(event.target.value);
  }

  function handleSenhaChange (event) {
    setSenha(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    
    axios.post('/users/login', {
      "email": email, 
      "senha": senha
      })
      .then(function (response) {
        console.log(response);

        var typeUser = { };
        if(response.data.user.status === 1){
            typeUser = {
              id: response.data.prestador.id,
              estrelas: response.data.prestador.estrelas,
              categoria: response.data.prestador.categoria
            }
        }else{
            typeUser = {
              id: response.data.contratante.id,
              estrelas: response.data.contratante.estrelas,
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

          var route = '';
          if(obj.user.status === 1){
              route = '/prestador';
          }else{
              route = '/contratante';
          }
          
          history.push(route);
      })
      .catch(function (error) {
        console.log(error);
      });  

      
    //alert('Fazendo login ...: ' + email);
  }

  return (
    <div className="pagina"> 
      <div className="informe">
      <h1>JOB<span>i</span></h1>
      <h2>Trabalhe do seu jeito...</h2>
        <div className="imagens">
              <div className="work">
              <img className="work-chat" src={work_chat} alt="work_chat"/>
              </div>
              {/*
              <div className="coffee">
              <img className="coffee-break" src={coffee_break} alt="coffee_break"/>
              </div>
              <div className="freela">
              <img className="freelancer" src={freelancer} alt="freelancer"/>
              </div>
              */}
        </div>
      </div>
      <div className="login">
          <hr/>
          <h1>Fa??a seu login:</h1>

          <form onSubmit={handleSubmit}>
              <label htmlFor="Email">
                  <input
                      type="text"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="E-mail"
                  />
              </label>

              <label htmlFor="Senha">
                  <input
                      type="password"
                      value={senha}
                      onChange={handleSenhaChange}
                      placeholder="Senha"
                  />
              </label>

              <button type="submit">Entrar</button>
          </form>
          <p>Ainda n??o faz parte? <Link to="cadastro">Cadastre-se agora!</Link></p>
          
          </div>

    </div>
  );
}
  
export default Login;