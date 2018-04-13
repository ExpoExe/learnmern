import React from 'react'; // eslint-disable-line no-unused-vars
import Users from './Users';
import Other from './Other';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

class App extends React.Component {

	render() {
		return (
			<Router>
				<div>
					<li><Link to='/users'>See Users</Link></li>
					<li><Link to='/other'>Other</Link></li>

					<Route path='/users' component={Users} />
					<Route path='/other' component={Other} />
				</div>
			</Router>
		);
	}
}

export default App;
