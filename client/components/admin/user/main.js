import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../../fluxes/admin/user'
import Path from './path'
import Filter from './filter'
import Access from './access'
import Table from './table'
import CreateModal from './modal/create'
import UpdateModal from './modal/update'
import DetailModal from './modal/detail'
import AuthModal from './modal/auth'

function mapStateToProps(state) {
  return {
    user: state.user
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
        <div id='admin-user' className='wiserv-ui'>
          <sction className='path '>
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
          <CreateModal />
          <CreateModal />
          <DetailModal />
          <AuthModal />
        </div>
      );
    }
  })
)
