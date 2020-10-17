import React from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

const modal = props => {
	const activeClasses = `${classes.Modal} ${props.show ? classes.ModalShow : classes.ModalHide}`
	return(
		<Aux>
			<Backdrop show={props.show} clicked={props.modalClosed}/>
			<div className={activeClasses}>
				{props.children}
			</div>
		</Aux>
	)
}

export default modal;