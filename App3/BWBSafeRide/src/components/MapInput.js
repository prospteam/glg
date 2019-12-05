import React from 'react';
import { KeyboardAvoidingView, Alert  } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GOOGLE_MAPS_APIKEY = 'AIzaSyC8lpkvXFDua9S2al669zfwz7GSkeVFWs4';

class MapInput extends React.Component {
//#1c1b22 BLACK BWB

    state = {
        set_destination_name: null
    }

    componentDidMount(){

        for(var key in this.props.latlong) {
            if(this.props.latlong.hasOwnProperty(key)) {
                var latitude = this.props.latlong['latitude'];
                var longitude = this.props.latlong['longitude'];
            }
        }

        this.reverseGeocode(latitude, longitude);
    }

    reverseGeocode(latitude, longitude){
        fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + latitude + ',' + longitude + '&key=' + GOOGLE_MAPS_APIKEY)
            .then((response) => response.json())
            .then((responseJson) => {
                // const data = {
                //     // user_id: this.state.userid,
                //     latitude: latitude,
                //     longitude: longitude,
                //     location_name: responseJson.results[0].formatted_address
                // }

                this.setState({ set_destination_name: responseJson.results[0].formatted_address });

                this.locationRef.setAddressText(this.state.set_destination_name);

               //  const self = this;
               //  const api = url()+'api/save_location';
               //
               //  fetch(api, {
               //   method: 'POST',
               //   headers: {
               //     'Accept': 'application/json',
               //     'Content-Type': 'application/json',
               //   },
               //   body: JSON.stringify(data)
               // }).then((response) => response.json())
               //   .then((res) => {
               //      Alert.alert(res.msg);
               //
               //   }).catch((error) => {
               //     console.error(error);
               //   });

            })
    }

    render() {
        return (
          <KeyboardAvoidingView
          behavior="padding"
        >
            <GooglePlacesAutocomplete
                ref={(instance) => { this.locationRef = instance}}
                placeholder={this.props.placeholder}
                minLength={2}
                autoFocus={false}
                returnKeyType={'search'}
                listViewDisplayed={false}
                fetchDetails={true}
                onPress={(data, details = null) => {
                    //'details' is provided when fetchDetails = true
                    this.props.notifyChange(details.geometry.location,data.description);
                    // console.log(data);
                    // console.log(details);
                    // console.log('what a life');
                  }
                }
                query={{
                    key: 'AIzaSyC8lpkvXFDua9S2al669zfwz7GSkeVFWs4',
                    language: 'en'
                }}
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={200}
                styles={{
                  textInputContainer: {
                    backgroundColor: 'white',
                    borderTopWidth: 0,
                    borderBottomWidth:0,
                    position: 'relative',
                  },
                  padding: {
                    padding: 20
                  },
                  textInput: {
                    borderRadius: 0,
                    paddingLeft:10,
                  },
                  description: {
                    fontWeight: 'bold'
                  },
                  predefinedPlacesDescription: {
                    color: 'red'
                  },
                  listView: {
                    // backgroundColor: 'white',
                    // position: 'absolute',
                    // bottom: 30,
                    // border:1,
                    // padding:3,
                    // zIndex:9999,
                  }
                }}
            />

         </KeyboardAvoidingView>
        );
    }
}
export default MapInput;
