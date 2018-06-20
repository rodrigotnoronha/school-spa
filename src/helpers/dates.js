import moment from 'moment'

export const dateToShow = (date, formatTo = 'DD/MM/YYYY') => {
  return moment(date).format(formatTo)
}

export const dateToIso = (date, formatTo = 'DD/MM/YYYY', formatFrom = 'YYYY-MM-DD') => {
  if (!date) {
    return date
  }
  return moment(date, formatTo).format(formatFrom)
}
