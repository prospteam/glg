import React, { Component } from 'react';
import {ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Text, Form, Item, Input, Label, Icon, Button, Card, CardItem, Body, View  } from 'native-base';
import Screen from '../layout/Screen';
import { Actions } from 'react-native-router-flux';
import styles from '../../assets/styles/CommonStyles';
import axios from 'axios';
//REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { set_sampleString, set_is_logged } from '../../redux/actions/Actions';// I included ang "index.js"

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};

 class GoogleMapsPlacesInput extends Component {
	constructor(props){
		super(props);
        this.state = {
            response: [],
            load_id: '',
            origin:'',
            destination:'',
            trailer_type:'',
            rate:'',

        };
	}

    componentDidMount() {
        var self = this;

    axios({
        method: 'get',
        url: 'http://web2.proweaverlinks.com/tech/bwbsafe/backend_web_api/loads.txt',
      }).then(function (response) {
        console.log("this is a test");
        console.log(response.data);
        self.setState({response: response.data});
    })
    .catch(function (error) {
        console.log(error);
        console.log("LAGI ERROR NA LAGI ALAM KO");
    });
}

    render() {
        return (
			// <Screen active_tab="Loads" title="Loads" >
            <GooglePlacesAutocomplete
                listViewDisplayed={this.props.redux_state.show_googleplaces}
                placeholder='Search by'
                minLength={2}
                autoFocus={false}
                returnKeyType={'search'}
                fetchDetails={true}
                renderDescription={row => row.description}
                onPress={(data, details = null) => {
                console.log(data, details);
                }}

                query={{
                    key: 'AIzaSyAKqsECe6r8abouPxWMxaO5m8g97YnXL_M',
                    language: 'en',
                    types: '(cities)'
                }}
                styles={{
                    textInputContainer: {
                        width: '100%',
                        zIndex: 9
                    },
                    description: {
                        fontWeight: 'bold'
                    },
                    predefinedPlacesDescription: {
                        color: '#1faadb'
                    }
                }}

                currentLocation={true}
                currentLocationLabel="Current location"
                nearbyPlacesAPI='GooglePlacesSearch'
                GoogleReverseGeocodingQuery={{

                }}
                GooglePlacesSearchQuery={{
                rankby: 'distance',
                types: 'food'
                }}

                filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
                enablePoweredByContainer={false}

                debounce={200}
                />

		)
        console.log(this.state.response);
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

export default connect(reduxStateToProps,reduxActionFunctions)(GoogleMapsPlacesInput);
