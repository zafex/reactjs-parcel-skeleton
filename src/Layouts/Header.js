import React from 'react'

export default class Header extends React.Component {
  render() {
    return (
      <header className="app-header navbar">
        <button className="navbar-toggler sidebar-toggler d-lg-none mr-auto" type="button" data-toggle="sidebar-show">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#/link">
          <span className="navbar-brand-full">Log Viewer</span>
          <span className="navbar-brand-minimized">Log</span>
        </a>
        <button className="navbar-toggler sidebar-toggler d-md-down-none" type="button" data-toggle="sidebar-lg-show">
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item d-md-down-none">
            <a className="nav-link" href="#/link">
              <i className="icon-bell"></i>
              <span className="badge badge-pill badge-danger">0</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/link">
              <span style={{ margin: "0 10px"}}>
                System
              </span>
            </a>
          </li>
        </ul>
      </header>
  	)
  }
}
