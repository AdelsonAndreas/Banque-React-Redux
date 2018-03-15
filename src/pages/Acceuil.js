import React from 'react';
import Header from '../components/Headers'
import {connect} from 'react-redux';

@connect((store) =>{
    return {
        ArgentBanque: store.ReduxState,
    }
})

export default class Acceuil extends React.Component {

    render(){
        return(
        <div>
            <Header />
            <div class="container ">
                <div class="row justify-content-center my-row align-items-center" style={{height: "400px" }}>
                    <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <center>
                            <p>Argent dans la banque actuellement: {this.props.ArgentBanque.banque.argent}€ </p>
                            <p>Historique des transactions :</p><br />
                        </center>
                        <table class="table-responsive table-bordered">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Montant</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}