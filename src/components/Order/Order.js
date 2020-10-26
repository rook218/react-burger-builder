import React from 'react';
import classes from './Order.module.css';

const order = props => {
	const ingredientList = Object.keys(props.ingredients)
		.map(ingredient => {
			return (
				<span style={{ textAlign: 'center', border: '1px solid #ccc', padding: '8px', margin: '10px' }}>
					{ingredient}: {props.ingredients[ingredient]}
				</span>
			);
		})

	return (
		<div className={classes.Order}>
			<p>Ingredients: {ingredientList}</p>
			<p>
				Price: <strong>USD ${parseFloat(props.price).toFixed(2)}</strong>
			</p>
		</div>
	);
};

export default order;
