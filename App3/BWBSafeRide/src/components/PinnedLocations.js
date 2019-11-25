import React, { Component } from 'react';
import { Alert, TouchableOpacity, View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem } from 'native-base';

export default class PinnedLocations extends Component {
    static navigationOptions = {
        drawerLabel: 'Pinned Locations',
        drawerIcon: () => (
            <Icon type="FontAwesome" name="map" style={{ fontSize: 19 }} />
        )
    };

    constructor(props){
        super(props);
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
                <Container>
                <Content padder>
                    <View style={{borderWidth: 3, borderColor: '#a1a1a1', margin: 5, padding: 10, borderRadius: 5}}>
                        <TouchableOpacity><Text>fasfdsdf</Text></TouchableOpacity>
                    </View>
                    <View style={{borderWidth: 3, borderColor: '#a1a1a1', margin: 5, padding: 10, borderRadius: 5}}>
                        <Text>fasfdsdf</Text>
                    </View>
                    </Content>
                </Container>
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
