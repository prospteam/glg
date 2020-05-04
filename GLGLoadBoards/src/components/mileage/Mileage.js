import React, { Component } from 'react';
import { Linking } from 'react-native';
import { Text, Form, Item, Input, Label, Icon, Button, Card, CardItem, Body, View  } from 'native-base';
import MapView from 'react-native-maps';

// OUR IMPORTS
import Screen from '../layout/Screen';
import styles from '../../assets/styles/CommonStyles';

//REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { set_sampleString, set_is_logged } from '../../redux/actions/Actions';

 class Mileage extends Component {
	constructor(props){
		super(props);
		// this.props.set_is_logged('set_is_logged',false);
		this.state = {
			input_sampleString: "",
		}
	}
	submit_sampleString(){
		alert();
		this.props.set_sampleString('set_sampleString',this.state.input_sampleString);
	}
	asd(){
		const url = Platform.select({
			ios: 'maps:e37.484847,-122.148386',
			// android: 'google.navigation:q=Texas,+USA',
			// android: 'geo:0,0?q=Texas,+USA',
			android: 'https://www.google.com/maps/dir/?api=1&origin='+this.props.origin+'&destination='+this.props.destination,
		  });
		Linking.openURL(url); 
	}
    render() {
		console.log("input_sampleString")
		console.log(this.state)
		// console.log("this.props")
		// console.log(this.props.redux_state.sampleString)

        return (
			<Screen>
				<Text style={styles.contentItem}>
					Sub Title
				</Text>
				<View
					style={{
						flex:1,
						// backgroundColor:'red',
					}}
					>
					<MapView
						style={{flex:1}}
						initialRegion={{
							latitude: 37.78825,
							longitude: -122.4324,
							latitudeDelta: 0.0922,
							longitudeDelta: 0.0421,
						}}
					/>
				<Button onPress={()=>this.asd()}><Text>call asd</Text></Button>
				</View>
				{/* <Card style={styles.contentItem}>
					<CardItem header>
						<Text>Sample Redux State Call</Text>
					</CardItem>
					<CardItem>
						<Body>
							<Text>
							redux_state.sampleString={this.props.redux_state.sampleString}
							</Text>
						</Body>
					</CardItem>
				</Card>
				<Card style={styles.contentItem}>
					<CardItem header>
						<Text>Sample Redux Function Call</Text>
					</CardItem>
					<CardItem>
						<Body>
							<Item regular>
								<Icon active name='home' />
								<Input
									placeholder="Input text..."
									onChangeText={
										(text) => this.setState(
											{input_sampleString:text}
											)
										}
									defaultValue={this.state.input_sampleString}
								/>
							</Item>
						</Body>
					</CardItem>
					<CardItem>
						<Body>
							<Button onPress={() => this.submit_sampleString()}>
								<Text>Update</Text>
							</Button>
						</Body>
					</CardItem>
				</Card> */}
			</Screen>
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
        set_sampleString : set_sampleString,
        set_is_logged : set_is_logged
		// si set_sampleString function kay makit an sa actions folder
    },dispatch);
 }

export default connect(reduxStateToProps,reduxActionFunctions)(Mileage);
