export default function reducer(state={
    transactions: {
    date: Date,
    montant: Number,
    id: Number,
    },
    validated: Boolean,
    error: null,
  }, action) {
      switch (action.type){
        case "ADD_TRANSACTION":{
            return {
                ...state,
                transactions: action.payload,
                validated: false,
            }
        }
        case "VALIDATE_TRANSACTION": {
            return {
                ...state,
                validated: true,
            }
        }
        case "SET_MONTANT": {
            return {
                ...state,
                transactions: {...state, montant: action.payload}
            }
        }
      }
      return state;
  }