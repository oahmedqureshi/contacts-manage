import * as React from 'react'
import {
	Button,
	Nav,
	Navbar,
  NavItem,
	NavLink
 } from 'reactstrap';

import './navigationBar.css'

const NavigationBar = () => {
	return (
		<Navbar className="bg-light brown">
			<Nav >
				<NavItem >
					<NavLink href="#">Home</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#">About</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#">Contacts</NavLink>
				</NavItem>
			</Nav>
			<Nav>
				<NavItem className="float-right">
					<Button color="primary">Login</Button>
				</NavItem>
			</Nav>
		</Navbar>
	)
}

export default NavigationBar;
