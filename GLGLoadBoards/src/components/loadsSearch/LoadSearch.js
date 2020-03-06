import React, { Component } from 'react';
import { Text, View, TextInput, Button, Image, ImageBackground, TouchableOpacity, StyleSheet, Linking, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-datepicker'
import axios from 'axios';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';



export default class LoadSearch extends Component {

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
            length: '',
            width: '',
            height: '',
            weight: '',
            date: '',
            tableTitle: ['Origin', 'State', 'Destination', 'Trailer type','Ship date'],
            tableData: [
                ['1', '2', '3'],
                ['a', 'b', 'c'],
                ['1', '2', '3'],
                ['a', 'b', 'c']
            ]
        }

    }


    _handlePress() {
        // console.log(this.state.origin);
        // console.log(this.state.destination);
        // console.log(this.state.trailer_type);
        // console.log(this.state.date);
        // console.log(this.state.commodity);
        // console.log(this.state.reference_number);

        axios.post('http://192.168.20.33/Projects/globallogisticsgroup/Loadboard_Website/loadboard/loads/search_load?glg_api=yes', {
            origin: this.state.origin,
            destination: this.state.destination,
            trailertype: this.state.trailertype,
            date: this.state.date,
            commodity: this.state.commodity,
            refnumber: this.state.reference_number,
            allLoads: 'All_loads'
        }).then(function (response) {
            console.log(response);
            alert('http://192.168.20.33/Projects/globallogisticsgroup/Loadboard_Website/loadboard/loads/search_load');
            
        }).catch(function (err) {
            console.log(err);
            alert('http://192.168.20.33/Projects/globallogisticsgroup/Loadboard_Website/loadboard/loads/search_load');
            
        });
    }

    render() {
        const state = this.state;
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#e1f8ff' }}>
                <View style={{ flex: 1, position: 'relative', height: 150, width: '100%' }}>
                    <View style={{ backgroundColor: '#03365c', height: 250, position: 'absolute', width: '100%' }}>
                        <Text style={styles.TextInput}>Proweaver</Text>
                        <Text style={styles.tableName}>Loads</Text>
                    </View>
                </View>
                <View style={{ flex: 1, backgroundColor: '#e1f8ff', borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', marginTop: -100, zIndex: 4 }}>
                        <View style={styles.btnlogin}>
                            <TouchableOpacity>
                                <Text>Add New Load</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.btnlogin}>
                            <TouchableOpacity>
                                <Text>All Loads</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.btnlogin}>
                            <TouchableOpacity>
                                <Text>Load Maps</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ScrollView>
                        {/* <View style={{ flex: 1, alignItems: 'left', marginTop: 5, padding: 30,marginBottom: '50%' }}>
                            <Text>New Load Information</Text>
                        </View> */}
                        <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white', marginTop: 5, marginHorizontal: 20, padding: 30, borderRadius: 10, marginBottom: '25%' }}>
                            <TextInput style={styles.fieldsInput1} placeholderTextColor="#bdcacaf7" placeholder="Origin" onChangeText={(text) => this.setState({ origin: text })} />
                            <TextInput style={styles.fieldsInput1} placeholderTextColor="#bdcacaf7" placeholder="Destination" onChangeText={(text) => this.setState({ destination: text })} />
                            <View
                                 style={styles.fieldsInput1}
                             > 
                            <RNPickerSelect
                                style={styles.fieldsInput1}
                                onValueChange={(text) => this.setState({ trailer_type: text })}
                                items={[
                                    { value: 'AC', label: 'AC (Auto Carrier)' },
                                    { value: 'CRG', label: 'CRG (Cargo Van)' },
                                    { value: 'FINT', label: 'FINT (Flat-Intermodal)' },
                                    { value: 'CONT', label: 'CONT (Container)' },
                                    { value: 'CV', label: 'Curtain Van' },
                                    { value: 'DD', label: 'DD (Double Drop)' },
                                    { value: 'DT', label: 'DT (Dump Trailer)' },
                                    { value: 'F', label: 'F (Flatbed)' },
                                    { value: 'FS', label: 'FS (Flat+Sides)' },
                                    { value: 'LA', label: 'LA (Landal)' },
                                    { value: 'FT', label: 'FT (Flat+Tarp)' },
                                    { value: 'HB', label: 'HB (Hopper Bottom)' },
                                    { value: 'HS', label: 'HS (Hotshot)' },
                                    { value: 'LB', label: 'LB (Lowboy)' },
                                    { value: 'MX', label: 'MX (Maxi Flat)' },
                                    { value: 'PNEU', label: 'PNEU (Pneumatic)' },
                                    { value: 'PO', label: 'PO (Power Only)' },
                                    { value: 'R', label: 'R (Reefer)' },
                                    { value: 'RINT', label: 'RINT (Reefer-Intermodal)' },
                                    { value: 'RGN', label: 'RGN (Removable Gooseneck)' },
                                    { value: 'VV', label: 'VV (Van+Vented)' },
                                    { value: 'V', label: 'V (Dry Van)' },
                                    { value: 'SD', label: 'SD (Step Deck/Single Drop)' },
                                    { value: 'TNK', label: 'Tanker' },
                                    { value: 'VA', label: 'VA (Van+Airride)' },
                                    { value: 'VINT', label: 'VINT (Van-Intermodal)' },
                                    { value: 'Other', label: 'Other' },
                                ]}
                                />
                            </View>
                            <DatePicker
                                style={styles.fieldsInput1}
                                date={this.state.date}
                                mode="date"
                                placeholder="Select Date"
                                format="YYYY-MM-DD"
                                minDate="2020-1-1"
                                maxDate="2025-12-31"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                onDateChange={(text) => this.setState({ date: text })}
                            />
                            <TextInput style={styles.fieldsInput1} placeholderTextColor="#bdcacaf7" placeholder="Commodity" onChangeText={(text) => this.setState({ commodity: text })} />
                            <TextInput style={styles.fieldsInput1} placeholderTextColor="#bdcacaf7" keyboardType='numeric' placeholder="Reference Number" onChangeText={(text) => this.setState({ reference_number: text })} />
                            <View style={{ flexDirection: "column", height: "38%", width: "50%", marginBottom: "15%" }}>
                                {/* <TouchableOpacity>
                                    <Text style={styles.search_btn} onPress={() => this._handlePress()}>Search</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={styles.clear_btn} onPress={() => this._handlePress()}>Clear</Text>
                                </TouchableOpacity> */}
                            <Button
                                style={styles.addLoadbtn}
                                onPress={() => this._handlePress()}
                                title="Search">
                                Search
                            </Button>
                            </View>
                        </View>
                        <View style={styles.container}>
                            <Table borderStyle={{ borderWidth: 1 }}>
                                <Row data={state.tableHead} flexArr={[1, 2, 1, 1]} style={styles.head} textStyle={styles.text} />
                                <TableWrapper style={styles.wrapper}>
                                    <Col data={state.tableTitle} style={styles.title} heightArr={[28, 28]} textStyle={styles.text} />
                                    <Rows data={state.tableData} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text} />
                                </TableWrapper>
                            </Table>
                        </View>
                        <View>

                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
        );
    }

}


const styles = StyleSheet.create({
    table_name: {
        color: "#ffff",
        padding: "10%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff', marginBottom:"100%", marginHorizontal: "2%" },
    btnlogin: {
        color: '#fff',
        borderRadius: 5,
        borderColor: "#009688",
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        margin: 3,
        width: '28%',
        height: '25%',
        borderRadius: 5,

    },
    TextInput: {
        color: 'white',
        zIndex: 4,
        marginTop: 25,
        marginLeft: 60
    },
    fieldsInput1: {
        borderWidth: 1,
        width: '100%',
        height: 40,
        borderColor: "#ccf3ff",
        textAlign: 'center',
        borderRadius: 5,
        margin: 3,
    },
    textArea: {
        borderWidth: 1,
        width: '100%',
        borderColor: "#009688",
        textAlign: 'center',
        borderRadius: 5,
        margin: 3,
        height: 150,
        justifyContent: "flex-start"
    },
    tableName: {
        marginLeft: 20,
        marginTop: 15,
        fontSize: 20,
        color: 'white'
    },
    search_btn: {
        backgroundColor: 'orange',
        color: 'white',
        justifyContent: 'center',
        borderRadius: 50,
        width: 120,
        height: '60%',
        textAlign: 'center',
        padding: 8,
        fontSize: 15,
        marginTop: 20,

    },
    clear_btn: {
        backgroundColor: '#d6d5d5',
        color: 'white',
        justifyContent: 'center',
        borderRadius: 50,
        width: 120,
        height: '60%',
        textAlign: 'center',
        fontSize: 15,
        marginTop: 20,
        padding: 8

    }

});