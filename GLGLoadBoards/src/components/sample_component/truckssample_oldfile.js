import React, { Component } from 'react';
import { Text, View  } from 'native-base';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-datepicker'
import { StyleSheet, TextInput, Button } from 'react-native';
import { GoogleMapsPlacesAutocomplete } from 'react-native-google-maps-places-autocomplete';



// MY Imports
import Screen from '../layout/Screen';
import styles from '../../assets/styles/CommonStyles';

//REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { set_sampleString, set_is_logged } from '../../redux/actions/Actions';// I included ang "index.js"

 class Trucks extends Component {
	constructor(props){
		super(props);
		this.state = {
			input_sampleString: "",
		}
	}
	submit_sampleString(){
		alert();
		this.props.set_sampleString('set_sampleString',this.state.input_sampleString);
	}
    render() {
		console.log("input_sampleString")
		console.log(this.state)
		// console.log("this.props")
		// console.log(this.props.redux_state.sampleString)

        return (
			<Screen active_tab="Trucks" title="Trucks" >
				<Text style={styles.contentItem}>
					Trucks contents here to be placed soon.
				</Text>
				<View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white', marginTop: 2, marginHorizontal: 20, padding: 25, borderRadius: 10, marginBottom: '80%' }}>
                            {/* <SCLAlert
                                show={this.state.show}
                                onRequestClose={this.handlePress}
                                theme={this.state.theme}
                                title={this.state.title}
                                subtitle={this.state.msg}
                            >
                                <SCLAlertButton theme="default" onPress={this.handleClose}>OK</SCLAlertButton>
                            </SCLAlert> */}
                            <TextInput style={styles2.fieldsInput1} placeholderTextColor="#000" placeholder="Origins" onChangeText={(text) => this.setState({ origin: text })} />
                            <TextInput style={styles2.fieldsInput1} placeholderTextColor="#000" placeholder="Destination" onChangeText={(text) => this.setState({ destination: text })} />

                            <View
                                style={styles2.fieldsInput1}
                            >
                                <RNPickerSelect
                                    onValueChange={(text) => this.setState({ trailer_type: text })}
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
                            <DatePicker
                                style={styles2.fieldsInput1}
                                date={this.state.date}
                                mode="date"
                                placeholder="Select Date"
                                format="YYYY-MM-DD"
                                minDate="2020-01-01"
                                maxDate="2025-12-31"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                onDateChange={(text) => this.setState({ date: text })}
                            />
                                 {/* <TouchableOpacity>
                                    <Text style={styles.addLoadbtn} onPress={() => this.handlePress()}>Search</Text>
                                </TouchableOpacity> */}
                            <Button
                                style={styles2.addLoadbtn}
                                onPress={() => this._handlePress()}
                                title="Searches">
                                Searches
                          </Button>
                        </View>
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

export default connect(reduxStateToProps,reduxActionFunctions)(Trucks);



const styles2 = StyleSheet.create({

    btnlogin: {
        color: '#fff',
        borderColor: "#009688",
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        margin: 3,
        width: '45%',
        height: '35%',
        borderRadius: 5,

    },
    btnlogin1: {
        color: 'white',
        borderColor: "#009688",
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        margin: 3,
        width: '45%',
        height: '35%',
        borderRadius: 5,
        backgroundColor: '#01508b',
    },
    TextInput: {
        color: 'white',
        zIndex: 4,
        marginTop: 25,
        marginLeft: 60
    },
    fieldsInput1: {
        borderWidth: 1,
        width: '100%',
        height: 40,
        borderColor: "#009688",
        textAlign: 'center',
        borderRadius: 5,
        margin: 3,
    },
    textArea: {
        borderWidth: 1,
        width: '100%',
        borderColor: "#009688",
        textAlign: 'center',
        borderRadius: 5,
        margin: 3,
        height: 150,
        justifyContent: "flex-start"
    },
    tableName: {
        marginLeft: 20,
        marginTop: 15,
        fontSize: 20,
        color: 'white'
    },
    addLoadbtn: {
        backgroundColor: 'orange',
        color: 'white',
        justifyContent: 'center',
        borderRadius: 50,
        width: 120,
        height: '70%',
        textAlign: 'center',
        padding: 8,
        fontSize: 15,
        marginTop: 20,
    }

});
