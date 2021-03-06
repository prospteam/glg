import React, { Component } from 'react';
import { YellowBox, Text, View, StyleSheet, BackHandler, ActivityIndicator, Alert, Image } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

// MY IMPORT
var logo = require('./assets/images/logo_cropped.jpg');
import Routes from './Routes';
import allReducers from './redux/reducers/index.js';
// import AppPreloader from './components/AppPreloader';
// import Dashboard from './components/login/Dashboard';

//REDUX APP
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';



YellowBox.ignoreWarnings([
	'Warning: componentWillReceiveProps has been renamed',
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

export default class App extends Component {
	constructor(props) {
		console.log('_______APP STARTED________');
		super(props);
		this.state = {
			show_logo: true,
		};
	}
	componentDidMount() {
		setTimeout( () => {
			this.setState({show_logo: false});
		},3000);
	}
	render() {
		// if (this.state.show_logo)
		// 	return <AppPreloader/>;

		return (
			<Provider store={store}>
				<PersistGate loading={loader} persistor={persistor}>
					{/* <Dashboard /> */}
					<Routes />
					{/* <View>
						<Text>Hello World</Text>
					</View> */}
				</PersistGate>
			</Provider>
		)
	}
}
