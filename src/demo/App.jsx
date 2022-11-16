/* eslint-disable no-unused-vars */
import React from 'react'
import { IntlProvider } from 'react-intl'
import cronMessages from './component/Cron/components/cronMessages'
import Cron from './component/Cron/Cron'
import logo from './logo.svg'
import './App.css'

function App() {
  const handleOnChange = (cronExpression, humanReadable, tab) => true
  return (
    <IntlProvider messages={cronMessages} locale="en" defaultLocale="en">
      <div className="App">
        <div className="App-div">
          <Cron onChange={handleOnChange} value={null} showResultText showResultCron />
        </div>
      </div>
    </IntlProvider>
  )
}

export default App
