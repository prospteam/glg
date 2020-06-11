import React, { Component } from 'react';
import {ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Text, Form, Item, Input, Label, Icon, Button, Card, CardItem, Body, View  } from 'native-base';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import DatePicker from 'react-native-datepicker'
import { Actions } from 'react-native-router-flux';
import Dash from 'react-native-dash';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';
// MY IMPORTS
import Screen from '../layout/Screen';
import styles from '../../assets/styles/CommonStyles';
import AddressAutocomplete from '../AddressAutocomplete.js';
import {api_link} from '../../libraries/MyConfigs.js';

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
            date:'',
            rate:'',
            input_address_origin:false,
            input_address_destination:false,
        };

	}
    componentDidUpdate (){
        console.log("this.propsxxAA");
        // console.log(this.props);
        console.log("this.propsxxEE");
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
                "from": "glg_loads",
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
        // if(this.state.input_address_destination){
        //     return <AddressAutocomplete
        //     title='Destination'
        //     callback={value => this.setState({
        //         'destination':value,
        //         'input_address_destination':false
        //     })}/>
        // }

        let load_details;
        if (this.state.response.length==0) {
            load_details =
            <Card>
                <CardItem header>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center"}}>
                        <Text style={{fontSize:12}}>
                            No data found.
                        </Text>
                    </View>
                </CardItem>
            </Card>
        }else{
            load_details = this.state.response.map((data, index)=>{
                return(
                    <Card key={index}>
                        <TouchableOpacity onPress={ () => {Actions.Orderdetails(
                            data
                            // {
                            //     trailer_type: data.trailer_type,
                            //     date_available: data.date_available,
                            //     commodity: data.commodity,
                            //     weight: data.weight,
                            //     height: data.height,
                            //     width:data.width
                            // }
                            ); }}>
                            <CardItem header style={{backgroundColor:'#05426e' }}>
                                <Text style={{color:'#fff'}}>{data.load_id}</Text>
                                {/* <Text style={{color:'#4caf50', fontSize:12}}> On Way</Text> */}
                                    {/* <Icon style={styles.deleteIcon} type="FontAwesome5" name="trash"/> */}
                                    {/* <Icon style={styles.editIcon} type="FontAwesome5" name="edit" onPress={() =>{Actions.Editloads({
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
                                    }); }}/> */}
                            </CardItem>
                            <CardItem>
                                <Body>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <View style={styles.iconCompleted}>
                                        <View style={{flexDirection: 'column'}}>
                                            <Text>Origin</Text>
                                                <View style={{ margin: 2}} />
                                                <View style={{flexDirection: 'row'}}>
                                                    <Icon name='ios-checkmark-circle' style={{color:'#05426e', fontSize:15, marginLeft:20}}/>
                                                    <Text style={{fontSize:12, color:'orange', marginLeft:15, fontWeight: 'bold'}}>
                                                        {data.origin+", "+data.origin_state+", USA"}
                                                        </Text>
                                                </View>
                                                <View style={{flexDirection: 'column', marginLeft:0}}>
                                                    <Dash dashColor={'#57B9BB'} style={styles.dash}/>
                                                    <Icon type="FontAwesome5" name='truck' style={{color:'orange', fontSize:15, marginLeft:20}}/>
                                                    <Dash dashColor={'#57B9BB'} style={styles.dash}/>
                                                </View>
                                                <View style={{flexDirection: 'row'}}>
                                                    <Icon name='ios-checkmark-circle' style={{color:'#05426e', fontSize:15, marginLeft:20}}/>
                                                    <Text style={{fontSize:12, color:'orange', marginLeft:15, fontWeight: 'bold'}}>
                                                        {data.destination+", "+data.destination_state+", USA"}
                                                        </Text>
                                                </View>
                                                <View style={{ margin: 2}} />
                                            <Text>Destination</Text>
                                          </View>
                                        </View>
                                        <View style={{flex: 1,flexDirection: 'column',
                                        // backgroundColor:'red',
                                        //  marginLeft:'30%'
                                        //  marginRight:0,
                                         width:50,
                                        //  textAlign:'center',
                                         alignItems:'center'
                                         }}>
                                            <View style={{textAlign:'right'}}>
                                                <Text>Rates</Text>
                                                <Text style={{fontSize:20,fontWeight:'bold'}}>${data.rate}</Text>
                                            </View>
                                            <View style={{ margin:20}}/>
                                            <View style={{textAlign:'right'}}>
                                                <Icon style={styles.vehicle_type} type="FontAwesome5" name="truck"/>
                                                <Text style={{fontSize:15}}>{data.trailer_type}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </Body>
                            </CardItem>
                        </TouchableOpacity>
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
                {/* <TouchableOpacity onPress={() =>{Actions.Addloads()} } >
                    <Text style={styles.add_loads}>Add Loads</Text>
                </TouchableOpacity> */}
                <View style={styles.contentBody}>
                            <View style={styles.middle}>
                                <Text style={styles.middle_text}>Origin</Text>
                                <TextInput
                                style={styles.text_input}
                                // placeholderTextColor="#000"
                                placeholder="Insert Origin."
                                listViewDisplayed={this.props.redux_state.show_googleplaces}
                                value={this.state.origin}
                                // value={(this.props.redux_state.autocomplete_text.state)?this.props.redux_state.autocomplete_text.state:'empty'}
                                // onChangeText={text => this.setState({ origin: text })}
                                onFocus={text => this.setState({'input_address_origin':true})}
                                // onFocus={text => Actions.AddressAutocomplete()}
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

                                {    /*<TextInput style={styles.text_input} placeholderTextColor="#000" onChangeText={text => this.setState({ trailer_type: text })}/>*/}
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
                                {/* <Text style={styles.middle_text}>Commodity</Text>
                                    <TextInput style={styles.text_input} placeholderTextColor="#000" onChangeText={text => this.setState({ commodity: text })}/>
                                <Text style={styles.middle_text}>Reference Number</Text>
                                    <TextInput style={styles.text_input} placeholderTextColor="#000" onChangeText={text => this.setState({ reference_number: text })}/> */}
                                <TouchableOpacity onPress={e => this.search()}>
                                    <Text style={styles.search_button}>Search</Text>
                                </TouchableOpacity>
                         </View>
                </View>
                <View>
                    <Text style={styles.contentItem}>Loads List Result</Text>
                </View>
                {load_details}
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
