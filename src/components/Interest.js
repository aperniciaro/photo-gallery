import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Interest extends Component {
  render() {
    return (
      <li>
        <Link to={'/category/' + this.props.categoryName}>
          <h2>{this.props.categoryName}</h2>
        </Link>
      </li>
    )
  }
}

export default Interest
