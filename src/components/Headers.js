import React from 'react';
import {NavLink} from 'react-router-dom'

export default class Header extends React.Component {
    render(){
        return(
            <div class="container-fluid">
                    <ul class="nav justify-content-center bg-inverse">
                        <li class="nav-item">
                            <NavLink  class="nav-link" to="/">Acceuil</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" to="/transaction">Transaction</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" to="/nouvelle">Nouvelle</NavLink>
                        </li>
                    </ul>
            </div>
        )
    }
}