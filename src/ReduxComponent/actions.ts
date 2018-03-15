const uniqid = require('uniqid');

export interface Action {
    type: string;
    payload: {}
}

export interface AddTransactionAction extends Action {
    payload: {
        date: Date;
        montant: number;
        id: string;
        validated: boolean;
    }
}

export interface ValidateTransactionAction extends Action {
    payload: {
        montant: number;
    }
}

export function createTransaction(newDate, newMontant){
    return {
        type: "ADD_TRANSACTION",
        payload: {
            date: newDate,
            montant: newMontant,
            id: uniqid(),
            validated: false,
        }
    }
}

export function setMontant(newMontant){
    return {
        type: "SET_MONTANT",
        payload: newMontant,
    }
}