import React from 'react';
import ChatDisplay from './small/ChatDisplay';
import ChatHeader from './small/ChatHeader';
import MatchesDisplay from './small/MatchesDisplay';
import { useStyles } from './styles/ChatContainerStyles';

const ChatContainer = () => {
	const styles = useStyles();
	return (
		<div className={styles.chatContainer}>
			<ChatHeader />
			<div>
				<button className={styles.options}>Matches</button>
				<button className={styles.options}>Chat</button>
			</div>

			<MatchesDisplay />
			<ChatDisplay />
		</div>
	);
};

export default ChatContainer;
