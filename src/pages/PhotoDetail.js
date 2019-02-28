import React, { Component } from 'react'
import data from '../data/jason.json'
import Photo from '../components/Photo.js'

class PhotoDetail extends Component {
  render() {
    return (
      <>
        <Photo image={this.props.image} />
      </>
    )
  }
}

export default PhotoDetail
