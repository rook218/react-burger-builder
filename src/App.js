// Note: this application was created from a tutorial on uDemy. I always went ahead of the instructor
// to figure things out/bugfix on my own, but reverted to the instructors' solutions afterward for compatibility
// with the rest of the course content.

import React from "react";
import {
  Switch,
  Route,
  Link
} from "react-router-dom";


import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout'
import Orders from './containers/Orders/Orders'

function App() {
  return (
		<div>
			<Layout>
				<Route path="/" exact component={BurgerBuilder} />
				<Route path="/checkout" component={Checkout} />
				<Route path="/orders" component={Orders} />
			</Layout>
		</div>
	);
}

export default App;
