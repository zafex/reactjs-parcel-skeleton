import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

class Sidebar extends React.Component {

  render() {
    return (
      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">
            {
              this.props.items.map((item, index) => 
                <li className="nav-item" key={index}>
                  <NavLink to={item.link} className="nav-link"><i className="nav-icon icon-speedometer"></i> {item.name}</NavLink>
                </li>
              )
            }
          </ul>
        </nav>
        <button className="sidebar-minimizer brand-minimizer" type="button"></button>
      </div>
  	)
  }
}

Sidebar.propTypes = {
  items: PropTypes.array.isRequired
}

export default Sidebar