// Dependencies
import axios from 'axios';
import Geolocation from '@react-native-community/geolocation';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import MyConfigs from '../MyConfigs.js';

const geolib = require('geolib');

// My Imports
import firebase from "../firestore.js";

// alert('action loaded');

export function sampleFunction(type_,data){
    const api_call = axios.post(MyConfigs.api_link +'/login/register/yes',data)
		.then(res => {
			console.log(res.data);
            if (res.data.status = "success") {
                alert('Success: ' + res.data.message);
            }else{
                alert('Error: ' + res.data.message);
            }
		})
		.catch(err => {
			console.log({status_:'error',err});
			alert('Error in API connection');
		});
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