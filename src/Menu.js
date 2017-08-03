import React from 'react';
import { Link } from 'react-router';

const Menu = () =>{
	return(
		<ul className="nav-menu">
			<li><Link to="/home" activeClassName="active">Simple Form</Link></li>
			<li><Link to="/validationform" activeClassName="active">Form with Validation</Link></li>
		</ul>
	);
}

export default Menu;