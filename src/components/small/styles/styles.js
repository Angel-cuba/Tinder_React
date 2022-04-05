import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
	// ChatHeader
	containerHeader: {
		background: 'linear-gradient(45deg, rgb(243,33,33) 30%, #FF8E53 90%)',
		height: '90px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '10px',
	},
	profile: {
		display: 'flex',
		alignItems: 'center',
		padding: '10px',
		color: 'rgba(255,255,255,0.9)',
	},
	image: {
		height: '30px',
		width: '30px',
		borderRadius: '15px',
		overflow: 'hidden',
		margin: '10px',
	},
	profileImage: {
		width: '100%',
	},
	logOutIcon: {},
	// MatchesDisplay
	matchesDisplay: {},
});
