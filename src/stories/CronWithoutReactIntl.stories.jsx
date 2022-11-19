import React from 'react'
import Cron from '../component/index'

export default {
  title: 'Cron GNU/Without react-intl',
  component: Cron,
  args: {
    parameters: { actions: { argTypesRegex: '^on.*' } },
  },
}

function Template(args) {
  return <Cron {...args} />
}

const WithoutValue = Template.bind({})

const WithValue = Template.bind({})
WithValue.args = { value: ['0', '0', '1', '*/3', '*'] }

export { WithoutValue as Standard, WithValue }
