import React from 'react'
import { connect } from 'react-redux'

import NavLink from '../../../component/common/NavLink.js'

class Tabs extends React.Component {

    constructor(props) {
        super(props);

        // 设置 state 初始属性
        this.state = {};

    }
    render() {
        return <div>
            <ul>
                <li><NavLink to="/" onlyActiveOnIndex={true}>home page</NavLink></li>
                <li><NavLink to="/secondview" >to secondview</NavLink></li>
                <li><NavLink to="/thirdlyview" >to thirdlyview</NavLink></li>
                <li><NavLink to="/repos" >to repos</NavLink></li>
                <li><NavLink to="/tabs" >tabs</NavLink></li>
            </ul>
            {this.props.children}
        </div>;
    }

    componentDidMount() {
    }
}
// 设置属性默认值
Tabs.defaultProps = {
}
// 限制属性类型
Tabs.propTypes = {
};
Tabs.contextTypes = {
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



const TabsContainer = connect()(Tabs)

export default TabsContainer
