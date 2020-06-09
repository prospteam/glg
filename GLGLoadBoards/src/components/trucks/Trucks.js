import React, { Component } from 'react';
import {ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Text, Form, Item, Input, Label, Icon, Button, Card, CardItem, Body, View  } from 'native-base';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import DatePicker from 'react-native-datepicker'
import RNPickerSelect from 'react-native-picker-select';
import { GoogleMapsPlacesAutocomplete } from 'react-native-google-maps-places-autocomplete';



// MY Imports
import Screen from '../layout/Screen';
import styles from '../../assets/styles/CommonStyles';
import AddressAutocomplete from '../AddressAutocomplete.js';
import {api_link} from '../../libraries/MyConfigs.js';

//REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { set_sampleString, set_is_logged } from '../../redux/actions/Actions';// I included ang "index.js"

 class Trucks extends Component {
	constructor(props){
		super(props);
        this.state = {
            response: [],
            load_id: '',
            origin:'',
            origin_state:'',
            destination:'',
            trailer_type:'',
            date_added:'',
            comments:'',
            input_address_origin:false,
            input_address_destination:false,
        };
	}

    search(){
        var origin_array = this.state.origin.split(", ");
        var destination_array = this.state.destination.split(", ");

        var origin_city=origin_array[0];
        var origin_state=origin_array[1];
        var destination_city=destination_array[0];
        var destination_state=destination_array[1];

        var where_query = {
            // "origin_state": origin_state,
            // "origin": origin_city, // CITY
            // "destination": destination_city, // CITY
            // "destination_state": destination_state,
            // "date_available": this.state.date,
            // "trailer_type": this.state.trailer_type,
        }
        if(this.state.date)
            where_query.date_available=this.state.date

        if(this.state.trailer_type)
            where_query.trailer_type=this.state.trailer_type

        if(origin_city)
            where_query.origin=origin_city

        if(origin_state)
            where_query.origin_state=origin_state

        if(destination_city)
            where_query.origin=destination_city

        if(destination_state)
            where_query.destination_state=destination_state

        var self = this;

        axios({
            method: 'post',
            url: api_link+'KROD/query_builder',
            data: {
                "select": "*",
                "from": "glg_trucks",
                "where": where_query
            }
            }).then(function (response) {
                console.log('___________NEW2____xxxx_____________');
                console.log(response.data);
                
                self.setState({response: response.data});
            })
            .catch(function (error) {
                // this.props.set_show_mini_loader(false);
                console.log(error);
                // console.log("LAGI ERROR NA LAGI ALAM KO");
            });
        // if(!this.props.redux_state.set_show_mini_loader)
            // this.props.set_show_mini_loader(false);
            
    }
    componentDidMount() {
        this.search();
        // var self = this;

        // axios({
        //     method: 'get',
        //     url: 'https://glgfreight.com/loadboard_app/api_mobile/Trucks/all_trucks',
        // }).then(function (response) {
        //     console.log("this is a test");
        //     console.log(response.data);
        //     self.setState({response: response.data});
        // })
        // .catch(function (error) {
        //     console.log(error);
        //     console.log("LAGI ERROR NA LAGI ALAM KO");
        // });
    }

    render() {

        if(this.state.input_address_origin || this.state.input_address_destination){
            var autocomplete_title="";
            var autocomplete_value="";
            if(this.state.input_address_origin){
                autocomplete_title="Origin";
                autocomplete_value=this.state.origin;
            }else{
                autocomplete_title="Destination";
                autocomplete_value=this.state.destination;
            }
            return <AddressAutocomplete 
                        title={autocomplete_title}
                        value={autocomplete_value}
                        callback={value => {
                            if(this.state.input_address_origin){
                                this.setState({
                                    'origin':value,
                                    'input_address_origin':false
                                })
                            }else{
                                this.setState({
                                    'destination':value,
                                    'input_address_destination':false
                                })
                            }
                        }}/>
        }

        let trucks_details;
        
        if (this.state.response.length==0)
        trucks_details = 
            <Card>
                <CardItem header>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center"}}>
                        <Text style={{fontSize:12}}>
                            No data found.
                        </Text>
                    </View>
                </CardItem>
            </Card>
        else
            trucks_details = this.state.response.map((data, index)=>{
                return (
                    <Card key={index}>
                        <TouchableOpacity onPress={ () => {Actions.Truckdetails({
                            ...data
                                // trailer_type: data.trailer_type,
                                // date_available: data.date_available,
                                // commodity: data.commodity,
                                // weight: data.weight,
                                // height: data.height,
                                // width:data.width
                            }); }}>
                            <CardItem header style={{backgroundColor:'#05426e' }}>
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center"}}>
                                <View style={{flex:1}}>
                                    <Text style={{fontSize:12, color:'white'}}>{data.origin}</Text>
                                    <Text style={{fontSize:15,fontWeight: 'bold', color:'white'}}>{data.origin_state}</Text>
                                </View>
                                <View style={{flex:1}}>
                                <Icon style={styles.arrow_des} type="FontAwesome5" name="arrow-right"/>
                                </View>
                                <View style={{flex:1}}>
                                    <Text style={{fontSize:12,color:'white'}}>{data.destination}</Text>
                                    <Text style={{fontSize:15,fontWeight: 'bold',color:'white'}}>{data.destination_state}</Text>
                                </View>
                                {/* <Icon style={styles.editIcon} type="FontAwesome5" name="edit" onPress={() =>{Actions.Edittrucks({
                                    origin:data.origin,
                                    origin_state:data.origin_state,
                                    destination:data.destination,
                                    destination_state:data.destination_state,
                                    date_available:data.date_available,
                                    trailer_type: data.trailer_type,
                                    comments: data.comments,
                                }); }}/> */}
                            </View>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <View style={{flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center"}}>
                                    <View style={{flex: 1,marginBottom:5}}>
                                        <Text style={{fontSize:10}}>Trip Miles</Text>
                                        <Text style={{fontSize:10}}>001</Text>
                                    </View>
                                    <View style={{flex: 1,marginBottom:5}}>
                                        <Text style={{fontSize:10}}>Trailer Type</Text>
                                        <Text style={{fontSize:10}}>{data.trailer_type}</Text>
                                    </View>
                                </View>
                                <View style={{flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center"}}>
                                    <View style={{flex: 1,marginBottom:5}}>
                                        <Text style={{fontSize:10}}>Ship dates</Text>
                                        <Text style={{fontSize:10}}>{data.date_added}</Text>
                                    </View>
                                    <View style={{flex: 1,marginBottom:5}}>
                                        <Text style={{fontSize:10}}>Comments</Text>
                                        <Text style={{fontSize:10}}>{data.comments}</Text>
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
                <Screen active_tab="Trucks" title="Trucks" >
                    {/* <Text style={styles.contentItem}>
                        Trucks
                    </Text> */}
                    <ScrollView>
                        {/* <TouchableOpacity onPress={() =>{Actions.Addtrucks()} } >
                            <Text style={styles.add_loads}>Add Trucks</Text>
                        </TouchableOpacity> */}
                        <View style={styles.contentBody}>
                            <View style={styles.middle}>
                                <Text style={styles.middle_text}>Origin</Text>
                                {/* <TextInput style={styles.text_input} placeholderTextColor="#000" value = {this.props.redux_state.show_googleplaces} onChangeText={text => this.setState({ origin: text })}/> */}
                                <TextInput 
                                    style={styles.text_input} 
                                    placeholder="Insert Origin." 
                                    listViewDisplayed={this.props.redux_state.show_googleplaces}
                                    value={this.state.origin}
                                    onFocus={text => this.setState({'input_address_origin':true})}
                                /> 
                                <Text style={styles.middle_text}>Destination</Text>
                                
                                    <TextInput 
                                    style={styles.text_input}
                                    //  placeholderTextColor="#000" 
                                    placeholder="Insert Destination." 
                                    listViewDisplayed={this.props.redux_state.show_googleplaces}
                                    value={this.state.destination}
                                    onFocus={text => this.setState({'input_address_destination':true})}
                                    /> 
                                    {/* <TextInput style={styles.text_input} placeholderTextColor="#000" onChangeText={text => this.setState({ destination: text })}/> */}
                                <Text style={styles.middle_text}>Trailer Type</Text>
                                <View style={{
                                ...styles.text_input,
                                }}>
                                    <View style={{
                                    'position':'relative',
                                    'top':-8
                                    }}>
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
                                </View>
                                <Text style={styles.middle_text}>Pick Up Date</Text>
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
                                <TouchableOpacity onPress={e => this.search()}>
                                    <Text style={styles.search_button}>Search</Text>
                                </TouchableOpacity>
                                </View>
                        </View>
                        <View>
                            <Text style={styles.contentItem}>Truck List Result</Text>
                        </View>
                        {trucks_details}
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
