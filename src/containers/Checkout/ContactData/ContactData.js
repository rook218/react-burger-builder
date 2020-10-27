import axios from '../../../axios-orders';

import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

import classes from './ContactData.module.css';

class ContactData extends Component {
	state = {
		orderForm: {
			name: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Your Name',
				},
				value: '',
				validation: {
					required: true,
				},
				valid: false,
				touched: false,
			},

			email: {
				elementType: 'input',
				elementConfig: {
					type: 'email',
					placeholder: 'Email',
				},
				value: '',
				validation: {
					required: true,
				},
				valid: false,
				touched: false,
			},

			street: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Street number and name',
				},
				value: '',
				validation: {
					required: true,
				},
				valid: false,
				touched: false,
			},

			postalCode: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'ZIP Code',
				},
				value: '',
				validation: {
					required: true,
					minLength: 5,
					maxLength: 10,
				},
				valid: false,
				touched: false,
			},
			country: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Country',
				},
				value: '',
				validation: {
					required: true,
				},
				valid: false,
				touched: false,
			},
			deliveryMethod: {
				elementType: 'select',
				elementConfig: {
					options: [
						{ value: 'fastest', displayValue: 'Fastest' },
						{ value: 'cheapest', displayValue: 'Cheapest' },
					],
				},
				value: '',
				valid: true,
				touched: false,
			},
		},
		loading: false,
		formIsValid: false,
	};

	checkValidity(value, rules) {
		let isValid = true;
		if (rules) {
			if (rules.required) {
				isValid = value.trim().length !== 0 && isValid;
			}
			if (rules.minLength) {
				isValid = value.trim().length >= rules.minLength && isValid;
			}
			if (rules.maxLength) {
				isValid = value.trim().length <= rules.maxLength && isValid;
			}

		}
		return isValid;
	}

	orderHandler = e => {
		e.preventDefault();
		this.setState({ loading: true });
		const formData = {};
		for (let formElementIdentifier in this.state.orderForm) {
			formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
		}
		const order = {
			ingredients: this.props.ingredients,
			price: this.props.price,
			orderData: formData,
		};

		axios
			.post('/orders.json', order)
			.then(res => {
				this.setState({ loading: false });
				this.props.history.push('/');
			})
			.catch(err => this.setState({ loading: false }));
	};

	inputChangedHandler = (event, inputIdentifier) => {
		const updatedOrderForm = {
			...this.state.orderForm,
		};
		const updatedFormElement = { 
			...updatedOrderForm[inputIdentifier] 
		};
		updatedFormElement.value = event.target.value;
		updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
		updatedFormElement.touched = true;
		updatedOrderForm[inputIdentifier] = updatedFormElement;

		let formIsValid = true;
		for (let inputIdentifier in updatedOrderForm) {
			formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
		}

		console.log(formIsValid)
		this.setState({
			orderForm: updatedOrderForm,
			formIsValid: formIsValid,
		})
	};

	render() {
		let orderForm = { ...this.state.orderForm };
		let inputs = Object.keys(orderForm).map(key => {
			return (
				<Input
					key={'input_' + key}
					id={key}
					elementType={orderForm[key].elementType}
					elementConfig={orderForm[key].elementConfig}
					value={orderForm[key].value}
					invalid={!orderForm[key].valid}
					shouldValidate={orderForm[key].validation}
					touched={orderForm[key].touched}
					changed={e => this.inputChangedHandler(e, key)}
				/>
			);
		});
		let form = (
			<form onSubmit={this.orderHandler}>
				{inputs}
				<Button 
					disabled={!this.state.formIsValid} 
					btnType="Success"
				>
					ORDER
				</Button>
			</form>
		);
		if (this.state.loading) {
			form = <Spinner />;
		}

		return (
			<div className={classes.ContactData}>
				<h4>Enter your contact data</h4>
				{form}
			</div>
		);
	}
}

export default ContactData;
