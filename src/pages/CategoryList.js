import React, { Component } from 'react'
import data from '../data/jason.json'
import PhotoList from './PhotoList'
import Interest from '../components/Interest'

class CategoryList extends Component {
  state = { categories: Object.keys(data) }

  render() {
    return (
      <>
        <h1>Jason's Interests</h1>
        <ul>
          {this.state.categories.map((interest, index) => {
            return (
              <Interest
                key={index}
                categoryName={this.state.categories[index]}
              />
            )
          })}
        </ul>
      </>
    )
  }
}

export default CategoryList
