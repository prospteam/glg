import React, { Component } from 'react';
import {ScrollView, TouchableOpacity, TextInput,Linking } from 'react-native';
import { Text, Form, Item, Input, Label, Icon, Button, Card, CardItem, Body, View  } from 'native-base';
import Modal from 'react-native-modal';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

import Screen from '../layout/Screen';
import Mileage from '../mileage/Mileage';
import styles from '../../assets/styles/CommonStyles';
import {api_link} from '../../libraries/MyConfigs.js';

//REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { set_sampleString, set_is_logged } from '../../redux/actions/Actions';// I included ang "index.js"

 class Truckdetails extends Component {
	constructor(props){
		super(props);
        this.state = {
            isModalVisible: false,
            response: [],
            load_id: '',
            origin:'',
            destination:'',
            trailer_type:'',
            date_available:'',
            commodity:'',
            weight:'',
            height:'',
            width:'',
            rate:'',
           contact_name:'',

        };
    }
    componentDidMount() {
        var that = this;
        axios({
            method: 'post',
            url: api_link+'KROD/query_builder',
            data: {
                "select": "*",
                "from": "glg_userdata",
                "where": {
                    "fk_userid": this.props.carrier_id,
                    // "username": this.state.username.toLowerCase(),
                    // "other_password": this.state.password.toLowerCase()
                }
            }
          }).then(function (response) {
              if(response.data[0].contact_number){
                that.setState({
                    contact_number: response.data[0].contact_number
                });
              }
        })
        .catch(function (error) {
            // this.props.set_show_mini_loader(false);
            console.log(error);
            // console.log("LAGI ERROR NA LAGI ALAM KO");
        });
    }
    toggleModal = () => {
        this.setState({isModalVisible: !this.state.isModalVisible});
    };

    // _handlePress() {
    //     // console.log(this.state.rate);
    //     // console.log(this.state.contact_name);
    //     console.log(this.props.load_id);
    //     const that = this;
    //     axios.post('https://glgfreight.com/loadboard_app/api_mobile/Sendrates/add_rates', {
    //         fk_carrier_id: this.props.redux_session.user_data.user_id,
    //         fk_load_id:this.props.load_id,
    //         rate: this.state.rate,
    //         contact_name: this.state.contact_name,
    //     }).then(function (response) {
    //         console.log(response.data);
    //         console.log('SUCCESS');
    //         console.log('__________________________________');
    //     }).catch(function (err) {
    //         console.log(err);
    //         console.log('ERRORRRRRRR UUUUY');
    //         console.log('__________________________________');
    //         console.log('__________________________________');
    //     });
    // }


            // LOG  {"carrier_id": "0", "category": "", "comments": "", "date_added": "2020-06-03 10:06:23", "date_available": "Jjn", "deleted_status": "0", "destination": "Km", "destination_state": "", "origin": "Jjj", "origin_state": "", "trailer_type": "Jj", "truck_id": "47"}

    render() {
        let is_owner=false;
        if(this.props.carrier_id==this.props.redux_session.user_data.user_id)
            is_owner=true;

        
        console.log("this.propsnoo");
        console.log(this.props);
        return (
            <Screen title="Truck Details"
            side_header_buttons={
                <View style={{...styles.darkFont,flex:1,flexDirection:'row-reverse'}}>
                    {
                        (is_owner)?
                            <TouchableOpacity onPress={() =>{Actions.Edittrucks({
                                truck_id:this.props.truck_id,
                                origin:this.props.origin,
                                origin_state:this.props.origin_state,
                                destination:this.props.destination,
                                destination_state:this.props.destination_state,
                                date_available:this.props.date_available,
                                trailer_type: this.props.trailer_type,
                                comments: this.props.comments,
                            })}}>
                                <Icon style={styles.headerIcon} type="FontAwesome5" name="edit"/>
                            </TouchableOpacity>
                        :null
                    }
                </View>
                }
            >
				{/* <Text style={styles.contentItem}>
					Order Details 1
				</Text> */}
                <ScrollView>
                <View style={styles.contentBody}>
                    <Card containerStyle={{ flex:1,backgroundColor:'red',}}>
                        <CardItem header style={{backgroundColor:'#05426e',justifyContent: "center", alignItems: "center"}}>
                            <Text style={{color:'#fff'}}>
                                {(this.props.origin)?this.props.origin+', '+this.props.origin_state:'(empty)'} 
                                <Icon style={styles.arrow_des} type="FontAwesome5" name="arrow-right"/> 
                                {(this.props.destination)?this.props.destination+', '+this.props.destination_state:'(empty)'}
                            </Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <View style={{flex: 1}}>
                            </View>
                            <View style={{margin:10}} />
                                <View style={{
                                        height:200,
                                        width:'100%',
                                        backgroundColor:'red',
                                    }}>
                                    <Mileage pasa_data={{
                                                origin:this.props.origin+', '+this.props.origin_state+', USA',
                                                destination:this.props.destination+', '+this.props.destination_state+', USA'
                                        }}/>
                                </View>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <View style={{flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center"}}>
                                    <View style={{flex:1}}>
                                        <Text style={{fontSize:10}}>Trailer Type</Text>
                                        <Text style={{fontSize:15,fontWeight: 'bold'}}>{(!this.props.trailer_type)?'(empty)':this.props.trailer_type}</Text>
                                    </View>
                                    <View style={{flex:1}}>
                                        <Text style={{fontSize:10}}>Ship Date</Text>
                                        <Text style={{fontSize:15,fontWeight: 'bold'}}>{(!this.props.date_available)?'(empty)':this.props.date_available}</Text>
                                    </View>
                                    <View style={{flex:1}}>
                                        <Text style={{fontSize:10}}>Commodity</Text>
                                        <Text style={{fontSize:15,fontWeight: 'bold'}}>{(!this.props.commodity)?'(empty)':this.props.commodity}</Text>
                                    </View>
                                </View>
                                <View style={{flex: 1, flexDirection: 'row', margin:15}}/>
                                <View style={{flex: 1, flexDirection: 'row', marginLeft:30}}>
                                    <View style={{flex:1}}>
                                        <Text style={{fontSize:10}}>Weight</Text>
                                        <Text style={{fontSize:15,fontWeight: 'bold'}}>{(!this.props.weight)?'(empty)':this.props.weight}</Text>
                                    </View>
                                    <View style={{flex:1}}>
                                        <Text style={{fontSize:10}}>HeigCallht</Text>
                                        <Text style={{fontSize:15,fontWeight: 'bold'}}>{(!this.props.height)?'(empty)':this.props.height}</Text>
                                    </View>
                                    <View style={{flex:1}}>
                                        <Text style={{fontSize:10}}>Width</Text>
                                        <Text style={{fontSize:15,fontWeight: 'bold'}}>{(!this.props.width)?'(empty)':this.props.width}</Text>
                                    </View>
                                </View>
                                <View style={{marginBottom: '10%'}} />
                                <View style={{
                                    flex: 1, 
                                    flexDirection:'row',
                                    justifyContent:'space-between',
                                    }}>
                                    <View style={{
                                        flex:1,
                                        }}
                                        >
                                        {
                                            (this.state.contact_number)?
                                            <TouchableOpacity
                                            onPress={()=>Linking.openURL(`tel:${this.state.contact_number}`)}>
                                                <Text style={styles.call_button_sad}>Call Carrier</Text>
                                            </TouchableOpacity>
                                            :
                                            <TouchableOpacity>
                                                <Text style={styles.call_button_sad}>Call Carrier</Text>
                                            </TouchableOpacity>
                                        }
                                    </View>
                                    <TouchableOpacity
                                        style={{flex:1}}
                                        onPress={() =>{Actions.FindLoads({
                                            origin:this.props.origin,
                                            destination:this.props.destination,
                                            // date_available:this.props.date_available,
                                            // trailer_type: this.props.trailer_type,
                                            // length: this.props.length,
                                            // width:this.props.width,
                                            // rate: this.props.rate,
                                            // commodity: this.props.commodity,
                                            // reference_number:this.props.reference_number,
                                            // comments: this.props.comments,
                                        })}}>
                                        <Text style={styles.findtruck_button_sad}>Find Loads</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Text style={{fontSize:15, fontWeight: 'bold',marginLeft:15}}>
                                        {
                                            (this.state.contact_number)?
                                            "("+this.state.contact_number+")"
                                            :"(empty)"
                                        }
                                    </Text>
                                </View>
                            </Body>
                        </CardItem>
                            <CardItem footer style={{backgroundColor:'#05426e' }}>
                            <View style={{flex: 1, flexDirection: 'column',justifyContent: "center", alignItems: "center"}}>
                                <View>
                                    <Text style={{color:'white'}}>Comments: </Text>
                                </View>
                                <View style={{marginBottom:5}}>
                                    <Text style={{color:'white'}}>{(!this.props.comments)?'(empty)':this.props.comments}</Text>
                                </View>
                            </View>
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
    console.log('redux staettt', state.redux_session.user_data.user_type)
    return {
		redux_state: state.redux_state,
		redux_session: state.redux_session
		// si MyGlobalReducer kay makit an sa reducers folder
    }
}

// KUNG GUSTO MONG GAMITIN ANG REDUX FUNCTIONS(YUNG NASA ACTIONS)
function reduxActionFunctions(dispatch){
    return bindActionCreators({
        set_sampleString : set_sampleString,
        set_is_logged : set_is_logged,
		// si set_sampleString function kay makit an sa actions folder
    },dispatch);
 }

export default connect(reduxStateToProps,reduxActionFunctions)(Truckdetails);
