import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
	modal: {
		position: 'absolute',
		top: '180px',
		left: 0,
		right: 0,
		marginLeft: 'auto',
		marginRight: 'auto',
		maxWidth: '360px',
		height: 'fit-content',
		backgroundColor: 'rgba(255, 255, 255,.9)',
		borderRadius: '6px',
		padding: '40px',
		boxShadow: '0 3px 15px 0 rgba(0, 20, 10, 0.14)',
	},
	icon: {
		cursor: 'pointer',
	},
	form: {
		display: 'flex',
		flexDirection: 'column',
		padding: '10px 20px',
	},
	input: {
		marginBottom: '20px',
		padding: '10px 20px',
		fontSize: '18px',
	},
	submit: {
		color: 'rgb(121,119,119)',
		backgroundColor: 'rgba(255, 255, 255,.9)',
		fontSize: '16px',
		fontWeight: 'bolder',
		fontTransform: 'uppercase',
		padding: '10px 20px',
		borderRadius: '16px',
		border: '2px solid rgb(121,119,119)',
		'&:hover': {
			color: 'rgb(48,48,48)',
			border: '2px solid rgb(48,48,48)',
			backgroundColor: 'rgba(255, 255, 255,.169)',
			cursor: 'pointer',
		},
	},
});
