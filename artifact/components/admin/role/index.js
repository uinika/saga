import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../../fluxes/admin/role/action'
import Path from './path'
import Filter from './filter'
import Access from './access'
import Table from './table'

function mapStateToProps(state) {
  return {
    state: state.role
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: bindActionCreators(actionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  React.createClass({
    childContextTypes: {
      role: React.PropTypes.object
    },
    getChildContext: function() {
      return {
        role: this.props
      }
    },
    render() {
      return (
        <div id='admin-role'>
          <sction className='path'>
            <Path />
          </sction>
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
