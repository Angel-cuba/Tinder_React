import React from 'react';
import Navbar from '../components/Navbar';
import { useStyles } from './styles/OnBoardStyles';

const OnBoard = () => {
	const styles = useStyles();
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	const handleChange = (e) => {};
	return (
		<div>
			<Navbar
				minimal={true}
				// authToken={false}
				setShowModal={() => {}}
				showModal={false}
				// setIsSignUp={false}
			/>
			<div className={styles.onboard}>
				<h2>Create a new board</h2>

				<form onSubmit={handleSubmit} className={styles.form}>
					<section className={styles.section}>
						<label htmlFor="first_name">First Name</label>
						<input
							type="text"
							id="first_name"
							name="first_name"
							placeholder="First Name"
							className={styles.inputs}
							required
							value={''}
							onChange={handleChange}
						/>

						<label htmlFor="birthday">Birthday</label>
						<div className={styles.multiple}>
							<input
								type="number"
								id="dob_day"
								name="dob_day"
								placeholder="DD"
								className={styles.inputs}
								required={true}
								onChange={handleChange}
							/>

							<input
								type="number"
								id="dob_month"
								name="dob_month"
								placeholder="MM"
								className={styles.inputs}
								required={true}
								onChange={handleChange}
							/>
							<input
								type="number"
								id="dob_year"
								name="dob_year"
								placeholder="YYYY"
								className={styles.inputs}
								required={true}
								onChange={handleChange}
							/>
						</div>
						<label htmlFor="gender">Gender</label>
						<div className={styles.genders}>
							<label htmlFor="man">Man</label>
							<input
								type="radio"
								id="man_gender"
								name="gender"
								placeholder="DD"
								value="man"
								className={styles.inputs}
								onChange={handleChange}
								checked={false}
							/>
							<label htmlFor="woman">Woman</label>
							<input
								type="radio"
								id="woman_gender"
								name="gender"
								placeholder="DD"
								value="woman"
								className={styles.inputs}
								onChange={handleChange}
								checked={false}
							/>
							<label htmlFor="more">More</label>
							<input
								type="radio"
								id="other_gender"
								name="gender"
								placeholder="DD"
								value="more"
								className={styles.inputs}
								onChange={handleChange}
								checked={false}
							/>
						</div>
						<label htmlFor="show-gender">Show gender on my profile</label>
						<input
							type="checkbox"
							id="show-gender"
							name="show_gender"
							className={styles.inputs}
							onChange={handleChange}
							checked={false}
						/>
						<label> Show me</label>
						<div>
							<label htmlFor="man">Man</label>
							<input
								type="radio"
								id="man_gender_interest"
								name="gender_interest"
								value="man"
								className={styles.inputs}
								onChange={handleChange}
								checked={false}
							/>
							<label htmlFor="woman">Woman</label>
							<input
								type="radio"
								id="woman_gender_interest"
								name="gender_interest"
								value="woman"
								className={styles.inputs}
								onChange={handleChange}
								checked={false}
							/>
							<label htmlFor="more">Everyone</label>
							<input
								type="radio"
								id="everyone_gender_interest"
								name="gender_interest"
								value="everyone"
								className={styles.inputs}
								onChange={handleChange}
								checked={false}
							/>
						</div>

						<label htmlFor="">About</label>
						<input
							type="text"
							id="about"
							name="about"
							required
							placeholder="I like longs walks..."
							value={''}
							className={styles.inputs}
							onChange={handleChange}
						/>
						<input type="submit" />
					</section>
					<section className={styles.section}>
						<label htmlFor="">Profile picture</label>
						<input
							type="url"
							id="profile_picture"
							name="profile_picture"
							className={styles.inputs}
							onChange={handleChange}
							required
						/>
						<div className={styles.profile}></div>
					</section>
				</form>
			</div>
		</div>
	);
};

export default OnBoard;
