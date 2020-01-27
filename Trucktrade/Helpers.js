import axios from 'axios';
import qs from 'qs';
import AsyncStorage from '@react-native-community/async-storage';

const Helpers = {
    api_url:'http://192.168.1.20/tei/',
    api_request: (url,parameter = {}) => {       
        return new Promise(function (resolve, reject) {
            axios.post(Helpers.api_url + url, qs.stringify(parameter))
		    .then(response => {
                resolve(response);
		    }).catch(error => {
                reject(error);
		    });
        });
    },
    auth_check: () => {
          
    }
}

export default Helpers;