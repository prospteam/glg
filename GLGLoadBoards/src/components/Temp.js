import React, { Component } from 'react';
import { Container, Header, Content, Card, Body, CardItem, Footer, FooterTab, Button, Icon, Title, Text, View,StyleProvider  } from 'native-base';

import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import { StyleSheet } from 'react-native';

export default class Temp extends Component {
    render() {
        return (
			  <StyleProvider style={getTheme(material)}>
					<Container>
						{/* <Header  style={{toolbarHeight:50}} /> */}
						<Content>
							<View style={{
								backgroundColor: 'red',
								flex: 1,
								height: 200,
								// flexDirection: 'column', // DEFAULT
								// width: '100%'

							}}>
								<View style={{
									backgroundColor: '#03365c',
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
									backgroundColor: '#03365c',
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
								<Button active >
									<Icon type="FontAwesome" name="line-chart" /> 
								</Button>
								<Button	>
									<Icon type="FontAwesome5" name="dolly" /> 
									{/* <Icon name="camera" /> */}
								</Button>
								<Button style={{backgroundColor: '#fff'}}>
									<Icon type="FontAwesome" name="truck" /> 
									{/* 
									<Title style={{color: 'silver'}}>truc</Title>
									*/}
								</Button>
								<Button>
									<Icon name="person" />
									{/* 
									<Title>quot</Title>
									*/}
								</Button>
							</FooterTab>
						</Footer>
					</Container>
			  </StyleProvider>
        );
    }
}

const styles = StyleSheet.create({
  ligtFont: {
    color: '#fff',
	marginRight:10,
	marginLeft:10,
    // fontWeight: 'bold',
    // fontSize: 30,
  },
  headerBigger: {
    fontSize: 25,
    // fontWeight: 'bold',
    // fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
