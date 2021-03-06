import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Text, Form, Item, Input, Label, Icon, Button, Card, CardItem, Body, View } from 'native-base';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import DatePicker from 'react-native-datepicker'
import { GoogleMapsPlacesAutocomplete } from 'react-native-google-maps-places-autocomplete';

// MY Imports
import Screen from '../layout/Screen';
import styles from '../../assets/styles/CommonStyles';

//REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { set_sampleString, set_is_logged } from '../../redux/actions/Actions';// I included ang "index.js"

class MyTrucks extends Component {
	constructor(props) {
		super(props);
		this.state = {
			response: [],
			load_id: '',
			origin: '',
			origin_state: '',
			destination: '',
			trailer_type: '',
			date_added: '',
			comments: '',
		};
	}

	componentDidMount() {
		var self = this;

		axios({
			method: 'post',
			url: this.props.my_config.api_link + 'KROD/query_builder',
			data: {
				"select": "*",
				"from": "glg_trucks",
				"where": {
					"carrier_id": this.props.redux_session.user_data.user_id,
					// "username": this.state.username.toLowerCase(),
					// "other_password": this.state.password.toLowerCase()
				}
			}
		}).then(function (response) {
			console.log('___________NEW2____xxxx_____________');
			console.log(response.data);

			self.setState({ response: response.data });
		})
			.catch(function (error) {
				// this.props.set_show_mini_loader(false);
				console.log(error);
				// console.log("LAGI ERROR NA LAGI ALAM KO");
			});
	}
	render() {

		console.log("input_sampleString")
		let trucks_details;
		if (this.state.response.length <= 0)
			trucks_details = <Card>
							<CardItem header>
								<View>
									<Text>No data found.</Text>
								</View>
							</CardItem>
						</Card>
		else
		trucks_details = this.state.response.map((data, index) => {
			console.log(data)
			console.log('________________data')
			// LOG  {"carrier_id": "0", "category": "", "comments": "", "date_added": "2020-06-03 10:06:23", "date_available": "Jjn", "deleted_status": "0", "destination": "Km", "destination_state": "", "origin": "Jjj", "origin_state": "", "trailer_type": "Jj", "truck_id": "47"}
			return (
				<Card key={index}>
					<TouchableOpacity onPress={() => {
						Actions.Truckdetails({
							...data
							// trailer_type: data.trailer_type,
							// date_available: data.date_available,
							// commodity: data.commodity,
							// weight: data.weight,
							// height: data.height,
							// width:data.width
						});
					}}>
						<CardItem header style={{ backgroundColor: '#05426e' }}>
							<View style={{ flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
								<View style={{ flex: 1 }}>
									<Text style={{ fontSize: 12, color: 'white' }}>{(!data.origin) ? '(empty)' : data.origin}</Text>
									<Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }}>{(!data.origin_state) ? '(empty)' : data.origin_state}</Text>
								</View>
								<View style={{ flex: 1 }}>
									<Icon style={styles.arrow_des} type="FontAwesome5" name="arrow-right" />
								</View>
								<View style={{ marginLeft: 90 }} />
								<View style={{ flex: 1 }}>
									<Text style={{ fontSize: 12, color: 'white' }}>{(!data.destination) ? '(empty)' : data.destination}</Text>
									<Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }}>{(!data.destination_state) ? '(empty)' : data.destination_state}</Text>
								</View>
							</View>
						</CardItem>
						<CardItem>
							<Body>
								<View style={{ flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
									<View style={{ flex: 1, marginBottom: 5 }}>
										<Text style={{ fontSize: 15, fontWeight: "bold" }}>Trip Miles</Text>
										<Text style={{ fontSize: 15 }}>001</Text>
									</View>
									<View style={{ flex: 1, marginBottom: 5 }}>
										<Text style={{ fontSize: 15, fontWeight: "bold" }}>Trailer Type</Text>
										<Text style={{ fontSize: 15 }}>{(!data.trailer_type) ? '(empty)' : data.trailer_type}</Text>
									</View>
								</View>
								<View style={{ marginBottom: 15 }} />
								<View style={{ flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
									<View style={{ flex: 1, marginBottom: 5 }}>
										<Text style={{ fontSize: 15, fontWeight: "bold" }}>Ship dates</Text>
										<Text style={{ fontSize: 12 }}>{(!data.date_added) ? '(empty)' : data.date_added}</Text>
									</View>
									<View style={{ flex: 1, marginBottom: 5 }}>
										<Text style={{ fontSize: 15, fontWeight: "bold" }}>Comments</Text>
										<Text style={{ fontSize: 15}}>{(!data.comments) ? '(empty)' : data.comments}</Text>
									</View>
								</View>
							</Body>
						</CardItem>
					</TouchableOpacity>
				</Card>
			);
			console.log(response.data.trailer_type);
		});

		return (
			<Screen active_tab="Trucks" title="My Trucks"
				side_header_buttons={
					<View style={{ ...styles.darkFont, flex: 1, flexDirection: 'row-reverse' }}>
						<TouchableOpacity onPress={() => { Actions.Addtrucks() }}>
							<Icon style={styles.headerIcon} type="FontAwesome5" name="plus" />
						</TouchableOpacity>
					</View>
				}
			>
				{/* <Text style={styles.contentItem}>
						Trucks
					</Text> */}
				<ScrollView>
					<View style={styles.contentBody}>
						{/* <View style={styles.middle}>
									<Text style={styles.middle_text}>Origin</Text>
										<TextInput style={styles.text_input} placeholderTextColor="#000" value = {this.props.redux_state.show_googleplaces} onChangeText={text => this.setState({ origin: text })}/>
									<Text style={styles.middle_text}>Destination</Text>
										<TextInput style={styles.text_input} placeholderTextColor="#000" onChangeText={text => this.setState({ destination: text })}/>
									<Text style={styles.middle_text}>Trailer Type</Text>
										<TextInput style={styles.text_input} placeholderTextColor="#000" onChangeText={text => this.setState({ trailer_type: text })}/>
										<Text style={styles.middle_text}>Date Available</Text>
										<DatePicker
											date={this.state.date}
											style={{width:'64%'}}
											mode="date"
											placeholder="Select Date"
											format="YYYY-MM-DD"
											minDate="2020-01-01"
											maxDate="2025-12-31"
											confirmBtnText="Confirm"
											cancelBtnText="Cancel"
											customStyles={{
											dateIcon: {
											width:0,
											height:0,
											},
											dateInput: {
											height: 35,
											borderRadius:5,
											borderWidth: 0.5,
											borderColor: '#009688',
											marginLeft:'3.5%'
											}
											}}
											onDateChange={(text) => this.setState({ date: text })}
										/>
									<TouchableOpacity>
										<Text style={styles.search_button}>Search</Text>
									</TouchableOpacity>
									</View> */}
						{trucks_details}
					</View>
				</ScrollView>
			</Screen>
		)
	}
}

// KUNG GUSTO MONG GAMITIN ANG REDUX STATES
function reduxStateToProps(state) {
	// const reduxState = (state) => {
	// console.log('redaux stae  ', state)
	return {
		redux_state: state.redux_state,
		redux_session: state.redux_session,
		my_config: state.my_config,
		// si MyGlobalReducer kay makit an sa reducers folder
	}
}

// KUNG GUSTO MONG GAMITIN ANG REDUX FUNCTIONS(YUNG NASA ACTIONS)
function reduxActionFunctions(dispatch) {
	return bindActionCreators({
		set_sampleString: set_sampleString,
		set_is_logged: set_is_logged
		// si set_sampleString function kay makit an sa actions folder
	}, dispatch);
}

export default connect(reduxStateToProps, reduxActionFunctions)(MyTrucks);
