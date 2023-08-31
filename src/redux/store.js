import {configureStore} from '@reduxjs/toolkit';
import rootReducers from './reducer';
import {  persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' //

const persistConfig = {
    key: 'root',
    storage,
  }


const persistedReducer = persistReducer(persistConfig, rootReducers)


const store = configureStore({
    reducer: persistedReducer,

})

export default store;

