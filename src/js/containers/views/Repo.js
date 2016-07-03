'use strict';

import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';

export default class Repo extends React.Component {

    constructor(props) {
        super(props);

        // 设置 state 初始属性
        this.state = {};

    }
    render() {
        return <div >
            <h2>{this.props.params.repoName}</h2>
            <h3>{this.props.params.userName}</h3>
        </div>;
    }

    componentDidMount() {
    }
}
// 设置属性默认值
Repo.defaultProps = {
}
// 限制属性类型
Repo.propTypes = {
};
