import { combineReducers } from "redux"

import banque from "./banqueReducer"


export default combineReducers({
 ReduxState: banque
})