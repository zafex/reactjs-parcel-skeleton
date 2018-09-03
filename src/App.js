import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        DOR
      </div>
    )
  }
}

const mapStateToProps = state => ({
  pageTitle: state.common.pageTitle
})

const mapDispatchToProps = dispatch => ({
  onLoad: (payload) =>
    dispatch({
      type: process.env.PAGE_LOAD,
      payload
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
