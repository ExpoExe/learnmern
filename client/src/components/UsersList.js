import React from 'react'; // eslint-disable-line no-unused-vars
import Loading from './Loading';

class UsersList extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			users:[],
			isLoading: true
		};
	}

	componentDidMount(){

		fetch('/users')
			.then(res => res.json())
			.then(users => this.setState({
				users: users, 
				isLoading: false
			}));
		
	}

	render() {
		return (
			<div>
				{this.state.isLoading === true
					?  <Loading />
					:  <div>
						{this.state.users.map(user => 
							<li key={user._id}>User is named: {user.firstName} {user.lastName}.</li>
						)}
					</div>}

			</div>
		);
	}
}

export default UsersList;
