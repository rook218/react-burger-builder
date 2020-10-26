import React, {Component} from 'react';

import Order from '../../components/Order/Order'
import axios from '../../axios-orders'

class Orders extends Component {
	
	state = {
		orders: [],
	}
	
	componentDidMount() {
		axios.get('/orders.json')
			.then(res => {

				let orders = Object.keys(res.data).map((key) => {
					return {
						...res.data[key],
						id: key,
					};
				});
				console.log(orders)
				this.setState({orders: orders});

			})
			.catch(res => this.history.push('/'));
	}

	render() {
		let orders = <p>No orders returned</p>;
		if (this.state.orders && this.state.orders.length > 0) {
			let ordersArr = [...this.state.orders];
			return ordersArr.map(order => {
				return <Order price={order.price} ingredients={order.ingredients} key={order.id} />
			})
		}
		return (
			<div>
				{orders}
			</div>
		)
	}
}

export default Orders;