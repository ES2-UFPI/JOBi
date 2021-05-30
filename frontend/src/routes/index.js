import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Contratante from '../pages/Contratante';
import User from '../pages/User';
import Chat_temp from '../pages/Chat_temp';
import Page404 from '../pages/Page404';

function Routes(){
    return(
        <Switch>
            <MyRoute exact path="/login" component={Login} />
            <MyRoute exact path="/cadastro" component={Cadastro} />
            <MyRoute exact path="/contratante" component={Contratante} />
            <MyRoute exact path="/chat_temp" component={Chat_temp} />
            <MyRoute exact path="/user" component={User} isClosed />
            <MyRoute path="*" component={Page404} />
        </Switch>
    );
}

export default Routes;