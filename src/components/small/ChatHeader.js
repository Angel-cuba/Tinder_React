import React from 'react';
import { useStyles } from './styles/styles';

const ChatHeader = () => {
	const classes = useStyles();
	return (
		<div className={classes.containerHeader}>
			<div className={classes.profile}>
				<div className={classes.image}>
					<img className={classes.profileImage} src="" alt="" />
				</div>
				<h3>Username</h3>
			</div>
			<i className={classes.logOutIcon}>Log Out</i>
		</div>
	);
};

export default ChatHeader;
