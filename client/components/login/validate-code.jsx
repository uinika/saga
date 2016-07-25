import React from 'react'

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
    container: React.PropTypes.object
  },
  componentDidMount() {
    this.context.container.getValidateCode()
  },
  render() {
    return (
      <span>
        <span className='image' onClick={this.context.container.getValidateCode}>
          <img src={this.context.container.login.validatecode} height='33' width='88'  />
        </span>
        <a className='switcher' onClick={this.context.container.getValidateCode}>换一张</a>
      </span>
    )
  }
})
