'use strict';

import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';

import {connect} from 'react-redux'

import { fetchPostsIfNeeded } from '../../../actions/action.js'

import SearchBar from '../../../component/WordList/SearchBar.js'

/*搜索框组件*/
class WordList extends React.Component {

    constructor(props) {
        super(props);

        // 设置 state 初始属性
        this.state = {};

    }
    render() {
        return <div >
            <SearchBar></SearchBar>
        </div>;
    }

    componentDidMount() {
        this.props.fetchPostsIfNeeded('reactjs')
    }
}
// 设置属性默认值
WordList.defaultProps = {
}
// 限制属性类型
WordList.propTypes = {
};
WordList.contextTypes = {
    store:React.PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const WordListPage = connect(
  mapStateToProps,
  {
      fetchPostsIfNeeded
  }
)(WordList)

export default WordListPage
