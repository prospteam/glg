import React, { Component } from 'react';
import { YellowBox, Text, View, StyleSheet, BackHandler, ActivityIndicator, Alert, Image } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import Routes from './Routes';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import allReducers from './redux/reducers/index.js';
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

var logo = require('./assets/images/logo_cropped.jpg');
import AppPreloader from './components/AppPreloader';

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	whitelist: ['redux_session'],
	timeout: null
}

const persistedReducer = persistReducer(persistConfig, allReducers);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

const loader = 
		<View style={{
			// padding:40,
			flex:1,
			// backgroundColor:'red',
			justifyContent: 'center',
			alignItems: 'center',
		}}>
			<Image 
				style={{
					margin:'auto',
					// width:280,
					maxWidth:'100%',
					maxHeight:'100%',
				}}
				source={logo}
			/>
		</View>
// const loader = <View style={{
// 	flex: 1,
// 	justifyContent: 'center',
// 	alignItems: 'center',
// 	width: undefined,
// 	height: undefined
// }}>
// 	<Spinner type="WanderingCubes" color="#c1191c" size={80} /></View>

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			timePassed: false,
		};
	}
	componentDidMount() {
		setTimeout( () => {
			this.setTimePassed();
		},1000);
	}
	setTimePassed() {
		this.setState({timePassed: true});
	}
	render() {
		// if (!this.state.timePassed) {
			return <AppPreloader/>;
		// } 
		return (
			<Provider store={store}>
				<PersistGate loading={loader} persistor={persistor}>
					<Routes />
				</PersistGate>
			</Provider>
		)
	}
}