// Dependencies
import React , {Component} from 'react';
import { View, Text } from 'react-native';
import { reduxifyNavigator,createReduxContainer, createReactNavigationReduxMiddleware, createNavigationReducer } from 'react-navigation-redux-helpers';
import AsyncStorage from '@react-native-community/async-storage';
import allReducers from './reducers/index.js';
import thunk from 'redux-thunk';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react'
import { Provider, connect } from 'react-redux';

import { Scene, Actions, Router } from 'react-native-router-flux';
import Routes from './Routes';

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	whitelist: ['isLoggedIn'],
	timeout: null
}

const persistedReducer = persistReducer(persistConfig, allReducers);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

class App extends Component {
   constructor(props) {
      super(props);
   }
   render(){
      return(
         <Provider store={store} >
         <PersistGate persistor={persistor} >
            	<Routes />
         </PersistGate>
         </Provider>
      );


   }


}
