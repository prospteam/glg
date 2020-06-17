import React, { Component } from 'react';
import {ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Text, Form, Item, Input, Label, Icon, Button, Card, CardItem, Body, View  } from 'native-base';
import Screen from '../layout/Screen';
import { Actions } from 'react-native-router-flux';
import Dash from 'react-native-dash';
import styles from '../../assets/styles/CommonStyles';
import axios from 'axios';

//REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { set_show_mini_loader, set_sampleString, set_is_logged } from '../../redux/actions/Actions';// I included ang "index.js"

 class MyLoads extends Component {
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
        // console.log('________g____________________');
        // console.log(this.props.redux_state.show_mini_loader);
        // if(!this.props.redux_state.show_mini_loader){
        //     this.props.set_show_mini_loader(true);
        // }
        // if(this.props.redux_state.show_mini_loader){
        //     this.props.set_show_mini_loader(false);
        // }
	}

    componentDidMount() {
        var self = this;
            console.log('____________________________');
            console.log('https://glgfreight.com/loadboard_app/api_mobile/Loads/my_loads/');
        axios({
            method: 'get',
            url: 'https://glgfreight.com/loadboard_app/api_mobile/Loads/my_loads/'+this.props.redux_session.user_data.user_id,
        }).then(function (response) {
            // console.log("this is a test");
            // console.log(response.data);
            self.setState({response: response.data});
        })
        .catch(function (error) {
            console.log(error);
            console.log("LAGI ERROR NA LAGI ALAM KO");
        });
    }
    render() {
        let load_details;

		if (this.state.response.length <= 0)
            load_details = <Card>
                        <CardItem header>
                            <View>
                                <Text>No data found.</Text>
                            </View>
                        </CardItem>
                    </Card>
        else{
            load_details = this.state.response.map((data, index)=>{
            return(
            <Card key={index} >
                <TouchableOpacity onPress={ () => {Actions.Orderdetails(
                    data
                    // {
                    //     trailer_type: data.trailer_type,
                    //     date_available: data.date_available,
                    //     commodity: data.commodity,
                    //     weight: data.weight,
                    //     height: data.height,
                    //     width:data.width
                    // }
                    ); }}>
                    <CardItem header style={{backgroundColor:'#05426e' }}>
                        <Text style={{color:'#fff'}}>#{(!data.load_id)?'(empty)':data.load_id}</Text>
                        {/* <Text style={{color:'#4caf50', fontSize:12}}> On Way</Text> */}
                        {/* <Icon style={styles.deleteIcon} type="FontAwesome5" name="trash"/> */}
                        {/* <Icon style={styles.editIcon} type="FontAwesome5" name="edit" onPress={() =>{Actions.Editloads({
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
                        }); }}/> */}
                        {/* <Icon style={styles.order_detailes} onPress={ () => {Actions.Orderdetails({
                            trailer_type: data.trailer_type,
                            date_available: data.date_available,
                            commodity: data.commodity,
                            weight: data.weight,
                            height: data.height,
                            width:data.width
                        }); }} type="FontAwesome5" name="bars"/> */}
                    </CardItem>
                    <CardItem>
                        <Body>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={styles.iconCompleted}>
                                <View style={{flexDirection: 'column'}}>
                                    <Text>Origin</Text>
                                        <View style={{ margin: 2}} />
                                        <View style={{flexDirection: 'row'}}>
                                            <Icon name='ios-checkmark-circle' style={{color:'#05426e', fontSize:15, marginLeft:20}}/>
                                            <Text style={{fontSize:12, color:'orange', marginLeft:15, fontWeight: 'bold'}}>
                                                {data.origin+", "+data.origin_state+", USA"}
                                                </Text>
                                        </View>
                                        <View style={{flexDirection: 'column', marginLeft:0}}>
                                            <Dash dashColor={'#57B9BB'} style={styles.dash}/>
                                            <Icon type="FontAwesome5" name='truck' style={{color:'orange', fontSize:15, marginLeft:20}}/>
                                            <Dash dashColor={'#57B9BB'} style={styles.dash}/>
                                        </View>
                                        <View style={{
                                            flexDirection: 'row'
                                            }}>
                                            <Icon name='ios-checkmark-circle' style={{color:'#05426e', fontSize:15, marginLeft:20}}/>
                                            <Text style={{fontSize:12, color:'orange', marginLeft:15, fontWeight: 'bold'}}>
                                                {data.destination+", "+data.destination_state+", USA"}
                                                </Text>
                                        </View>
                                        <View style={{ margin: 2}} />
                                    <Text>Destination</Text>
                                  </View>
                                </View>
                                <View style={{flex: 1,flexDirection: 'column',
                                    // backgroundColor:'red',
                                    //  marginLeft:'30%'
                                    //  marginRight:0,
                                    //  textAlign:'center',
                                        alignItems:'center'
                                        }}>
                                    <View style={{textAlign:'right'}}>
                                        <Text>Rates</Text>
                                        <Text style={{fontSize:20,fontWeight:'bold'}}>${data.rate}</Text>
                                    </View>
                                    <View style={{ margin:20}}/>
                                    <View style={{textAlign:'right'}}>
                                        <Icon style={styles.vehicle_type} type="FontAwesome5" name="truck"/>
                                        <Text style={{fontSize:15}}>{data.trailer_type}</Text>
                                    </View>
                                </View>
                            </View>
                        </Body>
                    </CardItem>
                </TouchableOpacity>
            </Card>
        );
        console.log(response.data.trailer_type);
        });
    }
        return (
			<Screen active_tab="Loads" title="My Loads"
            side_header_buttons={
                <View style={{...styles.darkFont,flex:1,flexDirection:'row-reverse'}}>
                    <TouchableOpacity onPress={() =>{Actions.Addloads()} }>
                        <Icon style={styles.headerIcon} type="FontAwesome5" name="plus"/>
                    </TouchableOpacity>
                </View>
                }
            >
                <ScrollView>
				{/* <Text style={styles.contentHeader}>
					Loads list
				</Text> */}
                <View style={styles.contentBody}>
                            {/* <View style={styles.middle}>
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
                         </View> */}
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
        set_show_mini_loader : set_show_mini_loader,
		// si set_sampleString function kay makit an sa actions folder
    },dispatch);
 }

export default connect(reduxStateToProps,reduxActionFunctions)(MyLoads);
