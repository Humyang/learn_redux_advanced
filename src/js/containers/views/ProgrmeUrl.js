'use strict';

import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router'
import {setJumpUrl} from '../../actions/action.js'

class ProgrameUrl extends React.Component {

    constructor(props) {
        super(props);

        // 设置 state 初始属性
        this.state = {};

    }
    render() {
        // 修改 state 的 url 值

        const {setUrl,jumpUrl} = this.props;

        return <div >
                    <ul>
                        <li> <button onClick={ ()=>{setUrl('/secondview')} }>set url to secondview</button> </li>
                        <li><button onClick={ ()=>{setUrl('/thirdlyview')} }>set url to thirdlyview</button></li>
                        <li><button onClick={ ()=>{jumpUrl()} }>jump from state url</button></li>
                    </ul>
                </div>;
    }

    componentDidMount() {
    }
}

// 限制属性类型
ProgrameUrl.propTypes = {
    setUrl:React.PropTypes.func,
    jumpUrl:React.PropTypes.func
};

import { connect } from 'react-redux'


const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter,
    jumpUrl:()=>{
            browserHistory.push(state.setJumpUrl.value);
    }
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setUrl:(url)=>{
        dispatch(setJumpUrl(url))
    }
  }
}

const ProgrameJumpUrl = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProgrameUrl)

export default ProgrameJumpUrl
