import React, { Component } from 'react'
import data from '../data/jason.json'
import { Link } from 'react-router-dom'

class PhotoList extends Component {
  render() {
    return (
      <>
        <h1>{data[this.props.match.params.hobby].title}</h1>
        {data[this.props.match.params.hobby].photos.map((pic, index) => {
          return (
            <Link to={'/' + data[this.props.match.params.hobby] + index}>
              <img
                src={data[this.props.match.params.hobby].photos[0].imageURL}
                alt="hobby picture"
              />
            </Link>
          )
        })}
      </>
    )
  }
}

export default PhotoList
