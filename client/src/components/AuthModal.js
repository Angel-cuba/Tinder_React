import React, { useState } from 'react';
import { useStyles } from './styles/AuthStyles';
import { readUser } from './../api/request';
import { useNavigate } from 'react-router-dom';

const AuthModal = ({ setShowModal, isSignUp }) => {
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [confirmPassword, setConfirmPassword] = useState(null);
	const [error, setError] = useState(null);
	const styles = useStyles();

	const navigate = useNavigate();
	const handleClick = () => {
		setShowModal(false);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			if (isSignUp && password !== confirmPassword) {
				setError('Password needs to match');
				return;
			}

			const response = await readUser(email, password);
			if (response.status === 201) navigate('/onboard');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className={styles.modal}>
			<div className={styles.icon} onClick={handleClick}>
				👋🏾
			</div>
			<h2>{isSignUp ? 'Create account' : 'Sign In'}</h2>
			{isSignUp && <p>By clicking Log in, you are agree to our terms and conditions.</p>}
			<form className={styles.form} onSubmit={handleSubmit}>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					placeholder="Email"
					required
					name="email"
					onChange={(e) => setEmail(e.target.value)}
					className={styles.input}
				/>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					placeholder="Password"
					required
					name="password"
					onChange={(e) => setPassword(e.target.value)}
					className={styles.input}
				/>
				{isSignUp && (
					<>
						<label htmlFor="password-check">Password Check</label>

						<input
							type="password"
							id="password-check"
							placeholder="Confirm password"
							required
							name="password-check"
							onChange={(e) => setConfirmPassword(e.target.value)}
							className={styles.input}
						/>
					</>
				)}

				<input type="submit" className={styles.submit} />
				<p>{error}</p>
			</form>
		</div>
	);
};

export default AuthModal;
