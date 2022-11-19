import React, { useState } from 'react'
import { FormControlLabel, FormGroup, Radio, Stack, TextField } from '@mui/material'
import classNames from 'classnames/bind'
import useI18n from '../../hooks/useI18n/index'
import ChooseMonth from './components/ChooseMonth'
import styles from './styles.css'

const classes = classNames.bind(styles)

function Yearly({ cronExpression, onChange }) {
  const [every, setEvery] = useState('1')
  const { formatMessage, messages } = useI18n()
  const onDayChange = e => {
    if ((parseInt(e.target.value, 10) > 0 && parseInt(e.target.value, 10) <= 31) || e.target.value === '') {
      const val = [...cronExpression]
      val[2] = `${e.target.value}`
      onChange(val)
    }
  }

  const onMonthChange = e => {
    const val = [...cronExpression]
    val[3] = `${e.target.value}`
    onChange(val)
  }

  return (
    <Stack direction="column" spacing={2} alignItems="flex-start" justifyContent="flex-start">
      <Stack direction="row" spacing={1} alignItems="center">
        <div className={classes('Content')}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Stack direction="column" spacing={2} alignItems="flex-start" justifyContent="flex-start">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Radio
                      color="primary"
                      value="1"
                      checked={every === '1'}
                      onChange={() => {
                        setEvery('1')
                        onChange(['0', '0', '1', '1', '*'])
                      }}
                    />
                  }
                  label={formatMessage(messages.dayOfTheMonth)}
                />
              </FormGroup>
            </Stack>
            <Stack direction="column" spacing={2} alignItems="flex-end" justifyContent="flex-end" />
          </Stack>
        </div>
      </Stack>
      <Stack direction="row" spacing={1} alignItems="center">
        <TextField
          id="outlined-number"
          label={formatMessage(messages.dayOfEveryMonth)}
          value={cronExpression[2]}
          onChange={onDayChange}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Stack direction="row" spacing={1} alignItems="flex-start">
          <ChooseMonth month={cronExpression[3]} changeMonth={onMonthChange} />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Yearly
