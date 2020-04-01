import React, { Component } from 'react';
import { Container, Header, Content, Card, Body, CardItem, Footer, FooterTab, Button, Icon, Title, Text, View,StyleProvider  } from 'native-base';

import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import styles from '../assets/styles/CommonStyles';
// import { StyleSheet } from 'react-native';

export default class Temp extends Component {
    render() {
        return (
			  <StyleProvider style={getTheme(material)}>
					<Container >
						{/* <Header  style={{toolbarHeight:50}} /> */}
						<Content contentContainerStyle={{flex:1}}>
							<View style={{
								backgroundColor: '#03365c',
								flex: 1,
								// height: '100%',
								flexDirection: 'column', // DEFAULT
								// width: '100%'
							}}>
								<View style={{
									paddingTop:10,
								}}>
									<View style={{
										flexDirection:'row',
										padding:10,
									}}>
										<Icon style={styles.ligtFont} name='image' />
										<Text style={styles.ligtFont}>I am head unta</Text>
										<View style={{alignItems: 'flex-end',flex:1,flexDirection:'row-reverse'}}>
											<Icon style={{...styles.ligtFont}} name='exit' />
											<Icon style={{...styles.ligtFont}} name='person' />
										</View>
									</View>
									<View style={{
										flexDirection:'row',
										padding:10,
									}}>
										<Text style={[styles.ligtFont,styles.headerBigger]}>I am title</Text>

									</View>
								</View>
								
								<View style={{
									paddingTop:10,
								}}>
									<Card>
										<CardItem header>
											<Text>NativeBase</Text>
										</CardItem>
										<CardItem>
											<Body>
												<Text>
												I am a card body
												</Text>
											</Body>
										</CardItem>
										<CardItem footer>
											<Text>GeekyAnts</Text>
										</CardItem>
									</Card>
								</View>
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
