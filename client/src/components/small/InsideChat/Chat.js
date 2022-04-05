import React from 'react';
import { useStyles } from '../styles/stylesChat';

const Chat = () => {
	const classes = useStyles();
	return <div className={classes.chatDisplay}>Chat</div>;
};

export default Chat;
