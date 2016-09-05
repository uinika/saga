import React from 'react'

export default React.createClass({
  contextTypes: {
    login: React.PropTypes.object.isRequired,
    action: React.PropTypes.object.isRequired
  },
  componentDidMount() {
    this.context.action.validateCode()
  },
  render() {
    return (
      <span>
        <span className='image' onClick={this.context.action.validateCode}>
          <img src={this.context.login.validatecode} height='33' width='88'  />
        </span>
        <a className='switcher' onClick={this.context.action.validateCode}>换一张</a>
      </span>
    )
  }
})
