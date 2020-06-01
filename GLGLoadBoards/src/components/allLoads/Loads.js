import React, { Component } from 'react';
import {ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Text, Form, Item, Input, Label, Icon, Button, Card, CardItem, Body, View  } from 'native-base';
import Screen from '../layout/Screen';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import DatePicker from 'react-native-datepicker'
import { Actions } from 'react-native-router-flux';
import RNPickerSelect from 'react-native-picker-select';
import styles from '../../assets/styles/CommonStyles';
import axios from 'axios';

//REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { set_show_mini_loader, set_sampleString, set_is_logged } from '../../redux/actions/Actions';// I included ang "index.js"

 class Loads extends Component {
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
        // if(!this.props.redux_state.set_show_mini_loader)
            // this.props.set_show_mini_loader(false);

        axios({
            method: 'get',
            url: 'https://glgfreight.com/loadboard_app/api_mobile/Loads/all_loads',
        }).then(function (response) {
            console.log("this is a test");
            console.log(response.data);
            self.setState({response: response.data});
            // if(this.props.redux_state.set_show_mini_loader)
            //     this.props.set_show_mini_loader(false);
        })
        .catch(function (error) {
            // if(this.props.redux_state.set_show_mini_loader)
            //     this.props.set_show_mini_loader(false);
            console.log(error);
            console.log("LAGI ERROR NA LAGI ALAM KO");
        });
    }
    render() {
        let load_details;
        if (this.state.response.length!==0) {
            load_details = this.state.response.map((data, index)=>{
            return(
            <Card key={index}>
                <CardItem header style={{backgroundColor:'#05426e' }}>
                    <Text style={{color:'#fff'}}>{data.load_id}</Text>
                    <Text style={{color:'#4caf50', fontSize:12}}> On Way</Text>
                        <Icon style={styles.deleteIcon} type="FontAwesome5" name="trash"/>
                        <Icon style={styles.editIcon} type="FontAwesome5" name="edit" onPress={() =>{Actions.Editloads({
                            load_id:data.load_id,
                            origin:data.origin,
                            destination:data.destination,
                            date_available:data.date_available,
                            trailer_type: data.trailer_type,
                            length: data.length,
                            width:data.width,
                            rate: data.rate,
                            commodity: data.commodity,
                            reference_number:data.reference_number,
                            comments: data.comments,
                        }); }}/>
                        <Icon style={styles.order_detailes} onPress={ () => {Actions.Orderdetails({
                            load_id:data.load_id,
                            origin: data.origin,
                            destination:data.destination,
                            trailer_type: data.trailer_type,
                            date_available: data.date_available,
                            commodity: data.commodity,
                            weight: data.weight,
                            height: data.height,
                            width:data.width,
                            comments:data.comments
                        }); }} type="FontAwesome5" name="bars"/>
                </CardItem>
                <CardItem>
                    <Body>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View>
                            <Text>Origin</Text>
                        </View>
                        <View style={{marginBottom:5}}>
                            <Text style={{fontSize:10, marginLeft: 60}}>Origin</Text>

                            <Text style={{fontSize:10, marginLeft: 60}}>{data.origin}</Text>
                        </View>
                            <View style={{textAlign:'right'}}>
                                <Text style={{fontSize:20, marginLeft: 80, fontWeight: 'bold'}}>${data.rate}</Text>
                            </View>
                        </View>
                        <View style={{borderBottomColor: '#004f6a',borderBottomWidth: 1, width:'80%'}} />
                            <View style={{flex: 1, flexDirection: 'row',marginTop:2}}>
                        <View>
                            <Text>Destination</Text>
                        </View>
                        <View style={{marginBottom:5}}>
                            <Text style={{fontSize:10, marginLeft: 20}}>Destination</Text>
                            <Text style={{fontSize:10, marginLeft: 20}}>{data.destination}</Text>
                        </View>
                        <View style={{textAlign:'right', marginLeft:70 }}>
                                <Icon style={styles.vehicle_type} type="FontAwesome5" name="truck"/>
                                <Text style={{fontSize:10}}>{data.trailer_type}</Text>
                        </View>
                    </View>
                    </Body>
                </CardItem>
            </Card>
        );
        console.log(response.data.trailer_type);
        });
    }
        return (
			<Screen active_tab="Loads" title="Loads" >
                <ScrollView>
				{/* <Text style={styles.contentHeader}>
					Loads list
				</Text> */}
                <View style={styles.contentBody}>
                             <View style={styles.middle}>
                                <Text style={styles.middle_text}>Origin</Text>
                                    { /*<TextInput style={styles.text_input} placeholderTextColor="#000" listViewDisplayed={this.props.redux_state.show_googleplaces}
                                         onChangeText={text => this.setState({ origin: text })}/>*/}
                                        <GooglePlacesAutocomplete
                                            listViewDisplayed={this.props.redux_state.show_googleplaces}
                                            placeholder='Enter Origin'
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
                                                    width: '58%',
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

                                <Text style={styles.middle_text}>Destination</Text>
                                <GooglePlacesAutocomplete
                                    listViewDisplayed={this.props.redux_state.show_googleplaces}
                                    placeholder='Enter Destination'
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
                                            width: '58%',
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
                                <Text style={styles.middle_text}>Trailer Type</Text>
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

                                {    /*<TextInput style={styles.text_input} placeholderTextColor="#000" onChangeText={text => this.setState({ trailer_type: text })}/>*/}
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
                                <Text style={styles.middle_text}>Commodity</Text>
                                    <TextInput style={styles.text_input} placeholderTextColor="#000" onChangeText={text => this.setState({ commodity: text })}/>
                                <Text style={styles.middle_text}>Reference Number</Text>
                                    <TextInput style={styles.text_input} placeholderTextColor="#000" onChangeText={text => this.setState({ reference_number: text })}/>
                                <TouchableOpacity>
                                    <Text style={styles.search_button}>Search</Text>
                                </TouchableOpacity>
                         </View>
                        {load_details}
                </View>
                </ScrollView>
			</Screen>
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
        set_is_logged : set_is_logged,
        set_show_mini_loader : set_show_mini_loader,
		// si set_sampleString function kay makit an sa actions folder
    },dispatch);
 }

export default connect(reduxStateToProps,reduxActionFunctions)(Loads);
