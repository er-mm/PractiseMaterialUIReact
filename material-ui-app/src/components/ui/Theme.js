import { createMuiTheme } from '@material-ui/core/styles';

const mmBlue = '#0B72B9';
const mmOrange = '#FFBA60';
const mmGrey = '#ebebeb';
const darkGrey = '#575757';

export default createMuiTheme({
	palette: {
		common: {
			blue: `${mmBlue}`,
			orange: `${mmOrange}`
		},
		primary: {
			main: `${mmBlue}`
		},
		secondary: {
			main: `${mmOrange}`
		}
	},
	typography: {
		tab: {
			fontFamily: 'Raleway',
			textTransform: 'none',
			fontWeight: 700,
			fontSize: '1rem',
		},
		estimate: {
			fontFamily: 'Pacifico',
			fontSize: '1rem',
			textTransform: 'none',
			color: 'white'
		},
		h2: {
			fontFamily: 'Raleway',
			fontWeight: 700,
			fontSize: '2.5rem',
			color: mmBlue,
			lineHeight: 1.5
		},
		h3: {
			fontFamily: 'Pacifico',
			fontSize: '2.5rem',
			color: mmBlue,
		},
		h4: {
			fontFamily: 'Raleway',
			fontSize: '1.75rem',
			color: mmBlue,
			fontWeight: 700,
		},
		subtitle1: {
			fontSize: '1.25rem',
			fontWeight: 300,
			color: mmGrey
		},
		subtitle2: {
			fontSize: '1.25rem',
			fontWeight: 300,
			color: 'white'
		},
		learnButton: {
			borderColor: mmBlue,
			color: mmBlue,
			borderWidth: 2,
			textTransform: 'none',
			borderRadius: 50,
			fontFamily: 'Roboto',
		},
		body1: {
			fontSize: '1.25rem',
			color: darkGrey,
			fontWeight: 300
		},
		caption: {
			fontSize: '1rem',
			fontWeight: 300,
			color: darkGrey
		}
	},
	overrides: {
		MuiInputLabel: {
			root: {
				color: mmBlue,
				fontSize: '1rem'
			}
		},
		MuiInput: {
			underline: {
				"&:before":{
					borderBottom: `2px solid ${mmBlue}`
				},
				"&:hover:not($disabled):not($focused):not($error):before":{
					borderBottom: `2px solid ${mmBlue}`
				}
			}
		}
	}
})