import React, { Component } from 'react';
import { Text, View, TextInput, Button, Image, ImageBackground, TouchableOpacity, StyleSheet, Linking, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-datepicker'

// IMPORTS
import Screen from '../layout/Screen';
import styles from '../../assets/styles/CommonStyles';

export default class Asd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            origin: '',
            destination: '',
            trailer_type: '',
            date: '',
        }
    }
    render() {
        return (
			<Screen>
				<Text style={styles.contentItem}>
					Sub Title
				</Text>
				<View style={{ 
					alignItems: 'center', 
					backgroundColor: 'white', 
					marginTop: 2, 	
					marginHorizontal: 20, 
					// padding: 25, 
					borderRadius: 10, 
					paddingBottom: 10 
				}}>
                            {/* <SCLAlert
                                show={this.state.show}
                                onRequestClose={this.handlePress}
                                theme={this.state.theme}
                                title={this.state.title}
                                subtitle={this.state.msg}
                            >
                                <SCLAlertButton theme="default" onPress={this.handleClose}>OK</SCLAlertButton>
                            </SCLAlert> */}
                            <TextInput style={styles.fieldsInput1} placeholderTextColor="#000" placeholder="Origin" onChangeText={(text) => this.setState({ origin: text })} />
                            <TextInput style={styles.fieldsInput1} placeholderTextColor="#000" placeholder="Destination" onChangeText={(text) => this.setState({ destination: text })} />

                            <View
                                style={styles.fieldsInput1}
                            >
                                <RNPickerSelect
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
                                minDate="2020-01-01"
                                maxDate="2025-12-31"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                onDateChange={(text) => this.setState({ date: text })}
                            />
                                 {/* <TouchableOpacity>
                                    <Text style={styles.addLoadbtn} onPress={() => this.handlePress()}>Search</Text>
                                </TouchableOpacity> */}
                            <Button
                                style={styles.addLoadbtn}
                                onPress={() => this._handlePress()}
                                title="Searches">
                                Searches
                          </Button>
                        </View>
			</Screen>
		)
    }
}
