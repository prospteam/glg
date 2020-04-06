import React, { Component } from 'react';
import {ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Container, Header, Content, Card, Body, CardItem, Footer, FooterTab, Button, Icon, Title, Text, View,StyleProvider } from 'native-base';
import {connect} from 'react-redux';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import styles from '../assets/styles/CommonStyles';
// import { StyleSheet } from 'react-native';

class Loads extends Component{
    render() {
           console.log('this.props.RiderReducer.loggedinData', this.props.RiderReducer.loggedinData);
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
                                        <TextInput style={styles.text_input} placeholderTextColor="#000"/>
                                        <Text style={styles.middle_text}>Destination</Text>
                                        <TextInput style={styles.text_input} placeholderTextColor="#000"/>
                                        <Text style={styles.middle_text}>Trailer Type</Text>
                                        <TextInput style={styles.text_input} placeholderTextColor="#000"/>
                                        <Text style={styles.middle_text}>Commodity</Text>
                                        <TextInput style={styles.text_input} placeholderTextColor="#000"/>
                                        <TouchableOpacity>
                                          <Text style={styles.search_button}>Search</Text>
                                       </TouchableOpacity>
                                    </View>
									<Card>
										<CardItem header style={{backgroundColor:'#05426e' }}>
											<Text style={{color:'#fff'}}>ABC123</Text>
											<Text style={{color:'#4caf50', fontSize:12}}> On Way</Text>
										</CardItem>
										<CardItem>
											<Body>
                                                <View style={{flex: 1, flexDirection: 'row'}}>
                                                    <View>
                                                        <Text>Origin</Text>
                                                    </View>
                                                    <View style={{marginBottom:5}}>
                                                        <Text style={{fontSize:10, marginLeft: 60}}>From On Mar 15</Text>
                                                        <Text style={{fontSize:10, marginLeft: 60}}>Keppel, Cebu Business Park</Text>
                                                    </View>
                                                        <View style={{textAlign:'right'}}>
                                                            <Text style={{fontSize:20, marginLeft: 20, fontWeight: 'bold'}}>$35.5</Text>
                                                        </View>
                                                    </View>
                                                    <View style={{borderBottomColor: '#004f6a',borderBottomWidth: 1, width:'80%'}} />
                                                <View style={{flex: 1, flexDirection: 'row',marginTop:2}}>
                                                    <View>
                                                        <Text>Destination</Text>
                                                    </View>
                                                    <View style={{marginBottom:5}}>
                                                        <Text style={{fontSize:10, marginLeft: 20}}>To On Mar 15</Text>
                                                        <Text style={{fontSize:10, marginLeft: 20}}>4821, Ayala Center Cebu Park</Text>
                                                    </View>
                                                    <View style={{textAlign:'right', marginLeft:20, }}>
                                                            <Icon style={styles.vehicle_type} type="FontAwesome5" name="truck"/>
                                                            <Text style={{fontSize:10}}>ZXC123</Text>
                                                    </View>
                                                </View>
											</Body>
										</CardItem>
									</Card>
                                    <Card>
                                        <CardItem header style={{backgroundColor:'#05426e' }}>
                                            <Text style={{color:'#fff'}}>ABC123</Text>
                                            <Text style={{color:'#4caf50', fontSize:12}}> On Way</Text>
                                        </CardItem>
                                        <CardItem>
                                            <Body>
                                                <View style={{flex: 1, flexDirection: 'row'}}>
                                                    <View>
                                                        <Text>Origin</Text>
                                                    </View>
                                                    <View style={{marginBottom:5}}>
                                                        <Text style={{fontSize:10, marginLeft: 60}}>From On Mar 15</Text>
                                                        <Text style={{fontSize:10, marginLeft: 60}}>Keppel, Cebu Business Park</Text>
                                                    </View>
                                                        <View style={{textAlign:'right'}}>
                                                            <Text style={{fontSize:20, marginLeft: 20, fontWeight: 'bold'}}>$35.5</Text>
                                                        </View>
                                                    </View>
                                                    <View style={{borderBottomColor: '#004f6a',borderBottomWidth: 1, width:'80%'}} />
                                                <View style={{flex: 1, flexDirection: 'row',marginTop:2}}>
                                                    <View>
                                                        <Text>Destination</Text>
                                                    </View>
                                                    <View style={{marginBottom:5}}>
                                                        <Text style={{fontSize:10, marginLeft: 20}}>To On Mar 15</Text>
                                                        <Text style={{fontSize:10, marginLeft: 20}}>4821, Ayala Center Cebu Park</Text>
                                                    </View>
                                                    <View style={{textAlign:'right', marginLeft:20, }}>
                                                            <Icon style={styles.vehicle_type} type="FontAwesome5" name="truck" color='orange'/>
                                                            <Text style={{fontSize:10}}>ZXC123</Text>
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
