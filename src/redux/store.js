import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import salaReducer from './salaReducer'
import loginReducer from './loginReducer'
import calculosReducer from './calculosReducer'

const rootReducer = combineReducers({
    sala: salaReducer,
    login: loginReducer,
    calculos: calculosReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ) )
    return store
}