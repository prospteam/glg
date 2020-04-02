import React, { Component } from 'react';
import {ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Container, Header, Content, Card, Body, CardItem, Footer, FooterTab, Button, Icon, Title, Text, View,StyleProvider } from 'native-base';

import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import styles from '../assets/styles/CommonStyles';
// import { StyleSheet } from 'react-native';

export default class Loads extends Component {
    render() {
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
										<Icon style={styles.ligtFont} name='image' />
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
                                    <View style={{alignItems: 'center', backgroundColor: 'white', borderRadius: 10}}>
                                        <Text style={{fontWeight: 'bold',fontSize:12, marginTop:10}}>Origin</Text>
                                        <TextInput style={{borderWidth: 0.5,borderColor: '#009688', borderRadius: 5,width:'70%',height: 35,}} placeholderTextColor="#000"/>
                                        <Text style={{fontWeight: 'bold',fontSize:12}}>Destination </Text>
                                        <TextInput style={{borderWidth: 0.5,borderColor: '#009688', borderRadius: 5,width:'70%', height: 35,}} placeholderTextColor="#000"/>
                                        <Text style={{fontWeight: 'bold',fontSize:12}}>Date Available </Text>
                                        <TextInput style={{borderWidth: 0.5,borderColor: '#009688', borderRadius: 5,width:'70%', height: 35,}} placeholderTextColor="#000"/>
                                        <Text style={{fontWeight: 'bold',fontSize:12}}>Trailer Type  </Text>
                                        <TextInput style={{borderWidth: 0.5,borderColor: '#009688', borderRadius: 5,width:'70%', height: 35,}} placeholderTextColor="#000"/>
                                        <TouchableOpacity>
                                          <Text style={{ backgroundColor: 'orange',
                                           color: 'white',
                                           justifyContent: 'center',
                                           borderRadius: 50,
                                           width: 120,
                                           textAlign: 'center',
                                           padding: 8,
                                           fontSize: 15,
                                           marginTop: 20,
                                           marginBottom:20}}>Search</Text>
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
                                                    <View style={{borderBottomColor: '#e1f8ff',borderBottomWidth: 1, width:'70%'}} />
                                                <View style={{flex: 1, flexDirection: 'row',marginTop:2}}>
                                                    <View>
                                                        <Text>Destination</Text>
                                                    </View>
                                                    <View style={{marginBottom:5}}>
                                                        <Text style={{fontSize:10, marginLeft: 20}}>To On Mar 15</Text>
                                                        <Text style={{fontSize:10, marginLeft: 20}}>4821, Ayala Center Cebu Park</Text>
                                                    </View>
                                                    <View style={{textAlign:'right', marginLeft:20, }}>
                                                            <Icon type="FontAwesome5" name="truck" color="#A6A6A6"/>
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
                                                    <View style={{borderBottomColor: '#e1f8ff',borderBottomWidth: 1, width:'70%'}} />
                                                <View style={{flex: 1, flexDirection: 'row',marginTop:2}}>
                                                    <View>
                                                        <Text>Destination</Text>
                                                    </View>
                                                    <View style={{marginBottom:5}}>
                                                        <Text style={{fontSize:10, marginLeft: 20}}>To On Mar 15</Text>
                                                        <Text style={{fontSize:10, marginLeft: 20}}>4821, Ayala Center Cebu Park</Text>
                                                    </View>
                                                    <View style={{textAlign:'right', marginLeft:20, }}>
                                                            <Icon type="FontAwesome5" name="truck" color='orange'/>
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
