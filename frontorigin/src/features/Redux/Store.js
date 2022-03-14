import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


import userReducer from './authDucks';
import stocksReducer from './stocksDucks'


const rootReducer = combineReducers({

    user: userReducer,
    stocks: stocksReducer
})





export default function generateStore() {
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
    return store
}