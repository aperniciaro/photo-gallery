import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Category extends Component {
  render() {
    return (
      <li>
        <Link to={'/category/' + this.props.category}>
          <h2>{this.props.category}</h2>
        </Link>
      </li>
    )
  }
}

export default Category
