import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const OrderSummary = props => {
	const ingredientsSummary = Object.keys(props.ingredients).map(ingKey => {
		return (
			<li key={ingKey + '_ModalCounter'}>
				<span style={{ textTransform: 'capitalize' }}>{ingKey}</span> - x
				{props.ingredients[ingKey]}
			</li>
		);
	});
	return (
		<Aux>
			<h3>Your Order</h3>
			<p>A delicious burger with the following ingredients:</p>
			<ul>{ingredientsSummary}</ul>
			<p>Total Price: ${props.totalPrice.toFixed(2)}</p>
			<p>Continue to checkout?</p>
			<Button btnType="Danger" clicked={props.purchaseCanceled}>
				Cancel
			</Button>
			<Button btnType="Success" clicked={props.purchaseContinued}>
				Continue
			</Button>
		</Aux>
	);
};

export default OrderSummary;
