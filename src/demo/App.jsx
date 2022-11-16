/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Stack } from '@mui/material'
import { IntlProvider } from 'react-intl'
import cronMessages from '../component/Cron/components/cronMessages'
import './App.css'
import Cron from '../component/Cron/Cron'

function App() {
  const [receivedValues, setReceivedValues] = useState(['', '', ''])
  const handleOnChange = (cronExpression, humanReadable, tab) =>
    setReceivedValues([cronExpression.join(' '), humanReadable, tab])

  return (
    <IntlProvider messages={cronMessages} locale="en" defaultLocale="en">
      <div className="App">
        <div className="App-div">
          <Cron onChange={handleOnChange} showResultText showResultCron />
          <Stack direction="column" spacing={2}>
            CronExpression: {receivedValues[0]}
          </Stack>
          <Stack direction="column" spacing={2}>
            humanReadable: {receivedValues[1]}
          </Stack>
          <Stack direction="column" spacing={2}>
            tabSelected: {receivedValues[2]}
          </Stack>
        </div>
      </div>
    </IntlProvider>
  )
}

export default App
