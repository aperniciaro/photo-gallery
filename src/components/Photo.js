import React, { Component } from 'react'
import data from '../data/jason.json'

class Photo extends Component {
  render() {
    return <img src={this.props.imageURL} alt={this.props.sourceURL} />
  }
}

export default Photo
