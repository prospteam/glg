// Dependencies
import axios from 'axios';

// My Imports
// alert('action loaded');

export function set(redux_state,payload){

	return{
		type: redux_state,
		payload: payload
	}
}

export function my_actions(payload){

	// axios({
	// 	method: 'post',
	// 	url: api_link+'KROD/query_builder',
	// 	data: {
	// 		"select": "*",
	// 		"from": "glg_users",
	// 		"where": {
	// 			"username": "admin",
	// 			// "username": this.state.username.toLowerCase(),
	// 			// "other_password": this.state.password.toLowerCase()
	// 		}
	// 	}
	//   }).then(function (response) {

	// 	console.log('____________________________');
	// 	console.log(response);
	// 	// that.props.set_show_mini_loader(false);
	// 	// that.setState({is_load_test:false});
	// 	if (response.data.length>0) {
	// 		// that.setState({
	// 		// 	show: true,
	// 		// 	msg: "Successfully Login",
	// 		// 	theme: "success",
	// 		// 	title: "Success!",
	// 		// 	success_login: true
	// 		// });
	// 		// that.temp_user_data = response.data[0];
	// 	} else {
	// 		// that.setState({
	// 		// 	show: true,
	// 		// 	msg: "Incorrect Username and Password",
	// 		// 	theme: "warning",
	// 		// 	title: "Warning!"
	// 		// });
	// 	}
	// })
	// .catch(function (error) {

	// 	// that.setState({is_load_test:false});
	// 	// that.props.set_show_mini_loader(false);
	// 	console.log(error);
	// 	console.log("LAGI ERROR NA LAGI ALAM KO");
	// });


	alert(2);

	console.log('____________________________');
	// console.log(this.props.my_config);

	return (dispatch, asd) => {
		// const {items} = getState().my_config;

		alert(asd().my_config.api_link);
		alert("_____________");

		// console.log('_____________ddd_______________');
		// console.log(dispatch);
		// return dispatch({
		// 	type: "test",
		// 	payload: payload
		// });
		return{
			type: "test",
			payload: payload
		}
	  }
}
export function set_autocomplete_text(payload){
	return{
		type: "set_autocomplete_text",
		payload: payload
	}
}
export function set_show_mini_loader(payload){
	return{
		type: "set_show_mini_loader",
		payload: payload
	}
}
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
// export function register_action(type_,data){
// 	console.log('Start');
//     const api_call = axios.post(MyConfigs.api_link +'/login/register/yes',data)
// 		.then(res => {
// 			console.log(res.data);
//             if (res.data.status == "success") {
//                 alert('Success: ' + res.data.message);
//             }else{
//                 alert('Error: ' + res.data.message);
// 			}
// 			console.log('End2');
// 		})
// 		.catch(err => {
// 			console.log({status_:'error',err});
// 			alert('Error in API connection');
// 			console.log('End2');
// 		});
// 	console.log('End');

// 	return {
// 		type:type_,
// 		payload:data,
// 	}
// }
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

export function split_city_state_country(param){
	return{
		type: 'split_city_state_country',
		payload: param
	}
}
