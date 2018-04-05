import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import logo from './logo.svg';
import './App.css';

class App extends Component {
	state = {users:[]};

	componentDidMount(){
		fetch('/users')
			.then(res => res.json())
			.then(users => this.setState({users}));
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload this page.
					<h3>These are the users:</h3>
					{this.state.users.map(user => 
						<li key={user._id}>User is named: {user.firstName} {user.lastName}.</li>
					)}
				</p>
			</div>
		);
	}
}

export default App;
