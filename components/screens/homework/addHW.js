import React, { Component } from 'react';
import { connect } from 'react-redux';
// importing elements needed to create structure of view
import TempView from '../templates/addTemp/addViewTemp';

class addHW extends Component {
	render() {
		return <TempView Test='why is this running' />;
	}
}

export default connect(null, null)(addHW);