import React from 'react';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import ToggleButton from '../SideDrawer/ToggleButton/ToggleButton'

import classes from './Toolbar.module.css';

const toolbar = props => {
	return (
		<header className={classes.Toolbar}>
				<ToggleButton toggleDrawer={props.toggleDrawer} />
				<div className={classes.Logo}>
					<Logo/>
				</div>
				<nav className={classes.DesktopOnly}>
					<NavigationItems/>
				</nav>
		</header>
	)
}

export default toolbar;