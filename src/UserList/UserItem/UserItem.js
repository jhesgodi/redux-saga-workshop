import React from 'react';

const style = {
	'display': 'flex',
	'justify-content': 'center'
}

const dataBoxStyle = {
	'display': 'flex',
	'justify-content': 'center',
	'flex-direction': 'column',
	'padding': '20px',
	'width': '400px'
};

const nameStyle = {
	display: 'block',
	'font-family': '"Montserrat", sans-serif'
}

const UserItem = ({user}) => (
	<li style={style}>
		<img src={user.avatar_url} style={{height: '100px', width: '100px'}}/>
		<div style={dataBoxStyle}>
			<span style={nameStyle}>{user.login}</span>
			<a style={{'font-family': '"Raleway", sans-serif'}} href='user.url' target='_blank'>{user.url}</a>
		</div>
	</li>
);

export default UserItem;
