import React from 'react'
import { IntlProvider } from 'react-intl'
import cronMessages from '../component/Cron/components/cronMessages'
import Cron from '../component/index'

export default {
  title: 'Cron GNU',
  component: Cron,
  args: {
    parameters: { actions: { argTypesRegex: '^on.*' } },
  },
}

function Template(args) {
  return (
    <IntlProvider messages={cronMessages} defaultLocale="en" locale="en">
      <Cron {...args} />
    </IntlProvider>
  )
}

const WithoutValue = Template.bind({})

const WithValue = Template.bind({})
WithValue.args = { value: ['0', '0', '1', '*/3', '*'] }

export { WithoutValue as Standard, WithValue }
