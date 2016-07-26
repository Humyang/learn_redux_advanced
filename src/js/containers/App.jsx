import React from 'react';
import ReactDOM from 'react-dom';

import {connect} from 'react-redux'

import { Link } from 'react-router'

import NavLink from '../component/common/NavLink.js'

import ProgrmeUrl from './views/ProgrmeUrl.js'

class App extends React.Component {

    static defaultProps = {}
    static propTypes = {}

    constructor(props) {
        super(props);
    }
    render() {
        return <div id="container">
            <ul>
                {/*<li><NavLink to="/" onlyActiveOnIndex={true}>home page</NavLink></li>
                <li><NavLink to="/secondview" >to secondview</NavLink></li>
                <li><NavLink to="/thirdlyview" >to thirdlyview</NavLink></li>
                <li><NavLink to="/repos" >to repos</NavLink></li>
                <li><NavLink to="/tabs" >tabs</NavLink></li>*/}
            </ul>
            {/*<ProgrmeUrl />*/}
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
