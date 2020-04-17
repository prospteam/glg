import React, { Component } from 'react';
import {ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Container, Header, Content, Card, Body, CardItem, Footer, FooterTab, Button, Icon, Title, Text, View,StyleProvider } from 'native-base';
import {connect} from 'react-redux';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import styles from '../assets/styles/CommonStyles';
import axios from 'axios';
// import { StyleSheet } from 'react-native';


class Loads extends Component{
    constructor(props){
        super(props)
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
    //     // console.log('Get all Loads');
    // axios.get('http://glgfreight.com/loadboard/api_mobile/loads/all_loads')

    // .then((response)=>{
    //     console.log("responsex");
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

// _renderOptions = (options) =>{
//     return options.map((option,index) =>(
//
//     ))
// }

    render() {
        // const loads = this.state.loads.map(loads)
           // console.log('this.props.RiderReducer.loggedinData', this.props.RiderReducer.loggedinData);
        return (
			  <StyleProvider style={getTheme(material)}>
					<Container >
						{/* <Header  style={{toolbarHeight:50}} /> */}
						<Content contentContainerStyle={{flex:1}}>
							<View style={styles.contentContainer}>
								<View style={styles.contentHeader}>
									<View style={{
										flexDirection:'row',
										padding:10,
									}}>
										<Icon style={styles.ligtFont} name='image'/>
										<Text style={styles.ligtFont}>Rosendo Hernandez</Text>
										<View style={{alignItems: 'flex-end',flex:1,flexDirection:'row-reverse'}}>
											<Icon style={{...styles.ligtFont}} name='exit' />
											<Icon style={{...styles.ligtFont}} name='person' />
										</View>
									</View>
									<View style={{
										flexDirection:'row',
										padding:10,
									}}>
										<Text style={[styles.ligtFont,styles.headerBigger]}>Loads</Text>
									</View>
								</View>
                                <ScrollView>
                                <View style={styles.contentBody}>
                                    <Text style={{fontSize:18,marginBottom: 8}}>Load Search</Text>
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

                                    <Card>
										<CardItem header style={{backgroundColor:'#05426e' }} key={this.state.load_id}>
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
                                                    {this.state.response.map((y) => {
                                                        return(<Text style={{fontSize:10, marginLeft: 60}}>{y.prnt_origin}</Text>);
                                                    })
                                                }
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
                                                        <Text style={{fontSize:10, marginLeft: 20}}> {this.state.origin}</Text>
                                                        <Text style={{fontSize:10, marginLeft: 20}}>Phoenix, AZ</Text>
                                                    </View>
                                                    <View style={{textAlign:'right', marginLeft:100 }}>
                                                            <Icon style={styles.vehicle_type} type="FontAwesome5" name="truck"/>
                                                            <Text style={{fontSize:10}}>CA</Text>
                                                    </View>
                                                </View>
											</Body>
										</CardItem>
									</Card>

                            	</View>
                                </ScrollView>
							</View>
						</Content>
						<Footer>
							<FooterTab style={{backgroundColor: '#fff'}}>
								<Button style={styles.footertab_button}>
									<Icon type="FontAwesome" name="line-chart" />
								</Button>
								<Button style={styles.footertab_button}>
									<View style={styles.footertab_active_indicator} />
									<Icon style={styles.footertab_icon_active} type="FontAwesome5" name="dolly" />
								</Button>
								<Button style={styles.footertab_button}>
									<Icon type="FontAwesome" name="truck" />
								</Button>
								<Button style={styles.footertab_button}>
									<Icon name="person"/>
								</Button>
							</FooterTab>
						</Footer>
					</Container>
			  </StyleProvider>
        );
    }
}

function reduxState(state) {
    console.log('redaux stae from lgin ', state.MyGlobalReducer)
    return {
        MyGlobalReducer: state.MyGlobalReducer
    }
}
 export default connect(reduxState, null)(Loads);
