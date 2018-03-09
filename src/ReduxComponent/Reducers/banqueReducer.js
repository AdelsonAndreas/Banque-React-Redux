import transactions from "./transactionReducer"

export default function reducer(state={
    banque:{
        argent: Number,
        Transaction: [transactions],
    },
    error: null,
  }, action) {
      switch (action.type){
        case "ADD_TRANSACTION": {
            return {
                ...state,
                banque: {...state.banque,...state.Transaction, Transaction: [action.payload]},
            }
        }
        case "VALIDATE_TRANSACTION":{
            return {
                ...state,
                banque: {...state.Transaction, argent: action.payload},
            }
        }
      }
      return state;
    }
