import React from 'react'
import { Row, Col, Menu, Icon, Dropdown } from 'antd'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Url, Fetch, Validator } from '../../common/http'
import MenuTree from './menuTree'
import Avatar from './avatar'
import * as actionCreators from '../../fluxes/frame/action'

const Types = {
  frame: React.PropTypes.object.isRequired,
  action: React.PropTypes.object.isRequired,
  dispatch: React.PropTypes.func.isRequired
}

export default connect(
  state => ({frame: state.frame}),
  dispatch => ({dispatch, action: bindActionCreators(actionCreators, dispatch)})
)(
  React.createClass({
    propTypes: Types,
    childContextTypes: Types,
    getChildContext() {
      return {
        frame: this.props.frame,
        action: this.props.action,
        dispatch: this.props.dispatch
      }
    },
    render() {
      return (
        <div id='frame-main'>
          <section className='first'>
            <Link className='logo' to={'/frame/dashboard'} activeClassName="active"></Link>
            <Avatar />
          </section>
          <section className='second'>
            <div className='side-bar wiserv-ui'>
              <MenuTree />
            </div>
            <div className='main-content'>
              {this.props.children}
            </div>
          </section>
        </div>
      )
    }
  })
)
