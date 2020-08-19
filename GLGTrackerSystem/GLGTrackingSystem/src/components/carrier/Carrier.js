import React, { Component } from 'react';
import {ScrollView, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { Text, Form, Item, Input, Label, Button,Icon, Card, CardItem, Body, View,Container, Header, Content, Picker } from 'native-base';
import RNPickerSelect from 'react-native-picker-select';
import Dash from 'react-native-dash';
import axios from 'axios';

import bg_image from '../../assets/images/bg_image.png';
import styles from '../../assets/styles/Commonstyles.js';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { set_is_logged } from '../../redux/actions/Actions';
import MyLayout from '../layout/MyLayout';

class Carrier extends Component {
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
            selected2: undefined
        };

    }

    onValueChange2(value: string) {
        this.setState({
            selected2: value
        });
    }
    componentDidMount() {
        var self = this;
        axios.post( 'https://glgfreight.com/loadboard_app/api_mobile/Loads/all_loads/',{
            load_id: this.state.load_id,
            origin: this.state.origin,
            destination: this.state.destination,
            trailer_type: this.state.trailer_type,
            rate: this.state.rate
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
            alert('Hay NAKUUUUUUUUUUUUUUUU');
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
                return(
                    <>
                    <Card key={index}>
                        <CardItem header style={{backgroundColor:'#1fb599' }}>
                            <Text style={{color:'#fff'}}>{data.load_id}</Text>
                            <Item picker>
                                <Picker
                                  mode="dropdown"
                                  iosIcon={<Icon name="arrow-down" />}
                                  placeholder="Change Status"
                                  placeholderStyle={{ color: "#bfc6ea" }}
                                  placeholderIconColor="#007aff"
                                  selectedValue={this.state.selected2}
                                  onValueChange={this.onValueChange2.bind(this)}
                                >
                                  <Picker.Item label="Pending" value="pending" />
                                  <Picker.Item label="Processing" value="processing" />
                                  <Picker.Item label="Delivered" value="delivered" />
                                </Picker>
                            </Item>
                        </CardItem>
                        <CardItem>
                        <Body>
                            <View style={{flexDirection: 'row'}}>
                                <View style={styles.iconCompleted}>
                                    <View style={{flexDirection: 'column'}}>
                                        <Text>Origin</Text>
                                        <View style={{ margin: 2}} />
                                        <View style={{flexDirection: 'row'}}>
                                            <Icon name='ios-checkmark-circle' style={{color:'red', fontSize:15, marginLeft:20}} />
                                            <Text style={{fontSize:12, color:'orange', marginLeft:15, fontWeight: 'bold'}}>{data.origin} </Text>
                                        </View>
                                        <View style={{flexDirection: 'column', marginLeft:0}}>
                                            <Dash dashColor={'#57B9BB'} style={styles.dash} />
                                            <Icon type="FontAwesome5" name='truck' style={{color:'red', fontSize:15, marginLeft:20}} />
                                            <Dash dashColor={'#57B9BB'} style={styles.dash} />
                                        </View>
                                        <View style={{
                                                    flexDirection: 'row'
                                                    }}>
                                            <Icon name='heart' style={{color:'red', fontSize:15, marginLeft:20}} />
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
            <MyLayout>
                <ScrollView>
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
export default connect(redux_states_to_props,redux_action_function_to_props)(Carrier);
