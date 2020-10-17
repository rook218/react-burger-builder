import React from 'react';
import classes from './ToggleButton.module.css';

const toggleButton = props => {
	return(
		<div className={classes.ToggleButton} onClick={props.toggleDrawer}>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
}

export default toggleButton;