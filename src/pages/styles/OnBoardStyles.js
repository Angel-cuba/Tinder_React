import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
	form: {
		display: 'flex',
		justifyContent: 'center',
	},
	section: {
		display: 'flex',
		flexDirection: 'column',
		padding: '20px',
	},
	inputs: {
		padding: '15px 30px',
		margin: '10px 0px',
		fontSize: '15px',
		border: '1px solid silver',
		borderRadius: '10px',
	},
	onboard: {},
	multiple: {
		display: 'flex',
		// flexDirection: 'column',
	},
	genders: {
		// display: 'flex',
		// flexDirection: 'column',
		marginTop: '12px',
		marginBottom: '35px',
	},
	showGender: {
		marginBottom: '20px',
	},
	showMe: {
		marginTop: '20px',
		marginBottom: '40px',
	},

	label: {
		marginLeft: '13px',
		marginRight: '3px',
		marginTop: '10px',
		border: '2px solid silver',
		borderRadius: '10px',
		padding: '10px 13px',
	},
	buttonSubmit: {
		backgroundColor: 'silver',
		color: 'whitesmoke',
		border: 'none',
		padding: '10px',
		fontSize: '20px',
		fontWeight: 'bolder',
		textTransform: 'uppercase',
		cursor: 'pointer',
		borderRadius: '10px',
		boxShadow: '0 0 3px 0 rgba(0, 0, 0, 0.3)',
	},
});
