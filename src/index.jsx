import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux'

import Acceuil from './pages/Acceuil';
import Transactions from './pages/Transactions';
import Nouvelle from './pages/Nouvelle';
import store from './store'

class App extends React.Component {
    render(){
        return(
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Acceuil} />
                        <Route path="/transaction" component={Transactions}></Route>
                        <Route path="/nouvelle" component={Nouvelle}></Route>
                    </Switch>
                </Router>
            </Provider>    
        )
    }
}

const app = document.getElementById('app');

ReactDOM.render(<App />,app);