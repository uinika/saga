import React from 'react'
import {Row, Col, Menu, Icon, Dropdown} from 'antd'
import {Link} from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Url, Fetch, Validator } from '../../common/http'
import MenuTree from './menu-tree'
import Avatar from './avatar'
import * as actionCreators from '../../fluxes/frame/action'

function mapStateToProps(state) {
  return {
    frame: state.frame
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(
  React.createClass({
    childContextTypes: {
      container: React.PropTypes.object
    },
    getChildContext: function() {
      return {
        container: this.props
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
