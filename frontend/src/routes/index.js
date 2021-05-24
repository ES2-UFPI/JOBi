import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Login from '../pages/Login';
import User from '../pages/User';
import Page404 from '../pages/Page404';

function Routes(){
    return(
        <Switch>
            <MyRoute exact path="/login" component={Login} />
            <MyRoute exact path="/user" component={User} isClosed />
            <MyRoute path="*" component={Page404} />
        </Switch>
    );
}

export default Routes;