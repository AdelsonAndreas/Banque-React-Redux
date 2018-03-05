import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Acceuil from './pages/Acceuil'
import Transactions from './pages/Transactions'
import Nouvelle from './pages/Nouvelle'

class App extends React.Component {
    render(){
        return(
    <Router>
        <Switch>
        <Route exact path="/" component={Acceuil} />
        <Route path="/transaction" component={Transactions}></Route>
        <Route path="/nouvelle" component={Nouvelle}></Route>
        </Switch>
    </Router>
        )
    }
}

const app = document.getElementById('app');

ReactDOM.render(<App />,app);