import React from 'react';
import ReactDOM from 'react-dom';

import {connect} from 'react-redux'

import { Link } from 'react-router'

class App extends React.Component {

    static defaultProps = {}
    static propTypes = {}

    constructor(props) {
        super(props);
    }
    render() {
        return <div id="container">
            <li><Link to="/secondview">to secondview</Link></li>
            <h1>App</h1>
            {this.props.children}

                {/*<InputBoard ></InputBoard>*/}
            </div>;
    }
    componentDidMount() {
        // let unsubscribe = this.context.store.subscribe(() => {
        //
        //     // 状态变更后实时保存状态到本地
        //
        //     let reduxState = this.context.store.getState();
        //     // this.setState({dataArray: reduxState.content});
        //     this.keyIndex++;
        //     localStorage.setItem('keyIndex', this.keyIndex);
        //     localStorage.setItem('store', JSON.stringify(reduxState));
        // });
    }
}
App.contextTypes = {
    store:React.PropTypes.object.isRequired
};
export default connect()(App);