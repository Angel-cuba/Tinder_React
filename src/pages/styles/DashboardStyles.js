import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
	dashboard: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	swiperContainer: {
		width: '70%',
		margin: '0 auto',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		height: '80vh',
	},
	cardContainer: {
		width: '400px',
		height: '550px',
		position: 'relative',
	},
	swipe: {
		position: 'absolute',
	},
	card: {
		position: 'relative',
		backgroundColor: '#fff',
		width: '80vw',
		maxWidth: '340px',
		height: '300px',
		boxShadow: '-1px 0 13px 1px rgba(0,0,0,0.12)',
		borderRadius: '15px',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	cardContent: {
		width: '100%',
		height: '100%',
	},
	title: {
		position: 'absolute',
		bottom: 0,
		margin: '10px',
		color: '#fff',
	},
	swipeInfo: {
		width: 'fit-content',
		postion: 'absolute',
		padding: '10px',
	},
});
