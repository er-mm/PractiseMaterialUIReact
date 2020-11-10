import React, { useState } from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonArrow from './ui/ButtonArrow';
import Hidden from '@material-ui/core/Hidden';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import airplane from '../assets/send.svg';
import emailIcon from '../assets/email.svg';
import lightBulb from '../assets/bulb.svg';
import phoneIcon from '../assets/phone.svg';
import background from '../assets/background.jpg';
import roots from '../assets/root.svg';
import documentsAnimation from '../animations/documentsAnimation/data';
import scaleAnimation from '../animations/scaleAnimation/data';
import automationAnimation from '../animations/automationAnimation/data';
import uxAnimation from '../animations/uxAnimation/data';
import CallToAction from './ui/CallToAction';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

const useStyles = makeStyles(theme => ({
	background: {
		backgroundImage: `url(${background})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		height: '60em',
	},
	estimateButton: {
		...theme.typography.estimate,
		borderRadius: 50,
		height: 80,
		width: 205,
		backgroundColor: theme.palette.common.orange,
		fontSize: '1.5rem',
		marginRight: '5em',
		marginLeft: '2em',
		[theme.breakpoints.down('sm')]: {
			marginRight: 0,
			marginLeft: 0,
		},
		"&:hover": {
			backgroundColor: theme.palette.secondary.light
		}
	},
	learnButton: {
		...theme.typography.learnButton,
		fontSize: '0.7rem',
		height: 35,
		padding: 5,
		[theme.breakpoints.down('sm')]: {
			marginBottom: '2em'
		}
	},
	message: {
		border: `2px solid ${theme.palette.common.blue}`,
		marginTop: '5em',
		borderRadius: 5
	},
	sendButton: {
		...theme.typography.estimate,
		borderRadius: 50,
		height: 45,
		width: 245,
		fontSize: '1rem',
		backgroundColor: theme.palette.common.orange,
		"&:hover": {
			backgroundColor: theme.palette.secondary.light
		},
		[theme.breakpoints.down('sm')]: {
			height: 40,
			width: 225,
		}
	}
}));

export default function Contact(props) {
	const classes = useStyles();
	const theme = useTheme();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [emailHelper, setEmailHelper] = useState('');
	const [phone, setPhone] = useState('');
	const [phoneHelper, setPhoneHelper] = useState('');
	const [message, setMessage] = useState('');
	const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
	const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
	const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

	const onChange = event => {
		let valid;

		switch (event.target.id) {
			case 'email':
				setEmail(event.target.value);
				valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value);
				if (!valid) {
					setEmailHelper('Invalid Email')
				} else {
					setEmailHelper('')
				}
				break;
			case 'phone':
				setPhone(event.target.value);
				valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value);
				if (!valid) {
					setEmailHelper('Invalid Phone')
				} else {
					setEmailHelper('')
				}
				break;
			default:
				break;
		}
	}

	const [open, setOpen] = useState(false);

	return (
		<Grid container direction="row">
			<Grid item container direction="column" justify="center" alignItems="center" lg={4} xl={3}>
				<Grid item>
					<Grid container direction="column">
						<Grid item>
							<Typography variant="h2" style={{ lineHeight: 1 }}>Contact Us</Typography>
							<Typography variant="body1" style={{ color: '#0B72B9' }}>{"We're waiting"}</Typography>
						</Grid>
						<Grid item container>
							<Grid item>
								<img src={phoneIcon} alt='phone' style={{ marginRight: '0.5em' }} />
							</Grid>
							<Grid item>
								<Typography variant="body1" style={{ color: '#0B72B9', fontSize: '1rem' }}>
									<a href="tel:9034614801" style={{ textDecoration: 'none', color: 'inherit' }}>(555) 555-555</a>
								</Typography>
							</Grid>
						</Grid>
						<Grid item container>
							<Grid item>
								<img src={emailIcon} alt='email' style={{ marginRight: '0.5em', verticalAlign: 'bottom' }} />
							</Grid>
							<Grid item>
								<Typography variant="body1" style={{ color: '#0B72B9', fontSize: '1rem' }}>
									<a href="mailto:mittalmayank10@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>mm@gmail.com</a>
								</Typography>
							</Grid>
						</Grid>
						<Grid item container style={{ maxWidth: '20em' }}>
							<Grid item>
								<TextField label="Name" id="name" value={name} onChange={(event) => setName(event.target.value)} />
							</Grid>
							<Grid item>
								<TextField error={emailHelper.length !== 0} helperText={emailHelper} label="Email" id="email" value={email} onChange={onChange} />
							</Grid>
							<Grid item>
								<TextField error={phoneHelper.length !== 0} helperText={phoneHelper} label="Phone" id="phone" value={phone} onChange={onChange} />
							</Grid>
						</Grid>
						<Grid item style={{ maxWidth: '20em' }}>
							<TextField id="message" value={message} onChange={(event) => setMessage(event.target.value)} multiline rows={10} className={classes.message}
								InputProps={{ disableUnderline: true }}
							/>
						</Grid>
						<Grid item container justify="center">
							<Button onClick={() => setOpen(true)}
								disabled={name.length === 0 || message.length === 0 || email.length === 0 || phone.length === 0 || phoneHelper.length !== 0 || emailHelper.length !== 0}
								variant="contained" className={classes.sendButton}>
								Send Message
						<img src={airplane} alt="airplane" style={{ marginLeft: '1em' }} />
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Dialog
				style={{ zIndex: 1302 }}
				open={open}
				onClose={() => setOpen(false)}
				PaperProps={{
					style: {
						paddingTop: matchesXS ? '1em' : '5em',
						paddingBottom: matchesXS ? '1em' : '5em',
						paddingLeft: matchesXS
							? 0
							: matchesSM
								? '5em'
								: matchesMD
									? '10em'
									: '20em',
						paddingRight: matchesXS
							? 0
							: matchesSM
								? '5em'
								: matchesMD
									? '10em'
									: '20em',
					}
				}}
			>
				<DialogContent>
					<Grid container direction="column">
						<Grid item>
							<Typography align="center" variant="h4" gutterBottom>Confirm message</Typography>
						</Grid>

						<Grid item>
							<TextField label="Name" id="name" value={name} onChange={(event) => setName(event.target.value)} />
						</Grid>
						<Grid item>
							<TextField error={emailHelper.length !== 0} helperText={emailHelper} label="Email" id="email" value={email} onChange={onChange} />
						</Grid>
						<Grid item>
							<TextField error={phoneHelper.length !== 0} helperText={phoneHelper} label="Phone" id="phone" value={phone} onChange={onChange} />
						</Grid>
					</Grid>
					<Grid item style={{ maxWidth: '20em' }}>
						<TextField id="message" value={message} onChange={(event) => setMessage(event.target.value)} multiline rows={10} className={classes.message}
							InputProps={{ disableUnderline: true }}
						/>
					</Grid>
					<Grid item container direction={matchesSM ? 'column' : 'row'} style={{ marginTop: '2em' }} alignItems="center">
						<Grid item>
							<Button color="primary" onClick={() => setOpen(false)}>Cancel</Button>
						</Grid>
						<Grid item>
							<Button onClick={() => setOpen(true)}
								disabled={name.length === 0 || message.length === 0 || email.length === 0 || phone.length === 0 || phoneHelper.length !== 0 || emailHelper.length !== 0}
								variant="contained" className={classes.sendButton}>
								Send Message
						<img src={airplane} alt="airplane" style={{ marginLeft: '1em' }} />
							</Button>
						</Grid>
					</Grid>
				</DialogContent>
			</Dialog>
			<Grid item container alignItems="center" className={classes.background} lg={8} xl={9}>
				<Grid item style={{ marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center' : 'inherit' }}>
					<Grid container direction="column">
						<Grid item>
							<Typography variant="h2">
								Simple Software.<br />
							Revolutionary Results
						</Typography>
							<Typography variant="subtitle2" style={{ fontSize: '1.5rem' }}>
								Take advantage of the 21st century.
						</Typography>
							<Grid container item justify={matchesSM ? 'center' : undefined}>
								<Button onClick={() => props.setValue(2)} component={Link} to='/revolution' variant="outlined" className={classes.learnButton}>
									<span style={{ marginRight: 5 }}>	Learn More </span>
									<ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}