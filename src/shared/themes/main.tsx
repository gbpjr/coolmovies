import { createTheme } from '@mui/material/styles'

const MainTheme = createTheme({
  palette: {
    primary: {
      main: '#166B39',
      dark: '#EE5026',
      light: '#FEAC28',
      contrastText: '#FFFFFF'
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
})

export { MainTheme }