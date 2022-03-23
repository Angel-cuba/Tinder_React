import React, { useState } from 'react';
import AuthModal from '../components/AuthModal';
import Navbar from '../components/Navbar';
import { useStyles } from './styles/HomeStyles';

const Home = () => {
	const [showModal, setShowModal] = useState(false);
	const [isSignUp, setIsSignUp] = useState(true);

	const styles = useStyles();
	const authToken = false;
	const minimal = false;

	const handleClick = (e) => {
		setShowModal(true);
		setIsSignUp(true);
	};

	return (
		<>
			<div className={styles.overLay}>
				<Navbar
					minimal={minimal}
					setShowModal={setShowModal}
					showModal={showModal}
					setIsSignUp={setIsSignUp}
				/>
				<div className={styles.home}>
					<h1 className={styles.title}>Swipe Right 🚀</h1>
					<button className={styles.primary} onClick={handleClick}>
						{authToken ? 'Sign Out' : 'Sign Up'}
					</button>

					{showModal && (
						<AuthModal setShowModal={setShowModal} setIsSignUp={setIsSignUp} isSignUp={isSignUp} />
					)}
				</div>
			</div>
		</>
	);
};

export default Home;
