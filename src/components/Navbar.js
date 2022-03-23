import React from 'react';
import { useStyles } from './styles/NavbarStyles';

const Navbar = ({ minimal, setShowModal, setIsSignUp }) => {
	const styles = useStyles();

	const handleClick = () => {
		setShowModal(true);
		setIsSignUp(false);
	};

	const authToken = false;
	return (
		<nav className={styles.navbar}>
			<div>
				<img
					className={minimal ? styles.logoMini : styles.logo}
					src={
						minimal
							? 'https://res.cloudinary.com/dqaerysgb/image/upload/v1639169050/tinder_wuoa72.png'
							: 'https://res.cloudinary.com/dqaerysgb/image/upload/v1647881744/Tinder-Logo_epsans.png'
					}
					alt="Tinder"
				/>
			</div>
			{!authToken && !minimal && (
				<button
					className={!minimal ? styles.loginMinimal : styles.login}
					onClick={handleClick}
					// disabled={showModal}
				>
					Log in
				</button>
			)}
		</nav>
	);
};

export default Navbar;
