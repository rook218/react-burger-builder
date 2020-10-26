import React from 'react';
import classes from './NavigationItems.module.css'

import NavigatonItem from './NavigationItem/NavigationItem'

const navigationItems = props => {
	return (
		<ul className={classes.NavigationItems}>
			<NavigatonItem link="/">Burger Builder</NavigatonItem>
			<NavigatonItem link="/orders" >Orders</NavigatonItem>
		</ul>
	)
}

export default navigationItems;