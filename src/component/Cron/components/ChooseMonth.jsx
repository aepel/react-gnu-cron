import React from 'react'
import { MenuItem, Select, InputLabel, FormControl } from '@mui/material'
import classNames from 'classnames/bind'
import range from 'lodash/range'
import useI18n from '../../../hooks/useI18n/index'
import styles from '../styles.css'

const classes = classNames.bind(styles)

function ChooseMonth({ month, changeMonth, disabled }) {
  const { formatMessage, messages } = useI18n()

  return (
    <FormControl>
      <InputLabel id="select-month">{formatMessage(messages.month)}</InputLabel>
      <Select
        value={month}
        onChange={changeMonth}
        disabled={disabled}
        className={classes('Input_Width')}
        label={formatMessage(messages.month)}
      >
        {range(1, 13).map(m => (
          <MenuItem key={m} id={m} value={m}>
            {formatMessage(messages[m])}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default ChooseMonth
