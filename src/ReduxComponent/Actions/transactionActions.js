export function createTransaction(newDate, newMontant){
    var id = 0;
    return {
        type: "ADD_TRANSACTION",
        payload: {
            date: newDate,
            montant: newMontant,
            id: id + 1
        }
    }
}

export function setMontant(newMontant){
    return {
        type: "SET_MONTANT",
        payload: newMontant,
    }
}