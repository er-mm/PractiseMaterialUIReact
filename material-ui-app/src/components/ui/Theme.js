import { createMuiTheme } from '@material-ui/core/styles';

const mmBlue = '#0B72B9';
const mmOrange = '#FFBA60';

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
		h3: {
			fontWeight: 300
		}
	}
})