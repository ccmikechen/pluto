import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import RelayEnvironment from './relay/RelayEnvironment'
import { RelayEnvironmentProvider } from 'react-relay'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    text: {
      primary: '#D0D0DE',
    },
  },
  typography: {
    body1: {
      fontSize: '2rem',
      textAlign: 'justify'
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <ThemeProvider theme={theme}>
        <Suspense fallback={'Loading...'}>
          <App />
        </Suspense>
      </ThemeProvider>
    </RelayEnvironmentProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
