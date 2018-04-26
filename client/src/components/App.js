import React from 'react'; // eslint-disable-line no-unused-vars
import Login from './Login';
import Users from './Users';

import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';

class App extends React.Component {

	render() {
		return (
			<Router>
				<div>
					<Route exact path='/' component={Login} />
					<Route path='/users' component={Users} />
				</div>
			</Router>
		);
	}
}

export default App;
