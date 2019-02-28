import React, { Component } from 'react'
import CategoryList from './components/CategoryList'
import PhotoList from './components/PhotoList'
import PhotoDetail from './components/PhotoDetail'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={CategoryList} />
            <Route exact path="/photos" component={PhotoList} />
            <Route exact path="/photos/:id" component={PhotoDetail} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
