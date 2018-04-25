import React from 'react'; // eslint-disable-line no-unused-vars
import Login from './Login';
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
					<Login/>
				</div>
			</Router>
		);
	}
}

export default App;
