import React from 'react';
import Header from '../components/Headers';
import {connect} from 'react-redux';
import { createTransaction } from '../ReduxComponent/actions';

@connect((store) =>{
    return {
        store
    }
})
export default class Nouvelle extends React.Component {
    addTransaction(montant, date){
        var montant = document.getElementById("Montant").value;
        var date = document.getElementById("Date").value;

        console.log("Date: " + date + "Montant: " + montant);
        this.props.dispatch(createTransaction(date, montant));
    }
        
    render(){
        return(
            <div>
                <Header />
            <div style={{height: "100px"}}></div>
            <div class="container">
                <div class="row" style={{height: "300px"}}>
                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 offset-4 "  style={{border: "solid 2px", color: "black", width: "500px"}}>
                    <p>Nouvelle Transaction</p>
                    <div style={{border: "solid 1px", color:"black"}}></div>
                    <form action="">
                    <div class="form-group">
                        <label for="Montant">Montant :</label>
                        <input type="number"  class="form-control" id="Montant"/>
                        <label for="Date">Date :</label>
                        <input type="date" class="form-control" id="Date" min="2018-03-01"/>
                    </div>
                    </form>
                        <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 offset-4 align-self-end">
                            <button class="btn btn-succes" onClick={this.addTransaction.bind(this)}>Effectuer</button>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
        )
    }
}