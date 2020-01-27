import Helpers from '../Helpers';
import { ToastAndroid } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native';

const Action = {
    login: (login_form) => {
        return async(dispatch) => {
            dispatch({ type: 'LOADING_START' });
            // // Helpers.api_request('api_login/authenticate_user', login_form).then(response => {
            // //     if (response.data.authenticate === true) {
            // // //         dispatch({ type: 'LOGGED_IN'});
            // dispatch({ type: 'LOADING_SUCCESS' });
            // ToastAndroid.show('Please don\'t leave empty form', ToastAndroid.SHORT);
            console.log(login_form.username);
                    //firebase
                    const response = await fetch( 
                        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDhKPhAOYGQqoj78eBLSWRLP4qcuLEsWa4',
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                email: login_form.username,
                                password: login_form.password,
                                returnSecureToken: true
                            })
                        }
                    );

                    if (!response.ok) {
                        console.log(response.ok);
                        throw new Error('Something went wrong!');
                    }
                    // this contains the data returned
                        const resData = await response.json();
                        console.log(resData);   
                        dispatch({ type: 'LOADING_SUCCESS' });

                    Helpers.api_request('api_login/authenticate_user', login_form).then(response => {
                        if (response.data.authenticate === true) {
                            console.log(response.data);
                            ToastAndroid.show('Login Success', ToastAndroid.SHORT);
                            dispatch({ type: 'LOGGED_IN' });
                            dispatch({ type: 'SET_USER_ID', user_id: response.data.authenticate_data.id });
                            Actions.home({ type: 'reset' });
                        } else if (response.data.authenticate === false) {
                            console.log(response.data);
                            dispatch({ type: 'LOGIN_FAILURE'});
                        }
                    }).catch(error => {
                        dispatch({ type: 'LOADING_FAILURE', payload: error })
                    });
        }
    },
    fetch_data: (url,state,parameters) => {
        return (dispatch) => {
            dispatch({ type: 'LOADING_START' });
            Helpers.api_request('api_login/authenticate_user', login_form).then(response => {
                dispatch({ type: 'LOADING_SUCCESS' });               
                if (response.data.authenticate === true) {
                    dispatch({ type: 'LOGGED_IN'});                                       
                    Actions.home({ type: 'reset' });                   
                } else if (response.data.authenticate === false) {                                     
                    dispatch({ type: 'LOGIN_FAILURE'});       
                    Alert.alert(
                        'Invalid Credentials.',
                        'Please try again.',
                        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                        { cancelable: true },
                    );            
                }

            }).catch(error => {
                dispatch({ type: 'LOADING_FAILURE', payload: error })
            });
        }
    },
    get_data: (url, state) => {
        return (dispatch) => {
            dispatch({ type: 'LOADING_START' });
            Helpers.api_request(url, login_form).then(response => {
                dispatch({ type: 'FETCH_DATA', payload: { state: state } });
            }).catch(error => {
                dispatch({ type: 'LOADING_FAILURE', payload: error })
            });
        }
    },
    insert_update: (url,form) => {
        return (dispatch) => {
            dispatch({ type: 'LOADING_START' });
            Helpers.api_request(url, form).then(response => {
                dispatch({ type: 'LOADING_SUCCESS' });
                dispatch({ type: 'GET_RESPONSE', payload: { response_data: response.data} });
                
            }).catch(error => {
            dispatch({ type: 'LOADING_FAILURE', payload: error })
            });
        }
    },
    registration_func: (url,form) => {
        return async (dispatch) => {
            let final_form = form;
            dispatch({ type: 'LOADING_START' });
            
            //firebase
            const response = await fetch(
                'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDhKPhAOYGQqoj78eBLSWRLP4qcuLEsWa4',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: final_form.email_address,
                        password: final_form.password,
                        returnSecureToken: true
                    })
                }
            );

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            // this contains the data returned
            const resData = await response.json();
            console.log(resData);
            final_form.firebase_uid = resData.localId;
            dispatch({ type: 'LOADING_SUCCESS' });

            Helpers.api_request(url, final_form).then(response => {
                dispatch({ type: 'LOADING_SUCCESS' });
                dispatch({ type: 'GET_RESPONSE', payload: { response_data: response.data} });
                
            }).catch(error => {
               dispatch({ type: 'LOADING_FAILURE', payload: error })
            });
            console.log(final_form);
        }
    },
    set_route: (value) => {
        return (dispatch) => {
            dispatch({ type: 'SET_ROUTE', payload: { current_route: value } });
        }
    }
}

export default Action;
