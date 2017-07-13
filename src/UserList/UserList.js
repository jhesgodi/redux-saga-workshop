import React from 'react';
import { connect } from 'react-redux';
import UserItem from './UserItem/UserItem';

const style = {
	'list-style-type': 'none',
	'text-align': 'left'
}

const UserList = ({userList}) => (
	<ul style={style}>
		{userList.slice(0,3).map(user => (
				<UserItem
					key={user.id}
					user={user}
				/>
		))}
	</ul>
);

const mapStateToProps = (state) => ({
	userList: state.userList
});

export default connect(mapStateToProps)(UserList);
