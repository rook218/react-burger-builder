import React, {Component} from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.show !== this.props.show
	}
	render() {
		const activeClasses = `${classes.Modal} ${this.props.show ? classes.ModalShow : classes.ModalHide}`
		return (
			<Aux>
				<Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
				<div className={activeClasses}>
					{this.props.children}
				</div>
			</Aux>
		)
	}
}
export default Modal;