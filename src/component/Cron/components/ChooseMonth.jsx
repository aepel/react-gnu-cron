import React from 'react'
import { MenuItem, Select, InputLabel, FormControl } from '@mui/material'
import classNames from 'classnames/bind'
import range from 'lodash/range'
import { useIntl } from 'react-intl'
import styles from '../styles.css'
import cronMessages from './cronMessages'

const classes = classNames.bind(styles)

function ChooseMonth({ month, changeMonth, disabled }) {
  const { formatMessage } = useIntl()

  return (
    <FormControl>
      <InputLabel id="select-month">{formatMessage(cronMessages.month)}</InputLabel>
      <Select
        value={month}
        onChange={changeMonth}
        disabled={disabled}
        className={classes('Input_Width')}
        label={formatMessage(cronMessages.month)}
      >
        {range(1, 13).map(m => (
          <MenuItem key={m} id={m} value={m}>
            {formatMessage(cronMessages[m])}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default ChooseMonth
