import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import firebase from './firebase/firebase';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import { YellowBox, Text, View, StyleSheet, Image} from 'react-native';
import { composeWithDevTools } from 'remote-redux-devtools';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react

import reducer from './reducers/reducer';
import Routes from './Routes';'

YellowBox.ignoreWarnings(['Warning: ...']);
console.disableYellowBox = true;

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	whitelist: ['isLoggedIn', 'current_route','userID']
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));

const persistor = persistStore(store);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#0057a0'
	},
	logo: {
		width: 300,
		height: 300,
	}
});

const loader = <View style={styles.container}><View><Image source={require('./assets/logo.png')} style={styles.logo} resizeMode="contain" /></View></View>

class App extends React.Component{
	render(){		
		return (
			<Provider store={store}>
				<PersistGate loading={loader} persistor={persistor}>					
					<Routes />
				</PersistGate>
			</Provider>
		);
	}
}

export default App;
