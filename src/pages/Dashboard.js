import React, { useState } from 'react';
import ChatContainer from '../components/ChatContainer';
import { useStyles } from './styles/DashboardStyles';
import TinderCard from 'react-tinder-card';

const Dashboard = () => {
	const characters = [
		{ name: 'Jared Domn', url: 'https://i.imgur.com/Q9WPlWA.jpeg' },
		{ name: 'Dinesh', url: 'https://i.imgur.com/OckVkRo.jpeg' },
		{ name: 'Monica', url: 'https://i.imgur.com/wDmRJPc.jpeg' },
		{ name: 'Chandler', url: 'https://i.imgur.com/H07Fxdh.jpeg' },
		{ name: 'Ross', url: 'https://i.imgur.com/MWAcQRM.jpeg' },
	];
	const styles = useStyles();

	const [lastDirection, setLastDirection] = useState();

	const swiped = (direction, nameToDelete) => {
		console.log('removing: ' + nameToDelete);
		setLastDirection(direction);
	};
	// const onSwipe = (direction) => {
	// 	console.log('onSwipe: ' + direction);
	// };
	const outOfFrame = (name) => {
		console.log(name + ' left the screen');
	};

	return (
		<div className={styles.dashboard}>
			<ChatContainer />
			<div className={styles.swiperContainer}>
				<div className={styles.cardContainer}>
					{characters.map((character) => (
						<TinderCard
							className={styles.swipe}
							key={character.name}
							onSwipe={(dir) => swiped(dir, character.name)}
							// onSwipe={onSwipe}
							onCardLeftScreen={() => outOfFrame(character.name)}
						>
							<div
								style={{ backgroundImage: 'url(' + character.url + ')' }}
								className={styles.card}
							>
								<h3 className={styles.title}>{character.name}</h3>
							</div>
						</TinderCard>
					))}
				</div>
				<div className={styles.swipeInfo}>
					{lastDirection ? <p>You swipe {lastDirection}</p> : <p />}
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
