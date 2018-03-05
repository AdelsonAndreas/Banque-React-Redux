import React from 'react';

export default class Header extends React.Component {
    render(){
        return(
            <div class="container-fluid">
                    <ul class="nav justify-content-center bg-inverse">
                        <li class="nav-item">
                            <a class="nav-link active" href="/">Acceuil</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/transaction">Transactions</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/nouvelle">Nouvelle Transaction</a>
                        </li>
                    </ul>
            </div>
        )
    }
}