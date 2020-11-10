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
import lightBulb from '../assets/bulb.svg';
import cash from '../assets/cash.svg';
import stopwatch from '../assets/stopwatch.svg';
import roots from '../assets/root.svg';
import documentsAnimation from '../animations/documentsAnimation/data';
import scaleAnimation from '../animations/scaleAnimation/data';
import automationAnimation from '../animations/automationAnimation/data';
import uxAnimation from '../animations/uxAnimation/data';
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
	itemContainer: {
		maxWidth: '40em'
	}
}));

export default function CustomSoftware(props) {
	const classes = useStyles();
	const theme = useTheme();
	const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
	const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
	const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

	const documentsOptions = {
		loop: true,
		autoplay: false,
		animationData: documentsAnimation,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	}

	const scaleOptions = {
		loop: true,
		autoplay: false,
		animationData: scaleAnimation,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	}

	const automationOptions = {
		loop: true,
		autoplay: false,
		animationData: automationAnimation,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	}

	const uxOptions = {
		loop: true,
		autoplay: false,
		animationData: uxAnimation,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	}


	return (
		<Grid container direction="column">
			<Grid item container direction="row" style={{marginTop: matchesXS ? '1em': '2em'}} justify={matchesMD ? 'center' : undefined} className={classes.rowContainer}>
				<Hidden mdDown>
					<Grid item className={classes.arrowContainer} style={{ marginRight: '1em', marginLeft: '-3.5em' }}>
						<IconButton onClick={() => props.setSelectedIndex(0)} style={{ backgroundColor: 'transparent' }} component={Link} to="/services">
							<img src={backArrow} alt="BackArrow" />
						</IconButton>
					</Grid>
				</Hidden>
				<Grid item container direction="column" className={classes.heading}>
					<Grid item>
						<Typography align={matchesMD ? 'center' : undefined} variant="h2" gutterBottom>Custom Software Development</Typography>
					</Grid>
					<Grid item>
						<Typography align={matchesMD ? 'center' : undefined} variant="body1" gutterBottom paragraph>
							Whether we are replacing old softare or inventing new soutions, MM development is here to help your business tackle technology.
						</Typography>
						<Typography align={matchesMD ? 'center' : undefined} variant="body1" gutterBottom paragraph>
							Using Regular commercial software leaves you with a lot of stuff ypu dont need, without someone of the suff you need, and ultimately controls the qy you work, without using any software at all you risk falling behind competetiors and missing out on huge savings from increased efficiency.
						</Typography>
						<Typography align={matchesMD ? 'center' : undefined} variant="body1" gutterBottom paragraph>
							Our custom solutions are designed from the ground up with your needs, wants, and goals at the core. This collaborative process produces finely tuned software that is much more effective at improving your workflow and reducing costs than generalized options.
						</Typography>
						<Typography align={matchesMD ? 'center' : undefined} variant="body1" gutterBottom paragraph>
							We create exactly what you what, exactly how you want it.
						</Typography>
					</Grid>
				</Grid>
				<Hidden mdDown>
					<Grid item className={classes.arrowContainer}>
						<IconButton onClick={() => props.setSelectedIndex(2)} style={{ backgroundColor: 'transparent' }} component={Link} to="/mobileapps">
							<img src={forwardArrow} alt="forward arrow" />
						</IconButton>
					</Grid>
				</Hidden>
			</Grid>
			<Grid item container className={classes.rowContainer} direction="row" justify="center" style={{ marginTop: '15em', marginBottom: '20em' }}>
				<Grid item container direction="column" md alignItems="center" style={{ maxWidth: '40em' }}>
					<Grid item>
						<Typography variant="h4">Save Energy</Typography>
					</Grid>
					<Grid item>
						<img src={lightBulb} alt="lightBulb" />
					</Grid>
				</Grid>
				<Grid item container direction="column" md alignItems="center" style={{ maxWidth: '40em', marginTop: matchesSM ? '10em' : 0, marginBottom: matchesSM ? '10em' : 0 }}>
					<Grid item>
						<Typography variant="h4">Save Time</Typography>
					</Grid>
					<Grid item>
						<img src={stopwatch} alt="stopwatch" />
					</Grid>
				</Grid>
				<Grid item container direction="column" md alignItems="center" style={{ maxWidth: '40em' }}>
					<Grid item>
						<Typography variant="h4">Save Money</Typography>
					</Grid>
					<Grid item>
						<img src={cash} alt="cash" />
					</Grid>
				</Grid>
			</Grid>
			<Grid item className={classes.rowContainer} container direction={matchesMD ? "column" : "row"} alignItems={matchesMD ? "center" : undefined} justify="space-around">
				<Grid item container className={classes.itemContainer} direction={matchesSM ? "column" : "row"} style={{ marginBottom: matchesMD ? '15em' : 0 }} md>
					<Grid item container direction="column" md>
						<Grid item>
							<Typography align={matchesSM ? 'center' : undefined} variant="h4">Digital Documents and Data</Typography>
						</Grid>
						<Grid item>
							<Typography align={matchesSM ? 'center' : undefined} variant="body1" paragraph>
								Reduce Errors. Reduce Waste. Reduce Costs.
							</Typography>
						</Grid>
						<Grid item>
							<Typography align={matchesSM ? 'center' : undefined} variant="body1" paragraph>
								Billions are spent annually on the purchasing, printing, and distribution of paper. On top of the massive environmental impact this has, it causes harm to your bottom line as well.
							</Typography>
						</Grid>
						<Grid item>
							<Typography align={matchesSM ? 'center' : undefined} variant="body1" paragraph>
								By utilizing digital forms and documents you can remove these obsolete expenses, accelerate your communication, and help the Earth.
							</Typography>
						</Grid>
					</Grid>
					<Grid item md>
						<Lottie options={documentsOptions} isStopped={true} style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }} />
					</Grid>
				</Grid>
				<Grid item container className={classes.itemContainer} direction={matchesSM ? "column" : "row"} md>
					<Grid item md>
						<Lottie options={scaleOptions} isStopped={true} style={{ maxHeight: 280, maxWidth: 260 }} />
					</Grid>
					<Grid item container direction="column" md>
						<Grid item>
							<Typography variant="h4" align={matchesSM ? 'center' : 'right'} >Scale</Typography>
						</Grid>
						<Grid item>
							<Typography variant="body1" paragraph align={matchesSM ? 'center' : 'right'}>
								Whether you’re a large brand, just getting started, or taking off right now, our application architecture ensures pain-free growth and reliability
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid item className={classes.rowContainer} container direction="row" style={{ marginTop: '20em', marginBottom: '20em' }}>
				<Grid item container direction="column" alignItems="center">
					<Grid item>
						<img src={roots} alt="roots" height={matchesSM ? '300em' : '450em'} width={matchesSM ? '300em' : "450em"} />
					</Grid>
					<Grid item className={classes.itemContainer}>
						<Typography variant="h4" align="center" gutterBottom>Root-cause Analysis</Typography>
						<Typography variant="body1" align="center" paragraph>Many problems are merely symptoms of larger, underlying issues.</Typography>
						<Typography variant="body1" align="center" paragraph>We can help you thoroughly examine all areas of your business to develop a holistic plan for the most effective implementation of technology.</Typography>
					</Grid>
				</Grid>
			</Grid>
			<Grid item container className={classes.rowContainer} direction={matchesMD ? "column" : "row"} alignItems={matchesMD ? "center" : undefined} justify="space-around" style={{ marginBottom: '20em' }}>
				<Grid item container className={classes.itemContainer} direction={matchesSM ? "column" : "row"} style={{ marginBottom: matchesMD ? '15em' : 0 }} md>
					<Grid item container direction="column" md>
						<Grid item>
							<Typography variant="h4" align={matchesSM ? 'center' : undefined} >Automation</Typography>
						</Grid>
						<Grid item>
							<Typography align={matchesSM ? 'center' : undefined} variant="body1" paragraph>
								Why waste time when you don’t have to?
							</Typography>
						</Grid>
						<Grid item>
							<Typography align={matchesSM ? 'center' : undefined} variant="body1" paragraph>
								We can help you identify processes with time or event based actions which can now easily be automated.
							</Typography>
						</Grid>
						<Grid item>
							<Typography align={matchesSM ? 'center' : undefined} variant="body1" paragraph>
								Increasing efficiency increases profits, leaving you more time to focus on your business, not busywork.
							</Typography>
						</Grid>
					</Grid>
					<Grid item md>
						<Lottie options={automationOptions} isStopped={true} style={{ maxHeight: 290, maxWidth: 280 }} />
					</Grid>
				</Grid>
				<Grid item container className={classes.itemContainer} direction={matchesSM ? "column" : "row"} md>
					<Grid item md>
						<Lottie options={uxOptions} isStopped={true} style={{ maxHeight: 310, maxWidth: 155 }} />
					</Grid>
					<Grid item container direction="column" md>
						<Grid item>
							<Typography variant="h4" align={matchesSM ? 'center' : 'right'} >User Experience Design</Typography>
						</Grid>
						<Grid item>
							<Typography variant="body1" paragraph align={matchesSM ? 'center' : 'right'} >
								A good design that isn’t usable isn’t a good design.
							</Typography>
							<Typography variant="body1" paragraph align={matchesSM ? 'center' : 'right'} >
								So why are so many pieces of software complicated, confusing, and frustrating?
							</Typography>
							<Typography variant="body1" paragraph align={matchesSM ? 'center' : 'right'} >
								By prioritizing users and the real ways they interact with technology we’re able to develop unique, personable experiences that solve problems rather than create new ones.
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid item> {/*----Call To Action Block-----*/}
				<CallToAction setValue={props.setValue} />
			</Grid>
		</Grid>
	)
}