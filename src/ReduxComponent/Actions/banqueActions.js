export function updateTransaction (transaction){
    return {
        type: "ADD_TRANSACTION",
        payload: transaction,
    }
}
export function updateTransaction (montant){
    return {
        type: "VALIDATE_TRANSACTION",
        payload: {
            argent: argent + montant  
        },
    }
}