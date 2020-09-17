import React, { Component } from 'react';
import {ScrollView, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { Text, Form, Item, Input, Label, Button,Icon, Card, CardItem, Body, View,Container, Header, Content, Picker } from 'native-base';
import { SCLAlert, SCLAlertButton} from 'react-native-scl-alert'
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
            services: undefined,
            show: false,
            msg: "",
            theme: "sucess",
            title: "Success",
        };
    }



    componentDidMount() {
        this.fetch_loads();
    }

    handleClose = () => {
        this.setState({ show: false })
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
            self.setState({
                response: response.data,
            });
            console.log("__________________________________");
            console.log("__________________________________");
        }).catch(function(err){
            console.log(err);
            alert('Hay NAKUUUUUUUUUUUUUUUU');
        });

    }

    change_status = (value) => {

        console.log("_______wanghiya1____");
        var self = this;
        axios.post( 'https://glgfreight.com/loadboard_app/api_mobile/Loads/change_load_status/'+this.state.load_id+'/'+value,{
            tracking_status :value
        }).then(function (response) {
            if (response.data.status.length>0) {
                self.fetch_loads();
                self.setState({
                    show: true,
                    msg: "Change Status Successfully!",
                    theme: "success",
                    title: "Success!",
                });

            } else {
                self.setState({
                    show: true,
                    msg: "Please Select Status!",
                    theme: "warning",
                    title: "Warning!"
                });
            }

            console.log("_______rogen_maganda_cute_cute_super___");
        }).catch(function(err){
            console.log(err);
            console.log("_______wanghiya3____");
            self.setState({
                show: true,
                msg: "Please Try Again!",
                theme: "warning",
                title: "Warning!"
            });
        });
   }
  //  handleOpen = () => {
  //   this.setState({ show: true })
  // }

   // dropdownStatus(value: string) {
   //     this.setState({
   //         services: value
   //     });
   // }

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
                        let status_;
                        if(data.tracking_status===0){
                            status_ = "Pending";
                        }else if(data.tracking_status===1) {
                            status_ = "Processing";
                        }else{
                            status_ = "Delivered";
                        }

                        // this.setState({
                        //     dropdownStatus: status_
                        // });
                return(
                    <>
                    <Card key={index}>
                        <CardItem header style={{backgroundColor:'#1fb599' }}>
                            <View style={{flexDirection: 'column', justifyContent: "center", alignItems: "center"}}>
                                <Text style={{color:'#fff', flex: 1}}>No.000{data.load_id}</Text>
                                <Item picker>
                                    <Picker
                                    mode="dropdown"
                                    Icon={<Icon name="arrow-down" style={{backgroundColor:'green', }}/> }
                                    style={{backgroundColor:'orange', color: '#fff', height: 25, width: '100%'}}
                                       selectedValue={status_}
                                        onValueChange={(itemValue, index) =>{
                                            // console.log(itemValue);
                                            // alert(itemIndex);
                                            this.change_status(itemValue);
                                            this.setState({
                                                load_id:data.load_id,
                                                // dropdownStatus:status_
                                                status_:itemValue
                                             });
                                        }}>

                                      <Picker.Item value={0} label={'Pending'} />
                                      <Picker.Item value={1} label={'Processing'} />
                                      <Picker.Item value={2} label={'Delivered'} />
                                   </Picker>
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
            <ScrollView>
                    <SCLAlert
                        show={this.state.show}
                        onRequestClose={this.change_status}
                        theme={this.state.theme}
                        title={this.state.title}
                        subtitle={this.state.msg}
                    >
                    <SCLAlertButton theme="default" onPress={this.handleClose}>OK</SCLAlertButton>
                    </SCLAlert>
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
