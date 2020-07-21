import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
	toolbarMargin: {
		...theme.mixins.toolbar
	}
}));

export default function Header(props) {
	const classes = useStyles();

	return (
		<React.Fragment>
			<ElevationScroll>
				<HideOnScroll>
					<AppBar position="fixed">
						<ToolBar>
							<Typography variant="h3">
								MM ToolBar
						</Typography>
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