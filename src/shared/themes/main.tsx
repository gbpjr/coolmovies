import { createTheme } from '@mui/material/styles'

const MainTheme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
      dark: '#EE5026',
      light: '#FEAC28',
      contrastText: '#333333'
    },
    secondary: {
      main: '#2B3743',
      dark: '#333333',
      light: '#526A82',
      contrastText: '#FFFFFF'
    },
    background: {
      default: 'FAFAFA',
      paper: '#FFFFFF'
    }
  },
  typography: {
    fontFamily: [
      'Work Sans',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  components: {
    MuiTypography: {
        styleOverrides: {
            root: {
                wordWrap: "break-word"
            },
        },
  }}
})

export { MainTheme }