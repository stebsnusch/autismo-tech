import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  typography: {
    htmlFontSize: 1,
    fontSize: 1,
    fontFamily: 'Quattrocento Sans, sans-serif',
    h1: {
      fontSize: '4rem',
    },
    h2: {
      fontSize: '2.75rem',
    },
    h3: {
      fontSize: '2rem',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
    }
  },
  palette: {
    primary: {
      main: '#092868',
      light: '#0d428e',
      dark: '#001b4c',
    },
    secondary: {
      main: '#b70012',
      light: '#d30029',
      dark: '#7f0012',
    },
    warning: {
      main: '#ffec00',
      light: '#f7ff5f',
      dark: '#ffce00',
    }
  }
});