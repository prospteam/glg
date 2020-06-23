import React from 'react';
import { Text, View, TextInput, Button, Image, ImageBackground, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import bg_image from './src/assets/images/bg_image.png';
import styles from './src/assets/styles/Commonstyles.js';


export default function App() {
  return (

      <View>
          <ImageBackground source={bg_image} style={{ width: '100%', height: '100%', marginBottom: 65, blurRadius: 5}}>

          </ImageBackground>
      </View>

  );
}
