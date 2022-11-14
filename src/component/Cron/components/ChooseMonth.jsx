import React from 'react'
import { MenuItem, TextField, Stack } from '@mui/material'
import classNames from 'classnames/bind'
import styles from '../styles.css'
import range  from 'lodash/range'
import cronMessages from './cronMessages'
import { useIntl } from 'react-intl'

const classes = classNames.bind(styles)

const ChooseMonth = ({  month, changeMonth, disabled }) => {
  const {formatMessage} = useIntl()


  return (
    <Stack direction="row" spacing={1} alignItems="flex-start" className={classes('Input_Wrapper')}>
      <TextField
        select
        value={month}
        onChange={changeMonth}
        disabled={disabled}
        variant="standard"
        className={classes('Input_Width')}
        label={formatMessage(cronMessages.month)}
      >
        {range(1, 13).map(m => (
          <MenuItem key={m} id={m} value={m}>
            {formatMessage(cronMessages[m])}
          </MenuItem>
        ))}
      </TextField>
    </Stack>
  )
}

export default ChooseMonth
