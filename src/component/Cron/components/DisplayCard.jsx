import React from 'react'
import { Typography } from '@mui/material'
import cronMessages from './cronMessages'
import { useIntl } from 'react-intl'


export default function DisplayCard({ textResult, cronResult }) {
  const {formatMessage} = useIntl()

  return (
    <Typography>
      {textResult ? `${formatMessage(cronMessages.execute)}: ${textResult} ` : ''}
      {cronResult ? `(${cronResult})` : ''}
    </Typography>
  )
}
