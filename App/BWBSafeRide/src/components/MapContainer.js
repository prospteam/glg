import React from 'react';
import { View } from 'react-native';
import MapInput from './MapInput';
import MyMapView from './MyMapView';
import { getLocation } from './getLocation';

class MapContainer extends React.Component {
  state = {
    region: {},
  };

  componentDidMount() {
    // this.updateState({
    //   latitude: 123.9,
    //   longitude: 10.2833,
    // });
    this.getInitialState();
  }

  getInitialState() {
    console.log('getting current loc');
    getLocation().then(data => {
      this.updateState({
        latitude: data.latitude,
        longitude: data.longitude,
      });
      console.log(data);
      console.log(this.state);
      console.log('location updated');
    });
  }

  updateState(location) {
    this.setState({
      region: {
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003,
      },
    });
  }

  getCoordsFromName(loc) {
    this.updateState({
      latitude: loc.lat,
      longitude: loc.lng,
    });
  }

  onMapRegionChange(region) {
    this.setState({ region });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.4 }}>
          <MapInput notifyChange={loc => this.getCoordsFromName(loc)} />
        </View>
        {this.state.region['latitude'] ? (
          <View style={{ flex: 1 }}>
            <MyMapView
              region={this.state.region}
              onRegionChange={reg => this.onMapRegionChange(reg)}
            />
          </View>
        ) : null}
      </View>
    );
  }
}

export default MapContainer;
