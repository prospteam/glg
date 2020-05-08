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


    // import { StyleSheet } from 'react-native';


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

        let load_details;
        if (this.state.response.length!==0) {
            load_details = this.state.response.map((data, index)=>{
            return(
            <Card key={index}>
                <CardItem header style={{backgroundColor:'#05426e' }}>
                    
                <TouchableOpacity onPress={()=>Actions.Mileage({
                                        origin:data.origin+',+USA',
                                        destination:data.destination+',+USA'
                                    })}>
                            <Icon style={styles.vehicle_type} type="FontAwesome5" name="map-marker"/>
                        </TouchableOpacity>
                    <Text style={{color:'#fff'}}>{data.load_id}</Text>
                    <Text style={{color:'#4caf50', fontSize:12}}> On Way</Text>
                        <Icon style={styles.deleteIcon} type="FontAwesome5" name="trash"/>
                        <Icon style={styles.editIcon} type="FontAwesome5" name="edit" onPress={() =>{Actions.Editloads({
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
                            trailer_type: data.trailer_type,
                            date_available: data.date_available,
                            commodity: data.commodity,
                            weight: data.weight,
                            height: data.height,
                            width:data.width
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
				<Text style={styles.contentItem}>
					Load Search
				</Text>
                <ScrollView>
                <View style={styles.contentBody}>
                            <View style={styles.middle}>
                                <Text style={styles.middle_text}>Origin</Text>
                                    <TextInput style={styles.text_input} placeholderTextColor="#000" onChangeText={text => this.setState({ origin: text })}/>
                                <Text style={styles.middle_text}>Destination</Text>
                                    <TextInput style={styles.text_input} placeholderTextColor="#000" onChangeText={text => this.setState({ destination: text })}/>
                                <Text style={styles.middle_text}>Trailer Type</Text>
                                    <TextInput style={styles.text_input} placeholderTextColor="#000" onChangeText={text => this.setState({ trailer_type: text })}/>
                                <Text style={styles.middle_text}>Commodity</Text>
                                    <TextInput style={styles.text_input} placeholderTextColor="#000" onChangeText={text => this.setState({ commodity: text })}/>
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
        set_is_logged : set_is_logged
		// si set_sampleString function kay makit an sa actions folder
    },dispatch);
 }

export default connect(reduxStateToProps,reduxActionFunctions)(Loads);
