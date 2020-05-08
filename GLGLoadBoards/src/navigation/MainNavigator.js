import React, { Component } from 'react';
import {Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { fromLeft } from 'react-navigation-transitions';

import Dashboard from './components/dashboard/Dashboard.js/';
import Loads from './components/allLoads/Loads.js'
import Trucks from './components/trucks/Trucks.js/';

const FadeTransition = (index, position)=> {
    const sceneRange = [index - 1, index];
    const outputOpacity = [0,1];
    const transition = position.interpolate({
        inputRange: sceneRange,
        outputRange: outputOpacity
    });
    return {
        opacity: transition
    }

}

const NavigationConfig = () =>{
    return{
        screenInterpolator: (sceneProps) => {
            const position = sceneProps.position;
            const scene = sceneProps.scene;
            const index = sceneProps.index;
        }
    }
}

export default MainNavigator = createStackNavigator({
    Home: {screen: Dashboard},
    Loads:{screen: Loads},
    Trucks:{screen: Trucks},
},  {transitionConfig: NavigationConfig });
