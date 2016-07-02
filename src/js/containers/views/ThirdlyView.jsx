import React from 'react';
import ReactDOM from 'react-dom';

import {connect} from 'react-redux'

class SecondView extends React.Component {

    static defaultProps = {}
    static propTypes = {}

    constructor(props) {
        super(props);
    }
    render() {
        return <div id="container">
            <h1>Hello,i am thirdly!</h1>
            </div>;
    }
    componentDidMount() {
    }
}
SecondView.contextTypes = {
    store:React.PropTypes.object.isRequired
};
export default connect()(SecondView);
