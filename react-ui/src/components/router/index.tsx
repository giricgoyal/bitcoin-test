import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Address from '../../modules/address';

function Router() {
    return (
        <Switch>
            <Route exact path='/'>
                <Address />
            </Route>
        </Switch>
    )
}

export default Router;