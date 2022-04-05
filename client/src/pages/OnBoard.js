import React, { useState } from 'react';
import Navbar from '../components/small/Navbar';
import { useStyles } from './styles/OnBoardStyles';

const OnBoard = () => {
	const styles = useStyles();

	const [formData, setFormData] = useState({
		user_id: '',
		first_name: '',
		dob_day: '',
		dob_month: '',
		dob_year: '',
		show_gender: false,
		gender_identity: '',
		gender_interest: '',
		email: '',
		profile_picture: '',
		about: '',
		matches: [],
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
	};
	const handleChange = (e) => {
		const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
		const name = e.target.name;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};
	console.log(formData);

	return (
		<div className="content">
			<Navbar
				minimal={true}
				// authToken={false}
				setShowModal={() => {}}
				showModal={false}
				// setIsSignUp={false}
			/>
			<div className={styles.onboard}>
				<h2>Create a new account!</h2>

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
							value={formData.first_name}
							onChange={handleChange}
						/>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Email"
							className={styles.inputs}
							required
							value={formData.email}
							onChange={handleChange}
						/>

						<label htmlFor="birthday">Birthday</label>
						<div className={styles.multiple}>
							<input
								type="number"
								id="dob_day"
								name="dob_day"
								placeholder="DD"
								min={1}
								max={31}
								className={styles.inputs}
								required={true}
								value={formData.dob_day}
								onChange={handleChange}
							/>

							<input
								type="number"
								id="dob_month"
								name="dob_month"
								placeholder="MM"
								min={1}
								max={12}
								className={styles.inputs}
								required={true}
								value={formData.dob_month}
								onChange={handleChange}
							/>
							<input
								type="number"
								id="dob_year"
								name="dob_year"
								placeholder="YYYY"
								min={1960}
								max={2004}
								className={styles.inputs}
								required={true}
								value={formData.dob_year}
								onChange={handleChange}
							/>
						</div>
						<label htmlFor="gender">Gender</label>
						<div className={styles.genders}>
							<label className={styles.label} htmlFor="man">
								Man
							</label>
							<input
								type="radio"
								id="man_gender"
								name="gender_identity"
								placeholder="DD"
								value="man"
								className={styles.inputs}
								onChange={handleChange}
								checked={formData.gender_identity === 'man'}
							/>
							<label className={styles.label} htmlFor="woman">
								Woman
							</label>
							<input
								type="radio"
								id="woman_gender"
								name="gender_identity"
								placeholder="DD"
								value="woman"
								className={styles.inputs}
								onChange={handleChange}
								checked={formData.gender_identity === 'woman'}
							/>
							<label className={styles.label} htmlFor="more">
								More
							</label>
							<input
								type="radio"
								id="other_gender"
								name="gender_identity"
								placeholder="DD"
								value="more"
								className={styles.inputs}
								onChange={handleChange}
								checked={formData.gender_identity === 'more'}
							/>
						</div>
						<label htmlFor="show_gender">Show gender on my profile</label>
						<div className={styles.showGender}>
							<input
								type="checkbox"
								id="show_gender"
								name="show_gender"
								className={styles.inputs}
								onChange={handleChange}
								checked={formData.show_gender}
							/>
						</div>

						<label> Show me</label>
						<div className={styles.showMe}>
							<label className={styles.label} htmlFor="man">
								Man
							</label>
							<input
								type="radio"
								id="man_gender_interest"
								name="gender_interest"
								value="man"
								className={styles.inputs}
								onChange={handleChange}
								checked={formData.gender_interest === 'man'}
							/>
							<label className={styles.label} htmlFor="woman">
								Woman
							</label>
							<input
								type="radio"
								id="woman_gender_interest"
								name="gender_interest"
								value="woman"
								className={styles.inputs}
								onChange={handleChange}
								checked={formData.gender_interest === 'woman'}
							/>
							<label className={styles.label} htmlFor="more">
								Everyone
							</label>
							<input
								type="radio"
								id="everyone_gender_interest"
								name="gender_interest"
								value="everyone"
								className={styles.inputs}
								onChange={handleChange}
								checked={formData.gender_interest === 'everyone'}
							/>
						</div>

						<label htmlFor="about">About me</label>
						<input
							type="text"
							id="about"
							name="about"
							required
							placeholder="I like longs walks..."
							value={formData.about}
							className={styles.inputs}
							onChange={handleChange}
						/>
						<input type="submit" className={styles.buttonSubmit} />
					</section>
					<section className={styles.section}>
						<label htmlFor="">Profile picture</label>
						<input
							type="url"
							id="profile_picture"
							name="profile_picture"
							className={styles.inputs}
							onChange={handleChange}
							// value={formData.}
							required
						/>
						<div className={styles.profilePhoto}>
							<img
								src={
									formData.profile_picture
										? formData.profile_picture
										: 'https://res.cloudinary.com/dqaerysgb/image/upload/v1648218398/istockphoto-1132926013-612x612_t1xwec.jpg'
								}
								alt="Profile pic preview"
								style={{
									width: '100%',
									height: '100%',
									borderRadius: '8px',
									boxShadow: '0 0 8px rgba(255,255,255, 0.12)',
								}}
							/>
							{!formData.profile_picture && (
								<h2
									style={{
										color: 'whitesmoke',
										border: '1px solid white',
										borderRadius: '5px',
										padding: '15px',
									}}
								>
									Plzzz, choose profile picture
								</h2>
							)}
						</div>
					</section>
				</form>
			</div>
		</div>
	);
};

export default OnBoard;
