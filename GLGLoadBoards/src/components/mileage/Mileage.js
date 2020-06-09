import React, { Component } from 'react';
import { TouchableOpacity, Linking } from 'react-native';
import { Text, Form, Item, Input, Label, Icon, Button, Card, CardItem, Body, View  } from 'native-base';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};
const GOOGLE_MAPS_APIKEY = '…';

// OUR IMPORTS
import Screen from '../layout/Screen';
import styles from '../../assets/styles/CommonStyles';

//REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { set_show_mini_loader } from '../../redux/actions/Actions';
import Geocoder from 'react-native-geocoding';
 
// Initialize the module (needs to be done only once)
Geocoder.init("AIzaSyC8lpkvXFDua9S2al669zfwz7GSkeVFWs4"); // use a valid API key
// With more options
// Geocoder.init("xxxxxxxxxxxxxxxxxxxxxxxxx", {language : "en"}); // set the language
 
// Geocoder.from("Colosseum")
//         .then(json => {
//             var location = json.results[0].geometry.location;
//             console.log("From COLUSUSMM");
//             console.log(location);
//         })
//         .catch(error => console.warn(error));
 
// Geocoder.from(41.89, 12.49)
//         .then(json => {
//         		var addressComponent = json.results[0].address_components[0];
//             console.log(" FROMN LAt Longg");
//             console.log(addressComponent);
//         })
//         .catch(error => console.warn(error));
 
 class Mileage extends Component {
	mapView = null;
	constructor(props){
		super(props);
		// this.props.pasa_data.set_is_logged('set_is_logged',false);
		this.state = {
			input_sampleString: "dd",
			origin: {},
			destination: {},
		}
		// this.props.pasa_data.set_show_mini_loader(true);
		
	}
	componentDidMount(){
		console.log("_______1____________________________");
		console.log("Milage componentDidMount");
		console.log(this.props.pasa_data.origin);
		console.log(this.props.pasa_data.destination);
		console.log("Milage componentDidMount");

		
		let temp_origin={};
		Geocoder.from(this.props.pasa_data.origin)
        .then(json => {
			temp_origin=json.results[0].geometry.location;
			Geocoder.from(this.props.pasa_data.destination)
			.then(json => {
				var location = json.results[0].geometry.location;

				console.log("got two");
				console.log(temp_origin);
				console.log(location);
				this.setState({
					xd: "asdasd",
					origin: {latitude: 37.3318456, longitude: -122.0296002},
					// origin: {latitude: temp_origin.lat, longitude: temp_origin.lng},
					destination: {latitude: location.lat, longitude: location.lng},
				});
				// this.props.pasa_data.set_show_mini_loader(false);
			})
			.catch(error => console.warn(error));
        })
        .catch(error => console.warn(error));
	}
	submit_sampleString(){
		alert();
		// this.props.pasa_data.set_sampleString('set_sampleString',this.state.input_sampleString);
	}
	open_native_map(){
		const url = Platform.select({
			ios: 'maps:e37.484847,-122.148386',
			// android: 'google.navigation:q=Texas,+USA',
			// android: 'geo:0,0?q=Texas,+USA',
			android: 'https://www.google.com/maps/dir/?api=1&origin='+this.props.pasa_data.origin+'&destination='+this.props.pasa_data.destination,
		  });
		Linking.openURL(url); 
	}
    render() {
		console.log("input_sampleString")
		console.log(this.state)
		// console.log("this.props.pasa_data")
		// console.log(this.props.pasa_data.redux_state.sampleString)
		// if(this.props.pasa_data.show_mini_loader)
		// 	return
			
        return (
				<View
					style={{
						flex:1,
						backgroundColor:'red',
						// justifyContent: 'flex-end',
						width:'100%',
						position:'relative',
					}}
					>
					<MapView
						style={{
							flex:1,
						backgroundColor:'red',
						}}
						initialRegion={{
							latitude: 37.78825,
							longitude: -122.4324,
							latitudeDelta: 0.0922,
							longitudeDelta: 0.0421,
						}}
						ref={c => this.mapView = c}
					>
					  <MapViewDirections
						origin={this.state.origin}
						destination={this.state.destination}
						// apikey={'AIzaSyAiCJ2KCchVNTCutDA8lHJs4i4_5xKFJA4'}
						// SA BWB
						apikey={'AIzaSyC8lpkvXFDua9S2al669zfwz7GSkeVFWs4'}
						onReady={result => {
						  this.mapView.fitToCoordinates(result.coordinates, {});
						}}
					  />
					</MapView>
					<View style={{
						// width: '100%', 
						height: 50, 
						justifyContent: 'center', 
						alignItems: 'center',
						position:'absolute',
						bottom: 0,
						right: 5,
						}} >
						<TouchableOpacity onPress={()=>this.open_native_map()}>
							<Text style={{
								...styles.call_button,
								marginLeft:0,
								padding: 3,
								fontSize: 15,
								}}>View Directions</Text>
						</TouchableOpacity>
					</View>
				</View>
		)
    }
}

// KUNG GUSTO MONG GAMITIN ANG REDUX STATES
function reduxStateToProps(state) {
    // const reduxState = (state) => {
    // console.log('redaux stae  ', state)
    return {
		redux_state: state.redux_state
		// si MyGlobalReducer kay makit an sa reducers folder
    }
}

// KUNG GUSTO MONG GAMITIN ANG REDUX FUNCTIONS(YUNG NASA ACTIONS)
function reduxActionFunctions(dispatch){
    return bindActionCreators({
        set_show_mini_loader : set_show_mini_loader,
        // set_is_logged : set_is_logged
		// si set_sampleString function kay makit an sa actions folder
    },dispatch);
 }

export default connect(reduxStateToProps,reduxActionFunctions)(Mileage);
