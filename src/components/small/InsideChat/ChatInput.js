import React, { useState } from 'react';
import { useStyles } from './../styles/stylesChat';

const ChatInput = () => {
	const [textArea, setTextArea] = useState();
	const classes = useStyles();
	return (
		<div className={classes.chatInput}>
			<textarea value={textArea} onChange={(e) => setTextArea(e.target.value)} />
			<button className={classes.button}>Submit</button>
		</div>
	);
};

export default ChatInput;
