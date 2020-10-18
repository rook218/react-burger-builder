// Note: this application was created from a tutorial on uDemy. I always went ahead of the instructor
// to figure things out/bugfix on my own, but reverted to the instructors' solutions afterward for compatibility
// with the rest of the course content.

import React from "react";
import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

function App() {
  return (
		<div>
			<Layout>
				<BurgerBuilder>

				</BurgerBuilder>
			</Layout>
		</div>
	);
}

export default App;
