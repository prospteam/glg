import React, { Component } from 'react';
import { Text, View, TextInput, Button, Image, ImageBackground, TouchableOpacity, StyleSheet, Linking, ScrollView, Dimensions } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-datepicker'
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert';
import { OutlinedTextField } from 'react-native-material-textfield';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';


const deviceWidth = Dimensions.get('window').width;

export default class Dashboard extends Component {

    state = {
        color: 'white',
        show: false,
        msg: "",
        theme: "warning",
        title: "Warning"
    }

    handleClose = () => {
        this.setState({
            show: false
        })
    }
    onChangeText = (text) => {
        this.setState({
            color: text

        })
    }
    constructor(props) {
        super(props)
        this.state = {
            origin: '',
            destination: '',
            trailer_type: '',
            date: '',
        }
        this.state = {
            tableHead: ['State', 'Truck Count', 'Action'],
            tableData: [
                ['Delaware', '2', '3'],
                ['Texas', '30', '3'],
                ['Texas', '30', '3'],
                ['Texas', '30', '3'],
                ['Texas', '30', '3'],
            ]
        }
    }


    _handlePress() {
        console.log(this.state.origin);
        console.log(this.state.destination);
        console.log(this.state.trailertype);
        console.log(this.state.date);

    }
    render() {

        const state = this.state;
        const element = (data, index) => (
            <TouchableOpacity onPress={() => this._alertIndex(index)}>
                <View style={styles.btn}>
                    <Text style={styles.btnText}>Details</Text>
                </View>
            </TouchableOpacity>
        );

        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#e1f8ff' }}>
                <View style={{ flex: 1, position: 'relative', height: 150, width: '100%' }}>
                    <View style={{ backgroundColor: '#03365c', height: 250, position: 'absolute', width: '100%' }}>
                        <Text style={styles.TextInput}>Proweaver</Text>
                        <Text style={styles.tableName}>Truck Map</Text>
                    </View>
                </View>
                <View style={{ flex: 1, backgroundColor: '#e1f8ff', borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', marginTop: -30, zIndex: 4 }}>
                        <View style={styles.btnlogin}>
                            <TouchableOpacity>
                                <Text>Find a Truck</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.btnlogin1}>
                            <TouchableOpacity>
                                <Text>Truck Map</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ScrollView horizontal={true}>
                        {/* <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white', marginTop: 2, marginHorizontal: 20, padding: 25, borderRadius: 10, marginBottom: '80%' }}> */}
                        <View style={{ width: deviceWidth, backgroundColor: '#fff' }}>
                            <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                                <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text} />
                            </Table>
                            
                                <ScrollView>
                                    <Table borderStyle={{ borderColor: 'transparent' }}>
                                        {
                                            state.tableData.map((rowData, index) => (

                                                <TableWrapper key={index} style={styles.row}>
                                                    {
                                                        rowData.map((cellData, cellIndex) => (
                                                            <Cell key={cellIndex} data={cellIndex === 2 ? element(cellData, index) : cellData} textStyle={styles.text} />
                                                        ))
                                                    }
                                                </TableWrapper>
                                            ))
                                        }
                                    </Table>
                                </ScrollView>
                        </View>
                            {/* </View> */}
                    </ScrollView>
                </View>
            </ScrollView>
                );
            }
        
        }
        
        
const styles = StyleSheet.create({

                    btnlogin: {
                    color: '#fff',
                borderColor: "#009688",
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
                margin: 3,
                width: '45%',
                height: '45%',
                borderRadius: 5,
        
            },
    btnlogin1: {
                    color: 'white',
                borderColor: "#009688",
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
                margin: 3,
                width: '45%',
                height: '45%',
                borderRadius: 5,
                backgroundColor: '#01508b',
            },
        
    tableName: {
                    marginLeft: 20,
                marginTop: 15,
                fontSize: 20,
                color: 'white'
            },
    container: {
                    flex: 1,
                padding: 16,
                paddingTop: 30,
                backgroundColor: '#fff',
                marginTop: '15%',
                borderRadius: 10,
                width: '90%',
                marginLeft: '5%'
            },
    head: {
                    height: 40,
                backgroundColor: 'white',
                borderBottomColor: '#ff9c00',
                borderBottomWidth: 2,
            },
    text: {
                    margin: 6
            },
    row: {
                    flexDirection: 'row',
                backgroundColor: '#fff',
                borderBottomColor: '#e8e0e0bf',
                borderBottomWidth: 1,
            },
    btn: {
                width: 65,
                height: 22,
                backgroundColor: '#ff9c00',
                borderRadius: 2,
                borderRadius: 10
            },
    btnText: {
                    textAlign: 'center',
                color: '#fff'
            }
        
});