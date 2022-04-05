import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
	chatContainer: {
		backgroundColor: 'rgba(255, 255, 255,.9)',
		boxShadow: '0px 0px 10px rgba(0, 0, 0, .2), 0px 0px 0px 2px rgba(0, 0, 0, 0.2)',
		width: '30%',
		textAlign: 'left',
		zIndex: '1',
		padding: '2px',
	},
	options: {
		border: 'none',
		backgorundColor: 'rgba(255, 255, 255, .9)',
		borderBottom: '4px solid rgb(243,33,33)',
		fontSize: '20px',
		margin: '2px',
		padding: '10px',
	},
});
