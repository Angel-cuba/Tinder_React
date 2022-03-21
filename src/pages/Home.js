import React from 'react';
import Navbar from '../components/Navbar';
import { useStyles } from './styles/HomeStyles';

const Home = () => {
	const styles = useStyles();
	const authToken = false;
	const minimal = false;

	const handleSwipeRight = (e) => {
		console.log(e);
	};

	return (
		<>
			<div className={styles.overLay}>
				<Navbar minimal={minimal} authToken={authToken} />
				<div className={styles.home}>
					<h1>Swipe Right 🚀</h1>
					<button className={styles.primary} onClick={handleSwipeRight}>
						{authToken ? 'Sign Out' : 'Sign Up'}
					</button>
				</div>
			</div>
		</>
	);
};

export default Home;
