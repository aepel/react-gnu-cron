import React from 'react'
import { Typography } from '@mui/material'
import { useIntl } from 'react-intl'
import cronMessages from './cronMessages'

export default function DisplayCard({ textResult, cronResult }) {
  const { formatMessage } = useIntl()

  return (
    <Typography>
      {textResult ? `${formatMessage(cronMessages.execute)}: ${textResult} ` : ''}
      {cronResult ? `(${cronResult})` : ''}
    </Typography>
  )
}
