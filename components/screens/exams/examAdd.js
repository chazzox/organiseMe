import * as React from 'react';
import { connect } from 'react-redux';
// importing elements needed to create structure of view
import TempView from '../templates/addTemp/addViewTemp';

class addHW extends React.Component {
    render() {
        return <TempView Test='lmao2' />;
    }
}

export default connect(null, null)(addHW);