import React from 'react'; // eslint-disable-line no-unused-vars
import { Container, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'; // eslint-disable-line no-unused-vars
import { Route, Link } from 'react-router-dom';
import Users from './Users';

export default class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loginEmail: '',
			loginPassword: ''
		};

		this.updateInput = this.updateInput.bind(this);

	}

	validateForm() {
		return this.state.email.length > 0 && this.state.password.length > 0;
	}

	updateInput (e) {
		this.setState({
			[e.target.id]: e.target.value
		});
	}

	handleLogin (e) {
		e.preventDefault();
	}

	render() {
		return (
			<div style={{maxWidth: '600px', margin: '20% auto 0 auto'}}>
				<Container fluid>
					<h2>CRM</h2>
					<Form>
						<FormGroup row>
							<Label for="loginEmail" sm={2}>Email</Label>
							<Col sm={10}>
								<Input onChange={this.updateInput} value={this.state.loginEmail} type="email" name="email" id="loginEmail" />
							</Col>
						</FormGroup>
						<FormGroup row>
							<Label for="loginPassword" sm={2}>Password</Label>
							<Col sm={10}>
								<Input onChange={this.updateInput} value={this.state.loginPassword} type="password" name="password" id="loginPassword"  />
							</Col>
						</FormGroup>
						<FormGroup row>
							<Col sm={12}>
								<Link to='/users'><Button block>Login</Button></Link>
							</Col>
						</FormGroup>
					</Form>
				</Container>
				<Route path='/users' component={Users} />
			</div>
		);
	}
}