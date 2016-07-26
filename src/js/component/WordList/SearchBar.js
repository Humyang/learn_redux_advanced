'use strict';

import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        // 设置 state 初始属性
        this.state = {};

    }
    render() {
        return <div ></div>;
    }

    componentDidMount() {
    }
}
// 设置属性默认值
SearchBar.defaultProps = {
}
// 限制属性类型
SearchBar.propTypes = {
};
SearchBar.contextTypes = {
    store:React.PropTypes.object.isRequired
};

export default SearchBar
