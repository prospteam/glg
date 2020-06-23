import React from 'react';
import { Text, View, TextInput, Button, Image, ImageBackground, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import truck_bg from './src/assets/images/truck_bg.jpg';
import logo from './src/assets/images/logo.png';
import styles from './src/assets/styles/Commonstyles.js';


export default function App() {
  return (

      <View>
          <ImageBackground source={truck_bg} style={{ width: '100%', height: '100%', marginBottom: 65, blurRadius: 5}}>
              <View style={{ marginTop: "30%", justifyContent: "center", alignItems: "center" }}>
                  <Image source={logo} style={{ width: 150, height: 150, borderRadius: 100, blurRadius: 5 }} />
              </View>
              <View  style={{justifyContent: "center", alignItems: "center", marginTop: 50}}>
                <Text style={{color:'white', fontSize:25, fontFamily: 'sans-serif' }}>GLG Tack a Load </Text>
                    <TextInput style={styles.text_input} placeholder="Enter Code Here"  placeholderTextColor="white"/>
              </View>
              <View  style={{justifyContent: "center", alignItems: "center", marginTop: 30}}>
                <TouchableOpacity style={styles.button}  >
                    <Text style={{fontSize:18}}>Track</Text>
               </TouchableOpacity>
              </View>
          </ImageBackground>
      </View>

  );
}
