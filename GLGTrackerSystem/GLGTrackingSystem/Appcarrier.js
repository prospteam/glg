import React from 'react';
import {ScrollView, TouchableOpacity, TextInput, ImageBackground  } from 'react-native';
import { Text, Form, Item, Input, Label, Icon, Button, Card, CardItem, Body, View  } from 'native-base';

import bg_image from './src/assets/images/bg_image.png';
import styles from './src/assets/styles/Commonstyles.js';


export default function App() {
  return (

      <View>
          <ImageBackground source={bg_image} style={{ width: '100%', height: '100%', marginBottom: 65, blurRadius: 5}}>
              <Card style={styles.contentItem}>
                  <CardItem header style={{backgroundColor:'#1fb599' }}>
                      <Text>Sample Redux Function Call</Text>
                  </CardItem>
                  <CardItem>
                        <Body>
                            <Text>redux_state.sampleString</Text>
                            <Text>redux_state.sampleString</Text>
                            <Text>redux_state.sampleString</Text>
                            <Text>redux_state.sampleString</Text>
                            <Text>redux_state.sampleString</Text>
                            <Text>redux_state.sampleString</Text>
                            <Text>redux_state.sampleString</Text>
                        </Body>
                  </CardItem>
              </Card>
              <Card style={styles.contentItem}>
                  <CardItem header style={{backgroundColor:'#1fb599' }}>
                      <Text>Sample Redux Function Call</Text>
                  </CardItem>
                  <CardItem>
                        <Body>
                            <Text>redux_state.sampleString</Text>
                            <Text>redux_state.sampleString</Text>
                            <Text>redux_state.sampleString</Text>
                            <Text>redux_state.sampleString</Text>
                            <Text>redux_state.sampleString</Text>
                            <Text>redux_state.sampleString</Text>
                            <Text>redux_state.sampleString</Text>
                        </Body>
                  </CardItem>
              </Card>
          </ImageBackground>
      </View>

  );
}
