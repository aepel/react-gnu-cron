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
  onChange: jest.fn(),
}

describe('Cron Component', () => {
  describe('snapshot test', () => {
    test('should shallow render export list correctly', () => {
      const { asFragment } = render(
        <IntlProvider messages={cronMessages} locale="en" defaultLocale="en">
          <Cron {...props} />
        </IntlProvider>
      )
      expect(asFragment()).toMatchSnapshot()
    })
  })
  describe('Weekly', () => {
    test('Should return default cron expression for daily', async () => {
      render(
        <IntlProvider messages={cronMessages} locale="en" defaultLocale="en">
          <Cron {...props} />
        </IntlProvider>
      )
      await userEvent.click(screen.getByText('Weekly'))
      expect(screen.getByText('(0 0 1/1 * *)')).toBeInTheDocument()
      expect(props.onChange).toHaveBeenLastCalledWith('0 0 1/1 * *'.split(' '), 'At 12:00 AM, every day', 'weekly')
    })

    test('Should return default cron expression for Every Tuesday and friday', async () => {
      render(
        <IntlProvider messages={cronMessages} locale="en" defaultLocale="en">
          <Cron {...props} />
        </IntlProvider>
      )
      await userEvent.click(screen.getByText('Weekly'))
      await userEvent.click(screen.getByText('Tuesday'))
      await userEvent.click(screen.getByText('Monday'))
      expect(screen.getByText('(0 0 1/1 * MON,TUE)')).toBeInTheDocument()
      expect(props.onChange).toHaveBeenLastCalledWith(
        '0 0 1/1 * MON,TUE'.split(' '),
        'At 12:00 AM, only on Monday and Tuesday',
        'weekly'
      )
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
      expect(props.onChange).toHaveBeenLastCalledWith(
        '0 0 1 */3 *'.split(' '),
        'At 12:00 AM, on day 1 of the month, every 3 months',
        'quarterly'
      )
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
      expect(props.onChange).toHaveBeenLastCalledWith(
        '0 0 1 * *'.split(' '),
        'At 12:00 AM, on day 1 of the month',
        'monthly'
      )
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
      expect(props.onChange).toHaveBeenLastCalledWith('0 0 1/1 * *'.split(' '), 'At 12:00 AM, every day', 'daily')
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
      expect(props.onChange).toHaveBeenLastCalledWith(
        '0 0 * * 1-5'.split(' '),
        'At 12:00 AM, Monday through Friday',
        'daily'
      )
    })
  })
})
