import React, { useState } from 'react'
import { FormControlLabel, FormGroup, Radio, Stack, TextField } from '@mui/material'
import classNames from 'classnames/bind'
import useI18n from '../../hooks/useI18n/index'
import ChooseTime from './components/ChooseTime'
import styles from './styles.css'

const classes = classNames.bind(styles)
function Quarterly({ cronExpression, onChange }) {
  const [every, setEvery] = useState('1')
  const { formatMessage, messages } = useI18n()
  const onDayChange = e => {
    if ((parseInt(e.target.value, 10) > 0 && parseInt(e.target.value, 10) <= 31) || e.target.value === '') {
      const val = [cronExpression[0], cronExpression[1], cronExpression[2], '*/3', '*']
      val[2] = `${e.target.value}`
      onChange(val)
    }
  }
  // const onLastDayChange = e => {
  //   if ((parseInt(e.target.value, 10) > 0 && parseInt(e.target.value, 10) <= 31) || e.target.value === '') {
  //     const val = [
  //       cronExpression[0] === '*' ? '0' : cronExpression[0],
  //       cronExpression[1] === '*' ? '0' : cronExpression[1],
  //       cronExpression[2],
  //       '*/3',
  //       '*',
  //     ]
  //     if (e.target.value === '') {
  //       val[2] = ''
  //     } else {
  //       val[2] = `L-${e.target.value}`
  //     }

  //     onChange(val)
  //   }
  // }
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
            <FormGroup row>
              <FormControlLabel
                control={
                  <Radio
                    color="primary"
                    value={cronExpression[2]}
                    onChange={() => {
                      setEvery('1')
                      onChange([
                        cronExpression[0] === '*' ? '0' : cronExpression[0],
                        cronExpression[1] === '*' ? '0' : cronExpression[1],
                        '1',
                        '*/3',
                        '*',
                      ])
                    }}
                    checked
                  />
                }
                label={formatMessage(messages.dayOfEveryQuarter)}
              />
            </FormGroup>
          </Stack>
        </div>
      </Stack>
      <Stack direction="row" spacing={1} alignItems="center">
        {every === '1' ? (
          <TextField
            id="outlined-number"
            label={formatMessage(messages.dayOfEveryQuarter)}
            value={cronExpression[2]}
            onChange={onDayChange}
            type="number"
            InputLabelProps={{
              readOnly: every !== '1',
              shrink: true,
            }}
            disabled={every !== '1'}
          />
        ) : null}
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

export default Quarterly
