'use strict';

import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';

import NavLink from '../../component/common/NavLink.js'

export default class Repos extends React.Component {

    constructor(props) {
        super(props);

        // 设置 state 初始属性
        this.state = {};

    }
    render() {
        return <div >
            <h2>Repos</h2>
            <ul>
                <li> <NavLink to="/repos/reactjs/react-router"> React Router</NavLink> </li>
                <li> <NavLink to="/repos/facebook/react">React</NavLink> </li>
            </ul>
            {this.props.children}
        </div>;
    }

    componentDidMount() {
    }
}
// 设置属性默认值
Repos.defaultProps = {
}
// 限制属性类型
Repos.propTypes = {
};
