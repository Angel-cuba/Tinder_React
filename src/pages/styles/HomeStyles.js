import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
	overLay: {
		width: '100%',
		height: '100%',
		position: 'fixed',
		background: 'linear-gradient(-205deg, silver 50%, rgba(0,0,0,.02351))',
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
		'&:hover': {
			cursor: 'pointer',
			color: 'whitesmoke',
			background: 'linear-gradient(245deg, #fe3099, #ff5930)',
			borderRadius: '1.34rem',
			boxShadow: '0 0 12px 0 rgba(0, 0, 0, 0.24)',
		},
	},
});
