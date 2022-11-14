import React, { useEffect, useState } from 'react'
import { Card, CardContent, Tab, Tabs } from '@mui/material'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import { useIntl } from 'react-intl'
import cronMessages from './components/cronMessages'
import DisplayCard from './components/DisplayCard'
import Daily from './Daily'
import Monthly from './Monthly'
import Quarterly from './Quarterly'
import styles from './styles.css'
import { getCronHumanValue } from './utils'
import Weekly from './Weekly'
import Yearly from './Yearly'

const classes = classNames.bind(styles)
const DEFAULT_VALUE = ['0', '0', '1/1', '*', '*']
const options = [
  { name: 'daily', Component: Daily, value: DEFAULT_VALUE },
  { name: 'weekly', Component: Weekly, value: ['0', '0', '1/1', '*', '*'] },
  { name: 'monthly', Component: Monthly, value: ['0', '0', '1', '*', '*'] },
  { name: 'quarterly', Component: Quarterly, value: ['0', '0', '1', '*/3', '*'] },
  { name: 'yearly', Component: Yearly, value: ['0', '0', '1', '1', '*'] },
]

function Cron({ showResultText, showResultCron, onChange, value = null }) {
  const intl = useIntl()
  const { locale, formatMessage } = intl

  const [cronExpression, setCronExpression] = useState(value ?? DEFAULT_VALUE)
  const [selectedTab, setSelectedTab] = useState(0)

  useEffect(() => {
    if (value) setCronExpression(value)
  }, [value])
  const onTabChange = idx => {
    setSelectedTab(idx)
    if (!value) {
      setCronExpression(options[idx].value)
      onChange(options[idx].value, getCronHumanValue(options[idx].value, locale), options[idx].name)
    }
  }

  const onValueChange = val => {
    if (val && val.length) {
      setCronExpression(val)
    } else {
      setCronExpression(['0', '0', '1/1', '*', '*'])
      val = ['0', '0', '1/1', '*', '*']
    }

    onChange(val, getCronHumanValue(val, locale), options[selectedTab].name)
  }
  const Selector = options[selectedTab].Component

  return (
    <Card style={{ maxWidht: '100%' }}>
      <CardContent>
        <Tabs value={selectedTab} className={classes('Tab_Margin')}>
          {options.map((option, idx) => (
            <Tab
              fullWidth
              key={idx}
              label={formatMessage(cronMessages[option.name])}
              onClick={() => onTabChange(idx)}
            />
          ))}
        </Tabs>

        <Selector key={options[selectedTab].name} cronExpression={cronExpression} onChange={onValueChange} />
        <DisplayCard
          textResult={showResultText && getCronHumanValue(cronExpression, locale)}
          cronResult={showResultCron && cronExpression.join(' ')}
        />
      </CardContent>
    </Card>
  )
}

Cron.propTypes = {
  showResultText: PropTypes.bool,
  showResultCron: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.arrayOf(PropTypes.string),
}

Cron.defaultProps = {
  showResultText: true,
  showResultCron: false,
  value: null,
}
export default Cron
