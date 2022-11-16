import React from 'react'
import { MenuItem, TextField, Stack, Select, InputLabel, FormControl } from '@mui/material'
import classNames from 'classnames/bind'
import range from 'lodash/range'
import { useIntl } from 'react-intl'
import styles from '../styles.css'
import cronMessages from './cronMessages'

const classes = classNames.bind(styles)

function ChooseTime({ hour, minute, changeHours, changeMinutes, disabled }) {
  const { formatMessage } = useIntl()

  return (
    <Stack direction="row" spacing={1} alignItems="flex-start" className={classes('Input_Wrapper')}>
      <FormControl>
        <InputLabel id="demo-simple-select-label">{formatMessage(cronMessages.hours)}</InputLabel>
        <Select
          value={parseInt(hour || 0, 10)}
          onChange={changeHours}
          disabled={disabled}
          data-testid="select-wrapper-chooseTime-hour"
          label={formatMessage(cronMessages.hours)}
          className={classes('Input_Width')}
          inputProps={{ 'data-testid': 'select-chooseTime-hour' }}
        >
          {range(0, 24).map(m => (
            <MenuItem key={m} id={m} value={m}>
              {m.toString().length < 2 ? `0${m}` : m}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel id="simple-select-minutes">{formatMessage(cronMessages.minutes)}</InputLabel>
        <Select
          value={parseInt(minute || 0, 10)}
          onChange={changeMinutes}
          disabled={disabled}
          label={formatMessage(cronMessages.minutes)}
          className={classes('Input_Width')}
        >
          {range(0, 4).map(m => (
            <MenuItem key={m} id={m} value={m * 15}>
              {m === 0 ? `00` : m * 15}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  )
}

export default ChooseTime
