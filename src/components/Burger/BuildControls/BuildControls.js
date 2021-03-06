import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
	{label: 'Salad', type: 'salad'},
	{label: 'Bacon', type: 'bacon'},
	{label: 'Cheese', type: 'cheese'},
	{label: 'Meat', type: 'meat'},
]

const buildControls = props => {
	return (
		<div className={classes.BuildControls}>
			<p className={classes.Price}>Current Price: {props.price}</p>
			{controls.map((ctrl) => {
				return <BuildControl 
					key={ctrl.label} 
					label={ctrl.label}
					type={ctrl.type}
					ingredientAdded={() => props.ingredientAdded(ctrl.type)}
					ingredientRemoved={() => props.ingredientRemoved(ctrl.type)}
					disabled={props.disabledInfo[ctrl.type]} />
			})}
			<button 
				className={classes.OrderButton} 
				disabled={!props.purchaseable}
				onClick={props.ordered}>Order Now</button>
		</div>
	)
};

export default buildControls