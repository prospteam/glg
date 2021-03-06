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

 class FindTruck extends Component {
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
            method: 'post',
            url: api_link+'KROD/query_builder',
            data: {
                "select": "*",
                "from": "glg_trucks",
                "where": {
                    // "origin": "Manassas",
                    // "destination": "Atlanta",
                    "origin": this.props.origin,
                    "destination": this.props.destination,
                    // "username": this.state.username.toLowerCase(),
                    // "other_password": this.state.password.toLowerCase()
                }
            }
            }).then(function (response) {
                console.log('___________NEW_________________');
                console.log(response.data);
                
                self.setState({response: response.data});
                // if(response.data[0].contact_number){
                //     that.setState({
                //         contact_number: response.data[0].contact_number
                //     });
                // }
            })
            .catch(function (error) {
                // this.props.set_show_mini_loader(false);
                console.log(error);
                // console.log("LAGI ERROR NA LAGI ALAM KO");
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
        let trucks_details;
        if(this.state.response.length==0)
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
                        data
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
                        {/* <CardItem>
                            <Body>
                                <View style={{flex: 1}}>
                                    <TouchableOpacity onPress={()=>
                                        Linking.openURL(`tel:094560596098`)} >
                                        <Text style={styles.call_button}>Call Driver</Text>
                                    </TouchableOpacity>
                            </View>
                            </Body>
                        </CardItem> */}
                    </TouchableOpacity>
                </Card>
            );
        });

        return (
                <Screen active_tab="Loads" title="Find Matched Trucks" >
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

export default connect(reduxStateToProps,reduxActionFunctions)(FindTruck);
