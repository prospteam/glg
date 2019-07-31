import React, { Component } from 'react';
import { Alert, View, StyleSheet, Switch } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import PayPal from 'react-native-paypal-wrapper';
// import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";

export default class Payment extends Component {

    static navigationOptions = {
        drawerLabel: 'Payment',
        drawerIcon: () => (
            <Icon type="FontAwesome" name="paypal" style={{ fontSize: 19 }} />
        )
    };

    // state = { useLiteCreditCardInput: false };
    //
    // _onChange = (formData) => console.log(JSON.stringify(formData, null, " "));
    // _onFocus = (field) => console.log("focusing", field);
    // _setUseLiteCreditCardInput = (useLiteCreditCardInput) => this.setState({ useLiteCreditCardInput });

    processPayPal(){
        // // 3 env available: NO_NETWORK, SANDBOX, PRODUCTION
        PayPal.initialize(PayPal.NO_NETWORK, "AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R");
        PayPal.pay({
          price: '40.70',
          currency: 'USD',
          description: 'Your description goes here',
        }).then(confirm => console.log(confirm))
          .catch(error => console.log(error));
    }

    processStripe(){

    }

    render() {
        return (
            <Container>
            <Header>
             <Left style={{ flexDirection: 'row' }}>
              <Icon onPress={() => this.props.navigation.openDrawer()} name="md-menu" style={{ color: '#d3a04c', marginRight: 15 }} />
              <Text style={{ color: '#d3a04c' }}>PAYMENT</Text>
             </Left>
             <Right>
             </Right>
            </Header>
                <Content>
                {/*<View style={s.container}>
                   <Switch
                     style={s.switch}
                     onValueChange={this._setUseLiteCreditCardInput}
                     value={this.state.useLiteCreditCardInput} />

                   { this.state.useLiteCreditCardInput ?
                     (
                       <LiteCreditCardInput
                         autoFocus
                         inputStyle={s.input}

                         validColor={"black"}
                         invalidColor={"red"}
                         placeholderColor={"darkgray"}

                         onFocus={this._onFocus}
                         onChange={this._onChange} />
                     ) : (
                       <CreditCardInput
                         autoFocus

                         requiresName
                         requiresCVC
                         requiresPostalCode

                         labelStyle={s.label}
                         inputStyle={s.input}
                         validColor={"black"}
                         invalidColor={"red"}
                         placeholderColor={"darkgray"}

                         onFocus={this._onFocus}
                         onChange={this._onChange} />
                     )
                   }
                 </View>*/}
                 <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 30}}>
                     <Button onPress={() => this.processPayPal()}>
                         <Icon type="FontAwesome" name="cc-paypal" />
                         <Text>
                          PayPal
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

const s = StyleSheet.create({
  switch: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    backgroundColor: "#F5F5F5",
    marginTop: 60
  },
  label: {
    color: "black",
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    color: "black",
  },
});
