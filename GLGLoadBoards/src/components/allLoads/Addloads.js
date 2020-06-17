import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Text, Form, Item, Input, Label, Icon, Button, Card, CardItem, Body, View } from 'native-base';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-datepicker'

// Our Imports
import Screen from '../layout/Screen';
import styles from '../../assets/styles/CommonStyles';
import AddressAutocomplete from '../AddressAutocomplete.js';


//REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { set_sampleString, set_is_logged } from '../../redux/actions/Actions';// I included ang "index.js"

class Addloads extends Component {
	constructor(props) {
		super(props);
		this.state = {
			load_id: '',
			origin: '',
			destination: '',
			date_available: '',
			trailer_type: '',
			length: '',
			width: '',
			height: '',
			weight: '',
			rate: '',
			commodity: '',
			reference_number: '',
			comments: '',
			color: 'white',
			show: false,
			msg: "",
			theme: "success",
			title: "success",
			edit_success: false,
		};
	}
	openAddressInput = (asd) => {
		alert(asd);
	}
	handleClose = () => {
		this.setState({
			show: false
		});

		if (this.state.edit_success) {
			this.setState({
				show: true,
				msg: "Please Enter Password",
				theme: "success",
				title: "Success!"
			})
			return;
		}
	}
	_handlePress() {
		axios.post('https://glgfreight.com/loadboard_app/api_mobile/Loads/addloads', {
			origin: this.state.origin.split(", ")[0],
			destination: this.state.destination.split(", ")[0],
			origin_state: this.state.origin.split(", ")[1],
			destination_state: this.state.destination.split(", ")[1],
			date_available: this.state.date_available,
			trailer_type: this.state.trailer_type,
			length: this.state.length,
			width: this.state.width,
			height: this.state.height,
			weight: this.state.weight,
			rate: this.state.rate,
			commodity: this.state.commodity,
			reference_number: this.state.reference_number,
			comments: this.state.comments,
			shipper_id: this.props.redux_session.user_data.user_id,
		}).then(function (response) {
			console.log("______________________");
			console.log("______________________");
			console.log(response);
			console.log("______________________");
			console.log("______________________");
			alert('success');
			Actions.MyLoads();
		}).catch(function (err) {
			console.log(err);
			alert('TOO MANY ERRORS');
		});

	}
	render() {
		if (this.state.is_address_input_open) {
			var autocomplete_title = "";
			var autocomplete_value = "";
			if (this.state.for_origin) {
				autocomplete_title = "Origin";
				autocomplete_value = this.state.origin;
			} else {
				autocomplete_title = "Destination";
				autocomplete_value = this.state.destination;
			}
			return <AddressAutocomplete
				title={autocomplete_title}
				value={autocomplete_value}
				callback={value => {
					if (this.state.for_origin) {
						this.setState({
							'origin': value,
							'is_address_input_open': false,
							'for_origin': false,
						})
					} else {
						this.setState({
							'destination': value,
							'is_address_input_open': false,
						})
					}
				}} />
		}


		return (
			<Screen title="Add Loads">
				{/* <Text style={styles.contentItem}>
					Add Loads
				</Text> */}
				<ScrollView>
					<View style={styles.contentBody}>
						<Card>
							<CardItem header style={{ backgroundColor: '#05426e', justifyContent: "center", alignItems: "center" }}>
								<Text style={{ color: '#fff' }}>Add Loads</Text>
							</CardItem>
							<CardItem>
								<Body>
									<View style={{ flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
										<View style={{ flex: 1 }}>
											<Text style={{ fontSize: 10 }}>Origin</Text>
											<TextInput
												style={styles.text_input_edit}
												// placeholderTextColor="#000"
												onFocus={() => this.setState({
													is_address_input_open: true,
													for_origin: true,
												})}
												value={this.state.origin}
											/>
										</View>
										<View style={{ margin: 2 }} />
										<View style={{ flex: 1 }}>
											<Text style={{ fontSize: 10 }}>Destination</Text>
											<TextInput style={styles.text_input_edit}
												placeholderTextColor="#000"
												onFocus={() => this.setState({
													is_address_input_open: true,
												})}
												value={this.state.destination}
											/>
										</View>
									</View>
									<View style={{ marginBottom: 15 }} />
									<View style={{ flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
										<View style={{ flex: 1 }}>
											<Text style={{ fontSize: 10 }}>Rate per mile</Text>
											<TextInput
												style={styles.text_input_edit}
												// placeholderTextColor="#000"
												onChangeText={text => this.setState({ rate: text })}
												value={this.state.rate}
											/>
										</View>
									</View>
									<View style={{ marginBottom: 15 }} />
									<View style={{ flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
										<View style={{ flex: 1 }}>
											<Text style={{ fontSize: 10 }}>Pick Up Date</Text>
											{/* <TextInput style={styles.text_input_edit} placeholderTextColor="#000" onChangeText={text => this.setState({ date_available: text })} /> */}
											<DatePicker
												date={this.state.date_available}
												style={{width:'100%'}}
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
												marginLeft:0
												}
												}}
												onDateChange={(text) => this.setState({ date_available: text })}
										/>
										</View>
									</View>
									<View style={{ marginBottom: 15 }} />
									<View style={{ flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
										<View style={{ flex: 1 }}>
											<Text style={{ fontSize: 10 }}>Trailer Type</Text>
											{/* <TextInput style={styles.text_input_edit} placeholderTextColor="#000" onChangeText={text => this.setState({ trailer_type: text })}/> */}
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
									<View style={{ marginBottom: 15 }} />
									<View style={{ flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
										<View style={{ flex: 1 }}>
											<Text style={{ fontSize: 10 }}>length</Text>
											<TextInput style={styles.text_input_edit} placeholderTextColor="#000" onChangeText={text => this.setState({ length: text })} />
										</View>
										<View style={{ margin: 2 }} />
										<View style={{ flex: 1 }}>
											<Text style={{ fontSize: 10 }}>Width</Text>
											<TextInput style={styles.text_input_edit} placeholderTextColor="#000" onChangeText={text => this.setState({ width: text })} />
										</View>
									</View>
									<View style={{ marginBottom: 15 }} />
									<View style={{ flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
										<View style={{ flex: 1 }}>
											<Text style={{ fontSize: 10 }}>Height</Text>
											<TextInput style={styles.text_input_edit} placeholderTextColor="#000" onChangeText={text => this.setState({ height: text })} />
										</View>
										<View style={{ margin: 2 }} />
										<View style={{ flex: 1 }}>
											<Text style={{ fontSize: 10 }}>Weight</Text>
											<TextInput style={styles.text_input_edit} placeholderTextColor="#000" onChangeText={text => this.setState({ weight: text })} />
										</View>
									</View>
									<View style={{ marginBottom: 15 }} />
									<View style={{ flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
										<View style={{ flex: 1 }}>
											<Text style={{ fontSize: 10 }}>Commodity</Text>
											<TextInput style={styles.text_input_edit} placeholderTextColor="#000" onChangeText={text => this.setState({ commodity: text })} />
										</View>
										<View style={{ margin: 2 }} />
										<View style={{ flex: 1 }}>
											<Text style={{ fontSize: 10 }}>Ref. Number</Text>
											<TextInput style={styles.text_input_edit} placeholderTextColor="#000" onChangeText={text => this.setState({ reference_number: text })} />
										</View>
									</View>
									<View style={{ marginBottom: 15 }} />
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
												onChangeText={text => this.setState({ comments: text })}
											/>
										</View>
									</View>
									<View style={{ flex: 1, flexDirection: 'row', margin: 15 }} />
									<TouchableOpacity onPress={() => this._handlePress()}>
										<Text style={styles.call_button}>Submit</Text>
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
		redux_state: state.redux_state,
		redux_session: state.redux_session,
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

export default connect(reduxStateToProps, reduxActionFunctions)(Addloads);
