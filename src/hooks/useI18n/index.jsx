import { useIntl } from 'react-intl' // eslint-disable-line no-restricted-imports
import cronMessages from '../../component/Cron/components/cronMessages'

function useI18n() {
  let formatMessage
  let locale
  let messages
  try {
    const intl = useIntl()
    formatMessage = intl.formatMessage
    locale = intl.locale
    messages = intl.messages
  } catch (ex) {
    formatMessage = key => {
      // eslint-disable-next-line no-console
      console.log('🚀 ~ file: index.jsx ~ line 18 ~ useI18n ~ key.defaultMessage', key.defaultMessage)
      return key.defaultMessage
    }
    locale = 'en'
    messages = cronMessages
  }
  return {
    formatMessage,
    locale,
    messages,
  }
}

export default useI18n
