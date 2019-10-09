import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class TestButton extends Component {
  static propTypes = {
    size: PropTypes.string,
    color: PropTypes.string
  }

  render() {
    const {
      size,
      color
    } = this.props

    return (
      <button className={`button button-${size.toLowerCase()}`} style={{ backgroundColor: color.toLowerCase() }}>This is a {size} button.</button>
    )
  }
}
