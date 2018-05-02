import React from 'react'; // eslint-disable-line no-unused-vars
import { Redirect } from 'react-router-dom'; // eslint-disable-line no-unused-vars
import { 
	Container, 
	Card, 
	Col, 
	Button, 
	Form, 
	FormGroup, 
	Label, 
	Input, 
	FormText, 
	CardBody, 
	CardTitle, 
	CardDeck 
} from 'reactstrap'; 
import NavBar from './NavBar'; // eslint-disable-line no-unused-vars

class Users extends React.Component{

	constructor(props) {
		super(props);

	}

	render() {
		return (
			<Container fluid style={{maxWidth:'900px', margin: '5% auto'}}>
				<NavBar />
			</Container>
		);
	}
}

export default Users;