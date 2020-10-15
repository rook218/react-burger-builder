import React from 'react';
import Aux from '../../../hoc/Auxiliary'

const orderSummary = props => {
	const ingredientsSummary = Object.keys(props.ingredients).map(ingKey => {
		return (
			<li key={ingKey + '_ModalCounter'}>
				<span style={{textTransform: 'capitalize'}}>{ingKey}</span> - x{props.ingredients[ingKey]}
			</li>)
	})

	return (
		<Aux>
			<h3>Your Order</h3>
			<p>A delicious burger with the following ingredients:</p>
			<ul>
				{ingredientsSummary}
			</ul>
			<p>Continue to checkout?</p>
		</Aux>
	)

}

export default orderSummary;