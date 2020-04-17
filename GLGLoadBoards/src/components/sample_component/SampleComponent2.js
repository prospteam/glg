import React, { Component } from 'react';
import { Text } from 'native-base';
import Screen from '../layout/Screen';
import styles from '../../assets/styles/CommonStyles';

export default class SampleComponent2 extends Component {
    render() {
        return (
			<Screen>
				<Text style={styles.contentItem}>
					Sub Title
				</Text>
				<Text style={styles.contentItem}>
					contentssss
				</Text>
			</Screen>
		)
    }
}
