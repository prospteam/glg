import React, { Component } from 'react';
import { SafeAreaView,ScrollView, Image   } from 'react-native';
import { Container, Header, Content, Card, Body, CardItem, Footer, FooterTab, Button, Icon, Title, Text, View,StyleProvider  } from 'native-base';

import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import styles from '../assets/styles/CommonStyles';
// import { StyleSheet } from 'react-native';

var logo = require('../assets/images/logo_cropped.jpg');

export default class AppPreloader extends Component {
    render() {
        return (
            <View style={{
                // padding:40,
                flex:1,
                backgroundColor:'#fff',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image 
                    style={{
                        width:250,
                        maxWidth:'100%',
                        maxHeight:'100%',
                        resizeMode: 'contain',
                    }}
                    source={logo}
                />
            </View>
        );
    }
}
