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
              <View style={{ marginTop: "30%", justifyContent: "center", alignItems: "center", marginTop: 25}}>
                  <Image source={logo} style={{ width: 150, height: 150, borderRadius: 100, blurRadius: 5 }} />
              </View>
              <View  style={{justifyContent: "center", alignItems: "center", marginTop: 15}}>
                <Text style={{color:'white', fontSize:25, fontFamily: 'sans-serif' }}>Track Number: </Text>
                        <TextInput style={styles.trackinput} placeholder="0123456789"  placeholderTextColor="white"/>
              </View>
          </ImageBackground>
      </View>

  );
}
