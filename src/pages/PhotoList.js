import React, { Component } from 'react'
import data from '../data/jason.json'
import { Link } from 'react-router-dom'
import Photo from '../components/Photo.js'

class PhotoList extends Component {
  state = {
    pics: this.props.match.params.id.photos
  }

  render() {
    return this.state.pics.map((photo, index) => {
      return (
        <Link to={'/picture/' + this.props.id.photos.title}>
          <Photo
            key={index}
            imageURL={this.props.id.photos[index].imageURL}
            sourceURL={this.props.id.photos[index].sourceURL}
          />
        </Link>
      )
    })
  }
}

export default PhotoList
