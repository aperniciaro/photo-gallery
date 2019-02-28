import React, { Component } from 'react'
import data from '../data/jason.json'
import { Link } from 'react-router-dom'
import Photo from '../components/Photo.js'

class PhotoList extends Component {
  state = {
    photos: [],
    category: this.props.categoryName
  }

  render() {
    return (
      <li>
        <Link to={'/category/' + this.props.categoryName}>
          <h2>{this.state.category}</h2>
          <PhotoDetail />
        </Link>
      </li>
    )
  }
}

export default PhotoList
