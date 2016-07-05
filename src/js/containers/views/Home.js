'use strict';

import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';

export default class Home extends React.Component {

    constructor(props) {
        super(props);

        // 设置 state 初始属性
        this.state = {};

    }
    render() {
        return <div >Home Page
        </div>;
    }

    componentDidMount() {
    }
}
// 设置属性默认值
Home.defaultProps = {
}
// 限制属性类型
Home.propTypes = {
};
