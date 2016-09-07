import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../../fluxes/admin/user/action'
import Path from './path'
import Filter from './filter'
import Access from './access'
import Table from './table'

const Types = {
  user: React.PropTypes.object.isRequired,
  action: React.PropTypes.object.isRequired,
  dispatch: React.PropTypes.func.isRequired
}

export default connect(
  state => ({user: state.user}),
  dispatch => ({dispatch, action: bindActionCreators(actionCreators, dispatch)})
)(
  React.createClass({
    propTypes: Types,
    childContextTypes: Types,
    getChildContext() {
      return {
        user: this.props.user,
        action: this.props.action,
        dispatch: this.props.dispatch
      }
    },
    render() {
      return (
        <div id='admin-user'>
          <section className='path '>
            <Path />
          </section>
          <section className='filter'>
            <Filter />
          </section>
          <section className='access'>
            <Access />
          </section>
          <section className='table'>
            <Table />
          </section>
        </div>
      )
    }
  })
)
