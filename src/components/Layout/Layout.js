import React from 'react';
import Aux from '../../hoc/Auxiliary';

import Toolbar from './Toolbar/Toolbar'
import SideDrawer from './SideDrawer/SideDrawer'

const layout = (props)  => {
	return(
		<Aux>
			<div>
				<Toolbar>

				</Toolbar>
				<SideDrawer>

				</SideDrawer>
			</div>
			<main>
				{props.children}
			</main>
		</Aux>
	)
}

export default layout;