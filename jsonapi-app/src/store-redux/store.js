import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware } from 'redux'
import postStateReducer from './reducer'
const applymiddleware = applyMiddleware;
const thunkmiddlware = require('redux-thunk').default


const store = configureStore({
    reducer: postStateReducer,
    applymiddleware: applymiddleware(thunkmiddlware)
});


export default store;

