import React from 'react';
import classes from './Input.module.css';

const input = props => {

	let inputElement = null;

	const inputClasses = [classes.InputElement]
	if (props.invalid && props.shouldValidate && props.touched) {
		inputClasses.push(classes.Invalid);
	}

	switch (props.elementType) {
		case 'input':
			inputElement = (
				<input
					{...props.elementConfig}
					className={inputClasses.join(' ')}
					value={props.value}
					onChange={props.changed}
				/>
			);
			break;
		case 'textarea':
			inputElement = (
				<textarea
					{...props.elementConfig}
					className={inputClasses.join(' ')}
					value={props.value}
					onChange={props.changed}
				/>
			);
			break;
		case 'select':
			inputElement = (
				<select
					className={inputClasses.join(' ')}
					{...props.elementConfig}
					value={props.value}
					onChange={props.changed}
				>
					{props.elementConfig.options.map(opt => {
						return <option key={opt.value} value={opt.value}>{opt.displayValue}</option>;
					})}
				</select>
			);
			break;
		default:
			inputElement = (
				<input
					{...props.elementConfig}
					className={inputClasses.join(' ')}
					value={props.value}
					onChange={props.changed}
				/>
			);
	}

	return (
		<div className={classes.Input}>
			<label htmlFor={props.name}>{props.label}</label>
			{inputElement}
		</div>
	);
};

export default input;
