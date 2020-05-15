import React, { Component } from 'react';
import {ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Text, Form, Item, Input, Label, Icon, Button, Card, CardItem, Body, View  } from 'native-base';
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

 class Trucks extends Component {
	constructor(props){
		super(props);
		this.state = {
			input_sampleString: "",
            show_googleapi:'',
		}
	}



    render() {
		console.log("input_sampleString")
		console.log(this.props.redux_state.show_googleapi)
        return (
                <Screen active_tab="Loads" title="Loads" >
                    <Text style={styles.contentItem}>
                        Trucks
                    </Text>
                    <ScrollView>
                    <View style={styles.contentBody}>
                                <View style={styles.middle}>
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
                             </View>
                             <View>
                             <Text style={styles.contentItem}>
                                 Trucks List
                             </Text>
                             </View>
                                     <Text style={{color:'black', fontSize:15, fontStyle: 'italic', textAlign: 'center', backgroundColor: '#009688', borderRadius: 2,  opacity: 0.5}}> No Data Available</Text>
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
function reduxActionFunctions(dispatch){
    return bindActionCreators({
        set_sampleString : set_sampleString,
        set_is_logged : set_is_logged
		// si set_sampleString function kay makit an sa actions folder
    },dispatch);
 }

export default connect(reduxStateToProps,reduxActionFunctions)(Trucks);
