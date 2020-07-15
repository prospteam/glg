// import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

// Dont just exist, live.
// class MyFunctions extends Component {
class MyFunctions {
	// constructor(props){
    //     super(props);
    //     // my_function();
    // }
    
    my_function = () => {
        return 1;
    }

    test(){
        alert('ok');
    }

}
// KUNG GUSTO MONG GAMITIN ANG REDUX FUNCTIONS(YUNG NASA ACTIONS)
function reduxActionFunctions(dispatch){
    return bindActionCreators({
		// si set_sampleString function kay makit an sa actions folder
    },dispatch);
 }
export default connect(null,reduxActionFunctions)(MyFunctions);
