import React, { Component } from 'react'
import data from '../data/jason.json'
import { Link } from 'react-router-dom'

class CategoryList extends Component {
  render() {
    return (
      <>
        <h1>Jason's Interests</h1>
        <ul>
          {Object.keys(data).map((hobby, index) => {
            return (
              <Link key={index} to={'/' + hobby}>
                <li>{hobby}</li>
              </Link>
            )
          })}
        </ul>
      </>
    )
  }
}

export default CategoryList
