import { applyMiddleware, createStore } from "redux"

import {createLogger} from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from "./ReduxComponent/Reducers/reducers"

const middleware = applyMiddleware(createLogger())

export default createStore(reducer, middleware)