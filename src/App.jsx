import React from 'react'
import { IntlProvider } from 'react-intl'
import cronMessages from './component/Cron/components/cronMessages'
import Cron from './component/Cron/Cron'
import logo from './logo.svg'
import './App.css'

function App() {
  const handleOnChange = (val1, val2, val3) => console.log(val1, val2, val3)
  return (
    <IntlProvider messages={cronMessages} locale="en" defaultLocale="en">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit
            <code>src/App.js</code>
            and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          <Cron onChange={handleOnChange} value={null} />
        </header>
      </div>
    </IntlProvider>
  )
}

export default App
