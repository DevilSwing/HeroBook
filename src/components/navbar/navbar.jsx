import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
	render() {
		return(
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
			  <a className="navbar-brand" href="#">{this.props.appName}</a>

			  <div className="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul className="navbar-nav mr-auto">
			      <li className="nav-item active">
			        <Link to="/addHero" className="nav-link">AddHero</Link>
			      </li>
			      <li className="nav-item">
			        <link to="/settings" className="nav-link">Settings</link>
			      </li>
			      <li className="nav-item">
			        <link to="/heroPics" className="nav-link">HeroPics</link>
			      </li>
			    </ul>
			  </div>
			</nav>
			)
	}
}