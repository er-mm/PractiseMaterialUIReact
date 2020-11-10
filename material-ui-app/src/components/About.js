import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Hidden from '@material-ui/core/Hidden';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import history from '../assets/history.svg';
import profile from '../assets/founder.jpg';
import yearbook from '../assets/yearbook.svg';
import puppy from '../assets/puppy.svg';
import CallToAction from './ui/CallToAction';

const useStyles = makeStyles(theme => ({
	rowContainer: {
		paddingLeft: '5em',
		paddingRight: '5em',
		[theme.breakpoints.down('sm')]: {
			paddingLeft: '1.5em',
			paddingRight: '1.5em',
		}
	},
	missionStatement: {
		fontStyle: 'italic',
		fontWeight: 300,
		fontSize: '1.5rem',
		maxWidth: '50m',
		lineHeight: 1.4
	},
	avator: {
		height: '25em',
		width: '25em',
		[theme.breakpoints.down('sm')]:{
			height: '20em',
		width: '20em',
		maxHeight: 300,
		maxWidth: 300
		}
	}
}));

export default function About(props) {
	const classes = useStyles();
	const theme = useTheme();
	const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
	const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
	const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

	return (
		<Grid comtainer direction="column">
			<Grid item className={classes.rowContainer} style={{ marginTop: matchesMD ? '1em' : '2em' }}>
				<Typography align={matchesMD? 'center' : undefined} variant="h2">About US</Typography>
			</Grid>
			<Grid item container justify="center" className={classes.rowContainer} style={{ marginTop: '3em' }}>
				<Typography variant="h4" align="center" className={classes.missionStatement}>
					Whether it be person to person, business to consumer, or an individual to their interests, technology is meant to bring us closer to what we care about in the best way possible. Arc Development will use that principle to provide fast, modern, inexpensive, and aesthetic software to the Midwest and beyond.
            </Typography>
			</Grid>
			<Grid item container className={classes.rowContainer} style={{ marginTop: '10em', marginBottom: '10em' }} justify="space-around" direction={matchesMD ? "column" : 'row'} alignItems={matchesMD ? 'center' : undefined}>
				<Grid item>
					<Grid item container direction="column" lg style={{ maxWidth: '35em' }}>
						<Grid item>
							<Typography variant="h4" align={matchesMD ? 'center' : undefined} gutterBottom>History</Typography>
						</Grid>
						<Grid item container direction="column">
							<Typography align={matchesMD ? 'center' : undefined} variant="body1" paragraph style={{ fontWeight: 700, fontStyle: 'italic' }}>
								We’re the new kid on the block.
				</Typography>
							<Typography align={matchesMD ? 'center' : undefined} variant="body1" paragraph>
								Founded in 2019, we’re ready to get our hands on the world’s business problems.
				</Typography>
							<Typography align={matchesMD ? 'center' : undefined} variant="body1" paragraph>
								It all started with one question: Why aren’t all businesses using available technology?
								There are many different answers to that question: economic barriers, social barriers, educational barriers, and sometimes institutional barriers.
				</Typography>
							<Typography align={matchesMD ? 'center' : undefined} variant="body1" paragraph>
								We aim to be a powerful force in overcoming these obstacles. Recent developments in software engineering and computing power, compounded by the proliferation of smart phones, has opened up infinite worlds of possibility. Things that have always been done by hand can now be done digitally and automatically, and completely new methods of interaction are created daily. Taking full advantage of these advancements is the name of the game.
				</Typography>
							<Typography align={matchesMD ? 'center' : undefined} variant="body1" paragraph>
								All this change can be a lot to keep up with, and that’s where we come in.
				</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid item>
					<Grid item lg container justify="center">
						<img src={history} alt="history" style={{ maxHeight: matchesMD ? 200 : '22em' }} />
					</Grid>
				</Grid>
			</Grid>
			<Grid item container direction="column" alignItems="center" className={classes.rowContainer} style={{ marginBottom: '15em' }}>
				<Grid item>
					<Typography variant="h4" align="center" gutterBottom>Team</Typography>
				</Grid>
				<Grid item>
					<Typography variant="body1" paragraph align="center">MM, Founder</Typography>
				</Grid>
				<Grid item>
					<Typography variant="body1" paragraph align="center">I started codeing when I was 9 years old</Typography>
				</Grid>
				<Grid item>
					<Avatar alt="founder" src={profile} className={classes.avator} />
				</Grid>
				<Grid item container justify={matchesMD ? 'center' : undefined}>
					<Hidden lgUp>
						<Grid item lg style={{ maxWidth: '45em', padding: '2em' }}>
							<Typography variant="body1" align="center" paragraph>
								I taught myself basic coding from a library book in third grade, and ever since then my passion has solely been set on learning — learning about computers, learning mathematics and philosophy, studying design, always just learning.
						</Typography>
							<Typography variant="body1" align="center" paragraph>
								Now I’m ready to apply everything I’ve learned, and to help others with the intuition I have developed.
						</Typography>
						</Grid>
					</Hidden>
					<Grid item container direction="column" lg alignItems={matchesMD ? 'center' : undefined} style={{marginBottom: matchesMD ? '2.5em' : 0}}>
						<Grid item>
							<img src={yearbook} alt="yearbook" style={{maxWidth: matchesMD ? 300 : undefined}}/>
						</Grid>
						<Grid item>
							<Typography variant="caption">A page from my sophomore yearbook</Typography>
						</Grid>
					</Grid>
					<Hidden mdDown>
						<Grid item lg style={{ maxWidth: '45em', padding: '2em' }}>
							<Typography variant="body1" align="center" paragraph>
								I taught myself basic coding from a library book in third grade, and ever since then my passion has solely been set on learning — learning about computers, learning mathematics and philosophy, studying design, always just learning.
						</Typography>
							<Typography variant="body1" align="center" paragraph>
								Now I’m ready to apply everything I’ve learned, and to help others with the intuition I have developed.
						</Typography>
						</Grid>
					</Hidden>
					<Grid item container direction="column" lg alignItems={matchesMD ? 'center' : 'flex-end'}>
						<Grid item>
							<img src={puppy} alt="puppy" style={{maxWidth: matchesMD ? 300 : undefined}}/>
						</Grid>
						<Grid item>
							<Typography variant="caption">My miniature ..skj </Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid item> {/*----Call To Action Block-----*/}
				<CallToAction setValue={props.setValue} />
			</Grid>
		</Grid>
	);
}