import {combineReducers} from "redux"
import {Action, AddTransactionAction} from "./actions";
import {State} from "./state";


export default combineReducers({
    ReduxState: banqueReducer
})

function banqueReducer(state: State, action: Action): State {
    if (state == null) {
        return {
            banque: {
                argent: 0,
                transactions: [],
            },
            error: null,
        };
    }

    switch (action.type) {
        case "ADD_TRANSACTION": {
            let addAction = action as AddTransactionAction;

            let nouvellesTransactions = state.banque.transactions.slice(0); // Copie
            nouvellesTransactions.push(addAction.payload.id);
            return {
                banque: {
                    argent: state.banque.argent,
                    transactions: nouvellesTransactions
                },
                error: null,
            }
        }
        //case "VALIDATE_TRANSACTION": {
        //    return {
        //        ...state,
        //        banque: {
        //            argent: action.payload.montant,
        //            transactions: state.transactions.slice(0), // Copie du tableau
        //        },
        //        error: null,
        //    }
        //}
    }
    return state;
}
