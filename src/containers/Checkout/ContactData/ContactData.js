import axios from '../../../axios-orders';

import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input'

import classes from './ContactData.module.css';

class ContactData extends Component {
	state = {
		orderForm: {
			name: null,
			email: null,
			address: {
				street: null,
				postalCode: null,
			},
		},
		loading: false,
	};

	orderHandler = e => {
		e.preventDefault();
		this.setState({ loading: true });
		const order = {
			ingredients: this.props.ingredients,
			price: this.props.price,
			customer: {
				name: 'Brian',
				address: {
					street: '123 Main Street',
					zipCode: '12345',
					country: 'USA',
				},
				email: 'brian@brian.com',
			},
			deliveryMethod: 'test',
		};

		axios
			.post('/orders.json', order)
			.then(res => {
				this.setState({ loading: false });
				this.props.history.push('/')
			})
			.catch(err => this.setState({ loading: false }));
	};

	render() {
		let form = (
			<form>
				<Input inputtype="input" type="text" name="name" label="Your Name" placeholder="First and Last Name" />
				<Input inputtype="input" type="email" name="email" label="Your Email" placeholder="Email" />
				<Input inputtype="input" type="text" name="street" label="Your Street" placeholder="Street Name" />
				<Input inputtype="input" type="text" name="zip" label="Your ZIP Code" placeholder="ZIP or Postal Code" />
				<Button btnType="Success" clicked={this.orderHandler}>
					ORDER
				</Button>
			</form>
		);
		if (this.state.loading) {
			form = <Spinner />
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