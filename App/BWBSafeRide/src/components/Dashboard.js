import React, { Component } from 'react';
import { Dimensions, Alert } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

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
                </Content>
                <Footer>
                    <FooterTab style={{backgroundColor:"#1c1b22"}}>
                        <Button vertical active>
                            <Icon active name="map" />
                            <Text>Book Now</Text>
                        </Button>
                    </FooterTab>
                </Footer>
        </Container>
        );
    }
}
