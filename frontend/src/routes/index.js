import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Prestador from '../pages/Prestador';
import Contratante_temp from '../pages/Contratante_temp';
import User from '../pages/User';
import Chat_p from '../pages/Chat_p';
import Chat_c from '../pages/Chat_c';
import Page404 from '../pages/Page404';

function Routes(){
    return(
        <Switch>
            <MyRoute exact path="/login" component={Login} />
            <MyRoute exact path="/cadastro" component={Cadastro} />
            <MyRoute exact path="/prestador" component={Prestador}/>
            <MyRoute exact path="/contratante" component={Contratante_temp}/>
            <MyRoute exact path="/prestador/chat" component={Chat_p} />
            <MyRoute exact path="/contratante/chat" component={Chat_c} />
            <MyRoute exact path="/user" component={User} isClosed />
            <MyRoute path="*" component={Page404} />
        </Switch>
    );
}

export default Routes;