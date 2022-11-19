import React, { useState } from 'react'
import { FormControlLabel, FormGroup, Radio, Stack, TextField } from '@mui/material'
import classNames from 'classnames/bind'
import useI18n from '../../hooks/useI18n/index'
import ChooseTime from './components/ChooseTime'
import styles from './styles.css'

const classes = classNames.bind(styles)

function Monthly({ cronExpression, onChange }) {
  const [every, setEvery] = useState('1')
  const { formatMessage, messages } = useI18n()
  const onDayChange = e => {
    if ((parseInt(e.target.value, 10) > 0 && parseInt(e.target.value, 10) <= 31) || e.target.value === '') {
      const val = [
        cronExpression[0] === '*' ? '0' : cronExpression[0],
        cronExpression[1] === '*' ? '0' : cronExpression[1],
        cronExpression[2],
        '1/1',
        '*',
      ]
      val[2] = `${e.target.value}`
      onChange(val)
    }
  }
  const onEveryXMonth = e => {
    if ((parseInt(e.target.value, 10) > 0 && parseInt(e.target.value, 10) <= 11) || e.target.value === '') {
      const val = [...cronExpression]
      val[3] = `1/${e.target.value}`
      onChange(val)
    }
  }
  const onAtHourChange = e => {
    const val = [...cronExpression]
    val[1] = `${e.target.value}`
    onChange(val)
  }
  const onAtMinuteChange = e => {
    const val = [...cronExpression]
    val[0] = `${e.target.value}`
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
                        onChange(['0', '0', '1', '*', '*'])
                      }}
                    />
                  }
                  label={formatMessage(messages.dayOfEveryMonth)}
                />
              </FormGroup>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Radio
                      color="primary"
                      value={cronExpression[2]}
                      onChange={() => {
                        setEvery('2')
                        onChange([
                          cronExpression[0] === '*' ? '0' : cronExpression[0],
                          cronExpression[1] === '*' ? '0' : cronExpression[1],
                          '1',
                          '1/3',
                          '*',
                        ])
                      }}
                      checked={every === '2'}
                    />
                  }
                  label="Every x months"
                />
              </FormGroup>
            </Stack>
            <Stack direction="column" spacing={2} alignItems="flex-end" justifyContent="flex-end" />
          </Stack>
        </div>
      </Stack>
      <Stack direction="row" spacing={1} alignItems="center">
        {every === '1' ? (
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
        ) : (
          <TextField
            style={{ minWidth: '30%' }}
            id="outlined-number"
            label={formatMessage(messages.everyXMonths)}
            value={cronExpression[3].split('/')[1]}
            onChange={onEveryXMonth}
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{ inputProps: { min: 1, max: 11 } }}
          />
        )}

        {/* {every === '4' ? (
              <TextField
                id="outlined-number"
                label={formatMessage(messages.daysBeforeEndMonth)}
                value={cronExpression[3].split('-')[1]}
                onChange={onLastDayChange}
                type="number"
                className={classes('Input_Width')}
                InputLabelProps={{ readOnly: every !== '4', shrink: true }}
                
                disabled={every !== '4'}
              />
            ) : null} */}
        <ChooseTime
          hour={cronExpression[1]}
          minute={cronExpression[0]}
          changeHours={onAtHourChange}
          changeMinutes={onAtMinuteChange}
        />
      </Stack>
    </Stack>
  )
}

export default Monthly
