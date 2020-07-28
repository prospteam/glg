import React from 'react';
import { Text, View, TextInput, Button, Image, ImageBackground, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import truck_bg from './src/assets/images/truck_bg.jpg';
import logo from './src/assets/images/logo.png';
import styles from './src/assets/styles/Commonstyles.js';


export default function App() {
  return (
      <RNPickerSelect
                 onValueChange={(value) => console.log(value)}
                 items={[
                     { label: 'Football', value: 'football' },
                     { label: 'Baseball', value: 'baseball' },
                     { label: 'Hockey', value: 'hockey' },
                 ]}
             />

  );
}
