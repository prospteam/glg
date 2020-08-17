import React from 'react';
import {ScrollView, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { Text, Form, Item, Input, Label, Icon, Button, Card, CardItem, Body, View } from 'native-base';

import bg_image from './src/assets/images/bg_image.png';
import styles from './src/assets/styles/Commonstyles.js';


export default function App() {
return (

<View>
    <ImageBackground source={bg_image} style={{ width: '100%', height: '100%', marginBottom: 65, blurRadius: 5}}>
        <Card style={styles.contentItem}>
            <CardItem header style={{backgroundColor:'#1fb599' }}>
                <Text>#159</Text>
            </CardItem>
            <CardItem>

                <Body>
                    <View style={{flexDirection: 'column'}}>
                        <View style={styles.iconCompleted}>
                            <Text>Origin</Text>
                            <Text>Rates</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Icon name='ios-checkmark-circle'
                                    style={{color:'#05426e', fontSize:15, marginLeft:20}} />
                                <Text style={{fontSize:12, color:'orange', marginLeft:15, fontWeight: 'bold'}}>USA, CA</Text>
                            </View>
                            <View>
                                <Icon type="FontAwesome5" name='truck'
                                    style={{color:'orange', fontSize:15, marginLeft:20}} />
                            </View>
                            <View style={{
                                    flexDirection: 'row'
                                    }}>
                                <Icon name='ios-checkmark-circle'
                                    style={{color:'#05426e', fontSize:15, marginLeft:20}} />
                                <Text style={{fontSize:12, color:'orange', marginLeft:15, fontWeight: 'bold'}}>USA, CA
                                </Text>
                            </View>
                            <View style={{ margin: 2}} />
                            <Text>Destination</Text>
                        </View>
                        <View style={{flexDirection: 'column',
                                 width:50,
                                 alignItems:'center'
                                 }}>
                            <View style={{textAlign:'right'}}>
                                <Text>Rates</Text>
                                <Text style={{fontSize:20,fontWeight:'bold'}}>$321</Text>
                            </View>
                            <View style={{ margin:20}} />
                            <View style={{textAlign:'right'}}>
                                <Icon style={styles.vehicle_type} type="FontAwesome5" name="truck" />
                                <Text style={{fontSize:15}}>AC</Text>
                            </View>
                        </View>
                    </View>
                </Body>
            </CardItem>
        </Card>
        <Card style={styles.contentItem}>
            <CardItem header style={{backgroundColor:'#1fb599' }}>
                <Text>#160</Text>
            </CardItem>
            <CardItem>
            <Body>
                <View style={{flexDirection: 'column'}}>
                    <View style={styles.iconCompleted}>
                        <Text>Origin</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Icon name='ios-checkmark-circle'
                                style={{color:'#05426e', fontSize:15, marginLeft:20}} />
                            <Text style={{fontSize:12, color:'orange', marginLeft:15, fontWeight: 'bold'}}>USA, CA</Text>
                        </View>
                        <View>
                            <Icon type="FontAwesome5" name='truck'
                                style={{color:'orange', fontSize:15, marginLeft:20}} />
                        </View>
                        <View style={{
                                flexDirection: 'row'
                                }}>
                            <Icon name='ios-checkmark-circle'
                                style={{color:'#05426e', fontSize:15, marginLeft:20}} />
                            <Text style={{fontSize:12, color:'orange', marginLeft:15, fontWeight: 'bold'}}>USA, CA
                            </Text>
                        </View>
                        <View style={{ margin: 2}} />
                        <Text>Destination</Text>
                    </View>
                    <View style={{flexDirection: 'column',
                             width:50,
                             alignItems:'center'
                             }}>
                        <View style={{textAlign:'right'}}>
                            <Text>Rates</Text>
                            <Text style={{fontSize:20,fontWeight:'bold'}}>$321</Text>
                        </View>
                        <View style={{ margin:20}} />
                        <View style={{textAlign:'right'}}>
                            <Icon style={styles.vehicle_type} type="FontAwesome5" name="truck" />
                            <Text style={{fontSize:15}}>AC</Text>
                        </View>
                    </View>
                </View>
            </Body>
            </CardItem>
        </Card>
    </ImageBackground>
</View>

);
}
