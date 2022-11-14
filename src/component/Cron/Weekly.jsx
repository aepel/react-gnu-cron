import React, { useState } from 'react'
import { Checkbox, FormControlLabel, FormGroup, Stack } from '@mui/material'
import classNames from 'classnames/bind'
import { useIntl } from 'react-intl'
import ChooseTime from './components/ChooseTime'
import cronMessages from './components/cronMessages'
import styles from './styles.css'

const classes = classNames.bind(styles)
function Weekly({ cronExpression, onChange }) {
  const { formatMessage } = useIntl()
  const weekDays = {
    SUN: 0,
    MON: 1,
    TUE: 2,
    WED: 3,
    THU: 4,
    FRI: 5,
    SAT: 6,
  }
  const [daysOfTheWeek, setDaysOfTheWeek] = useState(['', '', '', '', '', '', ''])
  const changeHours = e => {
    const val = [...cronExpression]
    val[1] = `${e.target.value}`
    onChange(val)
  }
  const changeMinutes = e => {
    const val = [...cronExpression]

    val[0] = `${e.target.value}`
    onChange(val)
  }
  const onCheck = e => {
    const val = [...cronExpression]
    const daysOfTheWeekClone = [...daysOfTheWeek]

    if (e.target.checked) {
      daysOfTheWeekClone[weekDays[e.target.value]] = e.target.value
    } else {
      daysOfTheWeekClone[weekDays[e.target.value]] = ''
    }
    setDaysOfTheWeek(daysOfTheWeekClone)

    val[4] =
      daysOfTheWeekClone.filter(value => value === '')?.length === 7
        ? '*'
        : daysOfTheWeekClone.filter(value => value !== '')?.join(',')

    onChange(val)
  }

  return (
    <Stack direction="column" spacing={2} alignItems="flex-start" justifyContent="flex-start">
      <Stack direction="row" spacing={1} alignItems="center">
        <div className={classes('Content')}>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  type="checkbox"
                  value="MON"
                  onChange={onCheck}
                  checked={cronExpression[4].search('MON') !== -1}
                />
              }
              label={formatMessage(cronMessages.monday)}
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  type="checkbox"
                  value="TUE"
                  onChange={onCheck}
                  checked={cronExpression[4].search('TUE') !== -1}
                />
              }
              label={formatMessage(cronMessages.tuesday)}
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  type="checkbox"
                  value="WED"
                  onChange={onCheck}
                  checked={cronExpression[4].search('WED') !== -1}
                />
              }
              label={formatMessage(cronMessages.wednesday)}
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  type="checkbox"
                  value="THU"
                  onChange={onCheck}
                  checked={cronExpression[4].search('THU') !== -1}
                />
              }
              label={formatMessage(cronMessages.thursday)}
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  type="checkbox"
                  value="FRI"
                  onChange={onCheck}
                  checked={cronExpression[4].search('FRI') !== -1}
                />
              }
              label={formatMessage(cronMessages.friday)}
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  type="checkbox"
                  value="SAT"
                  onChange={onCheck}
                  checked={cronExpression[4].search('SAT') !== -1}
                />
              }
              label={formatMessage(cronMessages.saturday)}
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  type="checkbox"
                  value="SUN"
                  onChange={onCheck}
                  checked={cronExpression[4].search('SUN') !== -1}
                />
              }
              label={formatMessage(cronMessages.sunday)}
            />
          </FormGroup>
        </div>
      </Stack>
      <Stack direction="row" spacing={1} alignItems="center">
        <ChooseTime
          hour={cronExpression[1]}
          minute={cronExpression[0]}
          changeMinutes={changeMinutes}
          changeHours={changeHours}
        />
      </Stack>
    </Stack>
  )
}

export default Weekly
