import React from 'react';
import classes from './Modal.module.css'

const modal = props => {
	const activeClasses = `${classes.Modal} ${props.show ? classes.ModalShow : classes.ModalHide}`
	return(
		<div className={activeClasses}>
			{props.children}
		</div>
	)
}

export default modal;