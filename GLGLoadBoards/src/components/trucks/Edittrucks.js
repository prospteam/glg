import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Text, Card, CardItem, Body, View } from 'native-base';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import DatePicker from 'react-native-datepicker'
import RNPickerSelect from 'react-native-picker-select';


// Our Imports
import Screen from '../layout/Screen';
import styles from '../../assets/styles/CommonStyles';
import AddressAutocomplete from '../AddressAutocomplete.js';
import MyFunctions from '../../libraries/MyFunctions.js'

//REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { set_sampleString, set_is_logged } from '../../redux/actions/Actions';
// I included ang "index.js"

class Edittrucks extends Component {
	constructor(props) {
		super(props);
		this.state = {
			origin: '',
			destination: '',
			date_available: this.props.date_available,
			trailer_type: this.props.trailer_type,
			comments: '',
			origin_address: MyFunctions.split_city_state_country(this.props.origin, this.props.origin_state),
			destination_address: MyFunctions.split_city_state_country(this.props.destination, this.props.destination_state),
		};

		console.log('___________________x_________');
		console.log(this.props.date_available);
		console.log('_________________x___________');

		// MyFunctions.split_city_state_country(' Jjovyylle')

	}

	_handlePress() {
		// console.log(this.state.origin);
		// console.log(this.state.destination);
		// console.log(this.state.trailer_type);
		// console.log(this.state.date);
		// console.log(this.state.commodity);
		// console.log(this.state.reference_number);

		axios.post('https://glgfreight.com/loadboard_app/api_mobile/Trucks/edit_trucks', {
			truck_id: this.props.truck_id,
			origin: this.state.origin_address.split(", ")[0],
			destination: this.state.destination_address.split(", ")[0],
			origin_state: this.state.origin_address.split(", ")[1],
			destination_state: this.state.destination_address.split(", ")[1],
			date_available: this.state.date_available,
			trailer_type: this.state.trailer_type,
			comments: this.state.comments,
		}).then(function (response) {
			console.log(response);
			console.log("________________________________________");
			alert('Success');
			Actions.MyTrucks();
		}).catch(function (err) {
			console.log(err);
			alert('Failed, there is an error during the process');

		});
	}
	render() {

		if (this.state.is_address_input_open) {
			var autocomplete_title = "";
			var autocomplete_value = "";
			if (this.state.for_origin) {
				autocomplete_title = "Origin";
				autocomplete_value = this.state.origin_address;
			} else {
				autocomplete_title = "Destination";
				autocomplete_value = this.state.destination_address;
			}
			return <AddressAutocomplete
				title={autocomplete_title}
				value={autocomplete_value}
				callback={value => {
					if (this.state.for_origin) {
						this.setState({
							'origin_address': value,
							'is_address_input_open': false,
							'for_origin': false,
						})
					} else {
						this.setState({
							'destination_address': value,
							'is_address_input_open': false,
						})
					}
				}} />
		}
		console.log(this.props.truck_id);
		return (
			<Screen>
				{/* <Text style={styles.contentItem}>
					Edit Trucks
				</Text> */}
				<ScrollView>
					<View style={styles.contentBody}>
						<Card defaultValue={this.props.truck_id}>
							<CardItem header style={{ backgroundColor: '#05426e', justifyContent: "center", alignItems: "center" }}>
								<Text defaultValue={this.props.truck_id} style={{ color: '#fff' }}>Edit Trucks</Text>
							</CardItem>
							<CardItem>
								<Body>
									<View style={{ flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
										<View style={{ flex: 1 }}>
											<Text style={{ fontSize: 10 }}>Origin</Text>
											<TextInput
												style={styles.text_input_edit}
												// defaultValue = {this.state.origin_address}
												// placeholderTextColor="#000"
												onFocus={() => this.setState({
													is_address_input_open: true,
													for_origin: true,
												})}
												value={this.state.origin_address}
											/>
											{/* <TextInput style={styles.text_input_edit} placeholderTextColor="#000"
																				defaultValue = {this.props.origin}
																				onFocus={() => this.setState({
																						is_address_input_open: true,
																						for_origin: true,
																				})}
																				value={this.state.origin}
																				onChangeText={text => this.setState({ origin: text })} /> */}
										</View>
									</View>
									<View style={{ margin: 8 }} />
									<View style={{ flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
										<View style={{ flex: 1 }}>
											<Text style={{ fontSize: 10 }}>Destination</Text>
											<TextInput
												style={styles.text_input_edit}
												// defaultValue = {this.state.origin_address}
												// placeholderTextColor="#000"
												onFocus={() => this.setState({
													is_address_input_open: true,
												})}
												value={this.state.destination_address}
											/>
											{/* <TextInput style={styles.text_input_edit} placeholderTextColor="#000"
																				defaultValue = {this.props.destination}
																				onFocus={() => this.setState({
																						is_address_input_open: true,
																						for_destination: true,
																				})}
																				value={this.state.destination}
																				onChangeText={text => this.setState({ destination: text })} /> */}
										</View>
									</View>
									<View style={{ margin: 8 }} />

									{/* <View style={{flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center"}}>
																		<View style={{flex:1}}>
																				<Text style={{fontSize:10}}>Origin</Text>
																				<TextInput style={styles.text_input_edit} placeholderTextColor="#000"
																				defaultValue = {this.props.origin}
																				onChangeText={text => this.setState({ origin: text })}/>
																		</View>
																		<View  style={{margin:2}}/>
																		<View style={{flex:1}}>
																				<Text style={{fontSize:10}}>Origin State</Text>
																				<TextInput style={styles.text_input_edit} placeholderTextColor="#000" defaultValue = {this.props.origin_state} onChangeText={text => this.setState({ destination: text })}/>
																		</View>
																</View> */}
									<View style={{ flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
										<View style={{ flex: 1 }}>
											<Text style={{ fontSize: 10 }}>Date Available</Text>
											{/* <TextInput style={styles.text_input_edit} placeholderTextColor="#000" defaultValue = {this.props.date_available}  onChangeText={text => this.setState({ date_available: text })}/> */}
											<DatePicker
												date={this.state.date_available}
												style={{ width: '100%' }}
												mode="date"
												placeholder="Select Date"
												format="YYYY-MM-DD"
												minDate="2020-01-01"
												maxDate="2025-12-31"
												confirmBtnText="Confirm"
												cancelBtnText="Cancel"
												customStyles={{
													dateIcon: {
														width: 0,
														height: 0,
													},
													dateInput: {
														height: 35,
														borderRadius: 5,
														borderWidth: 0.5,
														borderColor: '#009688',
														marginLeft: 0
													}
												}}
												onDateChange={(text) => this.setState({ date_available: text })}
											/>
										</View>
									</View>
									<View style={{ flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
										<View style={{ flex: 1 }}>
											<Text style={{ fontSize: 10 }}>Trailer Type</Text>
											{/* <TextInput style={styles.text_input_edit} placeholderTextColor="#000" defaultValue = {this.props.trailer_type} onChangeText={text => this.setState({ trailer_type: text })}/> */}
											<View style={{
												...styles.text_input_edit,
											}}>
												<View style={{
													'position': 'relative',
													'top': -17
												}}>
													<RNPickerSelect
														onValueChange={(text) => this.setState({ trailer_type: text })}
														value={this.state.trailer_type}
														items={[
															{ value: 'AC', label: 'AC (Auto Carrier)' },
															{ value: 'CRG', label: 'CRG (Cargo Van)' },
															{ value: 'FINT', label: 'FINT (Flat-Intermodal)' },
															{ value: 'CONT', label: 'CONT (Container)' },
															{ value: 'CV', label: 'Curtain Van' },
															{ value: 'DD', label: 'DD (Double Drop)' },
															{ value: 'DT', label: 'DT (Dump Trailer)' },
															{ value: 'F', label: 'F (Flatbed)' },
															{ value: 'FS', label: 'FS (Flat+Sides)' },
															{ value: 'LA', label: 'LA (Landal)' },
															{ value: 'FT', label: 'FT (Flat+Tarp)' },
															{ value: 'HB', label: 'HB (Hopper Bottom)' },
															{ value: 'HS', label: 'HS (Hotshot)' },
															{ value: 'LB', label: 'LB (Lowboy)' },
															{ value: 'MX', label: 'MX (Maxi Flat)' },
															{ value: 'PNEU', label: 'PNEU (Pneumatic)' },
															{ value: 'PO', label: 'PO (Power Only)' },
															{ value: 'R', label: 'R (Reefer)' },
															{ value: 'RINT', label: 'RINT (Reefer-Intermodal)' },
															{ value: 'RGN', label: 'RGN (Removable Gooseneck)' },
															{ value: 'VV', label: 'VV (Van+Vented)' },
															{ value: 'V', label: 'V (Dry Van)' },
															{ value: 'SD', label: 'SD (Step Deck/Single Drop)' },
															{ value: 'TNK', label: 'Tanker' },
															{ value: 'VA', label: 'VA (Van+Airride)' },
															{ value: 'VINT', label: 'VINT (Van-Intermodal)' },
															{ value: 'Other', label: 'Other' },
														]}
													/>
												</View>
											</View>
										</View>
									</View>
									<View style={{ margin: 8 }} />
									<View style={{ flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
										<View style={{ flex: 1 }}>
											<Text style={{ fontSize: 10 }}>Comments</Text>
											<TextInput
												style={styles.textArea}
												underlineColorAndroid="transparent"
												placeholder="Type something"
												placeholderTextColor="grey"
												numberOfLines={10}
												multiline={true}
												defaultValue={this.props.comments}
												onChangeText={text => this.setState({ comments: text })}
											/>
										</View>
									</View>
									<View style={{ flex: 1, flexDirection: 'row', margin: 15 }} />
									<TouchableOpacity onPress={() => this._handlePress()}>
										<Text style={styles.call_button}>Update</Text>
									</TouchableOpacity>
								</Body>
							</CardItem>
						</Card>
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
		redux_state: state.redux_state
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

export default connect(reduxStateToProps, reduxActionFunctions)(Edittrucks);
