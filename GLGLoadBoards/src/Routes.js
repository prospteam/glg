import React, { Component } from 'react';
import {Text, View } from 'react-native';
import AboutUs  from './screens/AboutUs';
import Home  from './screens/Home';
import Page  from './screens/Page';
import { Actions, Router, Scene, Drawer} from 'react-native-router-flux';


class Routes extends  Component{
   constructor(props) {
      super(props);
   }
   render(){
      return(
            <Router>
               <Scene key="root">
                  <Drawer hideNavBar key="drawer" drawer  >
                     <Scene  key="Home" title="About Us" component={Home}  initial={true}/>
                     <Scene  key="AboutUs" title="About Us" component={AboutUs} />
                     <Scene  key="Page" title="About Us" component={Page} />
                  </Drawer>
               </Scene>
            </Router>
      );
   }
}

export default Routes;
