// Dependencies
import axios from 'axios';

// My Imports
import firebase from "../../libraries/firestore.js";

// alert('action loaded');

export function set_SAMPLEBOLEAN(type, payload){
	// console.log('true_or_false',payload);
	return{
		type: type,
		payload: payload
	}
}
export function set_user_data(type, payload){
	return{
		type: type,
		payload: payload
	}
}
export function set_show_mini_loader(payload){
	return{
		type: "set_show_mini_loader",
		payload: payload
	}
}
export function set_is_logged(type, payload){
	return{
		type: type,
		payload: payload
	}
}
export function set_sampleString(type, payload){
	return{
		type: type,
		payload: payload
	}
}
export function register_action(type_,data){
	console.log('Start');
    const api_call = axios.post(MyConfigs.api_link +'/login/register/yes',data)
		.then(res => {
			console.log(res.data);
            if (res.data.status == "success") {
                alert('Success: ' + res.data.message);
            }else{
                alert('Error: ' + res.data.message);
			}
			console.log('End2');
		})
		.catch(err => {
			console.log({status_:'error',err});
			alert('Error in API connection');
			console.log('End2');
		});
	console.log('End');

	return {
		type:type_,
		payload:data,
	}
}
export function sampleFunction2(type_,data){

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
export function login_true_false(type, true_or_false){
	console.log('true_or_false',true_or_false);
	return{
		type: type,
		payload: true_or_false
	}
}
