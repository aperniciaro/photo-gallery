import React, { Component } from 'react'
import data from '../data/jason.json'
import { Link } from 'react-router-dom'
import Photo from '../components/Photo.js'

class PhotoList extends Component {
  state = {
    pics: this.props.match.params.catID.photos
  }

  render() {
    return this.state.pics.map((photo, index) => {
      return (
        <Link to={'/picture/' + this.props.picID.photos.title}>
          <Photo
            key={index}
            imageURL={this.props.catID.photos[index].imageURL}
            sourceURL={this.props.catID.photos[index].sourceURL}
          />
        </Link>
      )
    })
  }
}

export default PhotoList
