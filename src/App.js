import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header, Footer, Sidebar } from '~/Layouts'
import { Payment, Reconsile, Retrieve } from '~/Pages'

class App extends React.Component {
  state = {
    menuItems: [
      {
        link: '/payment',
        name: 'Payment',
        path: Payment
      },
      {
        link: '/reconsile',
        name: 'Reconsile',
        path: Reconsile
      },
      {
        link: '/retrieve',
        name: 'Retrieve From Bank',
        path: Retrieve
      }
    ]
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Router>
          <div className="app-body">
            <Sidebar items={this.state.menuItems} />
            <main className="main">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">Home</li>
                <li className="breadcrumb-item active">{this.props.pageTitle}</li>
                <li className="breadcrumb-menu d-md-down-none">
                  <div className="btn-group" role="group" aria-label="Button group">
                    <a className="btn" href="#/link">
                      <i className="icon-speech"></i>
                    </a>
                    <a className="btn" href="./">
                      <i className="icon-graph"></i>  Dashboard</a>
                  </div>
                </li>
              </ol>
              <div className="container-fluid">
                <Switch>
                  <Route exact path='/' component={Payment} />
                  {
                    this.state.menuItems.map((item, key) => 
                      <Route key={key} path={item.link} component={item.path} />
                    )
                  }
                </Switch>
              </div>
            </main>
          </div>
        </Router>
        <Footer />
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
