import React from 'react'
import { Typography } from '@mui/material'
import useI18n from '../../../hooks/useI18n/index'

export default function DisplayCard({ textResult, cronResult }) {
  const { formatMessage, messages } = useI18n()

  return (
    <Typography>
      {textResult ? `${formatMessage(messages.execute)}: ${textResult} ` : ''}
      {cronResult ? `(${cronResult})` : ''}
    </Typography>
  )
}
