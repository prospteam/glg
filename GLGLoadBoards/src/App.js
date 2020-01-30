<<<<<<< HEAD
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


=======
import React, { Component } from 'react';
import { YellowBox, Text, View, StyleSheet, BackHandler, ActivityIndicator, Alert } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import Routes from './Routes';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import allReducers from './reducers/index.js';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
var Spinner = require('react-native-spinkit');
YellowBox.ignoreWarnings([
	'Warning: componentWillUpdate is deprecated',
	'Warning: componentWillMount is deprecated',
	'Warning: componentWillReceiveProps is deprecated',
	'Warning: isMounted(...) is deprecated',
	'Warning: ...',
	'Warning: MapViewDirections',
	'Setting a timer'
]);

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	whitelist: ['RiderReducer'],
	timeout: null
>>>>>>> 9e7cdadb87e03aff1efb1fa9760e11619a85f685
}

const persistedReducer = persistReducer(persistConfig, allReducers);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

const loader = <View style={{
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	width: undefined,
	height: undefined
}}>
	<Spinner type="WanderingCubes" color="#c1191c" size={80} /></View>

export default class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Provider store={store}>
				<PersistGate loading={loader} persistor={persistor}>
					<Routes />
				</PersistGate>
			</Provider>
		)
	}
}