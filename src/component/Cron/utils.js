import cronstrue from 'cronstrue'
import isArray from 'lodash/isArray'

const getCronHumanValue = (cronExpression, locale) => {
  try {
    if (isArray(cronExpression)) {
      const val = cronstrue.toString(`${cronExpression.join(' ')}`, { verbose: true, locale })

      if (val.search('undefined') === -1) {
        return val
      }
    }

    return '-'
  } catch (ex) {
    console.warn(ex)
    return '-'
  }
}

export { getCronHumanValue }
