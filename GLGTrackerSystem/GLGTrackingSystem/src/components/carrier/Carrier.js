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
            tracking_status: '',
            services: ['Pending', 'Processing', 'Delivered'],
            selectedService: 'Pending'
        };
    }

    componentDidMount() {
        this.fetch_loads();
    }

    fetch_loads =()=>{
        var self = this;
        axios.post( 'https://glgfreight.com/loadboard_app/api_mobile/Loads/all_loads/',{
            load_id: this.state.load_id,
            origin: this.state.origin,
            destination: this.state.destination,
            trailer_type: this.state.trailer_type,
            rate: this.state.rate
        }).then( function(response){
            console.log("__________________________________");
            console.log("Rogen Gwapa na lagi ka,");
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

    change_status(value) {
        console.log("_______wanghiya1____");
        var self = this;
        axios.post( 'https://glgfreight.com/loadboard_app/api_mobile/Loads/change_load_status/'+this.state.load_id+'/'+value,{
            tracking_status :value
        }).then(function (response) {

            if(response.data.status){
                self.fetch_loads();
            }
            console.log("_______rogen_maganda_cute_cute_super___");
            console.log(response);
        }).catch(function(err){
            console.log(err);
            console.log("_______wanghiya3____");
            alert('Status not found');
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
                let status_ ;
                if(data.tracking_status===0){
                    status_ = "Pending";
                }else if(data.tracking_status===1) {
                    status_ = "Processing";
                }else{
                    status_ = "Delivered";
                }
                return(
                    <>
                    <Card key={index}>
                        <CardItem header style={{backgroundColor:'#1fb599' }}>
                            <View style={{flexDirection: 'column', justifyContent: "center", alignItems: "center"}}>
                                <Text style={{color:'#fff', flex: 1}}>Tracking No. 000{data.load_id}</Text>
                                <Item picker>
                                    {/* <Picker
                                    style={{backgroundColor:'orange', color: '#fff', height: 25, width: '100%'}}
                                       selectedValue={status_}
                                        onValueChange={(itemValue, itemIndex) =>{
                                            console.log("ito"+itemValue);
                                            console.log("_____asd____");
                                            // alert(itemIndex);
                                            // this.change_status(asdasdasd);
                                            // this.setState({load_id:data.load_id});
                                        }}>
                                      <Picker.Item value={0} label={'Pending'} />
                                      <Picker.Item value={1} label={'Processing'} />
                                      <Picker.Item value={2} label={'Delivered'} />
                                   </Picker> */}
                                </Item>
                            </View>
                        </CardItem>

                        <CardItem>
                            <Body>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={styles.iconCompleted}>
                                        <View style={{ flexDirection: 'column' }}>
                                            <Text>Origin</Text>
                                            <View style={{ margin: 2 }} />
                                            <View style={{ flexDirection: 'row' }}>
                                                <Icon name='ios-checkmark-circle' style={{ color: 'orange', fontSize: 15, marginLeft: 20 }} />
                                                <Text style={{ fontSize: 12, color: 'orange', marginLeft: 15, fontWeight: 'bold' }}>{data.origin} </Text>
                                            </View>
                                            <View style={{ flexDirection: 'column', marginLeft: 0 }}>
                                                <Dash dashColor={'#57B9BB'} style={styles.dash} />
                                                <Icon type="FontAwesome5" name='truck' style={{ color: 'orange', fontSize: 15, marginLeft: 20 }} />
                                                <Dash dashColor={'#57B9BB'} style={styles.dash} />
                                            </View>
                                            <View style={{
                                                flexDirection: 'row'
                                            }}>
                                                <Icon name='ios-checkmark-circle' style={{ color: 'orange', fontSize: 15, marginLeft: 20 }} />
                                                <Text style={{ fontSize: 12, color: 'orange', marginLeft: 15, fontWeight: 'bold' }}>{data.destination}
                                                </Text>
                        {/* <CardItem >
                            <Body >
                                    <View style={{ flexDirection: 'row' }} onPress={() => alert('clicked')}>
                                        <View style={styles.iconCompleted}>
                                            <View style={{ flexDirection: 'column' }}>
                                                <Text>Origin</Text>
                                                <View style={{ margin: 2 }} />
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Icon name='ios-checkmark-circle' style={{ color: 'orange', fontSize: 15, marginLeft: 20 }} />
                                                    <Text style={{ fontSize: 12, color: 'orange', marginLeft: 15, fontWeight: 'bold' }}>{data.origin} </Text>
                                                </View>
                                                <View style={{ flexDirection: 'column', marginLeft: 0 }}>
                                                    <Dash dashColor={'#57B9BB'} style={styles.dash} />
                                                    <Icon type="FontAwesome5" name='truck' style={{ color: 'orange', fontSize: 15, marginLeft: 20 }} />
                                                    <Dash dashColor={'#57B9BB'} style={styles.dash} />
                                                </View>
                                                <View style={{
                                                    flexDirection: 'row'
                                                }}>
                                                    <Icon name='ios-checkmark-circle' style={{ color: 'orange', fontSize: 15, marginLeft: 20 }} />
                                                    <Text style={{ fontSize: 12, color: 'orange', marginLeft: 15, fontWeight: 'bold' }}>{data.destination}
                                                    </Text>
                            {/* <CardItem >
                                <Body >
                                        <View style={{ flexDirection: 'row' }} onPress={() => alert('clicked')}>
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
                                                        </Text> */}
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
            <MyLayout title="Assigned Loads">
                <ScrollView style={{marginBottom:25}}>
                    <View style={styles.contentBody}>

                        <Picker
                            style={{ backgroundColor: 'orange', color: '#fff', height: 25, width: '100%' }}
                            // selectedValue={status_}
                            onValueChange={(itemValue, itemIndex) => {
                                console.log("ito" + itemValue);
                                console.log("_____asd____X");
                                // alert(itemIndex);
                                // this.change_status(asdasdasd);
                                // this.setState({load_id:data.load_id});
                            }}>
                            <Picker.Item value={0} label={'Pending'} />
                            <Picker.Item value={1} label={'Processing'} />
                            <Picker.Item value={2} label={'Delivered'} />
                        </Picker>

                        <Picker
                            // selectedValue={selectedValue}
                            style={{ height: 50, width: 150 }}
                            onValueChange={(itemValue, itemIndex) => console.log(itemValue)}
                        >
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                            <Picker.Item label="JavaScript2" value="js2" />
                        </Picker>
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



{/* <CardItem>
    <Body>
        <View style={{ flexDirection: 'row' }}>
            <View style={styles.iconCompleted}>
                <View style={{ flexDirection: 'column' }}>
                    <Text>Origin</Text>
                    <View style={{ margin: 2 }} />
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name='ios-checkmark-circle' style={{ color: 'orange', fontSize: 15, marginLeft: 20 }} />
                        <Text style={{ fontSize: 12, color: 'orange', marginLeft: 15, fontWeight: 'bold' }}>{data.origin} </Text>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 0 }}>
                        <Dash dashColor={'#57B9BB'} style={styles.dash} />
                        <Icon type="FontAwesome5" name='truck' style={{ color: 'orange', fontSize: 15, marginLeft: 20 }} />
                        <Dash dashColor={'#57B9BB'} style={styles.dash} />
                    </View>
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <Icon name='ios-checkmark-circle' style={{ color: 'orange', fontSize: 15, marginLeft: 20 }} />
                        <Text style={{ fontSize: 12, color: 'orange', marginLeft: 15, fontWeight: 'bold' }}>{data.destination}
                        </Text> */}
