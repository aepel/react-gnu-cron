import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { IntlProvider } from 'react-intl'
import cronMessages from './components/cronMessages'
import Cron from './Cron'

const props = {
  showResultText: false,
  showResultCron: true,
  onChange: () => true,
}

describe('Cron Component', () => {
  describe('snapshot test', () => {
    it('should shallow render export list correctly', () => {
      const { asFragment } = render(
        <IntlProvider messages={cronMessages} locale="en" defaultLocale="en">
          <Cron {...props} />
        </IntlProvider>
      )
      expect(asFragment()).toMatchSnapshot()
    })
  })
  describe('Weekly', () => {
    it('Should return default cron expression for daily', async () => {
      render(
        <IntlProvider messages={cronMessages} locale="en" defaultLocale="en">
          <Cron {...props} />
        </IntlProvider>
      )
      await userEvent.click(screen.getByText('Weekly'))
      expect(screen.getByText('(0 0 1/1 * *)')).toBeInTheDocument()
    })

    it('Should return default cron expression for Every Tuesday and friday', async () => {
      render(
        <IntlProvider messages={cronMessages} locale="en" defaultLocale="en">
          <Cron {...props} />
        </IntlProvider>
      )
      await userEvent.click(screen.getByText('Weekly'))
      await userEvent.click(screen.getByText('Tuesday'))
      await userEvent.click(screen.getByText('Monday'))
      expect(screen.getByText('(0 0 1/1 * MON,TUE)')).toBeInTheDocument()
    })
  })

  describe('Quarterly', () => {
    it('Should return default cron expression for Quarterly', async () => {
      render(
        <IntlProvider messages={cronMessages} locale="en" defaultLocale="en">
          <Cron {...props} />
        </IntlProvider>
      )
      await userEvent.click(screen.getByText('Quarterly'))
      expect(screen.getByText('(0 0 1 */3 *)')).toBeInTheDocument()
    })
  })
  describe('Monthly', () => {
    it('Should return default cron expression for Day of Every Months(s)', async () => {
      render(
        <IntlProvider messages={cronMessages} locale="en" defaultLocale="en">
          <Cron {...props} />
        </IntlProvider>
      )
      await userEvent.click(screen.getByText('Monthly'))

      expect(screen.getByText('(0 0 1 * *)')).toBeInTheDocument()
    })
  })
  describe('Daily', () => {
    it('Should return default cron expression for Every Day(s)', async () => {
      render(
        <IntlProvider messages={cronMessages} locale="en" defaultLocale="en">
          <Cron {...props} />
        </IntlProvider>
      )
      await userEvent.click(screen.getByText('Daily'))

      expect(screen.getByText('(0 0 1/1 * *)')).toBeInTheDocument()
    })
    it('Should return default cron expression for Every week day', async () => {
      render(
        <IntlProvider messages={cronMessages} locale="en" defaultLocale="en">
          <Cron {...props} />
        </IntlProvider>
      )
      await userEvent.click(screen.getByText('Daily'))
      await userEvent.click(screen.getByText('Every week day'))

      expect(screen.getByText('(0 0 * * 1-5)')).toBeInTheDocument()
    })
  })
})
