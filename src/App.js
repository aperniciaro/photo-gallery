import React, { Component } from 'react'
import CategoryList from './pages/CategoryList'
import PhotoList from './pages/PhotoList'
import PhotoDetail from './pages/PhotoDetail'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={CategoryList} />
            <Route exact path="/category/:catID" component={PhotoList} />
            <Route exact path="/picture/:picID" component={PhotoDetail} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
