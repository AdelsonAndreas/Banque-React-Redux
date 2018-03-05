import React from 'react';
import Header from '../components/Headers'

export default class Transactions extends React.Component {
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
                    <div class="col-sm-4 col-md-4 col-lg-4" style={{border: "solid 3px", color: "black",height: "200px"}}>
                    <p>Transaction en attente</p>
                    </div>
                    <div class="col-sm-1 col-md-1 col-lg-1 align-self-end">
                    <button type="button" class="btn btn-secondary">Validé</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}