import React, { Component } from 'react';
import {ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Text, Form, Item, Input, Label, Icon, Button, Card, CardItem, Body, View  } from 'native-base';
import Screen from '../layout/Screen';
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
            length:'',
            width:'',
            height:'',
            weight:'',
            date_available:'',
            comments:'',
            category:'',
            carrier_id:'',
            shipper_id:'',
            deleted_status:'',
            origin_state:'',
            destination_state:'',
            delivery_date:'',
            date_added:'',
            commodity:'',
            reference_number:'',
        };
	}

    componentDidMount() {
        var self = this;

    // axios.get('http://glgfreight.com/loadboard/api_mobile/loads/all_loads')

    // .then((response)=>{
    //     console.log(response);
    //     self.setstate({response:response.data});
    // });

    axios({
        method: 'post',
        // method: 'get',
        url: 'http://web2.proweaverlinks.com/tech/bwbsafe/backend_web_api/loads.txt',
        // data: {
        //     "select": "*",
        //     "from": "glg_users",
        //     "where": {
        //         "username": "admin",
        //         // "username": this.state.username.toLowerCase(),
        //         // "password": this.state.password.toLowerCase()
        //     }
        // }
      }).then(function (response) {
        console.log("responseXd");
        console.log(response.data);
        // console.log(response.data[0].date_added);
        // console.log(response.data[0].date_added);

    })
    .catch(function (error) {
        console.log(error);
        console.log("LAGI ERROR NA LAGI ALAM KO");
    });
}

    render() {

		console.log("input_sampleString")

        return (
			<Screen>
				<Text style={styles.contentItem}>
					Load Search
				</Text>
                <ScrollView>
                <View style={styles.contentBody}>
                    <View style={styles.middle}>
                        <Text style={styles.middle_text}>Origin</Text>
                        <TextInput style={styles.text_input} placeholderTextColor="#000" />
                        <Text style={styles.middle_text}>Destination</Text>
                        <TextInput style={styles.text_input} placeholderTextColor="#000" />
                        <Text style={styles.middle_text}>Trailer Type</Text>
                        <TextInput style={styles.text_input} placeholderTextColor="#000" />
                        <Text style={styles.middle_text}>Commodity</Text>
                        <TextInput style={styles.text_input} placeholderTextColor="#000" />
                        <TouchableOpacity>
                          <Text style={styles.search_button}>Search</Text>
                       </TouchableOpacity>
                    </View>

                    <Card>
                        <CardItem header style={{backgroundColor:'#05426e' }}>
                            <Text style={{color:'#fff'}}>45</Text>
                            <Text style={{color:'#4caf50', fontSize:12}}> On Way</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <View>
                                        <Text>Origin</Text>
                                    </View>
                                    <View style={{marginBottom:5}}>
                                        <Text style={{fontSize:10, marginLeft: 60}}>Origin</Text>
                                        <Text style={{fontSize:10, marginLeft: 60}}>Hillsboro</Text>
                                    </View>
                                        <View style={{textAlign:'right'}}>
                                            <Text style={{fontSize:20, marginLeft: 60, fontWeight: 'bold'}}>$0.00</Text>
                                        </View>
                                    </View>
                                    <View style={{borderBottomColor: '#004f6a',borderBottomWidth: 1, width:'80%'}} />
                                        <View style={{flex: 1, flexDirection: 'row',marginTop:2}}>
                                    <View>
                                        <Text>Destination</Text>
                                    </View>
                                    <View style={{marginBottom:5}}>
                                        <Text style={{fontSize:10, marginLeft: 20}}>Destination</Text>
                                        <Text style={{fontSize:10, marginLeft: 20}}>Phoenix, AZ</Text>
                                    </View>
                                    <View style={{textAlign:'right', marginLeft:70 }}>
                                            <Icon style={styles.vehicle_type} type="FontAwesome5" name="truck"/>
                                            <Text style={{fontSize:10}}>CA</Text>
                                    </View>
                                </View>
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
