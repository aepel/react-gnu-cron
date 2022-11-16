import React from 'react'
import { Typography } from '@mui/material'
import { useIntl } from 'react-intl'

export default function DisplayCard({ textResult, cronResult }) {
  const { formatMessage, messages } = useIntl()

  return (
    <Typography>
      {textResult ? `${formatMessage(messages.execute)}: ${textResult} ` : ''}
      {cronResult ? `(${cronResult})` : ''}
    </Typography>
  )
}
