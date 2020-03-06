import React, { Component } from 'react';
import { Container, Header, Content, Card, Body, CardItem, Footer, FooterTab, Button, Icon, Title, Text, View } from 'native-base';



export default class Temp extends Component {
    render() {
        return (
            <Container>
                {/* <Header  style={{toolbarHeight:50}} /> */}
                <Content>
                    <View style={{
                        backgroundColor: 'red',
                        flex: 1,
                        height: 200,
                        // flexDirection: 'column', // DEFAULT
                        // width: '100%'

                    }}>
                        <View style={{
                            backgroundColor: 'blue',
                            height: 50,
                        }}>
                            <Text>I am head unta</Text>
                            <Text>I am head unta</Text>
                            <Text>I am head unta</Text>

                        </View>
                        <Card>
                            <CardItem header>
                                <Text>NativeBase</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Text>
                                    I am a card body
                                    </Text>
                                </Body>
                            </CardItem>
                            <CardItem footer>
                                <Text>GeekyAnts</Text>
                            </CardItem>
                        </Card>
                    </View>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button >
                            <Title>dash</Title>
                        </Button>
                        <Button>
                            <Title>loads</Title>
                            {/* <Icon name="camera" /> */}
                        </Button>
                        <Button active>
                            <Title>truc</Title>
                            {/* <Icon active name="navigate" /> */}
                        </Button>
                        <Button>
                            <Title>quot</Title>
                            {/* <Icon name="person" /> */}
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}