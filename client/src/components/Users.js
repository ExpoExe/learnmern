import React from 'react'; // eslint-disable-line no-unused-vars
import { Redirect } from 'react-router-dom';
import { Container, Card, Col, Button, Form, FormGroup, Label, Input, FormText, CardBody, CardTitle, CardDeck } from 'reactstrap'; // eslint-disable-line no-unused-vars
import UsersCreate from './UsersCreate';
import UsersList from './UsersList';
import UsersDelete from './UsersDelete';
import UsersUpdate from './UsersUpdate';


class Users extends React.Component{

	constructor(props) {
		super(props);

		this.state = {
			loginEmail: '',
			loginPassword: '',
			loggedIn: true
		};

		this.updateInput = this.updateInput.bind(this);
		this.handleLogout = this.handleLogout.bind(this);

	}

	updateInput (e) {
		this.setState({
			[e.target.id]: e.target.value
		});
	}

	handleLogout (e) {
		e.preventDefault();
		this.setState({
			loggedIn: false
		});
	}

	render() {
		if (!this.state.loggedIn){
			return <Redirect to='/' />;
		} else {
			return (
				<Container fluid style={{margin: '5% 0'}}>
					<Button onClick={this.handleLogout} size='2'>Logout</Button>
					<div row='true'>
						<Col sm={12}>
							<CardDeck>
								<Card>
									<CardBody>
										<CardTitle>User List:</CardTitle>
										<UsersList />
									</CardBody>
								</Card>
								<Card>
									<CardBody>
										<CardTitle>User List:</CardTitle>
										<UsersList />
									</CardBody>
								</Card>
								<Card>
									<CardBody>
										<CardTitle>User List:</CardTitle>
										<UsersList />
									</CardBody>
								</Card>
								<Card>
									<CardBody>
										<CardTitle>User List:</CardTitle>
										<UsersList />
									</CardBody>
								</Card>
							</CardDeck>
						</Col>
					</div>
				</Container>
			);
		}	
	}ß
}

export default Users;