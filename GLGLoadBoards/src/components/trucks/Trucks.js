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
            response: [],
            load_id: '',
            origin:'',
            origin_state:'',
            destination:'',
            trailer_type:'',
            date_added:'',
            comments:'',
        };
	}

    componentDidMount() {
        var self = this;

    axios({
        method: 'get',
        url: 'https://glgfreight.com/loadboard_app/api_mobile/Trucks/all_trucks',
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
		console.log("input_sampleString")
        let trucks_details;
        trucks_details = this.state.response.map((data, index)=>{
            return (
                <Card key={index}>
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
                         <Icon style={styles.editIcon} type="FontAwesome5" name="edit" onPress={() =>{Actions.Edittrucks({
                             origin:data.origin,
                             origin_state:data.origin_state,
                             destination:data.destination,
                             destination_state:data.destination_state,
                             date_available:data.date_available,
                             trailer_type: data.trailer_type,
                             comments: data.comments,
                         }); }}/>
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
                </Card>
            );
            console.log(response.data.trailer_type);
        });

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
                            </View>
                                <View>
                                    <Text style={styles.contentItem}>Truck List</Text>
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
