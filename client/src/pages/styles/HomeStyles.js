import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
	overLay: {
		width: '100vw',
		height: '100vh',
		position: 'fixed',
		backgroundImage:
			'linear-gradient(to bottom, rgba(0, 0, 0, 0.564) 1%, rgba(0,0,0,.212351) 100%), url("https://res.cloudinary.com/dqaerysgb/image/upload/v1647972916/can-tinder-make-you-hinder-dating-apps-can-take-a-toll-on-your-mental-health_blhzxx.jpg")',
		backgroundSize: 'cover',
		paddingTop: '10px',
	},
	home: {
		textAlign: 'center',
	},
	primary: {
		color: '#fff',
		textAlign: 'center',
		fontSize: '1.5em',
		background: 'linear-gradient(45deg, #fe3072, #ff5940)',
		border: 'none',
		padding: '0.35em 1.6em',
		borderRadius: '1.3rem',
		boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
		textTransform: 'uppercase',
		marginBottom: '10px',
		'&:hover': {
			cursor: 'pointer',
			color: 'whitesmoke',
			background: 'linear-gradient(245deg, #fe3099, #ff5930)',
			borderRadius: '1.34rem',
			boxShadow: '0 0 12px 0 rgba(0, 0, 0, 0.24)',
		},
	},
	title: {
		fontSize: '50px',
		color: 'whitesmoke',
		marginTop: '30vh',
		// backgroundColor: 'rgba(255, 255, 255,.9)',
	},
});
