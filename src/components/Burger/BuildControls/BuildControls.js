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
		<div>
			{controls.map(ctrl => {
				return <BuildControl 
					key={ctrl.label} 
					label={ctrl.label}
					type={ctrl.type}
					ingredientAdded={props.ingredientAdded}
					ingredientRemoved={props.ingredientRemoved} />
			})}
		</div>
	)
};

export default buildControls