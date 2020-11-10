import React, { useState, useEffect } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


import logo from '../../assets/logo.svg';

const useStyles = makeStyles(theme => ({
	toolbarMargin: {
		...theme.mixins.toolbar,
		marginBottom: '3em',
		[theme.breakpoints.down('md')]: {
			marginBottom: '2em'
		},
		[theme.breakpoints.down('xs')]: {
			marginBottom: '1.25em'
		}
	},
	logo: {
		height: '8em',
		[theme.breakpoints.down('md')]: {
			height: '7em'
		},
		[theme.breakpoints.down('xs')]: {
			height: '5.5em'
		}
	},
	logoContainer: {
		padding: 0,
		"&:hover": {
			backgroundColor: "transparent"
		}
	},
	tabContainer: {
		marginLeft: 'auto'
	},
	tab: {
		...theme.typography.tab,
		minWidth: 10,
		marginLeft: '25px'
	},
	button: {
		...theme.typography.estimate,
		borderRadius: '50px',
		marginLeft: '50px',
		marginRight: '25px',
		height: '45px',
		"&:hover":{
			backgroundColor: theme.palette.secondary.light
		}
	},
	menu: {
		backgroundColor: theme.palette.common.blue,
		color: 'white',
		borderRadius: 0
	},
	menuItem: {
		...theme.typography.tab,
		opacity: 0.7,
		"&:hover": {
			opacity: 1
		}
	},
	drawerIconContainer: {
		marginLeft: 'auto',
		'&:hover': {
			backgroundColor: 'transparent'
		}
	},
	drawerIcon: {
		height: '50px',
		width: '50px',
		color: 'white'
	},
	drawer: {
		backgroundColor: theme.palette.common.blue
	},
	drawerItem: {
		...theme.typography.tab,
		color: 'white',
		opacity: 0.7
	},
	drawerItemEstimate: {
		backgroundColor: theme.palette.common.orange
	},
	drawerItemSelected: {
		'& .MuiListItemText-root': {
			opacity: 1
		}
	},
	appBar: {
		zIndex: theme.zIndex.modal + 1
	}
}));

export default function Header(props) {
	const classes = useStyles();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down('md'));
	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

	const [openDrawer, setOpenDrawer] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
	const [openMenu, setOpenMenu] = useState(false);
	

	const handleChange = (e, newValue) => {
		props.setValue(newValue);
	}

	const handleClick = (e) => {
		setAnchorEl(e.currentTarget);
		setOpenMenu(true);
	}

	const handleClose = (e) => {
		setAnchorEl(null);
		setOpenMenu(false);
	}

	const menuOptions = [
		{ name: 'Services', link: '/services', activeIndex: 1, selectedIndex: 0 },
		{ name: 'Custom Software Development', link: '/customsoftware', activeIndex: 1, selectedIndex: 1 },
		{ name: 'iOS/ Android App Development', link: '/mobileapps', activeIndex: 1, selectedIndex: 2 },
		{ name: 'Website Development', link: '/websites', activeIndex: 1, selectedIndex: 3 },
	];

	const routes = [
		{ name: 'Home', link: '/', activeIndex: 0 },
		{ name: 'Services', link: '/services', activeIndex: 1, ariaOwns: anchorEl ? "simple-menu" : undefined, ariaPopup: anchorEl ? "true" : undefined, mouseOver: event => handleClick(event) },
		{ name: 'Revolution', link: '/revolution', activeIndex: 2 },
		{ name: 'About Us', link: '/about', activeIndex: 3 },
		{ name: 'Contact Us', link: '/contact', activeIndex: 4 }
	];

	const handleMenuItemClick = (e, i) => {
		setAnchorEl(null);
		setOpenMenu(false);
		props.setSelectedIndex(i);
	}

	useEffect(() => {
		[...menuOptions, ...routes].forEach(route => {
			switch (window.location.pathname) {
				case `${route.link}`:
					if (props.value !== route.activeIndex) {
						props.setValue(route.activeIndex);
						if (route.selectedIndex && route.selectedIndex !== props.selectedIndex) {
							props.setSelectedIndex(route.selectedIndex)
						}
					}
					break;
				case '/estimate':
					props.setValue(5);
					break;
				default:
					break;
			}
		})
	}, [props.value, menuOptions, props.selectedIndex, routes, props]);

	const tabs = (
		<React.Fragment>
			<Tabs value={props.value} className={classes.tabContainer} onChange={handleChange} indicatorColor="secondary">
				{routes.map((route, index) => (
					<Tab
						key={`${route}${index}`}
						className={classes.tab}
						component={Link}
						to={route.link}
						label={route.name}
						aria-owns={route.ariaOwns}
						aria-haspopup={route.ariaPopup}
						onMouseOver={route.mouseOver}
					/>
				))}
			</Tabs>
			<Button component={Link} to="/estimate" onClick={() => props.setValue(5)} variant="contained" color="secondary" className={classes.button}> Free Estimate </Button>
			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				open={openMenu}
				onClose={handleClose}
				MenuListProps={{ onMouseLeave: handleClose }}
				classes={{ paper: classes.menu }}
				elevation={0}
				keepMounted
				style={{zIndex: 1302}}
			>
				{menuOptions.map((option, i) => (
					<MenuItem
						key={`${option}${i}`}
						classes={{ root: classes.menuItem }}
						onClick={(event) => { handleMenuItemClick(event, i); props.setValue(1); handleClose(); }}
						selected={i === props.selectedIndex && props.value === 1}
						component={Link}
						to={option.link}
					>
						{option.name}
					</MenuItem>
				))}
			</Menu>
		</React.Fragment>
	);

	const drawer = (
		<React.Fragment>
			<SwipeableDrawer
				disableBackdropTransition={!iOS}
				disableDiscovery={iOS}
				open={openDrawer}
				onClose={() => setOpenDrawer(false)}
				onOpen={() => setOpenDrawer(true)}
				classes={{ paper: classes.drawer }}
			>
				<div className={classes.toolbarMargin}></div>
				<List disablePadding>
					{routes.map((route, index) => (
						<ListItem
							key={`${route}${route.activeIndex}`}
							onClick={() => { setOpenDrawer(false); props.setValue(route.activeIndex) }}
							divider
							button
							component={Link}
							to={route.link}
							selected={props.value === route.activeIndex}
							classes={{ selected: classes.drawerItemSelected }}
						>
							<ListItemText className={classes.drawerItem} disableTypography >
								{route.name}
							</ListItemText>
						</ListItem>
					))}
					<ListItem classes={{ root: classes.drawerItemEstimate, selected: classes.drawerItemSelected }} className={classes.drawerItemEstimate} onClick={() => { setOpenDrawer(false); props.setValue(5) }} divider button component={Link} to="/estimate" selected={props.value === 5}>
						<ListItemText className={classes.drawerItem} disableTypography>Free Estimate</ListItemText>
					</ListItem>
				</List>
			</SwipeableDrawer>
			<IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
				<MenuIcon className={classes.drawerIcon} />
			</IconButton>
		</React.Fragment>
	);

	return (
		<React.Fragment>
			<ElevationScroll>
				<HideOnScroll>
					<AppBar position="fixed" className={classes.appBar}>
						<ToolBar disableGutters>
							<Button component={Link} to='/' className={classes.logoContainer} onClick={() => props.setValue(0)} disableRipple>
								<img src={logo} className={classes.logo} alt='mmLogo' />
							</Button>
							{/* <Typography variant="h3">
								MM ToolBar
						</Typography> */}
							{matches ? drawer : tabs}
						</ToolBar>
					</AppBar>
				</HideOnScroll>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />
		</React.Fragment>
	);
}

function ElevationScroll(props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

function HideOnScroll(props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({ target: window ? window() : undefined });

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
}