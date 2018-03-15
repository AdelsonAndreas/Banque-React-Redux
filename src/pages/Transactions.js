import React from 'react';
import Header from '../components/Headers'
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';

@connect((store) =>{
    return {
        conStore: store.ReduxState.banque.transactions,
    }
})
export default class Transactions extends React.Component {
    isTransactionsValidated(){
        var Transac= this.props.conStore
        var attente = document.getElementById("attente");

        for (var i = 0 ; i < (Transac.length)  ; i ++) {
            var validated = Transac[i].validated
            console.log(validated)
            if (validated === false) {

                console.log("Transaction :" ,Transac)
                ReactDOM.render(<p>{Transac[i].date} {Transac[i].montant}</p>,attente)
            }
        }
    }

    render(){
        return(
        <div>
            <Header />
            <div class="container ">
                <div class="row justify-content-center align-items-center" style={{height: "300px" }}>
                    <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <center>
                            <h1>Transactions en attentes</h1> 
                        </center>
                    </div>
                </div>
                <div class="row justify-content-center align-items-center" style={{height: "100px"}}>
                    <div class="col-sm-4 col-md-4 col-lg-4" style={{border: "solid 3px", color: "black",height: "200px"}} id="attente">
                    </div>
                    <div class="col-sm-1 col-md-1 col-lg-1 align-self-end">
                    <button type="button" class="btn btn-secondary" >Validé</button>
                    <button type="button" class="btn btn-secondary" onClick={this.isTransactionsValidated.bind(this)}>Refresh</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}