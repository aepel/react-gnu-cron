import React from 'react'
import { MenuItem, TextField, Stack } from '@mui/material'
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
      <TextField
        select
        value={parseInt(hour || 0, 10)}
        onChange={changeHours}
        disabled={disabled}
        variant="standard"
        className={classes('Input_Width')}
        label={formatMessage(cronMessages.hours)}
      >
        {range(0, 24).map(m => (
          <MenuItem key={m} id={m} value={m}>
            {m.toString().length < 2 ? `0${m}` : m}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        value={parseInt(minute || 0, 10)}
        onChange={changeMinutes}
        disabled={disabled}
        variant="standard"
        className={classes('Input_Width')}
        label={formatMessage(cronMessages.minutes)}
      >
        {range(0, 4).map(m => (
          <MenuItem key={m} id={m} value={m * 15}>
            {m === 0 ? `00` : m * 15}
          </MenuItem>
        ))}
      </TextField>
    </Stack>
  )
}

export default ChooseTime
