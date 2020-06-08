import React, { Component } from 'react';
import { Text, View  } from 'native-base';
import {TouchableOpacity } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Actions } from 'react-native-router-flux';

// MY Imports
import styles from '../assets/styles/CommonStyles';
import {api_link} from '../libraries/MyConfigs.js';

//REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { set_sampleString, set_is_logged,set_autocomplete_text } from '../redux/actions/Actions';// I included ang "index.js"

 class AddressAutocomplete extends Component {
	constructor(props){
		super(props);
        this.state = {
            city_state_country:''
        };
	}

    componentDidMount() {
    }

    render() {
        console.log("propsaddress");
        console.log(this.props);
        
        return (
            <View style={{backgroundColor:'none',flex:1}}>
                <View style={{justifyContent:'space-between',flexDirection:'row',margin:10}}>
                    <Text>{this.props.title}</Text>
                    <TouchableOpacity 
                    onPress={e=>this.props.callback(this.state.city_state_country)}>
                        <Text style={{
                            ...styles.call_button,
                            margin:0,
                            width:60,
                            padding: 3,
                            fontSize: 15,
                            }}>Done</Text>
                    </TouchableOpacity>
                </View>
            { /*<TextInput style={styles.text_input} placeholderTextColor="#000" listViewDisplayed={this.props.redux_state.show_googleplaces}
                    onChangeText={text => this.setState({ origin: text })}/>*/}
                <GooglePlacesAutocomplete
                    listViewDisplayed={this.props.redux_state.show_googleplaces}
                    placeholder='Enter Location. Example:Ada, MI, USA'
                    minLength={2}
                    autoFocus={true}
                    returnKeyType={'search'}
                    fetchDetails={true}
                    renderDescription={row => row.description}
                    onPress={(data, details = null) => {
                        console.log("data,");
                        console.log(data);
                        console.log("data,");
                        console.log(details);
                        console.log(", details");
                        console.log(details.address_components[0].short_name);
                        console.log(details.address_components[3].short_name);
                        this.setState({
                            'city_state_country':data.description,
                        });
                        // this.props.set_autocomplete_text({
                        //     'city_state_country':data.description,
                        //     // 'city':details.address_components[0].short_name,
                        //     // 'state':details.address_components[3].short_name,
                        // });
                    }}
                    query={{
                        // key: 'AIzaSyAiCJ2KCchVNTCutDA8lHJs4i4_5xKFJA4',
                        key: 'AIzaSyAKqsECe6r8abouPxWMxaO5m8g97YnXL_M',
                        language: 'en',
                        types: '(cities)',
                        components: 'country:us',
                    }}
                    styles={{
                        textInputContainer: {
                            // width: '58%',
                            backgroundColor: '#C9C9CE',
                                height: 44,
                                borderTopColor: '#7e7e7e',
                                borderBottomColor: '#b5b5b5',
                                borderTopWidth: 0 ,
                                borderBottomWidth: 0,
                                flexDirection: 'row',
                        },
                        description: {
                            fontWeight: 'bold'
                        },
                        predefinedPlacesDescription: {
                            color: '#1faadb'
                        }
                    }}
                    currentLocation={false}
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
                    debounce={100}
                />
                
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
        set_sampleString : set_sampleString,
        set_is_logged : set_is_logged,
        set_autocomplete_text : set_autocomplete_text,
		// si set_sampleString function kay makit an sa actions folder
    },dispatch);
 }

export default connect(reduxStateToProps,reduxActionFunctions)(AddressAutocomplete);
