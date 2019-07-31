import React, { Component } from 'react';
import { Dimensions, Alert } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.771707;
const LONGITUDE = -122.4053769;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};
const GOOGLE_MAPS_APIKEY = 'AIzaSyC8lpkvXFDua9S2al669zfwz7GSkeVFWs4';


const getCurrentLocation = () => {
  alert('1');
}

export default class Dashboard extends Component {
    static navigationOptions = {
      drawerLabel: 'Dashboard',
      drawerIcon: () => (
          <Icon type="FontAwesome" name="home" style={{ fontSize: 22 }} />
      )
    };

    checkSession = async () => {
      console.log('here');
      if(await AsyncStorage.getItem('userData')) {
        // this.setState({
        //   isLogged: true,
        //   });
        console.log('naa');
        console.log(await AsyncStorage.getItem('userData'));
      }else {
          this.props.navigation.navigate('Logout');
      }
      // setTimeout(() => {
      //   this.setState({
      //     isLoading: false,
      //     });
      //   }, 1000);
    }

    render() {

      console.log(Dimensions.get('window'));

      console.log("calling");
      this.checkSession();

        return (
            <Container>
            <Header>
             <Left style={{ flexDirection: 'row' }}>
              <Icon onPress={() => this.props.navigation.openDrawer()} name="md-menu" style={{ color: '#d3a04c', marginRight: 15 }} />
             </Left>
             <Right>
             </Right>
            </Header>
                <Content>
                  <MapView style={{flex: 1,  height: height,  width: width}} initialRegion={{
                      latitude: LATITUDE,
                      longitude: LONGITUDE,
                      latitudeDelta: LATITUDE_DELTA,
                      longitudeDelta: LONGITUDE_DELTA,
                    }}>
                    <MapViewDirections
                      origin={origin}
                      destination={destination}
                      apikey={GOOGLE_MAPS_APIKEY}
                    />
                  </MapView>
                </Content>
                <Footer>
                    <FooterTab style={{backgroundColor:"#1c1b22"}}>
                        <Button vertical active onPress={() => getCurrentLocation()}>
                            <Icon active name="map" />
                            <Text>Book Now</Text>
                        </Button>
                    </FooterTab>
                </Footer>
        </Container>
        );
    }
}
