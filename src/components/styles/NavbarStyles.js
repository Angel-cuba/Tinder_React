import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
	navbar: {
		width: '96%',
		display: 'flex',
		justifyContent: 'space-between',
		margin: 'auto',
		padding: '10px',
		boxShadow: '.1px -1px 4px 0 rgba(0, 0, 0, 0.113)',
	},
	logo: {
		width: '200px',
		height: '100px',
		marginLeft: '50px',
	},
	logoMini: {
		width: '100px',
		height: '80px',
		marginLeft: '50px',
	},

	login: {
		color: '#fff',
		textAlign: 'center',
		fontSize: '1.5em',
		background: 'linear-gradient(45deg, #fe3072, #ff5940)',
		border: 'none',
		padding: '0.1em 1.6em',
		margin: '1.52rem',
		borderRadius: '1.3rem',
		boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
		'&:hover': {
			boxShadow: '2px 0 10px 1px rgba(0, 0, 0, 0.2)',
			cursor: 'pointer',
		},
	},
	loginMinimal: {
		color: '#fff',
		textAlign: 'center',
		fontSize: '1.5em',
		background: 'linear-gradient(45deg, #fe3072, #ff5940)',
		border: 'none',
		padding: '0.12em 1.6em',
		margin: '1.2rem',
		borderRadius: '1.25rem',
		boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
		'&:hover': {
			boxShadow: '2px 0 10px 1px rgba(0, 0, 0, 0.2)',
			cursor: 'pointer',
		},
	},
});
