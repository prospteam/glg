// Dependencies
import axios from 'axios';
import Geolocation from '@react-native-community/geolocation';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const geolib = require('geolib');

// My Imports
import firebase from "../firestore.js";

// alert('action loaded');

export function sampleFunction(type_, data){
	
	alert('got it');
	return {
		type:type_,
		payload:data,
	}
}

export function setData(type_, data) {
    return  {
        type: type_, 
        payload: data 
    }
}

export function set_TRUE_FALSE(type_, data) {
    return {
        type: type_,
        payload: data 
    }
}