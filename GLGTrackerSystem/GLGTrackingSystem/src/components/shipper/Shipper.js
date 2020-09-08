import React, { Component } from 'react';
import {ScrollView, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { Text, Form, Item, Input, Label, Button,Icon, Card, CardItem, Body, View } from 'native-base';
import Dash from 'react-native-dash';
import axios from 'axios';

import bg_image from '../../assets/images/bg_image.png';
import styles from '../../assets/styles/Commonstyles.js';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { set_is_logged } from '../../redux/actions/Actions';
import MyLayout from '../layout/MyLayout';

class Shipper extends Component {
    constructor(props){
        super(props);
        this.state = {
            response: [],
            load_id: '',
            origin:'',
            destination:'',
            trailer_type:'',
            date:'',
            tracking_status:'',
            rate:'',
        };
    }
    componentDidMount() {
        var self = this;
        console.log('___s_________________________');
        console.log(this);
        axios.post( 'https://glgfreight.com/loadboard_app/api_mobile/Loads/all_loads/',{
            load_id: this.state.load_id,
            origin: this.state.origin,
            destination: this.state.destination,
            trailer_type: this.state.trailer_type,
            rate: this.state.rate,
            tracking_status: this.state.tracking_status
        }).then( function(response){
            console.log("__________________________________");
            console.log("Rogen Lang gwapaaaaaaaaaaaaaaaaaaaaaa");
            console.log("__________________________________");
            console.log(response);
            self.setState({response: response.data});
            console.log("__________________________________");
            console.log("__________________________________");
            alert('success');
        }).catch(function(err){
            console.log(err);
            console.log('errorrr ');
            alert('Hay NAKUUUUUUUUUUUUUUUUw');
        });
    }

    render(){

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
            load_details = this.state.response.map((data,index) =>{
                let shipper_status;
                if (data.tracking_status == 0) {
                    shipper_status =    <CardItem header style={{backgroundColor:'#429bcde8'}}>
                                            <View style={{flexDirection: 'row'}}>
                                                <Text style={{color:'#ffffff', flex:1}}>{data.load_id}</Text>
                                                <Text style={{color:'#ffffff'}}><Icon style={{color:'#1874e8f5', fontSize:17}} name="document-text"></Icon>Pending</Text>
                                            </View>
                                        </CardItem>
                }else if (data.tracking_status == 1) {
                    shipper_status =  <CardItem header style={{backgroundColor:'#e49c5ef0'}}>
                                            <View style={{flexDirection: 'row',}}>
                                                <Text style={{color:'#ffffff',flex:1}}>{data.load_id}</Text>
                                                <Text style={{color:'#ffffff'}}><Icon style={{color:'#c9742a', fontSize:17}} name="train"></Icon>Processing</Text>
                                            </View>
                                        </CardItem>
                }else {
                    shipper_status =  <CardItem header style={{backgroundColor:'#24b56be0'}}>
                                            <View style={{flexDirection: 'row'}}>
                                                <Text style={{color:'#ffffff', flex:1}}>{data.load_id}</Text>
                                                <Text style={{color:'#ffffff'}}><Icon style={{color:'#05683c', fontSize:17}} name="home"></Icon>Delivered</Text>
                                            </View>
                                    </CardItem>
                }

                return(
                    <>
                    <Card key={index}>
                            {shipper_status}
                        <CardItem>
                        <Body>
                            <View style={{flexDirection: 'row'}}>
                                <View style={styles.iconCompleted}>
                                    <View style={{flexDirection: 'column'}}>
                                        <Text>Origin</Text>
                                        <View style={{ margin: 2}} />
                                        <View style={{flexDirection: 'row'}}>
                                            <Icon name='ios-checkmark-circle' style={{color:'orange', fontSize:15, marginLeft:20}} />
                                            <Text style={{fontSize:12, color:'orange', marginLeft:15, fontWeight: 'bold'}}>{data.origin} </Text>
                                        </View>
                                        <View style={{flexDirection: 'column', marginLeft:0}}>
                                            <Dash dashColor={'#57B9BB'} style={styles.dash} />
                                            <Icon type="FontAwesome5" name='truck' style={{color:'orange', fontSize:15, marginLeft:20}} />
                                            <Dash dashColor={'#57B9BB'} style={styles.dash} />
                                        </View>
                                        <View style={{
                                                    flexDirection: 'row'
                                                    }}>
                                            <Icon name='ios-checkmark-circle' style={{color:'orange', fontSize:15, marginLeft:20}} />
                                            <Text style={{fontSize:12, color:'orange', marginLeft:15, fontWeight: 'bold'}}>{data.destination}
                                            </Text>
                                        </View>
                                        <View style={{ margin: 2}} />
                                        <Text>Destination</Text>
                                    </View>
                                </View>
                                <View style={{flex: 1,flexDirection: 'column',
                                         width:50,
                                         alignItems:'center'
                                         }}>
                                    <View style={{textAlign:'right'}}>
                                        <Text>Rates</Text>
                                        <Text style={{fontSize:20,fontWeight:'bold'}}>${data.rate}.00</Text>
                                    </View>
                                    <View style={{ margin:20}} />
                                    <View style={{textAlign:'right'}}>
                                        <Icon style={styles.vehicle_type} type="FontAwesome5" name="truck" />
                                        <Text style={{fontSize:15}}>{data.trailer_type}</Text>
                                    </View>
                                </View>
                            </View>
                        </Body>
                        </CardItem>
                    </Card>
                    </>
                );
            });
        }
        return (
            <MyLayout title="Tracked Loads">
                <ScrollView style={{marginBottom:25}}>
                    <View style={styles.contentBody}>
                        {load_details}
                    </View>
                </ScrollView>
            </MyLayout>

        );
            console.log(this.state.response);
    }
}

function redux_states_to_props(state){
   // console.log('redux_session  ', state.redux_session)
   return {
       redux_session: state.redux_session
       // si MyGlobalReducer kay makit an sa reducers folder
   }
}
function redux_action_function_to_props(dispatch){
   return bindActionCreators({
       set_is_logged : set_is_logged,
       // set_user_data : set_user_data,
   },dispatch);
}
export default connect(redux_states_to_props,redux_action_function_to_props)(Shipper);
