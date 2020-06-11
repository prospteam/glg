import React, { Component } from 'react';
import {ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Text, Form, Item, Input, Label, Icon, Button, Card, CardItem, Body, View  } from 'native-base';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

// MY Imports
import Screen from './layout/Screen';
import styles from '../assets/styles/CommonStyles';
import {api_link} from '../libraries/MyConfigs.js';

//REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { set_sampleString, set_is_logged } from '../redux/actions/Actions';// I included ang "index.js"

 class RatesFromCarrier extends Component {
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
            message:'Loading.',
        };
	}

    componentDidMount() {
        var self = this;
        axios({
            method: 'post',
            url: api_link+'KROD/query_builder',
            data: {
                "select": "rate,email,glg_userdata.contact_number",
                "from": "glg_rates",
                "where": {
                    // "fk_load_id": "140",
                    "fk_load_id": this.props.load_id,
                },
                "join": {
                    // "fk_load_id": "140",
                    "glg_users": "glg_users.user_id = glg_rates.fk_carrier_id",
                    "glg_userdata": "glg_userdata.fk_userid = glg_rates.fk_carrier_id",
                },
            }
            }).then(function (response) {
                console.log('_________RAtes nga iyaha,_________________');
                console.log(response.data);


                if(response.data.length==0){
                    self.setState({message: "Connection error."});
                }else{
                    self.setState({response: response.data});
                }
                // if(response.data[0].contact_number){
                //     that.setState({
                //         contact_number: response.data[0].contact_number
                //     });
                // }
            })
            .catch(function (error) {
                // this.props.set_show_mini_loader(false);
                console.log(error);
                self.setState({message: "Connection error."});
                console.log("Errorrsss");
            });

    // axios({
    //     method: 'get',
    //     url: 'https://glgfreight.com/loadboard_app/api_mobile/Trucks/all_trucks',
    //   }).then(function (response) {
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
        // return <View><Text>Hi</Text></View>;
        let trucks_details;
        let temp_contact_number;
        if(this.state.response.length==0)
            trucks_details =
            <Card>
                <CardItem header>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center"}}>
                            <Text style={{fontSize:12}}>
                                {this.state.message}
                            </Text>
                    </View>
                </CardItem>
            </Card>
        else
            trucks_details = this.state.response.map((data, index)=>{
                if(data.contact_number.includes(" Ext. ")){
                    temp_contact_number = data.contact_number.split(' Ext. ');
                    data.contact_number= temp_contact_number[1]+temp_contact_number[0];
                }
            return (
                <Card key={index}>
                    <TouchableOpacity onPress={ () => {Actions.Truckdetails({
                        // data
                            // trailer_type: data.trailer_type,
                            // date_available: data.date_available,
                            // commodity: data.commodity,
                            // weight: data.weight,
                            // height: data.height,
                            // width:data.width
                        }); }}>
                        <CardItem header>
                            <View style={{flex:1,backgroundColor:'none'}}>
                                <Text>Price/Rate:${(data.rate)?data.rate:"(empty)"}
                                </Text>
                                <Text>From Email:</Text>
                                <Text style={{textAlign:'center'}}>
                                    {(data.email)?data.email:"(empty)"}
                                </Text>
                                <Text>Contact Number:</Text>
                                <Text style={{textAlign:'center'}}>
                                    {(data.contact_number)?data.contact_number:"(empty)"}
                                </Text>
                                <View style={{alignItems:'center'}}>
                                {
                                    (data.contact_number)?
                                        <TouchableOpacity
                                        onPress={()=>Linking.openURL(`tel:${data.contact_number}`)}>
                                            <Text style={styles.call_button}>Call Carrier</Text>
                                        </TouchableOpacity>
                                    :""
                                }
                                </View>
                            </View>
                        </CardItem>
                    </TouchableOpacity>
                </Card>
            );
        });

        return (
                <Screen active_tab="" title="Rates Carriers Submitted" >
                    {/* <Text style={styles.contentItem}>
						Truck List
                    </Text> */}
                    <ScrollView>
						<View style={styles.contentBody}>
							{trucks_details}
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

export default connect(reduxStateToProps,reduxActionFunctions)(RatesFromCarrier);
