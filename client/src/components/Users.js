import React from 'react'; // eslint-disable-line no-unused-vars
import UsersCreate from './UsersCreate';
import UsersList from './UsersList';
import UsersDelete from './UsersDelete';
import UsersUpdate from './UsersUpdate';

class Users extends React.Component{

	render() {
		return (
			<div className='card'>
				<UsersList />
			</div>
		);
	}	
}

export default Users;