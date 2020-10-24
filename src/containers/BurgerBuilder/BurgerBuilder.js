import React, { Component } from 'react';
import axios from '../../axios-orders';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.25,
	meat: 2,
	bacon: 0.5,
};

class BurgerBuilder extends Component {
	state = {
		ingredients: null,
		totalPrice: 4,
		purchaseable: false,
		purchasing: false,
		loading: false,
	};

	componentDidMount() {
		axios.get('https://react-my-burger-fb688.firebaseio.com/ingredients.json')
			.then(response => {
				this.setState({ingredients: response.data})
			});
	}

	updatePurchaseState(ingredients) {
		const sum = Object.keys(ingredients)
			.map(igKey => {
				return ingredients[igKey];
			})
			.reduce((sum, el) => {
				return sum + el;
			}, 0);
		this.setState({ purchaseable: sum > 0 });
	}

	addIngredientHandler = type => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngredients = { ...this.state.ingredients };
		updatedIngredients[type] = updatedCount;

		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;
		this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
		this.updatePurchaseState(updatedIngredients);
	};

	removeIngredientHandler = type => {
		const oldCount = this.state.ingredients[type];
		if (oldCount !== 0) {
			const updatedCount = oldCount - 1;
			const updatedIngredients = { ...this.state.ingredients };
			updatedIngredients[type] = updatedCount;

			const priceDeduction = INGREDIENT_PRICES[type];
			const oldPrice = this.state.totalPrice;
			const newPrice = oldPrice - priceDeduction;
			this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
			this.updatePurchaseState(updatedIngredients);
		}
	};

	purchaseHandler = () => {
		this.setState({ purchasing: true });
	};

	purchaseCancelHandler = () => {
		this.setState({ purchasing: false });
	};

	purchaseContinueHandler = () => {
		const queryParams = [];
		for (let i in this.state.ingredients) {
			queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent( this.state.ingredients[i] ));
		}
		queryParams.push('totalPrice=' + this.state.totalPrice);
		const queryString = '?' + queryParams.join('&');
		this.props.history.push({
			pathname: '/checkout',
			search: queryString,
		})


	};

	render() {
		let burger = <Spinner />
		let orderSummary = <Spinner />
		let buildControls = <Spinner />

		if (this.state.ingredients) {
			burger = <Burger ingredients={this.state.ingredients} />;
			let disabledInfo = {
				...this.state.ingredients,
			};
			for (let key in disabledInfo) {
				disabledInfo[key] = disabledInfo[key] <= 0;
			}
			orderSummary = (
				<OrderSummary
					ingredients={this.state.ingredients}
					totalPrice={this.state.totalPrice}
					purchaseCanceled={this.purchaseCancelHandler}
					purchaseContinued={this.purchaseContinueHandler}
				/>
			);
			buildControls = (<BuildControls
				price={this.state.totalPrice.toFixed(2)}
				purchaseable={this.state.purchaseable}
				ingredientAdded={this.addIngredientHandler}
				ingredientRemoved={this.removeIngredientHandler}
				disabledInfo={disabledInfo}
				ordered={this.purchaseHandler}
			/>);
		}
		if (this.state.loading) {
			orderSummary = <Spinner/>
		}
		return (
			<Aux>
				<Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
					{orderSummary}
				</Modal>
				{burger}
				{buildControls}
			</Aux>
		);
	}
}

export default withErrorHandler(BurgerBuilder, axios);