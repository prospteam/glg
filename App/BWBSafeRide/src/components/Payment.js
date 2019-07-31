import React, { Component } from 'react';
import { Alert, View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import PayPal from 'react-native-paypal-wrapper';

export default class Payment extends Component {

    static navigationOptions = {
        drawerLabel: 'Payment',
        drawerIcon: () => (
            <Icon type="FontAwesome" name="paypal" style={{ fontSize: 19 }} />
        )
    };

    processPayment(){
        // 3 env available: NO_NETWORK, SANDBOX, PRODUCTION
        PayPal.initialize(PayPal.SANDBOX, "CLIENT-ID-HERE");
        PayPal.pay({
          price: '40.70',
          currency: 'MYR',
          description: 'Your description goes here',
        }).then(confirm => console.log(confirm))
          .catch(error => console.log(error));
    }

    render() {
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
                <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 30}}>
                    <Button onPress={() => this.processPayment()}>
                        <Icon type="FontAwesome" name="cc-paypal" />
                        <Text>
                         Pay Now
                        </Text>
                    </Button>
                </View>

                </Content>
                <Footer>
                    <FooterTab style={{backgroundColor:"#1c1b22"}}>
                        <Button vertical onPress={() => this.props.navigation.navigate('Dashboard')}>
                            <Icon name="apps" />
                            <Text>Dashboard</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="map" />
                            <Text>Book Now</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="navigate" />
                            <Text>Navigate</Text>
                        </Button>
                    </FooterTab>
                </Footer>
        </Container>
        );
    }
}
