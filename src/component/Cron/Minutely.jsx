import React, { useState } from 'react'
import { FormControlLabel, FormGroup, Radio, Stack, TextField } from '@mui/material'

function Minutely({ cronExpression, onChange }) {
  const [minutes, setMinutes] = useState(10)
  const onMinuteChange = e => {
    if ((e.target.value > 0 && e.target.value < 60) || e.target.value === '') {
      setMinutes(parseInt(e.target.value, 10))
      const val = [...cronExpression]
      val[0] = `*/${minutes}`
      if (e.target.value === '') {
        val[0] = '*/10'
      } else {
        val[0] = `*/${e.target.value}`
      }

      onChange(val)
    }
  }

  return (
    <Stack direction="column" spacing={2} alignItems="flex-start" justifyContent="flex-start">
      <FormGroup row>
        <FormControlLabel
          control={
            <Radio
              color="primary"
              value="1"
              onChange={() => {
                onChange([cronExpression[0], '*', '*', '*', '*'])
              }}
              checked={cronExpression[4] === '*'}
            />
          }
          label="Every x Minutes"
        />
        <FormControlLabel
          control={
            <Radio
              color="primary"
              value="4"
              onChange={() => {
                onChange([cronExpression[0], '*', '*', '*', '1-5'])
              }}
              checked={cronExpression[4] === '1-5'}
            />
          }
          label="Every X minutes only Weekdays"
        />
      </FormGroup>
      <Stack direction="row" spacing={1} alignItems="center">
        <TextField
          id="outlined-number"
          label="Every x Minutes"
          value={minutes}
          onChange={onMinuteChange}
          type="number"
          InputLabelProps={{ disabled: cronExpression[4] !== '*', shrink: true, min: 1, max: 59 }}
        />
      </Stack>
    </Stack>
  )
}

export default Minutely
