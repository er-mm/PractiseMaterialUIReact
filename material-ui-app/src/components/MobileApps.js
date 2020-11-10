import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import swiss from '../assets/swissKnife.svg';
import engagement from '../assets/increaseEngagement.svg';
import access from '../assets/extendAccess.svg';
import integrationAnimation from '../animations/integrationAnimation/data';
import CallToAction from './ui/CallToAction';

const useStyles = makeStyles(theme => ({
	heading: {
		maxWidth: '40em'
	},
	arrowContainer: {
		marginTop: '0.5em'
	},
	rowContainer: {
		paddingLeft: '5em',
		paddingRight: '5em',
		[theme.breakpoints.down('sm')]: {
			paddingLeft: '1.5em',
			paddingRight: '1.5em',
		}
	},
}));

export default function MobileApps(props) {
	const classes = useStyles();
	const theme = useTheme();
	const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
	const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
	const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

	const defaultOptions = {
		loop: true,
		autoplay: false,
		animationData: integrationAnimation,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	}

	return (
		<Grid comtainer direction="column">
			<Grid item container direction="row" style={{ marginTop: matchesXS ? '1em' : '2em' }} justify={matchesMD ? 'center' : undefined} className={classes.rowContainer}>
				<Hidden mdDown>
					<Grid item className={classes.arrowContainer} style={{ marginRight: '1em', marginLeft: '-3.5em' }}>
						<IconButton onClick={() => props.setSelectedIndex(1)} style={{ backgroundColor: 'transparent' }} component={Link} to="/customsoftware">
							<img src={backArrow} alt="BackArrow" />
						</IconButton>
					</Grid>
				</Hidden>
				<Grid item container direction="column" className={classes.heading}>
					<Grid item>
						<Typography align={matchesMD ? 'center' : undefined} variant="h2" gutterBottom>iOS/Android App Development</Typography>
					</Grid>
					<Grid item>
						<Typography align={matchesMD ? 'center' : undefined} variant="body1" gutterBottom paragraph>
							Mobile apps allow you to take your tools on the go.
						</Typography>
						<Typography align={matchesMD ? 'center' : undefined} variant="body1" gutterBottom paragraph>
							Whether you want an app for your customers, employees, or yourself, we can build cross-platform native solutions for any part of your business process. This opens you up to a whole new world of possibilities by taking advantage of phone features like the camera, GPS, push notifications, and more.
						</Typography>
						<Typography align={matchesMD ? 'center' : undefined} variant="body1" gutterBottom paragraph>
							Convenience. Connection.
						</Typography>
					</Grid>
				</Grid>
				<Hidden mdDown>
					<Grid item className={classes.arrowContainer}>
						<IconButton onClick={() => props.setSelectedIndex(3)} style={{ backgroundColor: 'transparent' }} component={Link} to="/websites">
							<img src={forwardArrow} alt="forward arrow" />
						</IconButton>
					</Grid>
				</Hidden>
			</Grid>
			<Grid className={classes.rowContainer} direction={matchesSM ? 'column' : "row"} item container style={{marginTop:'15em', marginBottom:'15em'}}>
				<Grid item container direction="column" md>
					<Grid item>
						<Typography align={matchesSM ? "center" : undefined} variant="h4" gutterBottom>Integration</Typography>
					</Grid>
					<Grid item>
						<Typography align={matchesSM ? "center" : undefined} variant="body1" paragraph>Our technology enables an innate interconnection between web and mobile applications, putting everything you need right in one convenient place.</Typography>
						<Typography align={matchesSM ? "center" : undefined} variant="body1" paragraph>This allows you to extend your reach, reinvent interactions, and develop a stronger relationship with your users than ever before.</Typography>
					</Grid>
				</Grid>
				<Grid item md>
					<Lottie options={defaultOptions} isStopped={true} style={{ maxWidth: '20em' }} />
				</Grid>
				<Grid item container direction="column" md>
					<Grid item>
						<Typography align={matchesSM ? "center" : 'right'} variant="h4" gutterBottom>Simultaneous Platform Support</Typography>
					</Grid>
					<Grid item>
						<Typography align={matchesSM ? "center" : 'right'} variant="body1" paragraph>Our cutting-edge development process allows us to create apps for iPhone, Android, and tablets — all at the same time.</Typography>
						<Typography align={matchesSM ? "center" : 'right'} variant="body1" paragraph>This significantly reduces costs and creates a more unified brand experience across all devices.</Typography>
					</Grid>
				</Grid>
			</Grid>
			<Grid item container direction={matchesMD ? 'column' : "row"} className={classes.rowContainer} style={{marginBottom: '15em'}}>
				<Grid item container direction="column" md alignItems="center" style={{ maxWidth: '40em' }}>
					<Grid item>
						<Typography align="center" variant="h4">Extend Functionality</Typography>
					</Grid>
					<Grid item>
						<img src={swiss} alt="swiss" />
					</Grid>
				</Grid>
				<Grid item container direction="column" md alignItems="center" style={{ marginTop: matchesMD ? '10em' : 0, marginBottom: matchesMD ? '10em' : 0 }}>
					<Grid item>
						<Typography align="center" variant="h4">Extend Access</Typography>
					</Grid>
					<Grid item>
						<img src={access} alt="access" style={{ maxWidth: matchesXS ? '20em' : '28em' }} />
					</Grid>
				</Grid>
				<Grid item container direction="column" md alignItems="center" style={{ maxWidth: '40em' }}>
					<Grid item>
						<Typography align="center" variant="h4">Increase Engagement</Typography>
					</Grid>
					<Grid item>
						<img src={engagement} alt="engagement" />
					</Grid>
				</Grid>
			</Grid>
			<Grid item> {/*----Call To Action Block-----*/}
				<CallToAction setValue={props.setValue} />
			</Grid>
		</Grid>
	);
}