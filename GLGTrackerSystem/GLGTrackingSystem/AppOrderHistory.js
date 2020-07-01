import React from 'react';
import {ScrollView, TouchableOpacity, TextInput, ImageBackground, Image } from 'react-native';
import { Text, Form, Item, Input, Label, Icon, Button, Card, CardItem, Body, View  } from 'native-base';


import truck_bg from './src/assets/images/truck_bg.jpg';
import logo from './src/assets/images/logo.png';
import bg_image from './src/assets/images/bg_image.png';
import styles from './src/assets/styles/Commonstyles.js';


export default function App() {
  return (
      <View>
          <ImageBackground source={bg_image} style={{ width: '100%', height: '100%', marginBottom: 65, blurRadius: 5}}>
              <View style={{justifyContent: "center", alignItems: "center"}}>
                  <Image source={truck_bg} style={{ width: '100%', height: 180, }} />
              </View>
              <View style={{justifyContent: "center", alignItems: "center"}}>
                  <Image source={logo} style={{ width: 150, height: 150, borderRadius: 100, marginTop: -65,  }} />
              </View>
              <View  style={{justifyContent: "center", alignItems: "center", marginTop: 15}}>
                <Text style={{color:'white', fontSize:25, fontFamily: 'sans-serif' }}>Track Numbers: </Text>
                        <TextInput style={styles.trackinput} placeholder="0123456789"  placeholderTextColor="white"/>
              </View>
              <View style={{flexDirection: 'column', justifyContent: "center", alignItems: "center"}}>

                      <View style={{ margin: 10}} />

                      <View style={{flexDirection: 'row'}}>
                          <Icon name='ios-checkmark-circle' style={{color:'#24cea7', fontSize:20,}}/>
                          <View style={{flexDirection: 'column'}}>
                            <Text style={{fontSize:15, color:'white', marginLeft:30}}>Mon, 01 June 2020</Text>
                            <Text style={{fontSize:18, color:'white', marginLeft:30, fontWeight: 'bold'}}>Claimed </Text>
                          </View>
                      </View>

                      <View style={{ margin: 10}} /> 

                      <View style={{flexDirection: 'row'}}>
                          <Icon name='ios-checkmark-circle' style={{color:'#24cea7', fontSize:20,}}/>
                          <View style={{flexDirection: 'column'}}>
                            <Text style={{fontSize:15, color:'white', marginLeft:30}}>Mon, 01 June 2020</Text>
                            <Text style={{fontSize:18, color:'white', marginLeft:30, fontWeight: 'bold'}}>Arrived at USA</Text>
                          </View>
                      </View>

                      <View style={{ margin: 10}} />

                      <View style={{flexDirection: 'row'}}>
                          <Icon name='ios-checkmark-circle' style={{color:'#24cea7', fontSize:20,}}/>
                          <View style={{flexDirection: 'column'}}>
                            <Text style={{fontSize:15, color:'white', marginLeft:30}}>Mon, 01 June 2020</Text>
                            <Text style={{fontSize:18, color:'white', marginLeft:30, fontWeight: 'bold'}}>Delivered </Text>
                          </View>
                      </View>

                </View>
          </ImageBackground>
      </View>

  );
}
